#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) ((x) + (y))
#define FACTORIAL(n) (n == 0 ? 1 : n * factorial(n - 1))

int main(void) {
    int fact11 = FACTORIAL(3);
    printf("%i\n", fact11);
    return 0;
}