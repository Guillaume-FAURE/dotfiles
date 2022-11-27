# Lab2

## Part A: Modifying the grammar

**Assume that we want to handle both assignments and expressions. Write a grammar for that.**

start -> list eof
list -> assignment ; list
| empty
assignment -> id { print(id.lexeme) } = expr {print('=')}
| - expr
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

In code in case of a first token ID, it would check if the next token is an equal, if it's the case, it's an assignment, else it's a simple expression.

**Would it be possible to write a predictive recursive-descent parser for your grammar? (Hints: Is it ambiguous? Is it left-recursive? Are FIRST sets disjoint?)**

This grammar is in fact ambiguous, because the first token, if it's an ID needs to make a guess if the next one is an equal or an other term.

## Part B: Change the program

**Modify the parser in the 2.9 program so that it understands the grammar with assignments that is given above in part A. (Not your own grammar from part A, which handles both expressions and assignments.) The program should generate the correct postfix output.**
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

## Part C: Calculate the values
Modify the program from part B so that it not only translates the input to postfix notation, but also calculates the result, and stores the value of the assigned variable. (Hints: Use a stack to calculate the value of the expression. To store the values of variables, you can modify the symbol table so you can store variable values in it, and retrieve those values.)

Also print the assigned value after each assignment.

Just use integer operations in your calculations. The result of 10 / 3 should be 3, and the result of 1 / 3 should be 0.

Another hint: The infix expression x = x + 1 has the postfix representation x x 1 + =, but those two xes are different! The second x refers to the value of the variable, as usual in an expression, but the first x refers to the variable itself. So which different numbers should be pushed onto the stack for those different xes? 
