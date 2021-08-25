from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Task

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')
# @login_required
def tasks():
    tasks = Task.query.all()
    print(tasks)
    return {'tasks': [task.to_dict() for task in tasks]}


@task_routes.route('/<int:id>')
# @login_required
def task(id):
    task = Task.query.get(id)
    return task.to_dict()
