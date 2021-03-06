from .db import db
# from sqlalchemy.sql import func
from datetime import datetime

class Reward(db.Model):
    __tablename__ = 'rewards'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    reward_name = db.Column(db.String(32), nullable=False)
    reward_detail = db.Column(db.String(32), nullable=True)
    reward_reason = db.Column(db.String(32), nullable=True)
    reward_points = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))

    task = db.relationship('Task', back_populates='rewards')

    def to_dict(self):
      return {
        'id': self.id,
        'user_id': self.user_id,
        'task': self.task.task_name,
        'task_points': self.task.task_points,
        'task_id': self.task_id,
        'color_id': self.task.color_id,
        'reward_name': self.reward_name,
        'reward_reason': self.reward_reason,
        'reward_points': self.reward_points,
        'reward_detail': self.reward_detail,
        'created_at': self.created_at,
        'updated_at': self.updated_at
      }
