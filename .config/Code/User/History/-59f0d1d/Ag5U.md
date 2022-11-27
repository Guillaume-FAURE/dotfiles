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
The program get a list of character and analyse them one by one by changing the state, if a change is impossible (if we are in the state 3 or 4)