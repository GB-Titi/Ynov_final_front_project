from flask import Flask, jsonify, request
from cars import db,CarModel

import json
 
app =Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
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
    if request.method == 'POST':

        data = json.loads(request.data)
        print(data)
        name=request.json['name']
        price=request.json['price']
        image =request.json['image']
        newCar=CarModel(name=name, price=price, image=image)
        db.session.add(newCar)
        db.session.commit()

        return jsonify(data)

@app.route("/remove", methods=['POST'])
def remove():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])

@app.route("/car", methods=['GET'])
def allCars():
    car = CarModel.query.all()
    # data = json.loads(request.data)
    return jsonify(car)

@app.route("/car/<int:id>", methods=['GET'])
def singleCar(id):
    car = CarModel.query.filter_by(id=id).first()
    # data = json.loads(request.data)
    if car:
        return jsonify(car)
    return jsonify("Aucune voiture ne porte cet ID")


@app.route("/update", methods=['POST'])
def update():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])

@app.route("/delete", methods=['POST'])
def delete():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])