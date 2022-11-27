# Part A: Finite state machine

For the finite state machine, I went for the switch option.
First implement the state in the global.h:

```C
enum State
{
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
};

extern enum State state;
```

Then in the file dfa.c, I created the switch function that change the state in function of the character get by getchar().
The program get a list of character and analyse them one by one by changing the state, if a change is impossible (if we are in the state 3 or 4), it return an error.
The state began at the first one.

```C
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
            else // other
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
            if (c != '\n')
                error("Impossible to move from state 3\n");
            break;
        case FOURTH:
            if (c != '\n')
                error("Impossible to move from state 4\n");
            break;
        default:
            error("ERROR!\n");
            break;
        }
    }
}
```

# Part B: Flex file

Implementation of the file parser.l to create automatically the lex file.
