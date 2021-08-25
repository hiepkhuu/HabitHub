from .db import db
# from sqlalchemy.sql import func
from datetime import datetime

class Reward(db.Model):
    __tablename__ = 'rewards'

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    reward_name = db.Column(db.String(255), nullable=False)
    reward_details = db.Column(db.String(255), nullable=True)
    reward_reason = db.Column(db.String(500), nullable=False)
    reward_points = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))

    task = db.relationship('Task', back_populates='rewards')

    def to_dict(self):
      return {
        'id': self.id,
        'task': self.task.task_name,
        'task_id': self.task_id,
        'color': self.task.color_id,
        'reward_name': self.reward_name,
        'reward_reason': self.reward_reason,
        'created_at': self.created_at,
        'updated_at': self.updated_at
      }
