#include "global.h"

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