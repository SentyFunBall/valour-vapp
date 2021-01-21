import requests


class ValourBot:

    def __init__(self, token):
        self.token = token
        self.authenticate()

    def authenticate