#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define PLUS(x, y) (x + y)
#define this(x) while(x>0) {printf("%d",x); \
       x--;}

int main(void) {
    this(3);
    return 0;
}