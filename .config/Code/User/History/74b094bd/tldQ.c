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
    printf(factorial(11));
    return 0;
}