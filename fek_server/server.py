from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

# TODO: add rsa validation or something asymmetric, symmetric validation is cursed


def validate_token(token):
    if token == 1:
        return False
    i = 2
    while i * i <= token:
        if token % i == 0:
            return False
        i += 1

    return True


class LastMessage(Resource):
    def get(self, channel, token):
        if validate_token(token):
            return ["onChannel", channel, "last_message", 'blahblahblah', "author", 'me69lol']
        else:
            return ["notValidTokenError"]


api.add_resource(LastMessage, "/api/<int:token>/get/<string:channel>")


if __name__ == '__main__':
    app.run(debug=True)
