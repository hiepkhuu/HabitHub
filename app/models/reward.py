from .db import db
from sqlalchemy.sql import func
# from datetime import datetime

class Reward(db.Model):
    __tablename__ = 'rewards'

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    reward_name = db.Column(db.String(255), nullable=False)
    reward_reason = db.Column(db.String(500), nullable=False)
    due_date = db.Column(db.Date, nullable=True)
    reward_points = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

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
