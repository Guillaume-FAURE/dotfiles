/* parser.c -- without the optimizations */

#include "global.h"

int lookahead;

void match(int);
void start(), list(), assignment(), checkId(),checkEqual(), expr(), moreterms(), term(), morefactors(), factor(), powerfactor(), power();

void parse()  /*  parses and translates expression list  */
{
    lookahead = lexan();
    start();
}

void start ()
{
    /* Just one production for start, so we don't need to check lookahead */
    list(); match(DONE);
}

void list()
{
    if (lookahead == '(' || lookahead == ID || lookahead == NUM) {
        initStack();
        assignment();
        match(';');
        list();
        //expr(); match(';'); list();
    }
    else {
        /* Empty */
    }
}

void expr ()
{
    /* Just one production for expr, so we don't need to check lookahead */
    term(); moreterms();
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

void moreterms ()
{
    if (lookahead == '+') {
        match('+'); term(); emit('+', token_value); moreterms();
    }
    else if (lookahead == '-') {
        match('-'); term(); emit('-', token_value); moreterms();
    }
    else {
        /* Empty */
    }
}

void term ()
{
    /* Just one production for term, so we don't need to check lookahead */
    powerfactor(); morefactors();
}

void morefactors ()
{
    if (lookahead == '*') {
        match('*'); powerfactor(); emit('*', token_value); morefactors();
    }
    else if (lookahead == '/') {
        match('/'); powerfactor(); emit('/', token_value); morefactors();
    }
    else if (lookahead == DIV) {
        match(DIV); powerfactor(); emit(DIV, token_value); morefactors();
    }
    else if (lookahead == MOD) {
        match(MOD); powerfactor(); emit(MOD, token_value); morefactors();
    }
    else {
        /* Empty */
    }
}

void powerfactor(){
    factor();
    power();
}

void factor ()
{
    if (lookahead == '(') {
        match('('); expr(); match(')');
    }
    else if (lookahead == ID) {
        int id_number = token_value;
        match(ID);
        emit(ID, id_number);
    }
    else if (lookahead == NUM) {
        int num_value = token_value;
        match(NUM);
        emit(NUM, num_value);
    }
    else
        error("syntax error in factor");
}

void power()
{
    if (lookahead != '^')
    {
        /* no need to check for power expression */
        return;
    }

    match('^');
    if (lookahead == '(')
    {
        match('(');
        expr();
        match(')');
        emit('^', token_value);
    }
    else if (lookahead == ID)
    {
        int id_number = token_value;
        match(ID);
        emit(ID, id_number);
        emit('^', token_value);
    }
    else if (lookahead == NUM)
    {
        int num_value = token_value;
        match(NUM);
        emit(NUM, num_value);
        emit('^', token_value);
    }
    if (lookahead == '^')
    {
        power();
    }
    else
    {
        /* Empty */
    }
}

void match(int t)
{
    if (lookahead == t)
        lookahead = lexan();
    else
        error ("syntax error in match");
}
