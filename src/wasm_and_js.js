function factorize() {
    // Se obtiene el número del input en el HTML
    const number = parseFloat(document.getElementById('numberInputWasm').value);
    // Se registra el tiempo de inicio
    const start = performance.now();
    // Se reserva memoria para el tamaño del array de factores
    const sizePtr = Module._malloc(8);
    // Se llama a la función findPrimeFactors definida en C y compilada a WebAssembly
    const resultPtr = Module.ccall('findPrimeFactors', 'number', ['number', 'number'], [number, sizePtr]);
    // Se obtiene el tamaño del array de factores
    const size = Module.getValue(sizePtr, 'double');
    // Se crea un array para almacenar los factores
    const result = [];
    // Se llena el array con los factores
    for (let i = 0; i < size; i++) {
        result.push(Module.getValue(resultPtr + i * 8, 'double'));
    }
    // Se libera la memoria reservada
    Module._free(sizePtr);
    // Se registra el tiempo de finalización
    const end = performance.now();
    // Se calcula la duración
    const duration = end - start;
    // Se muestra el resultado y la duración en el HTML
    document.getElementById('resultWasm').innerText = `Factores primos: ${result.join(', ')}\nTiempo de ejecución: ${duration.toFixed(20)} ms`;
}