
from threading import Semaphore
import requests
from app.models import Log, db
from app.forms import LogForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required
from datetime import date, timedelta

log_routes = Blueprint('logs', __name__)

month = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

def convert_date(date):
    #YYYY      MM    DD
    dateSplit = date.split(' ')
    return f"{dateSplit[3]}-{month[dateSplit[2]]}-{dateSplit[1]}"

# print(convert_date('Sat, 21 Aug 2021 12:00:00 GMT'))


@log_routes.route('/week')
def get_this_week():
    """
    get log of the week
    """
    # today = pendulum.now()
    # start = today.start_of('week')
    # end = today.end_of('week')

    # print('startOfWeek', start);
    # print('endOfWeek', end);

    today = date.today()
    start = today - timedelta(days=today.weekday())
    end = start + timedelta(days=6)

 

    # may do this in front end becasue filters are difficutl
    # 2021-08-26

    logs = Log.query.filter(Log.created_at <= end).\
            filter(Log.created_at >= start)
    return {'logs': [log.to_dict() for log in logs]}
    # logs = Log.query.filter()

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
