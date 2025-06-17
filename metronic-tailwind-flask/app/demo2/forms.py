"""Demo2 forms for Flask-WTF integration."""
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired


class FilterForm(FlaskForm):
    """Sample filter form for demo2."""
    category = SelectField('Category', choices=[
        ('all', 'All Categories'),
        ('sales', 'Sales'),
        ('marketing', 'Marketing'),
        ('support', 'Support')
    ])
    search = StringField('Search', validators=[DataRequired()])
    submit = SubmitField('Apply Filter')