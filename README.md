# Three projects here

1. wasm-go: A simple example of using Go to generate WebAssembly
2. wasm-go-calculator: A simple calculator written in Go and compiled to WebAssembly
3. wasm-reactjs: A simple example of using ReactJS with WebAssembly

### summary steps build golang wasm integration with client

1. create a go file with a syscall/js package and a main function separate from the main server
2. build the go file to wasm with `GOOS=js GOARCH=wasm go build -o main.wasm`
3. create wasm_exec.js file with `cp "$(go env GOROOT)/misc/wasm/wasm_exec.js"` for the browser to load the wasm file
4. create a html file/client with a script tag to load the wasm_exec.js file and the wasm file
5. run a server to serve the html file and the wasm_exec.js file

### summary steps build golang wasm integration with reactjs

1. create a go file with a syscall/js package and a main function separate from the main server
2. build the go file to wasm with `GOOS=js GOARCH=wasm go build -o main.wasm`
3. create wasm_exec.js file with `cp "$(go env GOROOT)/misc/wasm/wasm_exec.js"` for the browser to load the wasm file
4. create a reactjs app with `npx create-react-app wasm-reactjs`
5. copy the wasm_exec.js and the main.wasm file to the public folder
6. create a script tag in the public/index.html file to load the wasm_exec.js file and the wasm file or use the reactjs way to load the wasm file <b>NOTE: load wasm_ecex.js first then the wasm file </b>
7. run the reactjs app with `npm start`

### references:

- https://dev.to/royhadad/how-to-create-a-react-app-with-go-support-using-webassembly-in-under-60-seconds-4oa3
- https://medium.com/@joloiuy/go-beyond-the-browser-embracing-webassembly-with-go-ccc6d97e8b64
- https://medium.com/the-godev-corner/expand-web-app-development-with-go-fc07d55b41f6
