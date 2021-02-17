from Api import api
# todo: api lol
from json import loads
class Client:
    class EventHandler:
        def __init__ (self):
            self.handlers = { # dict of handlers
                "messages" = [],
                "new-user" = []
            }
        def create(handlerType, function, *args, **kwargs):
            handler = {"function": function}
            if *args:
                handler |= {"args": *args}
            if **kwargs:
                handler |= {"kwargs": **kwargs}
            
            self.handler[handlerType].append(handler)
        
        def fire(handlerType):
            for handler in self.handlers[handlerType]:
                if len(handler) == 1: # if there is no parameters
                    handler["function"]()
                elif handler.has_key("args") and len(handler) == 2: # if there are just args
                    handler["function"](handler["args"])
                elif handler.has_key("kwargs") and len(handler) == 2: # only kwargs:
                    handler["function"](handler["kwargs"])
                else:
                    handler["function"](handler["args"], handler["kwargs"])

    def __init__ (self, configName="this"):
        self.config = {}
        self.api = api()
        self.getconfig(configName)
        self.token = self.config["token"]
        self.name = self.api.authToken(self.token)
        self.handler = Client.EventHandler()

    def getconfig(name):
        if name == "this":
            with open("settings.json") as file:
                self.config = json.loads()
                print(self.config)
        else
            with open(name) as file:
                self.config = json.loads()
                print(self.config)

    def createEventHandler(kindOfhandler): # decorator with argument -> @createEventHandler("message"): pog
        def event(function):
            def wrapper2(*args, **kwargs):
                func_type = function.__name__
                result = self.handler.create(kindOfhandler, function, *args, **kwargs) # create a new handler

    def run(token):
        self.api.runner(tself.handler)
    
