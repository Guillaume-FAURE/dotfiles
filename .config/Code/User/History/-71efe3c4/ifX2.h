/* global.h */

#include <stdio.h>  /* include declarations for i/o routines */
#include <ctype.h>  /* ... and for character test routines */
#include <stdlib.h> /* ... and for some standard routines, such as exit */
#include <string.h> /* ... and for string routines */

#define MAX_ID_LENGTH  128  /* for the buffer size */

#define NONE   -1
#define EOS    '\0'

#define NUM    256
#define DIV    257
#define MOD    258
#define ID     259
#define DONE   260

#define STACK_SIZE 1000

extern int token_value;   /*  value of token attribute */  
extern int lineno;

struct symentry {  /*  form of symbol table entry  */
    char *lexeme; 
    int  token_type;
    int value;
};

extern struct symentry symtable[]; /* symbol table  */

struct StackValue
{
    int token_type;
    int token_value;
};

struct Stack
{
    /* stack for compute the result */
    int top;
    struct StackValue **array;
};

extern struct Stack *stack;

extern void init();  /*  loads keywords into symtable  */
extern void error(char* message);  /*  generates all error messages  */
extern int lexan();  /*  lexical analyzer  */
extern void parse();  /*  parses and translates expression list  */
extern int insert(char *s, int token_type, int value);    /*  returns position of entry for s */
extern int lookup(char *s);         /* returns position of entry for s, or -1 if not found */
extern void emit (int token_type, int token_value);  /*  generates output  */
extern void initStackEmitter();                        /* create the stack for the emitter */

struct Stack *initStack();                                              /* init the stack */
extern void push(struct Stack *stack, int token_type, int token_value); /* push token_type to the stack stack */
struct StackValue *pop(struct Stack *stack);                            /* remove the last from the stack item and return it */
