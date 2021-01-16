# .vapp expressions

## math:

* \+ => addition/concatenation
* \- => subtraction
* \* => multiplication
* \/ => division
* \^ => power

## data types:

* numbers:
  * 123
  * 123.456
* strings:
  * "string"
* lists:
  * ["strings", 10, 10.42, <function>]
* booleans:
  * 0
  * 1
* functions:
  * define function name (parameters) -> expression;return expression


## variables:

### can be any type of:
* number
* string
* boolean
* function
* list

## logical operators and comparisions:


* == -> equals to
* \> -> greater than
* \< -> smaller than
* \>= -> greater than or equal
* \<= -> smaller than or equal
* and -> if both results are true 
* or -> if any of the results are true
* not -> reverse case (true becomes false and vice-versa)

## built in functions:

* print(text) -> prints arguments to the console
* input() -> gets input from the console
* clear -> erases the console
* isNum(arg)  -> returns true if argument is (or refers to) a number
* isStr(arg)  -> returns true if argument is (or refers to) a string
* isList(arg) -> returns true if argument is (or refers to) a list
* isFunc(arg) -> returns true if argument is (or refers to) a function

##referenciation:
a variable can point to another variable or function
e.g:

\>-> var i = 1
1
\>-> var j = i
1

or 

>-> define add(num1, num2) -> num1 + num2
<function add>
>-> var add2 = add
<function add>
>-> add2(2, 5)
7

## faq:

### what does '>->' mean in the examples?
>-> means that the line was used in vapp shell

### how do i run a .vapp file:
1. make sure the shell and  the .vapp file are in the same folder
1. then, go to the shell and type (suppose the name of your file is bot.vapp):
>-> run("bot.vapp")

there it is
