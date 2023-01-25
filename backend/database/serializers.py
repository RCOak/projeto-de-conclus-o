from database import db, ma

class OrderItemSchema(ma.Schema):
    class Meta:
        fields = ('id', 'item_id', 'item_price', 'amout') 

orderItem_schema = OrderItemSchema()
orderItems_schema = OrderItemSchema(many=True)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'email_address', 'password_hash', 'adress',
                  'postal_code', 'mobile', 'budget', 'date_created', 'orders')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class ItemSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'price', 'description', 'stock', 'date_created',
     'order_item_id', 'image')

item_schema = ItemSchema()
items_schema = ItemSchema(many=True)


class OrderSchema(ma.Schema):
    class Meta:
        fields = ('id', 'date_created', 'total', 'user_id', 'order_items', 'status')

order_schema = OrderSchema()
Orders_schema = OrderSchema(many=True)

