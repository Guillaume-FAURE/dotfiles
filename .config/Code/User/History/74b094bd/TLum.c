#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) ((x) + (y))
#define FACTORIAL(int n) return n == 0 ? 1 : n * factorial(n - 1);

int main(void) {
    int fact11 = FACTORIAL(11);
    printf("%i\n", fact11);
    return 0;
}