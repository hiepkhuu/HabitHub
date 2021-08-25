from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Task, User

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/<int:userId>')
# @login_required
def get_tasks(userId):
    """
    Get all the tasks for a single user
    """
    tasks = Task.query.filter(Task.user_id == userId).all()
    print('########TEST##########', tasks)
    return {task.id: task.to_dict() for task in tasks}


@task_routes.route('', methods=['POST'])
def create_task():
  """
  Create a new task for user
  """
  form = TaskForm()
  
@task_routes.route('/<int:id>')
# @login_required
def task(id):
    task = Task.query.get(id)
    return task.to_dict()
