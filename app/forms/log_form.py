from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class LogForm(FlaskForm):
    task_id = StringField('task_id', validators=[DataRequired()])
    completed = BooleanField('completed', validators=[DataRequired()])

