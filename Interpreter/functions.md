# vapp functions

## print(var value)

prints the value to the screen (without a new line)

## println(var value)

prints the value to the screen (with a new line)

## input()

inputs the value as string

## num(string/num value)

interprets the value passed as a number, returns 1 if the string is not blank (doesn't accept lists)

## str(value)

interprets the value passed as a string

## isNumber(var value)

returns true if the value is a number

## isString(var value)

returns true if the value is a string

## isList(value)

returns true if the value is a list

## isFunction(value)

returns true if the value is a function (variables can be assigned as functions)

## append(list list_to_append, var value)

adds to the list the value passed

## pop(list list_, int index)

removes list value at the index

## extend(list list_, list list_to_add)

adds all values from 'list_to_add' to list_

## len(var value)

if value is a number: return the digit count
if value is a string: returns the string size
if value is a list: how many elements are in the list

## run(string filename)

runs the file specified by the file name (if the file is not in the same folder, use absolute paths and '/' instead of backslashes [see here](https://www.computerhope.com/issues/ch001708.htm))

## exit()

just stops the program flow