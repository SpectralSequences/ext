use rust_ext;
use std::net::{TcpStream, TcpListener};
use std::io::prelude::*;
use std::sync::{Arc, Mutex};
use std::error::Error;
use std::thread;
use std::fs;

const FILE_LIST : [(&str, &str, &str); 5] = [
    ("", "index.html", "text/html"),
    ("index.html", "index.html", "text/html"),
    ("index.js", "index.js", "text/javascript"),
    ("index.css", "index.css", "text/css"),
    ("bundle.js", "bundle.js", "text/javascript")];


fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        match handle_connection(stream) {
            Ok(_) => (),
            Err(e) => { eprintln!("Error reading stream: {}", e) }
        }
    }
}

fn handle_connection(mut stream : TcpStream) -> Result<(), Box<dyn Error>>{
    let mut buffer = [0; 512];
    stream.read(&mut buffer)?;

    let request_data = String::from_utf8_lossy(&buffer[..]);
    println!("Request: {}", &request_data);

    for &file in &FILE_LIST {
        if request_data.starts_with(&format!("GET /{} ", file.0)) ||
            request_data.starts_with(&format!("GET /{}?", file.0)) {
            stream.write(b"HTTP/1.1 200 OK\r\n")?;
            stream.write(format!("Content-type: {}\r\n\r\n", file.2).as_bytes())?;
            let contents = fs::read_to_string(format!("interface/{}", file.1)).unwrap();
            stream.write(contents.as_bytes()).unwrap();
            return Ok(());
        }
    }

    if !request_data.starts_with("GET /request/") {
        return Ok(());
    }

    let request_content: &str = request_data.split(" ").collect::<Vec<&str>>()[1];
    let requests = request_content.split("/").collect::<Vec<&str>>();

    let module_path = format!("modules/{}.json", requests[3]);
    let algebra_name = requests[4].to_string();
    let max_degree = requests[5].parse::<i32>()?;

    let config = rust_ext::Config {
        module_path,
        algebra_name,
        max_degree,
    };

    let mut bundle = rust_ext::construct(&config)?;

    stream.write(b"HTTP/1.1 200 OK\r\n")?;
    stream.write(b"Content-type: text/event-stream\r\n\r\n")?;

    let stream = Arc::new(Mutex::new(stream));

    let stream_clone = Arc::clone(&stream);
    let add_class = move |s: u32, t: i32, _name: &str| {
        let clone = Arc::clone(&stream_clone);
        thread::spawn(move || {
            let mut strm = clone.lock().unwrap();
            match strm.write(format!("event: addClass\r\ndata: {{\"s\": {}, \"t\": {}}}\r\n\r\n", s, t).as_bytes()) {
                 Ok(_) => (),
                 Err(_) => println!("Failed to send class")
            };
        });
    };

    let stream_clone = Arc::clone(&stream);
    let add_structline = move |name : &str, source_s: u32, source_t: i32, source_idx: usize, target_s : u32, target_t : i32, target_idx : usize| {
        let clone = Arc::clone(&stream_clone);
        let name_c = name.to_string(); // need to do something to name so that what we pass to the thread has long enough lifetime.
        thread::spawn(move || {
            let mut strm = clone.lock().unwrap();
            match strm.write(format!("event: addStructline\r\ndata: {{\"name\": \"{}\", \"source_s\": {}, \"source_t\": {}, \"source_idx\": {}, \"target_s\": {}, \"target_t\": {}, \"target_idx\": {}}}\r\n\r\n", name_c, source_s, source_t, source_idx, target_s, target_t, target_idx).as_bytes()) {
                 Ok(_) => (),
                 Err(_) => println!("Failed to send structline")
            };
        });
    };

    bundle.set_add_class(Some(Box::new(add_class)));
    bundle.set_add_structline(Some(Box::new(add_structline)));

    bundle.resolve_through_degree(max_degree);

    stream.lock().unwrap().write(b"event: done")?;

    println!("Stream close");
    Ok(())
}
