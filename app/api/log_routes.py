
import requests
from app.models import Log, db
from app.forms import LogForm
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
    Get all logs that are true and completed by user
    """
    # logs = Log.query.filter(Log.task_id == id, Log.completed == True).all()
    logs = Log.query.filter(Log.completed == True, Log.user_id == id).all()
    return {'completed': [log.to_dict() for log in logs]}

@log_routes.route('/', methods=['POST'])
def create_log():
    """
    logging a task for completion
    """
    form = LogForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        log = Log()
        form.populate_obj(log)
        db.session.add(log)
        db.session.commit()

        return log.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
