from flask import Flask
from flask_restful import Api, Resource, reqparse
from time import time
app = Flask(__name__)
api = Api(app)

apiArgs = reqparse.RequestParser()
apiArgs.add_argument("message", type=str)
apiArgs.add_argument("channel", type=str)

# TODO: add rsa validation or something asymmetric, symmetric validation is cursed

# now is valid:

# if is multiple of two primes
# the number isn't a square


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
    token = int(token, 16)
    div1 = try_division(token)

    if not is_prime(div1) or div1 % 2 == 0 or div1 % 5 == 0:
        return False

    token /= div1

    if not is_prime(token) or div1 == token or token % 2 == 0 or token % 5 == 0:
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


class sendMessage(Resource):
    def put(self):
        args = apiArgs.parse_args()
        return {'a': args}


api.add_resource(LastMessage, "/api/<string:token>/get/<string:channel>")
api.add_resource(sendMessage, "/api/<string:token>/set/<string:channel>")

if __name__ == '__main__':
    app.run(debug=True)
