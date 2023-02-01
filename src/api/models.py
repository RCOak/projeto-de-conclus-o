from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    budget = db.Column(db.Integer(), nullable=False, default=100)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id":self.id,
            "email":self.email,
            "budget":self.budget,
        }

class OrderItem(db.Model):
    id = db.Column(db.String(32), primary_key=True)
    item_id = db.Column(db.Integer(), db.ForeignKey('item.id'))
    item_price = db.Column(db.Integer(), nullable=False)
    amount = db.Column(db.Integer(), nullable=False)
    order_id = db.Column(db.Integer(), db.ForeignKey('order.id'))

    def __repr__(self):
        return f'<OrderItem. {self.id}>'

    def serialize(self):
        return {
            "id":self.id,
            "item_id":self.item_id,
            "item_price":self.item_price,
            "amount":self.amount,
            "order_id":self.order_id,
        }

'''        
class User(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True, default=get_uuid())
    username = db.Column(db.String(120), nullable=False, unique=True)
    email_address = db.Column(db.String(60), nullable=False, unique=True)
    password_hash = db.Column(db.String(60), nullable=False)
    adress = db.Column(db.String(120), nullable=True)
    postal_code = db.Column(db.String(60), nullable=True)
    mobile = db.Column(db.String(20), nullable=True)    
    budget = db.Column(db.Integer(), nullable=False, default=100)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    orders = db.relationship('Order', backref='user', lazy=True)
    full_name = db.Column(db.String(120), nullable=True)
    city = db.Column(db.String(60), nullable=True)
    state = db.Column(db.String(60), nullable=True)
    country = db.Column(db.String(60), nullable=True)
    photo = db.Column(db.BLOB(), nullable=True)
    

    def __repr__(self):
        return f'User. {self.id}'
'''
    
class Item(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)
    price = db.Column(db.Integer(), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    stock = db.Column(db.Integer(), nullable=False)
    #date_created = db.Column(db.DateTime, default=datetime.utcnow)
    order_item_id = db.Column(db.Integer(), db.ForeignKey('order_item.id'))
    #image = db.Column(db.string(), nullable=False)
    category = db.Column(db.String(20), nullable=False)
    tag = db.Column(db.String(20), nullable=True)
    #banner = db.Column(db.string(), nullable=True)

    def __repr__(self):
        return f'Item. {self.name}'

    def serialize(self):
        return {
            "id":self.id, 
            "name":self.name,
            "price":self.price,
            "description":self.description,
            "stock":self.stock,
            "date_created":self.date_created,
            "order_item_id":self.order_item_id,
            "image":self.image,
            "category":self.category,
            "tag":self.tag,
            "banner":self.banner,
        }
        
class Order(db.Model):
    id = db.Column(db.String(32), unique=True, primary_key=True)
    #date_created = db.Column(db.DateTime, default=datetime.utcnow)
    total = db.Column(db.Integer(), nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    order_itens = db.relationship('OrderItem', backref='order', lazy=True)
    status = db.Column(db.Integer(), nullable=False)

    def __repr__(self):
        return f'Order. {self.id}'

    def serializer(self):
        return {
            "id":self.id,
            "date_created":self.date_created,
            "total":self.total,
            "user_id":self.user_id,
            "order_itens":self.order_itens,
            "status":self.status,
        }
        