from sqlalchemy.orm import session
from app.models import Reward, User, db
from app.forms import RewardForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request
from flask_login import login_required



reward_routes = Blueprint('rewards', __name__)


@reward_routes.route('users/<int:user_id>')
# @login_required
def get_rewards(user_id
):
    """
    Get all the rewards for a single user
    """
    rewards = Reward.query.filter(Reward.user_id == user_id).all()
    # print('########TEST##########', rewards)
    return {reward.id: reward.to_dict() for reward in rewards}


@reward_routes.route('/', methods=['POST'])
def create_reward():
  """
  Create a new reward for user
  """
  form = RewardForm()
  # form['csrf_token'].data = request.cookies['csrf_token']
  # if form.validate_on_submit():
      # reward = Reward(
      #   user_id = form.user_id.data,
      #   reward_name = form.reward_name.data,
      #   reward_detail = form.reward_detail.data,
      #   reward_reason = form.reward_reason.data,
      #   target_num = form.target_num.data,
      #   color_id = form.color_id.data,
      #   reward_points = form.reward_points.data
      # )
  reward = Reward()
  form.populate_obj(reward)
  db.session.add(reward)
  db.session.commit()

  return reward.to_dict()

  # return {'errors': validation_errors_to_error_messages(form.errors)}

@reward_routes.route('/<int:reward_id>', methods=['GET', 'PUT', 'DELETE'])
def edit_reward_by_id(reward_id):
  """
  change or delete a already created reward for user
  """
  reward = Reward.query.get(reward_id)
  if request.method == 'GET':
    return reward.to_dict()
  elif request.method == 'PUT':
    form = RewardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
      form.populate_obj(reward)
      db.session.commit()
      return reward.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
  elif request.method == 'DELETE':
    deleted_reward = reward
    db.session.delete(reward)
    db.session.commit()
    return deleted_reward.to_dict()
  return reward.to_dict()





###### test for posting a reward ######
# fetch('api/rewards/', {
#    method: 'POST',
#    headers: {
#      'Content-Type': 'application/json'
#    },
#    body: JSON.stringify({
#       task_id : 1,
#       reward_name : 'test-task',
#       reward_detail : 'detail-sfasfsfsdfsdfsdfsdfsdfs',
#       reward_reason : 'reason-asdfsdfsdfsdfsdfsdfsdfd',
#       reward_points : 200,
#       })
#  }).then(res => res.json()).then(data => console.log(data))



####### PUT single reward ######
# fetch('api/rewards/5', {
#    method: 'PUT',
#    headers: {
#      'Content-Type': 'application/json'
#    },
#    body: JSON.stringify({
#       task_id : 1,
#       reward_name : 'test-task',
#       reward_detail : 'detail-sfasfsfsdfsdfsdfsdfsdfs',
#       reward_reason : 'reason-asdfsdfsdfsdfsdfsdfsdfd',
#       reward_points : 400,
#       })
#  }).then(res => res.json()).then(data => console.log(data))

 ###### GET single reward ######
# fetch('api/rewards/5', {
#    method: 'GET'
#  }).then(res => res.json()).then(data => console.log(data))


 ###### DELETE single reward  ######
# fetch('api/rewards/5', {
#    method: 'DELETE'
#  }).then(res => res.json()).then(data => console.log(data))
