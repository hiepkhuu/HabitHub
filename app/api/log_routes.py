
import requests
from app.models import Log
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required



log_routes = Blueprint('logs', __name__)


@log_routes.route('/<int:id>')
@login_required
def get_logs(id):
    """
    Get all logs for one task
    """
    # colors = Color.query.filter(Color.id == color_id).all()
    logs = Log.query.filter(Log.task_id == id).all()
    return {'logs': [log.to_dict() for log in logs]}

@log_routes.route('/completed/<int:id>')
def get_complete_logs(id):
    """
    Get all logs that are true or completed
    """
    logs = Log.query.filter(Log.task_id == id, Log.completed == True).all()
    return {'completed logs': [log.to_dict() for log in logs]}
