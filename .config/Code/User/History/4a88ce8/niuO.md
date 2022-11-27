# Lab 1

## Part A : Getting friendly with your development environment

### 1. Where was the problem?

Segmentation fault at line 225 in ack.cpp:

```c++
if (*terminalhantering > 5 || terminalutrustning == "textbehandling")
```

### 2. Why did the program crash, and how did you find that reason?

It was easy to fing the reason thanks to the vsCode debugger of C++ built on gdb the GNU-debugger.

### 3. What did you do to fix the problem?

Commenting the line removed the problem

## Part B : The simple compiler from chapter 2

### 4. Which of the phases and other parts of a compiler are present in the 2.9 program?

In the program init.c, there is the semantic Analyser which give datatype to every keywords.

```C
struct symentry keywords[] = {
    { "div", DIV },
    { "mod", MOD, }
};

void init()  /*  loads keywords into symtable  */
{
    int nr_keywords = sizeof(keywords) / sizeof(keywords[0]);
    for (int i = 0; i < nr_keywords; ++i)
        insert(keywords[i].lexeme, keywords[i].token_type); // Insert tokens' datatype into the tokens' tree
}
```

The lexer.c execute the lexical Analyser, transform the sequence of character into tokens.
The emitter.c execute a sort of code generator, from the infix form to the postfix form.

### 5. How are they implemented?

main.c does init.c and parse.c
init.c loads keywords into symtable

### 6. Which are missing?

It miss:

-   intermediate code generator
-   machine independent code optimizer
-   machine dependent code optimizer

### 7. If you were to modify the 2.9 program so it actually calculates the values of the expressions, and not just prints out postfix code, how would you do that? (Don't actually do it yet, just discuss how it can be done.)

After the emitter.c, we can parse the expression to see the first operator, calculate the result of the 2 last number and put them into a variable, then do it again with the next operator and again and again.
Example:
infix notation: r\*pos+8\*6-3
postfix notation: r pos \* 8 6 \* + 3 -
1st operator \*, tmp1=r*pos
new expression: tmp1 8 6 \* + 3 -
2nd operator \*, 8*6=48
new expression: tmp1 48 + 3 -
3rd operator +, tmp2=tmp1+48
new expression tmp2 3 -
4th operator -, res=tmp2-3=tmp1+48-3

## Part C : Recursive and not recursive

### 8. Does the macro work?

It don't works.

```C
#define FACTORIAL(n) (n == 0 ? 1 : n * FACTORIAL(n - 1))
```
### 9. Why, or why not? 

It don't works because of the call of the FACTORIAL by the macro FACTORIAL, the 