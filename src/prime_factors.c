#include <stdio.h>
#include <math.h>
#include <stdlib.h>

// Esta función encuentra los factores primos de un número
double* findPrimeFactors(double n, double* size) {
    // Se reserva memoria para el array de factores
    double* factors = (double*) malloc(sqrt(n) * sizeof(double));
    *size = 0;

    // Se divide el número por 2 hasta que ya no sea divisible
    while (fmod(n, 2) == 0) {
        factors[(int)(*size)++] = 2;
        n = n / 2;
    }

    // Se divide el número por todos los impares hasta su raíz cuadrada
    for (double i = 3; i * i <= n; i = i + 2) {
        while (fmod(n, i) == 0) {
            factors[(int)(*size)++] = i;
            n = n / i;
        }
    }

    // Si el número es mayor a 2, se añade a los factores
    if (n > 2)
        factors[(int)(*size)++] = n;

    // Se retorna el array de factores
    return factors;
}

int main() {
    double num = 154;
    double size;
    // Se llama a la función para encontrar los factores primos
    double* factors = findPrimeFactors(num, &size);
    printf("Factores primos de %.2f: ", num);
    // Se imprimen los factores
    for (int i = 0; i < (int)size; i++) {
        printf("%.2f ", factors[i]);
    }
    printf("\n");
    // Se libera la memoria reservada
    free(factors);
    return 0;
}