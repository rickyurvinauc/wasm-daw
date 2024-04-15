function factorizePureJs() {
    const number = parseInt(document.getElementById('numberInputJs').value);
    const start = performance.now();
    const factors = findPrimeFactorsJs(number);
    const end = performance.now();
    const duration = end - start;
    document.getElementById('resultJs').innerText = `Factores primos: ${factors.join(', ')}\nTiempo de ejecución: ${duration.toFixed(20)} ms`;
}

function findPrimeFactorsJs(n) {
    let i = 2;
    const factors = [];
    while (i * i <= n) {
        if (n % i) {
            i += 1;
        } else {
            n /= i;
            factors.push(i);
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}