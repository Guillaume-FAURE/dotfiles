#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) (x + y)
#define FACTORIAL(x, y) \
    (while(y!<0){\
    (x[y]) + (x[y-1])\
    y--)

int main(void) {
    int fact11 = FACTORIAL(3, 1);
    printf("%i\n", fact11);
    return 0;
}