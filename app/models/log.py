from .db import db
from datetime import datetime

class Log(db.Model):
    __tablename__ = 'logs'

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    completed = db.Column(db.Integer, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))

    task = db.relationship('Task', back_populates='logs')

    def to_dict(self):
      return {
        'id': self.id,
        'task_id': self.task_id,
        'completed': self.completed,
        'created_at': self.created_at,
        'updated_at': self.updated_at
      }
