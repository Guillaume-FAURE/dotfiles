/* example.lex */

%{
#include <stdio.h>
#include "parser.tab.h"
#include "global.h"
extern int install_id(char* s, int n);
%}

%option noyywrap

%%

[ \t]+    { /* ignore whitespace */ }
"("       { return LPAREN; }
")"       { return RPAREN; }
"+"       { return PLUS; }
"-"       { return MINUS; }
"*"       { return STAR; }
"/"       { return SLASH; }
"="       { return EQUAL; }
">"       { return SUP; }
"<"       { return INF; }
"^"       { return POWER; }
"&"       { return AND; }
"|"       { return OR; }
"%"       { return MOD; }
"?"       { return TERNAIRE; }
\n        { return NEWLINE; }
[0-9]+    { yylval = atoi(yytext); return NUM; }
[a-z][a-zA-Z0-9]*  { yylval = install_id(yytext, yyleng); return ID; }
.         { printf("Ignoring invalid character '%s'\n", yytext); }

%%

int install_id(char* s, int n) {
    int index = lookup(s);
    if(index==-1){
        return insert(s,ID,0);
    }
    return index;
}