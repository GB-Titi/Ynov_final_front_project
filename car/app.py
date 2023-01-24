from flask import Flask, jsonify, request
import json
 
app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///<db_name>.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
 
@app.before_first_request
def create_table():
    db.create_all()
 
app.run(host='localhost', port=5000)

@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"}) 

@app.route("/add", methods=['POST'])
def add():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])

@app.route("/remove", methods=['POST'])
def remove():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])

@app.route("/car", methods=['GET'])
def car():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])

@app.route("/update", methods=['POST'])
def update():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])