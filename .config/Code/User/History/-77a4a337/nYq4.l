/* example.lex */

%{
#include <stdio.h>
#include "parser.tab.h"
#include "global.h"
extern int createId(char* s, int n);
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
";"       { return SEMICOLON; }
[0-9]+    { yylval = atoi(yytext); return NUM; }
[a-zA-Z][a-zA-Z0-9]*  { yylval = createId(yytext, yyleng); return ID; }
.         { printf("Ignoring invalid character '%s'\n", yytext); }

%%

int createId(char* s, int n) {
    int index = lookup(s);
    if(index==-1){
        return insert(s,ID,0);
    }
    return index;
}