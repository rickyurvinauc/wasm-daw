#include <stdio.h>
#include <stdlib.h>

int* findPrimeFactors(int n, int* size) {
    int* factors = (int*) malloc(n * sizeof(int));
    *size = 0;

    int i;
    for (i = 2; i <= n; i++) {
        while (n % i == 0) {
            factors[(*size)++] = i;
            n = n / i;
        }
    }

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