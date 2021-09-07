from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length, ValidationError


# def reward_name_length(form, field):
#     # Checking reward length
#     reward_name = field.data
#     if len(reward_name) > 32:
#         raise ValidationError('Name needs to be under 32')

class RewardForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    task_id = IntegerField('task_id', validators=[DataRequired('TASK: Please choose a task!')])
    # reward_name = StringField('reward_name', validators=[DataRequired(), reward_name_length])
    reward_name = StringField('reward_name', validators=[DataRequired('NAME: Reward needs a name.'), Length(max=32, message='NAME: Must be fewer than 32 characters!') ])
    reward_detail = StringField('reward_detail', validators=[Length(max=32, message='DETAILS: Must be fewer than 32 characters!') ])
    reward_reason = StringField('reward_reason', validators=[Length(max=32, message='REASONS: Must be fewer than 32 characters!') ])
    reward_points = IntegerField('reward_points', validators=[DataRequired('POINTS: Enter how much points this reward is worth.'), NumberRange(min=66, message='POINTS: It takes around 66days for a task to become a habit! ')])

    # if len(reward_name) > 32:
    #     raise ValidationError('needs to be under 32')


