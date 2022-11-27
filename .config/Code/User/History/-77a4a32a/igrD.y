%{
  #include <stdlib.h> /* Required to compile with C++ */
  #include <stdio.h>
  #include <ctype.h>
  #include <math.h>
  #include "global.h"
  extern void yyerror(char*); /* Required to compile with C++ */
  extern int main();
  extern int getVariableValue(int index);
  void updateSymbolVal(int index, int value); 
%}

%token LPAREN RPAREN NEWLINE SEMICOLON END
%token NUM
%token ID
%left PLUS MINUS
%left STAR SLASH MOD
%right POWER
%right EQUAL
%nonassoc INF SUP AND OR TERNAIRE
   

%%

lines: line lines {printf("%d\n", $1);}
  | END NEWLINE
  ;

line: assignment SEMICOLON NEWLINE
	;

assignment: ID EQUAL comparison  /* { printf("%s = %d\n",symtable[$1].lexeme, $3); updateSymbolVal($1,$3);} */
  | comparison  /* { printf("%d\n", $1); } */ 
  ;

comparison: expr INF expr {$$ = $1 < $3 ? 1 : 0;}
  | expr SUP expr {$$ = $1 > $3 ? 1 : 0;}
  | expr AND expr {$$ = $1!=0 && $3!=0 ? 1 : 0;}
  | expr OR expr {$$ = $1!=0 || $3!=0 ? 1 : 0;}
  | expr TERNAIRE expr ':' expr {$$ = $1!=0 ? $3 : $5; }
  | expr
  ;

expr:	expr PLUS term { $$ = $1 + $3; }
  | expr MINUS term { $$ = $1 - $3; }
	| term
	;

term:	term STAR power { $$ = $1 * $3; }
  |term SLASH power { $$ = $1 / $3; }
  | term MOD power { $$ = $1 % $3; }
	| power
	;

power: power POWER factor { $$ = pow($1,$3); }
  | factor
  ;
 
factor:	LPAREN expr RPAREN { $$ = $2; }
	| NUM {$$ = $1;}
  | ID  {$$ = getVariableValue($1);}
	;

%%

int getVariableValue(int index){
  return symtable[index].value;
}

void updateSymbolVal(int index, int value){
  symtable[index].value=value;
}


void yyerror(char *s) {
  fprintf(stderr, "%s\n", s);
}


int main() {
  init();
    yyparse();
    return 0;
}

