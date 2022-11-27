# Part A: Bison and flex

**Study the Makefile, Which commands used to build example are written explicitly in the file? Are there some commands that make will deduce by itself?**

To build the example, the makefile use the gcc command that ask the example.tab that are created by the command bison that use example.y. The example command also ask the lex.yy files created with the flex command.

**Which types of expressions does the calculator understand?**

It understand PLUS, MINUS, STAR (that multiply).

**One common operator is missing. Which one?**

It miss the operator /

**Add the missing operator!**

To add the operator /.
We need to add it to the expr part:
```C
    | expr DIVIDE expr        { $$ = $1 / $3; }
```
to the tokens and left:
```C
%token PLUS MINUS STAR DIVIDE LPAREN RPAREN NUMBER NEWLINE
%left PLUS MINUS
%left STAR DIVIDE
```


## Part B: The calculator

See code of 29
Replacement of the previous emitter and parser by the bison file parser.y.

## Part C: More operators

See change in parser.y
Add the possibility of comparisons, instead of just use expressions in the bison file, we use now comparison that handle expressions and comparisons of expressions.

## Part D: Bison and C++

Change of extensions and declarations in parser.ypp.
