from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from flask_sessions import Session
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dice.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #we doesn't use the Flask-SQLAlchemy event system.
app.config['SQLALCHEMY_ECHO'] = True
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True

db = SQLAlchemy(app)
ma = Marshmallow(app) # Needs to inicialized after SQLAlchemy.
bcrypt = Bcrypt(app)
server_session = Session(app)

app.app_context().push()

# Needs to be after the app initialization.
from database import routes