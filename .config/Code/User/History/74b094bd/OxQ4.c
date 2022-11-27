#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>


int plus(int x, int y) {
  return x + y;
}

#define PLUS(x, y) ((x) + (y))

int factorial(int n) {
  if (n == 0)
    return 1;
  else
    return n * factorial(n - 1);
}

int main(void) {
    int fact11 = factorial(11);
    printf(fact11);
    return 0;
}