#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) ((x) + (y))

int factorial(int n) {
    n == 0 ? return 1 : return n * factorial(n - 1);
}

int main(void) {
    int fact11 = factorial(11);
    printf("%i\n", fact11);
    return 0;
}