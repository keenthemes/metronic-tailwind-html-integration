from flask import Blueprint

bp = Blueprint('demo2', __name__)

from app.demo2 import routes