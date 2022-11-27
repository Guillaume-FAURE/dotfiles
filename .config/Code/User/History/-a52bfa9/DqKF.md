# Task 1

7 phases of the compiler:

-   Scanner : Scanner analyze chain of character that compose the code to transfrom it into a chain of tokens (id, num, operators)
-   Parser : The parser will analyze the chain of tokens to make link between them with a syntax tree
-   Lexical Analysis : It will verify the correctness of the datatype inside the syntax tree (it's for example impossible to add a float and a string, it will return an error if it's the case). It will return the syntax tree with the datatype of the tokens
-   Intermediate code generator : First generation of code, not always text usually a three-address code
-   Machine independant code optimizer : It will optimize the code generated at the last step, reuse of temporary variable is common in this phase
-   Code generator : Generation of the programm in the target language, it can be machine code, assemblor or any other languages
-   Machine dependant code optimizer : Last optimizations only possible in the target language, it returns the final program.

# Task 2

```C
#include <stdio.h>

int main(void) {
    prontf("Starting...\n");    // 1: undefined reference to `prontf'
    int a = 17zzz;              // 2: invalid suffix on integer constant
    int b = ;                   // 3: expected expression before ';' token
    int c = 0;
    if (c == 0) {
        int d = a / c;          // 4: math exception
        int e, f, g;
        int h                   // 5: expected '=', ',' or ';' before 'e'
        e = 17;                 // 6: variable 'e' set but not used
        f = g;                  // 7: 'g' may be used uninitialized
        printf("d = %d, f = %d\n", d, f);
    }
    return "Done!";             // 8: return makes integer from pointer
}
```

-   Error 1: Call of a function we don't know, it will be detected by the linker (or semantic anaylisis phase)
-   Error 2: Value not a int, it's a scanner error
-   Error 3: Tokens not linkable, parser error
-   Error 4: Operation impossible, division by 0, it will be detected at the machine independant code optimizer (or run time)
-   Error 5: Miss of a semicolon, it's a parser error
-   Error 6: e set but not used so useless, will be detected in the machine independant code optimizer
-   Error 7: machine independant code optimizer
-   Error 8: Datatype problem, semantic analyzer problem

# Task 3

```C
x = 0;
y = z * 2 - t - 2 * 2;
while (x < y) {
    if (x < 5) {
        x = x + 1;
    }
    else {
        x = x + 2;
        y = y + 1;
    }
}
```

## Abstract syntax tree

See paper (much more simple)

## Postfix code

lvalue x
push 0
=
lvalue y
rvalue z
push 2  
\*  
rvalue t
\-  
push 2
push 2  
\*  
\-
\=
label WHILE-START
rvalue x
rvalue y
\<
gofalse WHILE-AFTER
rvalue x
push 5
\<
gofalse AFTER-IF
lvalue x
rvalue x
push 1
\+
\=
jump WHILE-START
label AFTER-IF:
lvalue x
rvalue x
push 2
\+
\=
lvalue y
rvalue y
push 1
\+
\=
jump WHILE-START
label AFTER-WHILE:

## Three address code

x=0
temp1=z*2
temp2=z*2-t
temp3=2\*2
y=temp2-temp3
label WHILE-START:
if x>=y goto AFTER-WHILE
if x>=5 goto ELSE-START
x=x+1
goto AFTER-IF
label ELSE-START:
x=x+2
y=y+1
goto AFTER-IF
label AFTER-IF:
goto WHILE-START
label AFTER-WHILE:

# Task 4

species rabbit
species lion
declarations done
observation rabbit 1
observation lion 30
observation rabbit 3
observations done

## Terminal

-   species
-   name of a species
-   number
-   declarations
-   observation
-   observations
-   done

## Not-fixed lexemes terminals

The only not fix terminal are numbers and the name of the species.
Regex of a number:
[0-9]+
Regex of a species:
[a-z]+

# Task 5

input: speciesDeclaration declarations done observationsDeclaration observations done
speciesDeclaration: species nameOfTheSpecies speciesDeclaration | empty
nameOfTheSpecies: [a-z]+
observationsDeclaration: observation nameOfTheSpecies number obsercationsDeclaration | empty
number: [0-9]+

# Task 6