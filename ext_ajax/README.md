This uses server-sent events to calculate Ext with the Rust binary and then displaying it on a browser.

To run the web server, first copy `bundle.js` from `js_spectralsequences` to `interfaces/`. Then run
```
$ cargo run --release
```
Then navigate to `http://localhost:8080/` to view the webpage.
