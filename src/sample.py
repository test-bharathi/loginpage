from flask import Flask, jsonify, request, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import uuid
from werkzeug.security import generate_password_hash,check_password_hash
import jwt
import os
import datetime
from functools import wraps

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisissecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/postgres'

db = SQLAlchemy(app)

db.create_all()

class Vendor(db.Model):
	__tablename__ = 'vendor'
	__table_args__ = {'schema':'public', 'extend_existing':True}
	entername = db.Column(db.String(100))


@app.route('/user', methods=['GET'])
# @token_required
def get_all_uesr():

    # if not current_user.admin:
    #     return jsonify({'message' : 'cannot perform that function'})

    users = Vendor.query.all()

    output = []

    for user in users:
        user_data = {}
        user_data['entername'] = user.entername
        output.append(user_data)

    return jsonify({'message' : output})


@app.route('/user', methods=['POST'])
# @token_required
def create_user():

	# print(username)
	data = request.get_json()
	entername = data["entername"]
	users = Vendor.query.all()
	for user in users:
		if username in user.entername:
			# print(user.username)
			return jsonify({'message' : 'username already exist'})

	else:
		data = request.get_json()
		# hashed_password = generate_password_hash(data['password'], method='sha256')
		new_user = Person(entername=data['entername'])
		db.session.add(new_user)
		db.session.commit()
		return jsonify({'message' : 'New user created!'})

if __name__ == '__main__':
    app.run(debug=True)