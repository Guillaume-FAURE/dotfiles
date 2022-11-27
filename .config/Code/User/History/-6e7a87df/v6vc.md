# Lab2

## Part A: Modifying the grammar

Assume that we want to handle both assignments and expressions. Write a grammar for that.

start -> list eof
list -> assignment ; list
| empty
assignment -> id { print(id.lexeme) } equalterm
equalterm -> = term
expr -> term moreterms
moreterms -> + term { print('+') } moreterms
| - term { print('-') } moreterms
| empty
term -> factor morefactors
morefactors -> _ factor { print('_') } morefactors
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
void start(), list(), assignment(), checkId(),checkEqual(), expr(), moreterms(), term(), morefactors(), factor();

void list()
{
    if (lookahead == '(' || lookahead == ID || lookahead == NUM) {
        assignment();
        match(';');
        list();
        //expr(); match(';'); list();
    }
    else {
        /* Empty */
    }
}

void assignment ()
{
    checkId();
    checkEqual();
}

void checkEqual(){
    if (lookahead == '=') {
        match('=');
        expr();
        emit('=', token_value);
    }
    else{
        error("syntax error in checkEqual");
    }
}

void checkId ()
{
    if (lookahead == ID) {
        int id_number = token_value;
        match(ID);
        emit(ID, id_number);
    }
    else {
        error("syntax error in checkId");
    }
}
```

Minor change in emitter.c to include =:

```C
    switch(token_type) {
    case '+' : case '-' : case '*' : case '/' : case '=':
        printf("%c\n", token_type); break;
```
