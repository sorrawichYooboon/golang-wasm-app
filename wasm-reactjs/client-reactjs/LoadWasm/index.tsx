import "./wasmTypes.d.ts";
import React, { useEffect } from "react";

export const LoadWasm: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Declare wasmExecScript at the top level
  const wasmExecScript = document.createElement("script");

  useEffect(() => {
    // Load wasm_exec.js and then load WebAssembly
    async function loadWasm() {
      wasmExecScript.src = "/wasm_exec.js";
      document.head.appendChild(wasmExecScript);

      // Return a promise that resolves when wasm_exec.js is loaded
      return new Promise<void>((resolve) => {
        wasmExecScript.onload = () => {
          resolve();
        };
      });
    }

    loadWasm().then(() => {
      const goWasm = new window.Go();
      WebAssembly.instantiateStreaming(
        fetch("/main_wasm.wasm"),
        goWasm.importObject
      )
        .then((result) => {
          goWasm.run(result.instance);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading WebAssembly:", error);
        });
    });

    // Cleanup script element when the component is unmounted
    return () => {
      document.head.removeChild(wasmExecScript);
    };
  }, []); // Empty dependency array to run the effect only once

  if (isLoading) {
    return <div>loading WebAssembly...</div>;
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
};
