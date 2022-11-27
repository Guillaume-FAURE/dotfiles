# Lab2

## Part A: Modifying the grammar

Assume that we want to handle both assignments and expressions. Write a grammar for that.

start -> list eof
list -> assignment ; list
       | empty
assignment -> id { print(id.lexeme) } = expr { print('=') }
expr -> term moreterms
moreterms -> + term { print('+') } moreterms
       | - term { print('-') } moreterms
       | empty
term -> factor morefactors
morefactors -> * factor { print('*') } morefactors
       | / factor { print('/') } morefactors
       | div factor { print('DIV') } morefactors
       | mod factor { print('MOD') } morefactors
       | empty
factor -> ( expr )
       | id { print(id.lexeme) }
       | num { print(num.value) }

Would it be possible to write a predictive recursive-descent parser for your grammar? (Hints: Is it ambiguous? Is it left-recursive? Are FIRST sets disjoint?)

## Part B: Change the program
Modify the parser in the 2.9 program so that it understands the grammar with assignments that is given above in part A. (Not your own grammar from part A, which handles both expressions and assignments.) The program should generate the correct postfix output. 
Change in parser.c:
```C
```