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

In the emitter.c, instead of just print in case of 