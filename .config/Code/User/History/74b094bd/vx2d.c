#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) (x + y)
#define FACTORIAL(n, res) \
for ((i)=(n); (i) > 0; (i)--){ \
    (res) = (res) * (i); \
    printf("%i", (res))\
}\

int main(void) {
    int fact11 = FACTORIAL(3, 1);
    printf("%i\n", fact11);
    return 0;
}