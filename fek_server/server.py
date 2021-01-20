from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

# TODO: add rsa validation or something asymmetric, symmetric validation is cursed


def is_prime(n):
    if n == 1:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1

    return True


def try_division(tok):
    n = 2
    while tok % n != 0:
        n += 1
        if n >= tok:
            return tok
    return n


def authenticate(token):
    div1 = try_division(token)

    if not is_prime(div1):
        return False
    token /= div1
    if not is_prime(token):
        return False

    if div1 == token or token % 2 == 0:
        return False
    return True


def validate_token(token):
    return authenticate(token)


class LastMessage(Resource):
    def get(self, channel, token):
        if validate_token(token):
            return ["onChannel", channel, "last_message", 'blahblahblah', "author", 'me69lol']
        else:
            return ["notValidTokenError"]


api.add_resource(LastMessage, "/api/<int:token>/get/<string:channel>")


if __name__ == '__main__':
    app.run(debug=True)
