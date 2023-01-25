from datetime import datetime
from database import db
from uuid import uuid4

def get_uuid():
    return uuid4().hex

class OrderItem(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True, default=get_uuid())
    item_id = db.Column(db.Integer(), db.ForeignKey('item.id'))
    item_price = db.Column(db.Integer(), nullable=False)
    amount = db.Column(db.Integer(), nullable=False)
    order_id = db.Column(db.Integer(), db.ForeignKey('order.id'))

    def __repr__(self):
        return f'OrderItem. {self.id}'

    def __init__(self, id, item_id, item_price, amount):
        self.id = id
        self.item_id = item_id
        self.item_price = item_price
        self.amount = amount
        
class User(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True, default=get_uuid())
    username = db.Column(db.String(120), nullable=False, unique=True)
    email_address = db.Column(db.String(60), nullable=False, unique=True)
    password_hash = db.Column(db.String(60), nullable=False)
    adress = db.Column(db.String(120), nullable=False)
    postal_code = db.Column(db.String(60), nullable=False)
    mobile = db.Column(db.String(20), nullable=False)    
    budget = db.Column(db.Integer(), nullable=False, default=100)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    orders = db.relationship('Order', backref='user', lazy=True)

    def __repr__(self):
        return f'User. {self.id}'

    def __init__(self, id, username, email_address, password_hash, adress,
    postal_code, mobile):
        self.id = id
        self.username = username
        self.email_address = email_address
        self.password_hash = password_hash
        self.adress = adress
        self.postal_code = postal_code
        self.mobile = mobile


class Item(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True, default=get_uuid())
    name = db.Column(db.String(120), nullable=False, unique=True)
    price = db.Column(db.Integer(), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    stock = db.Column(db.Integer(), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    order_item_id = db.Column(db.Integer(), db.ForeignKey('order_item.id'))
    image = db.Column(db.BLOB(), nullable=False)

    def __repr__(self):
        return f'Item. {self.name}'

    def __init__(self, id, name, price, description, stock, date_created,
     order_item_id, image):
        self.id = id
        self.name = name
        self.price = price
        self.description = description
        self.stock = stock
        self.date_created = date_created
        self.order_item_id = order_item_id
        self.image = image
        

class Order(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True, default=get_uuid())
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    total = db.Column(db.Integer(), nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    order_itens = db.relationship('OrderItem', backref='order', lazy=True)
    status = db.Column(db.Integer(), nullable=False)

    def __repr__(self):
        return f'Order. {self.id}'

    def __init__(self, id, date_created, total, user_id, order_itens,
    status):
        self.id = id
        self.date_created = date_created
        self.total = total
        self.user_id = user_id
        self.order_itens = order_itens
        self.status = status