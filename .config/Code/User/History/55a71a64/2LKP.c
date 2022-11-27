/* emitter.c */

#include "global.h"

void initStack(){

}

void emit (int token_type, int token_value)  /*  generates output  */
{
    switch(token_type) {
    case '+' : case '-' : case '*' : case '/' : case '=':
        printf("%c ", token_type); break;
    case DIV:
        printf("DIV "); break; 
    case MOD:
        printf("MOD "); break;
    case NUM:
        printf("%d ", token_value); break;
    case ID:
        printf("%s ", symtable[token_value].lexeme); break; 
    default:     
        printf("[Unknown token %d, with value %d]\n", token_type, token_value);
    }
}

struct Stack *initStack()
{
    struct Stack *stack = (struct Stack *)malloc(sizeof(struct Stack));

    if (!stack)
        error("Error while creating the stack");

    stack->top = -1;
    stack->array = (struct StackValue **)malloc(STACK_SIZE * sizeof(struct StackValue));

    return stack;
}

void push(struct Stack *stack, int token_type, int token_value)
{

    struct StackValue *stackValue = (struct StackValue *)malloc(sizeof(struct StackValue));
    stackValue->token_type = token_type;
    stackValue->token_value = token_value;

    stack->array[++stack->top] = stackValue;
}

struct StackValue *pop(struct Stack *stack)
{
    return stack->array[stack->top--];
}