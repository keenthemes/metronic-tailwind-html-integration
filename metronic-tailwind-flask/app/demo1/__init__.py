from flask import Blueprint

bp = Blueprint('demo1', __name__)

from app.demo1 import routes