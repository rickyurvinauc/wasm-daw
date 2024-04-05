function factorizePureJs() {
    const number = parseInt(document.getElementById('numberInputJs').value);
    const start = performance.now();
    const factors = findPrimeFactorsJs(number);
    const end = performance.now();
    const duration = end - start;
    document.getElementById('resultJs').innerText = `Factores primos: ${factors.join(', ')}\nTiempo de ejecución: ${duration.toFixed(20)} ms`;
}

function findPrimeFactorsJs(n) {
    const factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}