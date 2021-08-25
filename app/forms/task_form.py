from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length

class TaskForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired('Task needs a name'), Length(max=90, message='Name must be fewer than 90 characters!') ])
    detail = StringField('detail', validators=[Length(max=255, message='Details must be fewer than 255 characters!') ])
    reason = StringField('reason', validators=[Length(max=255, message='Reasons must be fewer than 255 characters!') ])
    num = IntegerField('num', validators=[DataRequired('Enter a weekly target'), NumberRange(min=1, message='Must be greater than 1!')])
    color_id = StringField('color_id')
    points = IntegerField('points', validators=[DataRequired('Enter how much points each completion is worth'), NumberRange(min=1,max=20, message='Must be greater than 1 and less than 20! Don\'t make it too hard or too easy!')])

