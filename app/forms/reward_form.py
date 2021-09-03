from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length

class RewardForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    task_id = IntegerField('task_id', validators=[DataRequired()])
    reward_name = StringField('reward_name', validators=[DataRequired('Reward needs a name'), Length(max=32, message='Name must be fewer than 32 characters!') ])
    reward_detail = StringField('reward_detail', validators=[Length(max=32, message='Details must be fewer than 32 characters!') ])
    reward_reason = StringField('reward_reason', validators=[Length(max=32, message='Reasons must be fewer than 32 characters!') ])
    reward_points = IntegerField('reward_points', validators=[DataRequired('Enter how much points this reward is worth'), NumberRange(min=66, message='Must be greater than 66! It takes around 66days for a task to become a habit!')])



