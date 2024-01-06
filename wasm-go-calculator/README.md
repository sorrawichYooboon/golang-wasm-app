# wasm-go

wasm-go is a module that is designed to compile a WebAssembly module from Go. There is a publication for this repository which can be found [here](https://pascalallen.medium.com/how-to-compile-a-webassembly-module-from-go-a9ed5f831582).

## Prerequisites

- [Go](https://go.dev/dl/)

## WebAssembly Compilation Steps

### Compile the project's Go module to WebAssembly

```bash
cd wasm/ && GOOS=js GOARCH=wasm go build -o ../public/wasm.wasm && cd ..
```

### Copy the compiled JavaScript WebAssembly support file to the project

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ../public/wasm_exec.js
```

### Run the project's web server from project root

```bash
go run main.go
```

Navigate to [http://localhost:3000/](http://localhost:3000/), open the JavaScript debug console, and you should
see the output. You can modify the program, rebuild `app.wasm`, and refresh to see new output.
