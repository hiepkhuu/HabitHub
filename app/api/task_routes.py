from sqlalchemy.orm import session
from app.models import Task, User, db
from app.forms import TaskForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required



task_routes = Blueprint('tasks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@task_routes.route('users/<int:user_id>')
@login_required
def get_tasks(user_id
):
    """
    Get all the tasks for a single user
    """
    tasks = Task.query.filter(Task.user_id == user_id
    ).all()
    # print('########TEST##########', tasks)
    return {'tasks': [task.to_dict() for task in tasks]}


@task_routes.route('/', methods=['POST'])
def create_task():
  """
  Create a new task for user
  """
  form = TaskForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
      # task = Task(
      #   user_id = form.user_id.data,
      #   task_name = form.task_name.data,
      #   task_detail = form.task_detail.data,
      #   task_reason = form.task_reason.data,
      #   target_num = form.target_num.data,
      #   color_id = form.color_id.data,
      #   task_points = form.task_points.data
      # )
      task = Task()
      form.populate_obj(task)
      db.session.add(task)
      db.session.commit()

      return task.to_dict()

  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@task_routes.route('/<int:task_id>', methods=['GET', 'PUT', 'DELETE'])
def edit_task_by_id(task_id):
  """
  change or delete a already created task for user
  """
  task = Task.query.get(task_id)
  if request.method == 'GET':
    return task.to_dict()
  elif request.method == 'PUT':
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
      form.populate_obj(task)
      db.session.commit()
      return task.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
  elif request.method == 'DELETE':
    deleted_task = task ###do we really need to return what we delete?
    db.session.delete(task)
    db.session.commit()
    return deleted_task.to_dict()
  return task.to_dict()


# @task_routes.route('/<int:id>')
# # @login_required
# def task(id):
#     task = Task.query.get(id)
#     return task.to_dict()


###### test for posting a task ######
# fetch('api/tasks/', {
#    method: 'POST',
#    headers: {
#      'Content-Type': 'application/json'
#    },
#    body: JSON.stringify({
#       user_id : 1,
#       task_name : 'test-task',
#       task_detail : 'detail-sfasfsfsdfsdfsdfsdfsdfs',
#       task_reason : 'reason-asdfsdfsdfsdfsdfsdfsdfd',
#       target_num : 7,
#       color_hue : '#ffffff',
#       task_points : 2})
#  }).then(res => res.json()).then(data => console.log(data))


# ####### PUT single task ######
#  fetch('api/tasks/5', {
#    method: 'PUT',
#    headers: {
#      'Content-Type': 'application/json'
#    },
#    body: JSON.stringify({
#       user_id : 1,
#       task_name : 'test-task',
#       task_detail : 'detail-sfasfsfsdfsdfsdfsdfsdfs',
#       task_reason : 'reason-asdfsdfsdfsdfsdfsdfsdfd',
#       target_num : 7,
#       color_hue : '#ffffff',
#       task_points : 2})
#  }).then(res => res.json()).then(data => console.log(data))


 ###### GET single task ######
# fetch('api/tasks/5', {
#    method: 'GET'
#  }).then(res => res.json()).then(data => console.log(data))


 ###### DELETE single task  ######
# fetch('api/tasks/5', {
#    method: 'DELETE'
#  }).then(res => res.json()).then(data => console.log(data))
