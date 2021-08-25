from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, NumberRange, Length

class TaskForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired('Task needs a name'), Length(max=90, message='Name must be fewer than 90 characters!') ])
    detail = StringField('detail', validators=[Length(max=255, message='Details must be fewer than 255 characters!') ])
    reason = StringField('reason', validators=[Length(max=255, message='Reasons must be fewer than 255 characters!') ])
    num = StringField('num', validators=[DataRequired('Enter a weekly target'), NumberRange(min=1, message='Must be greater than 1!')])
    color_id = StringField('color_id')

