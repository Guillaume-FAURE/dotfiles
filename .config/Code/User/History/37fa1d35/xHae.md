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
