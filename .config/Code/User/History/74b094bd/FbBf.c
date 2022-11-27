#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) (x + y)
#define this(x) while(x>0) {printf("%d",x); \
       x--;}

int main(void) {
    int fact11 = this(3);
    printf("%i\n", fact11);
    return 0;
}