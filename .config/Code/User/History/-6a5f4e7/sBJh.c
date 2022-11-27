#include "global.h"

enum State state = FIRST;

void dfa()
{

    int c;
    while (1)
    {
        c = getchar();

        if (c == '\n') // We exit the function on '\n'
            return;

        switch (state)
        {
        case FIRST:
            if (c == 'a')
            {
                state = SECOND;
                printf("move from 1 to 2\n");
            }
            else
            {
                state = FOURTH;
                printf("move from 1 to 4\n");
            }
            break;
        case SECOND:
            if (c == 'a')
            {
                state = THIRD;
                printf("move from 2 to 3\n");
            }
            else if (c == 'b')
            {
                state = FIRST;
                printf("move from 2 to 1\n");
            }
            else
            {
                state = FOURTH;
                printf("move from 2 to 4\n");
            }
            break;
        case THIRD:
        case FOURTH:
            if (c != '\n')
                error("Impossible to move from an final state\n");
            break;
        default:
            error("Something went wrong...\n");
            break;
        }
    }
}
