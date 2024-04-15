#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int* findPrimeFactors(int n, int* size) {
    int* factors = (int*) malloc(sqrt(n) * sizeof(int));
    *size = 0;

    while (n % 2 == 0) {
        factors[(*size)++] = 2;
        n = n / 2;
    }

    for (int i = 3; i * i <= n; i = i + 2) {
        while (n % i == 0) {
            factors[(*size)++] = i;
            n = n / i;
        }
    }

    if (n > 2)
        factors[(*size)++] = n;

    return factors;
}

int main() {
    int num = 154;
    int size;
    int* factors = findPrimeFactors(num, &size);
    printf("Factores primos de %d: ", num);
    for (int i = 0; i < size; i++) {
        printf("%d ", factors[i]);
    }
    printf("\n");
    free(factors);
    return 0;
}