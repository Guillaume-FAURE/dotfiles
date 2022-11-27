# Task 2

```C
if (a < b) {
        while (c > d) {
            b = a + 1;
            a = c * (b + c);
            a = a + 1;
            d = c * (b + c);
        }
        b = a + 1;
    }
    c = a + 1;
```

## Postfix code

rvalue a
rvalue b
<
gofalse AFTER-IF
label WHILE-START:
rvalue c
rvalue d
\>
gofalse AFTER-WHILE
lvalue b
rvalue a
push 1
\+
\=
lvalue a
rvalue c
rvalue b
rvalue c
\+  
\*  
\=
lvalue a
rvalue a
push 1
\+
\=
lvalue d
rvalue c
rvalue b
rvalue c
\+  
\*  
\=
jump WHILE-START
label AFTER-WHILE:
lvalue b
rvalue a
push 1
\+
\=
label AFTER-IF:
lvalue c
rvalue a
push 1
\+
\=

## Three-address code

### Possibility 1

if a>=b goto AFTER-IF
label WHILE-START:
if c<=d goto AFTER-WHILE
b=a+1
temp1 = b+c
a=c*temp1
a=a+1
temp2= b+c
d=c*temp2
goto WHILE-START
label AFTER-WHILE:
b=a+1
label AFTER-IF:
c=a+1

### Possibility 2

(1) if a>=b goto (11)
(2) if c<=d goto (10)
(3) b=a+1
(4) temp1 = b+c
(5) a=c*temp1
(6) a=a+1
(7) temp2= b+c
(8) d=c*temp2
(9) goto (2)
(10) b=a+1
(11) c=a+1

For the flowchart, just need to decompose the code into basic bloc (condition, resolution) and to put an arrow when there is a goto.

### Optimization

In the third bloc (from (3) to (9)), we have 2 equal temporary variable, it's possible to only create one (remove line (7) and put for line (8) d=c\*temp1).

#
