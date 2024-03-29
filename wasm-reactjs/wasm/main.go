package main

import (
	"fmt"
	"syscall/js"
)

func myGolangFunction() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return args[0].Int() + args[1].Int()
	})
}

func main() {
	fmt.Println("Hello ReactJS with WebAssembly!")

	ch := make(chan struct{}, 0)
	js.Global().Set("myGolangFunction", myGolangFunction())
	<-ch
}
