import requests
from time import sleep
import authenticate

##########################################
#
# TODO: add a way to work only with tokens
#
##########################################

class Api:
    def __init__(self, token, system):
        self.token = token
        self.isAuth = self.authenticate(token)
        self.system = system
        self.ValourApi = f"Valour.gg/{system}/api"
        self.lastApiCall = {}

    def authenticate(self, token):
        return authenticate.authenticate(token)

    def getfromApi(self, system, planetpaths):
        if self.isAuth:
            response = requests.get(self.ValourApi)
            response = response.json()
            for planetpath in planetpaths:
                if 
                    if response != self.lastApiCall:
                        if response["lastMessage"] != self.lastApiCall["lastMessage"]:
                            self.lastApiCall = response
                            self.onMessageSent()
                            time.sleep(0.5)
                        elif response["newUser"] != self.lastApiCall["newUser"]:
                            self.lastApiCall = response
                            self.onUserJoin()
                            time.sleep(0.5)
                        elif response["createdNew"] != self.lastApiCall["createdNew"]:
                            self.lastApiCall = response
                            self.onNew(self.lastApiCall["createdNew"])
                            time.sleep(0.5)            
                        else:
                            self.lastApiCall = response
        else:
            return "this is an invalid token!!!"

    def onMessageSent():
        pass # changed by the user

    def onUserJoin():
        pass # changed by the user
    
    def onNew(what):
        pass # changed by the user
        # passed args:
        # moon, planet, None

    def sendMessage(self, messageContent, pathToPlanet):
        mapped_request = {"sentOn": (self.system + pathToPlanet), "content": messageContent}
        requests.post(self.ValourApi, data=mapped_request)

if __name__ == "__main__":
    print("lets goo")
