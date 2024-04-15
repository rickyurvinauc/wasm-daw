function factorize() {
    const number = parseInt(document.getElementById('numberInputWasm').value);
    const start = performance.now();
    const sizePtr = Module._malloc(4);
    const resultPtr = Module.ccall('findPrimeFactors', 'number', ['number', 'number'], [number, sizePtr]);
    const size = Module.getValue(sizePtr, 'i32');
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(Module.getValue(resultPtr + i * 4, 'i32'));
    }
    Module._free(sizePtr);
    Module._free(resultPtr);
    const end = performance.now();
    const duration = end - start;
    document.getElementById('resultWasm').innerText = `Factores primos: ${result.join(', ')}\nTiempo de ejecución: ${duration.toFixed(20)} ms`;
}