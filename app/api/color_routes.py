
import requests
from app.models import Color
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required



color_routes = Blueprint('colors', __name__)


@color_routes.route('/')
@login_required
def get_tasks():
    """
    Get all color
    """
    # colors = Color.query.filter(Color.id == color_id).all()
    colors = Color.query.all()
    return {'colors': [color.to_dict() for color in colors]}
    # return {'colors': colors[0].to_dict()}
