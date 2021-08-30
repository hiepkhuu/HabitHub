
import requests
from app.forms import TaskForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required


qoute_routes = Blueprint('qoutes', __name__)


@qoute_routes.route('/')
def get_qoute():
    res = requests.get('https://zenquotes.io/api/today')
    data = res.json()
    obj = {}
    obj['quote'] = data
    # print(data)
    return obj
