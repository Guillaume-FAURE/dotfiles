# Ideal Remote Procedure Call (RPC)

Behavior is the same as a local function call.

## 7 Challenges:

-   Different programming languages:
    -   different PAR (Procedure Activation Record) format, stack & data type representations
    -   PAR: local environment for function call in the stack. Contains Input, Output parameters, links access and local variables
-   Disjoined address and name spaces
    -   no direct PAR access for parameter handover and problems with global variables
-   Disjoined processes
    -   no common program counter (instruction pointer), need to stop the program waiting for the response of a remote machine
-   Different hardware
    -   Memory layouts, character encoding, number representations...
-   Disjoined hardware
    -   Possible failures: communication network, client, server...
-   Communication bottleneck
    -   performance reduction due to latency
-   Open communication line (security)
    -   Observability / alteration / impediment of communication

Impossible to be totally ideal.

## Communication model

Roles: function caller (client) && function execution (server)
Data: procedure parameters, specified by signatures
Termination: sychronous
Partial failures: do not occur.

And the 7 challenges above.

The challenges are not unique to Distributed System (same issues for OS calls)

## OS calls

Different programming language:

-   Solution: standardization of PAR structure and data representation, defined by API

Different address and name spaces:

-   Solution: Explicit access to caller's address space
-   Proxy procedures with identical interface
-   Standardization of system call names using enumeration

Disjoint processes:

-   Solution: Explicit syncronization (TRAP/RTI), possible due to OS privileges

## Stub - Client Side

Proxy for the remote procedure

Role: represents the server

## RPC example

**Send Data**: 1.Client ==> 2.StubC ==> 3.(Middelware ==> OS) ==> 4.(OS ==> Middleware) ==> 5.StubS ==> 6.Server
**Response**: ==> 7. StubS ==> 8. StubC ==> 9. Client
