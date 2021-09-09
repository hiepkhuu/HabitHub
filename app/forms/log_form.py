from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired

class LogForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    task_id = StringField('task_id', validators=[DataRequired()])
    completed = BooleanField('completed', validators=[DataRequired()])

