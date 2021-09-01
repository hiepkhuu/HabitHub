
import requests
from app.forms import TaskForm
from app.models import Quotes
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required
from random import randrange

qoute_routes = Blueprint('qoutes', __name__)


@qoute_routes.route('/')
def get_qoute():
    """
    Get all quotes
    """
    num = randrange(37)
    print(num)
    quote = Quotes.query.filter(Quotes.id == num).one()
    return  quote.to_dict()
