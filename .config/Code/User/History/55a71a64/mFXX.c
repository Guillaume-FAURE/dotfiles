/* emitter.c */
#include <math.h>
#include "global.h"

struct Stack *stack;
struct StackValue *firstToken;
struct StackValue *secondToken;

void initStackEmitter(){
    stack = initStack();
}

void emit (int token_type, int token_value)  /*  generates output  */
{
    switch(token_type) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '^': // For power
    case MOD:
        firstToken = pop(stack);
        secondToken = pop(stack);

        if (token_type == '+')
            push(stack, NUM, secondToken->token_value + firstToken->token_value);
        if (token_type == '-')
            push(stack, NUM, secondToken->token_value - firstToken->token_value);
        if (token_type == '*')
            push(stack, NUM, secondToken->token_value * firstToken->token_value);
        if (token_type == '/')
            push(stack, NUM, secondToken->token_value / firstToken->token_value);
        if (token_type == '^')
            push(stack, NUM, pow(secondToken->token_value, firstToken->token_value));
        break;
    case '=':
        id_number = lookup(symtable[stack->array[0]->token_value].lexeme);
        if (id_number == -1)
        {
            id_number = insert(symtable[stack->array[0]->token_value].lexeme, ID, stack->array[1]->token_value);
        }
        else
        {
            symtable[id_number].value = stack->array[1]->token_value;
        }
        printf("%s = %d\n", symtable[stack->array[0]->token_value].lexeme, stack->array[1]->token_value);

        break;
        // case DIV:
        //     printf("DIV\n");
        //     break;

    case ID:
        if (stack->top < 0)
        {
            push(stack, token_type, token_value);
        }
        else
        {
            int tokenValue = symtable[token_value].value;
            push(stack, NUM, tokenValue);
        }
        break;
    case DIV:
        printf("DIV "); break; 
    case NUM:
        printf("%d ", token_value); break;
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