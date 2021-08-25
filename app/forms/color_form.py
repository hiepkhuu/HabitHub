from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class ColorForm(FlaskForm):
    color_hue = StringField('color_hue', validators=[DataRequired()])

