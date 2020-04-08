#!/bin/sh

WORKING_DIRECTORY="$(pwd)"

cd "$( dirname $0 )"
cd ..

cargo test --verbose --workspace
cargo test --features "cache-multiplication" --verbose --workspace
cargo check --features "prime-two concurrent" --workspace
cargo clippy --workspace --all-targets -- -D warnings
cargo clippy --workspace --features "cache-multiplication concurrent" --all-targets -- -D warnings -A unused_imports

cd crates
cargo test --workspace
cargo clippy --workspace --all-targets -- -D warnings

cd $WORKING_DIRECTORY
