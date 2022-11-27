# Basics, phases and Linux

## Question 1

When writing a computer program it is a good idea to divide it into modules, at least if it isn't very small. This is no less true for compilers. We have made an attempt to divide the compiler into modules, and we came up with this list:

-   code generation
-   debugger
-   editor
-   intermediate code generation
-   lexical analysis ("scanning")
-   linking
-   machine-dependent optimization
-   machine-independent optimization
-   semantic analysis
-   symbol table
-   syntactic analysis ("parsing")

### a) Some of these modules are usually called phases. What is a phase?

A phase transforms the source program from one representation to another. In these modules, the phases are:

-   the lexical analysis
-   the semantic analysis
-   the syntactic analysis
