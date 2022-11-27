# Task 1

```C
#include <stdio.h>

int main(void) {
    int a;

    printf("Hi!\n );            // error: missing terminating " character
    printf("Give a number: ");
    scanf("%d", &a ;            // error: expected ')' before ';' token
    printf("The number was: %d\n", a);

    return "Charles";           //warning: return makes integer from pointer without a cast
}
```
First error : Detected into the parser that understand that something miss with the grammar
Second error : Detected into the parser that understand that something miss with the grammar
Third error : 