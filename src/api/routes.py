"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import smtplib
import ssl
from email.message import EmailMessage

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods = ['POST'])
def register_user():
    id = request.json.get("id", None)
    username = request.json("username", None)
    email_address = request.json("email_address", None)
    password = request.json("password", None)
    
    password = bcrypt.generate_password_hash(password_hash)

    user_exists = User.query.filter_by(email_address=email_address).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    new_user = models.User(id = id, username = username, email_address = email_address, password = password, adress = adress, postal_code = postal_code, mobile = mobile)
        
    db.Session.add(new_user)
    db.Session.commit()
    
    return jsonify(User.serialize()), 200

@api.route('/get_user/<id>', methods = ['GET'])
def get_user(id):
    body = request.get_json()
    if request.method == 'GET':
        user = User.query.get(id)
        return jsonify(User.serialize()), 200

    return "Invalid Method", 404

@api.route('/get_all_users', methods = ['GET'])
def get_users():
    body = request.get_json()
    if request.method == 'GET':
        all_users = User.query.all()
        results = dump(all_users)

    return jsonify(results), 200

@api.route('/update_user/<id>', methods = ['PUT'])
def update_user(id):
    body = models.User.query.get(id)
    
    if request.method == 'PUT':

        id = request.json.get("id", None)
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        is_active = request.json.get("is_active", None)
        budget = request.json.get("budget", None)

        edited_user = models.User(id = id, username = username, email = email, password = password, is_active = is_active, budget = budget)
        
        db.Session.add(edited_user)
        db.Session.commit()
    
    return jsonify(User.serialize()), 201
'''
@api.route('/update_user_budget/<id>', methods = ['PUT'])
def update_user_budget(id):
    user = models.User.query.get(id)
    budget = request.json['budget']
    user.budget=budget
    models.Session.commit()
    
    return serializers.user_schema.jsonify(user), 201
'''
@api.route('/delete_user/<id>', methods = ['DELETE'])
def delete_user(id):
    user = models.User.query.get(id)
    models.Session.delete(user)
    models.Session.commit()
    
    return serializers.user_schema.jsonify(user)

@api.route('/add_item', methods = ['POST'])
def add_item():
    id = request.json.get("id", None)
    name = request.json.get("name", None)
    price = request.json.get("price", None)
    description = request.json("description", None)
    stock = request.json("stock", None)
    image = request.json("image", None)

    new_item = Item(id = id, name=name, price=price, description=description, stock=stock, image=image)

    db.Session.add(new_item)
    db.Session.commit()
    
    return jsonify(new_item), 201

@api.route('/get_item/<id>', methods = ['GET'])
def get_item(id):
    body = request.get_json()
    if request.method == 'GET':
        item = Item.query.get(id)
        return jsonify(item.serialize()), 200

    return "Invalid Method", 404
'''
@api.route('/get_itens_by_category/<category>', methods = ['GET'])
def get_itens_by_category(category):
    items = models.Item.query.filter_by(category=category).all()
    return jsonify(items), 200

@api.route('/get_itens_by_tag/<tag>', methods = ['GET'])
def get_itens_by_tag(tag):
    items = models.Item.query.filter_by(tag=tag).all()
    return serializers.items_schema.jsonify(items), 200
'''
@api.route('/get_all_itens', methods = ['GET'])
def get_itens():
    body = request.get_json()
    if request.method == 'GET':
        all_itens = Item.query.all()
        results = dump(all_itens)
        return jsonify(results), 200
    
    return "Invalid Method", 404
'''
@api.route('/update_item/<id>', methods = ['PUT'])
def update_item(id):
    item = models.Item.query.get(id)
    name = request.json['name']
    price = request.json['price']
    description = request.json['description']
    stock = request.json['stock']
    image = request.json['image']
    category = request.json['category']
    tag = request.json['tag']
    banner = request.json['banner']

    item.name=name
    item.price=price 
    item.description=description
    item.stock=stock
    item.image=image
    item.category=category
    item.tag=tag
    item.banner=banner

    models.Session.commit()
    
    return serializers.item_schema.jsonify(item), 201
'''
@api.route('/delete_item/<id>', methods = ['DELETE'])
def delete_item(id):
    item = models.Item.query.get(id)
    models.Session.delete(item)
    models.Session.commit()
    
    return serializers.item_schema.jsonify(item)

@api.route('/send_email', methods = ['GET'])
def send_email():
    
    email_sender = ''
    email_password = ''
    email_receiver = ''
    subject = 'teste'
    body = 'testando 1,2,3.'

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL( 'smtp.gmail.com' , 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())

    return jsonify({'Mail':'Sent'})

@api.route("/login", methods=["POST", "GET"])
def create_token():
    body = request.get_json()
    
    username = request.json("username", None)
    password = request.json("password", None)

    user = models.User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.id)

    return jsonify(access_token=access_token)