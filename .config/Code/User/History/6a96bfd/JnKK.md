# Run-Time Environment

```mermaid
flowchart LR
    S[Source]==>C[(Compile)]==>CC[Compile Code]==>L[(Linker)]==>EF[Executable File]
```

We will see the run-time of the executable file.

Some terms:

-   Function = Procedure = Method
-   Function definition
-   Function name
-   Function body
-   Function call
-   Function parameters
-   Function activation
-   Actual parameters

```C
int /*return type*/ f /*function name*/ (int n) /*formal parameters*/
{// Function body
    int r;
    if (n==1){
        return 1;
    }
    else{
        r=n*f(n-1);
        return r;
    }
}

int main(void){
    int n=f(9);// Function activation
    return 0;
}
```

Activation record when the function is activated.
