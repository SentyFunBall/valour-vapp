# Programming languages
## What is a programming language
Programming languages simply a way to tell computers what to do.
## Are they hard?
A lot of them, not too much. And VAPP was created specially for being very easy.
## How do I program in VAPP?
To program in VAPP, you first need to install the Nautilus IDE. Then use the vapp shell for running the code.    
## What is a shell? Is there an animal too?
No, there are no animals. Shell is a name of the language interface.
## Wat is an IDE?
IDE stands for Integrated Development Environment, simply a place to code.     
## So, after this little explanation, lets talk about how programming in vapp works:
In VAPP, thera are 4 basic things:
* Variables
* Conditions
* Loops
* Functions

and their concepts are very simple:

### variables

A variable is like a box with a tag, where you can put stuff and remember it later.

variable tags are just the variable name (for example MyVar),
And the box value (the stuff in there) can be (in vapp) 4 things:
* a number
* a string
* a list
* and a boolean
#### what is a number?
a way to store integer and decimal numbers
### what is a string?

a fancy way to say "text"

### What is a list?

Lists are like shopping lists, it contains other values and even can contain a list in itself!

### What is a boolean?

A boolean type is a type of value that stores either true or false, it is used a lot in if statements and while loops


## if statements
### what is an if statement?

if statements are a way to change our code depending on something else, its like (insert real life explanation)

if statements use booleans to work, but most of the time you will not work with booleans, so there is a thing in programming called logic operators, that can return a boolean using numbers or strings.  
they are very simple to understand:
* equality operator (==): it is used to check if two values are the same.
  * 1 == 1 would return true, because 1 is equal to 1.
  * 2 == 3 would return false, because 2 is not equal to 3.
* greater than operator (\>): it is used to check if the left value is greater than the right value.
  * 1 > 1 would return false, because 1 is not greater than 1
  * 5 > 1 would return true, because 5 is greater than 1
* smaller than operator(\<): the same thing as the greater than operator, but is used to check if the left value is smaller than the right one.
* not equal to (!=): the reverse of the equal to operator, returns true if the value differs
* greater than or equal operator (>=): it is used for checking if the left value is greater or equal to the right value
* smaller than or equal operator (<=): same thing as the \>=, but instead of greater than is smaller than.

### "ok but why I would use it with fixed values?"

that is the point, you don't need to use if statements with fixed values, you can use them with variables, e.g:


print("what is your age?")
var age = input()
if age >= 16 then print("you can drive") else print("you can't drive")

### what does the elif and else mean?

elif means: if the condition above me returned false, try this one
and else means: if all the above conditions returned false, do this code

so the code above can be easily understood by:

1. write to the screen: "what is your age"
1. create a new variable named "age" and set its value to the input
1. ask: is the age value bigger than or equal to 16?
  * if it is, print("you can drive")
  * if it is smaller, print("you can't drive")

simple as that

## Loops

### what is a loop?
a loop is a way to the code to repeat itself, e.g:

print(1)

print(2)

print(3)

print(4)

print(5)

instead of writing 5 lines of code, it could be just 1 line:
for i = 1 until 6 then print(i)

#### obs: every loop final position is exclusive, it means that the final value is one smaller than (if you are asking why, is because computers start counting at 0 instead of 1) 

it means that:
1. the loop will start at one 
1. print the value of 'i'
1. add to i, 1
1. go back to the first line until I is 5

### what if I want to change how much to 'i' is added?

simply, you can add the word step before the word then. e.g:
for i = 1 until 6 step then print(i)

it will print 1, 3, 5 then stop

### while loops

while loops are like if statements that run what is inside until the condition inside is false

### important: make sure the condition can be false, else the loop will never finish then your computer will start to be slow

they are very simple:  
var count = 0    
while count < 10 then   
  print(count)    
  count + 1     
end    

## obs: the end word is just used in multi-line code for showing that the loop ends there

at some point, the count variable will be 10, then the while codition will be false, making it break the loop

## "what if I want to break the loop with other thing or skip an iteration?"

there are things to do that, the break and continue keywords:
* the 'break' keyword breaks the loop (as if the condition were false)
* the 'continue' keyword skip the rest of the iteration (what the loop does each time)

## functions:

### what is a function?

a function is a way to reuse useful code. e.g:   

function squareRoot (radicand)    
  var result = radicand ^ 0.5    
  return result    
end    

print(squareRoot(4))       
2     

## but how does it work?
first, the function keyword tells the program that it is a function, then the name of the function and after the parameters (parameters are what the function will receive)
then, there is a bit of math then the return keyword, it means what value the function will return for where it will be used.
