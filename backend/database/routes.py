from database import app, ma, db, bcrypt, models, serializers, Session
from flask import jsonify, request, Response

@app.route("/")
@app.route("/home")
def index():
    return jsonify({"hello":"World"})

@app.route('/get_item/<id>', methods = ['GET'])
def get_item(id):
    item = models.Item.query.get(id)
    return serializers.item_schema.jsonify(item), 200

@app.route('/get_itens_by_category/<category>', methods = ['GET'])
def get_itens_by_category(category):
    items = models.Item.query.filter_by(category=category).all()
    return serializers.items_schema.jsonify(items), 200

@app.route('/get_itens_by_tag/<tag>', methods = ['GET'])
def get_itens_by_tag(tag):
    items = models.Item.query.filter_by(tag=tag).all()
    return serializers.items_schema.jsonify(items), 200

@app.route('/get_all_itens', methods = ['GET'])
def get_itens():
    all_itens = models.Item.query.all()
    results = serializers.items_schema.dump(all_itens)
    return jsonify(results), 200

@app.route('/add_item', methods = ['POST'])
def add_item():
    id = None
    name = request.json['name']
    price = request.json['price']
    description = request.json['description']
    stock = request.json['stock']
    image = request.json['image']

    new_item = models.Item(id = id, name=name, price=price, description=description, stock=stock, image=image)

    models.Session.add(new_item)
    models.Session.commit()
    
    return serializers.item_schema.jsonify(new_item), 201

@app.route('/update_item/<id>', methods = ['PUT'])
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

@app.route('/delete_item/<id>', methods = ['DELETE'])
def delete_item(id):
    item = models.Item.query.get(id)
    models.Session.delete(item)
    models.Session.commit()
    
    return serializers.item_schema.jsonify(item)

@app.route('/register', methods = ['POST'])
def register_user():
    id = None
    print (request.json)
    #request_dict = json.dump(request.json)
    username = request.json["username"]
    email_address = request.json["email_address"]
    password_hash = request.json["password_hash"]
    if "adress" in request.json.keys(): 
        adress = request.json["adress"]
    else:
        adress = ""
    if "postal_code" in request.json.keys():
        postal_code = request.json["postal_code"]
    else:
        postal_code = ""
    if "mobile" in request.json.keys():
        mobile = request.json["mobile"]
    else:
        mobile = ""

    password_hash = bcrypt.generate_password_hash(password_hash)

    user_exists = models.User.query.filter_by(email_address=email_address).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    new_user = models.User(id = id, username = username, email_address = email_address, password_hash = password_hash, adress = adress, postal_code = postal_code, mobile = mobile)
        
    db.Session.add(new_user)
    db.Session.commit()

    msg = Message("Welcome to our site", recipients=[email_address])
    msg.body = "Thanks for signing up!"
    mail.send(msg)
    resp = flask.Response(serializers.user_schema.jsonify(new_user))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
    
    #return serializers.user_schema.jsonify(new_user), 201

@app.route('/get_user/<id>', methods = ['GET'])
def get_user(id):
    user = models.User.query.get(id)
    return serializers.user_schema.jsonify(user), 200

@app.route('/get_all_users', methods = ['GET'])
def get_users():
    all_users = models.User.query.all()
    results = serializers.users_schema.dump(all_users)

    return jsonify(results), 200

@app.route('/update_user/<id>', methods = ['PUT'])
def update_user(id):
    user = models.User.query.get(id)

    email_adress = request.json['email_adress']
    adress = request.json['adress'] 
    postal_code = request.json['postal_code']
    mobile = request.json['mobile']
    full_name = request.json['full_name']
    city = request.json['city']
    state = request.json['state']
    country = request.json['country']
    photo = db.Column(db.BLOB(), nullable=True)
    
    user.email_adress=email_adress
    user.adress=adress 
    user.postal_code=postal_code
    user.mobile=mobile
    user.full_name=full_name
    user.city=city
    user.state=state
    user.country=country
    user.photo=photo 

    models.Session.commit()
    
    return serializers.user_schema.jsonify(user), 201

@app.route('/update_user_budget/<id>', methods = ['PUT'])
def update_user_budget(id):
    user = models.User.query.get(id)
    budget = request.json['budget']
    user.budget=budget
    models.Session.commit()
    
    return serializers.user_schema.jsonify(user), 201

@app.route('/delete_user/<id>', methods = ['DELETE'])
def delete_user(id):
    user = models.User.query.get(id)
    models.Session.delete(user)
    models.Session.commit()
    
    return serializers.user_schema.jsonify(user)

@app.route('/send_email', methods = ['POST'])
def send_email():
    msg = Message("Welcome to our site", recipients=['fselva@gmail.com'])
    msg.body = "Thanks for signing up!"
    mail.send(msg)