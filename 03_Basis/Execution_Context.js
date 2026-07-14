/*
==========================================
JavaScript Execution Context
==========================================

Execution Context is the environment in which
JavaScript code is executed.

JavaScript works in two phases:

1. Memory Creation Phase
2. Execution Phase

------------------------------------------
Memory Phase
------------------------------------------

Variables  -> undefined

Functions -> Complete Function Definition

------------------------------------------
Execution Phase
------------------------------------------

Assignments happen.
Functions execute.
Return values are generated.

Whenever a function is called:

Global Execution Context
        ↓
New Execution Context
        ↓
Memory Phase
        ↓
Execution Phase
        ↓
Return
        ↓
Delete Context

==========================================
Example
==========================================

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

Memory Phase

val1      -> undefined
val2      -> undefined
addNum    -> Function Definition
result1   -> undefined
result2   -> undefined

Execution Phase

val1 -> 10
val2 -> 5

addNum(10,5)

Memory:
num1 -> undefined
num2 -> undefined
total -> undefined

Execution:
num1 -> 10
num2 -> 5
total -> 15

Return -> 15

result1 -> 15

Delete Function Context

Again

addNum(10,2)

Memory:
num1 -> undefined
num2 -> undefined
total -> undefined

Execution:
num1 -> 10
num2 -> 2
total -> 12

Return -> 12

result2 -> 12

Delete Context

==========================================
Revision

Global Execution Context
        ↓
Memory Phase
        ↓
Execution Phase
        ↓
Function Call
        ↓
New Execution Context
        ↓
Memory Phase
        ↓
Execution Phase
        ↓
Return
        ↓
Delete Context

==========================================
*/