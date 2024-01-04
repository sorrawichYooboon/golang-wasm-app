# wasm-go

wasm-go is a module that is designed to compile a WebAssembly module from Go. There is a publication for this repository which can be found [here](https://pascalallen.medium.com/how-to-compile-a-webassembly-module-from-go-a9ed5f831582).

## Prerequisites

- [Go](https://go.dev/dl/)

## WebAssembly Compilation Steps

### Compile the project's Go module to WebAssembly

```bash
cd app/ && GOOS=js GOARCH=wasm go build -o ../public/app.wasm
```

### Copy the compiled JavaScript WebAssembly support file to the project

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ../public/app.js
```

### Run the project's web server from project root

```bash
go run webserver.go
```

Navigate to [http://localhost:9990/](http://localhost:9990/), open the JavaScript debug console, and you should
see the output. You can modify the program, rebuild `app.wasm`, and refresh to see new output.

# How to run

on port 9990

```bash
go run webserver.go
```
