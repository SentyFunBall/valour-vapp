import time
def debug(function, bigOutput=False):
    def wrapper(*args, **kwargs):
        before = time.time_ns()
        result = function(*args, **kwargs)
        after = time.time_ns() - before
        if  len(str(result)) > 100 and not bigOutput:
            result[1000:-1] = '...'
        print(f"time: {after} ns\noutput: {result}")
        
    return wrapper