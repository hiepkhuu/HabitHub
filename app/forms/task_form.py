from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length

class TaskForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    task_name = StringField('task_name', validators=[DataRequired('Task needs a name'), Length(max=90, message='Name must be fewer than 90 characters!') ])
    task_detail = StringField('task_detail', validators=[Length(max=255, message='Details must be fewer than 255 characters!') ])
    task_reason = StringField('task_reason', validators=[Length(max=255, message='Reasons must be fewer than 255 characters!') ])
    target_num = IntegerField('target_num', validators=[DataRequired('Enter a weekly target'), NumberRange(min=1, message='Must be greater than 1!')])
    color_id = StringField('color_id')
    task_points = IntegerField('task_points', validators=[DataRequired('Enter how much points each completion is worth'), NumberRange(min=1,max=20, message='Must be greater than 1 and less than 20! Don\'t make it too hard or too easy!')])

