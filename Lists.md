# Lists

## a deeper tutorial into the only collection in Nautilus

## what is really a list?

As you may be asking yourself, lists are a collection of variables that (usually) have a connection between them.

a collection is a way to group variables so the code is more organized, as an example:

var specs = ["4gig", "eax", "1tb ", "4 thread"]

is way cleaner (and easier to read) than

var specs_ram = "4giga"  
var specs_mb = "eax"  
var specs_hdd = "1tb"  
var specs_processor = "4 thread"  

## "I still could use the 4 var code, and I can deal with that..."  

Yes, if the values are static, and the size of the collection is not too big,
its very helpful to use just vars, but then lists came for the need of multiple and dynamic sized arrays(collections)

as an example, suppose that you want to add another component to the specs, with the 'var code', you
would to use another variable like:

var power = "600w"  

and that is not a convenient to do, but, with lists, you could use:

specs + "600w"

very convenient, right? then, there are more operators to use with lists:

the + operator does the jop to append a value to the end of a list, like:

var nums = [1, 2, 3, 4]  
nums + 5  
[1, 2, 3, 4, 5]  

the - operator does the job

