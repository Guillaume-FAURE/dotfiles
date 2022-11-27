**Programmation language composed of a language and a grammar.**

### example: greeting language

language:
{hello, good morning, good evening, good afternoon}
grammar:
{greeting==hello|good morning|good evening|good afternoon}
(greeting)===non-terminal
(hello)===terminal.
(greeting==good morning)===production|rule.
greeting==hello|good $time && time==morning|evening|afternoon
(greeting)===start symbol

## How do we know the language the grammar describe?

greeting:
hello _terminal_
good _start symbol_ time
time:
morning*terminal*
evening*terminal*
afternoon*terminal*

**_But a language can be infinite_**

### example: the "sum of 3" language

3
3+3
3+3+3 etc

#### grammar:

sum==(3|sum+3) that make is infinite.

### example 2: The "digit's sum" language

4+3
8+9+1+1+2
7
7+7

#### 1st grammar:

sum==(digit|sum+digit)
digit=={0,1,2,3,4,5,6,7,8,9}

#### 2nd grammar:

4 => Scanner => digit => Parser\*
sum==(digit|sum+digit)

## Parse tree==concrete syntax tree

Token stream: digit+digit+digit+digit
Input: 3+4+5
Can be design as a tree of sum (sum=digit|sum+digit) or things inside other things (see drawings).
The branch of tree can also be + with digit as the root (see drawing). ==> **Synthax tree==abstract syntax tree**

Bag grammar: sum==(digit|sum+sum) because it can be ambiguous (we can make multiple synthax tree with one token stream).

### example 3: More advance language

3+4*5
8*2+2\*3
7
2+3+4

Method to add things:

-   Priority (multiplication)
-   Associativity (addition)

#### grammar:

F==digit
T==(F|T\*F)
E==(T|E+T)

## Synthaxs

Infix: 2 + 3
Postfix: 2 3 +
Prefix: + 2 3
Function: plus(2,3)
Tree: 2-+-3

Infix: 2+3*4
Postfix: 234*+

Infix: 2*3+4
Postfix: 23*4+

Infix: 2*(3+4)
Postfix: 234+* _with postfix, we don't need parenthesis_

Calculate postfix
1 if number? push on stack
2 if operator? pop, pop, calculate, push

Infix: 2*3+4
Postfix: 23*4+
1.2
2.2\*3
3.6
4.6+4
5.10

## The "if" statement in C:

Ex:

```C
if (a==b){
  printf("Same!");
}
else{
  printf("Not same!");
}
```

Grammar:
Pattern: if(some expression) {statement} (else {statement})_option_

statement => if (expression){statement}
statement => if (expression){statement}else{statement}
statement => {statement-list} (as written above)
statement => ...

This is a **Context-free grammar**

## Context-free grammar

A set of terminals (tokens)
A set of non-terminals
A set of productions
What is the start symbol

String ≃ Sentence ≃ Input
Language = set of valid inputs
ø symbol

statement => if (expression) {statement} optional-else-part
optional-else-part => else {statement} | ø
