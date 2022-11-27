# Synthax trees

How to construct synthax tree
Grammar:
E->id|E+E

Input: x+y
Parse Tree:

```mermaid
flowchart TB
    A[E]==>B[E]==>x
    A===X1((" "))==>P1["+"]
    A==>C[E]==>y
```

Synthax tree:

```mermaid
flowchart TB
    P1["+"]==>x
    P1==>y
```

Input: a\*b-c-d
Synthax tree:

```mermaid
flowchart TB
    M1["-"]==>M2["-"]
    M1==>d
    M2==>F1["*"]
    M2==>c
    F1==>a
    F1==>b
```

Input: a=c\*d+e

```mermaid
flowchart TB
    E1["="]==>a
    E1==>P1["+"]
    P1==>M1["*"]
    P1==>e
    M1==>c
    M1==>d
```

Input:

```C
if (a < b){
    c=1;
}
else{
    d=2;
}
```

```mermaid
flowchart TB
    if==>C1["<"]
    C1==>a
    C1==>b
    if==>E1["="]
    E1==>c
    E1==>1
    if==>E2["="]
    E2==>d
    E2==>2
```

If statement synthax tree is composed in three branch:

-   condition
-   resolution of condition
-   else

Input:

```C
while(a<b){
    a=a+2;
}
```

```mermaid
flowchart TB
    while==>C1["<"]
    C1==>a
    C1==>b
    while==>E1["="]
    E1==>A[a]
    E1==>P1["+"]
    P1==>B[a]
    P1==>2
```

Input:

```C
while(x<y){
    a=1;
    b=2;
    c=3;
}
```

```mermaid
flowchart TB
    while==>C1["<"]
    C1==>x
    C1==>y
    while==>SM1[";"]
    SM1==>E1["="]
    SM1==>SM2[";"]
    E1==>a
    E1==>1
    SM2==>E2["="]
    SM2==>E3["="]
    E2==>b
    E2==>2
    E3==>c
    E3==>3
```

**; is a convention we can call them link or whatever**

Input:

```C
for (i=0;i<N;i++){
    function1(i);
}
```

```mermaid
flowchart TB
    for==>E1["="]
    E1==>I1[i]
    E1==>B[0]
    for==>C1["<"]
    C1==>I2[i]
    C1==>N
    for==>B1["()"]
    B1==>function1
    B1==>I3[i]
    for==>E2["="]
    E2==>I4[i]
    E2==>P1["+"]
    P1==>I5[i]
    P1==>1
```

```C
enum NodeType{PLUS, MINUS, TIMES,...,IF, WHILE, ID, NUM}
struct Node {
    enum NodeType type;
    struct Node *args[3];
    int leaf_value;
};
```

Grammar:

-   E->E+T|E-T|T
-   T->id|num|(E)

Input: a-4+c === id-num+id

Synthax tree:

```mermaid
flowchart TB
    M1["-"]==>a
    M1==>P1["+"]
    P1==>4
    P1==>c
```

Parse tree:

```mermaid
flowchart TB
    E1==>E2
    E1==>P1["+"]
    E2==>E3==>T1==>id-a
    E2==>M2["-"]
    E2==>T2==>num-4
    E1==>T3==>id-c
```

mknode(type, arg1, arg2, arg3)
example with input above:

```C
mknode(PLUS, p1, p2, NULL)
mkleaf(ID, idvalue)
mkleaf(NUM, value)
```

| Production: |                    Semantic rule:                     |
| :---------: | :---------------------------------------------------: |
|  E1=>E2+T   | E1.nodeptr=mknode(PLUS, E2.nodeptr, T.nodeptr, NULL)  |
|  E1=>E2-T   | E1.nodeptr=mknode(MINUS, E2.nodeptr, T.nodeptr, NULL) |
|    E=>T     |                  E.nodeptr=T.nodeptr                  |
|   T=>(E)    |                  T.nodeptr=E.nodeptr                  |
|    T=>id    |           T.nodeptr=mkleaf(ID, id.lexvalue)           |
|   T=>num    |          T.nodeptr=mkleaf(NUM, num.lexvalue)          |

The physical syntax tree is composed of bloc mknode and leafnode and is composed as a Syntax tree or a Parse tree.

Bison:
E: E '+' T {$$=mknode(PLUS, $1, $3, NULL)}

## Tree?

A tree is a directed graph.
A graph is a set of node linked together.

Input: 2+3-4\*(2+3)
Synthax tree:

```mermaid
flowchart TB
    M1["-"]==>P1["+"]
    M1==>T1["*"]
    P1==>N1[2]
    P1==>N2[3]
    T1==>N3[4]
    T1==>P2["+"]
    P2==>N4[2]
    P2==>N5[3]
```

On the synthax tree we can see that 2 blocs are equal. So we can in reality use the same node like in the graph below.

```mermaid
flowchart TB
    M1["-"]==>P1["+"]
    M1==>T1["*"]
    P1==>N1[2]
    P1==>N2[3]
    T1==>N3[4]
    T1==>P1
```

This is not a tree, it's a DAG (directed acyclic graph).
