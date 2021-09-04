from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length

class TaskForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    task_name = StringField('task_name', validators=[DataRequired('NAME: Task needs a name.'), Length(max=32, message='NAME: Must be fewer than 90 characters!') ])
    task_detail = StringField('task_detail', validators=[Length(max=32, message='GOALS: Must be fewer than 32 characters!') ])
    task_reason = StringField('task_reason', validators=[Length(max=32, message='REASONS: Must be fewer than 32 characters!') ])
    target_num = IntegerField('target_num', validators=[DataRequired('TARGET: Enter a weekly target.'), NumberRange(min=1, message='TARGET: Must be greater than 1!')])
    color_id = IntegerField('color_id', validators=[DataRequired('COLOR: Must choose a color.')])
    task_points = IntegerField('task_points', validators=[DataRequired('POINTS: Enter how much points each completion is worth.'), NumberRange(min=1,max=20, message='POINTS: Must be greater than 1 and less than 20! Don\'t make it too hard or too easy!')])

