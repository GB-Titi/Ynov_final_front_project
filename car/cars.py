from flask_sqlalchemy import SQLAlchemy
 
db = SQLAlchemy()
 
class CarModel(db.Model):
    __tablename__ = "cars"
 
    id = db.Column(db.Integer, primary_key=True)
    car_id = db.Column(db.Integer(),unique = True)
    name = db.Column(db.String(10))
    price = db.Column(db.Integer())
    image = db.Column(db.String(255))
 
    def __init__(self, car_id,name,price,image):
        self.car_id = car_id
        self.name = name
        self.price = price
        self.image = image
 
    def __repr__(self):
        return f"{self.name}:{self.car_id}"