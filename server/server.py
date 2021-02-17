from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

@app.route('/')
def home():
    page = """
    <h1> this is the main page</h1>
    <p> nothing too much to see here </p>
    <p> seriously. <p>
    """
    return page

class MessageModel(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	author = db.Column(db.String(120), nullable=False)
	message = db.Column(db.String(500), nullable=False)
	channelPath = db.Column(db.String(150), nullable=False)

	def __repr__(self):
		return f"message(author = {author}, message = {message}, channel path = {channelPath})"

# db.create_all() # uncomment if first time

message_send = reqparse.RequestParser()
message_send.add_argument("message", type=str, help="what to send", required=True)
message_send.add_argument("channelPath", type=int, help="where to send", required=True)


resource_fields = {
	'id': fields.Integer,
	'name': fields.String,
	'views': fields.Integer,
	'likes': fields.Integer
}

class message(Resource):
	@marshal_with(resource_fields)
	def get(self, video_id):
		result = VideoModel.query.filter_by(id=video_id).first()
		if not result:
			abort(404, message="Could not find video with that id")
		return result

	@marshal_with(resource_fields)
	def put(self, video_id):
		args = video_put_args.parse_args()
		result = VideoModel.query.filter_by(id=video_id).first()
		if result:
			abort(409, message="Video id taken...")

		video = VideoModel(id=video_id, name=args['name'], views=args['views'], likes=args['likes'])
		db.session.add(video)
		db.session.commit()
		return video, 201

	@marshal_with(resource_fields)
	def patch(self, video_id):
		args = video_update_args.parse_args()
		result = VideoModel.query.filter_by(id=video_id).first()
		if not result:
			abort(404, message="Video doesn't exist, cannot update")

		if args['name']:
			result.name = args['name']
		if args['views']:
			result.views = args['views']
		if args['likes']:
			result.likes = args['likes']

		db.session.commit()

		return result


	def delete(self, video_id):
		abort_if_video_id_doesnt_exist(video_id)
		del videos[video_id]
		return '', 204


api.add_resource(Video, "/api/<int:videoid>")

if __name__ == "__main__":
	app.run(debug=True)