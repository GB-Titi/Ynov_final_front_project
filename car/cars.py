from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

 
db = SQLAlchemy()

@dataclass
class CarModel(db.Model):
    id:int
    name:str
    price:str
    image:str
    __tablename__ = "cars"
 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    price = db.Column(db.Integer())
    image = db.Column(db.String(255))
 
    def __init__(self,name,price,image):
        self.name = name
        self.price = price
        self.image = image
 
    def __repr__(self):
        return f"{self.name}:{self.car_id}"