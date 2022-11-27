# Task 1

7 phases of the compilers:

1. Scanner : It will analyze the character of the code and transform them into tokens.
   Characters ==> Tokens
2. Parser : It will analyze the tokens and organize them in a syntax tree in function of the grammar.
   Tokens ==> Syntax tree
3. Semantic Analyser : It will analyze the datatype of all the tokens to verify there is no incoherence (float + string). It will add the datatype to the syntax tree
   Syntax tree ==> Syntax tree (with datatype)
4. Intermediate code generator : With the syntax tree, it will create the intermediate code.
   Syntax tree (with datatype) ==> intermediate code
5. Machine-independant code optimizer : It will optimize the intermediate code to make it faster and often smaller (only exception with loop)
   Intermediate code ==> Smaller/Faster intermediate code
6. Code generator : It will create the program in the target language, 
