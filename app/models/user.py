from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    birthday = db.Column(db.Date, nullable=False)
    profile_image_url = db.Column(db.String(1000), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))

    tasks = db.relationship('Task', back_populates='owner')

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
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'profile_image_url': self.profile_image_url,
            'birthday': self.birthday,
            'tasks': [task.to_dict() for task in self.tasks],
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
