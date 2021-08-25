from .db import db
from sqlalchemy.sql import func
from app.models import reward
# from datetime import datetime
class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    task_name = db.Column(db.String, nullable=False)
    task_detail = db.Column(db.String, nullable=False)
    task_reason= db.Column(db.String, nullable=False)
    weekly_or_monthly = db.Column(db.String, nullable=True)
    due_date = db.Column(db.Date, nullable=True)
    color_id = db.Column(db.Integer, db.ForeignKey('colors.id'), nullable=False)
    task_points = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    rewards = db.relationship('Reward', back_populates='task')
    color = db.relationship('Color', back_populates='tasks')
    owner = db.relationship('User', back_populates='tasks')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
