from .db import db
from app.models import reward
from datetime import datetime, timedelta

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    task_name = db.Column(db.String(255), nullable=False)
    task_detail = db.Column(db.String(255), nullable=False)
    task_reason= db.Column(db.String(500), nullable=False)
    weekly_or_monthly = db.Column(db.String, nullable=True)
    due_date = db.Column(db.Date, nullable=True)
    color_id = db.Column(db.Integer, db.ForeignKey('colors.id'), nullable=False)
    task_points = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%m/%d/%Y, %H:%M:%S"))

    rewards = db.relationship('Reward', back_populates='task')
    color = db.relationship('Color', back_populates='tasks')
    owner = db.relationship('User', back_populates='tasks')

    # def get_all_Tasks(self):
    #     def helper(n):
    #         for a in self.rewards:
    #             if a.created_at > datetime.combine(self.created_at + timedelta(days=n),time.min) and a.created_at < datetime.combine(self.created_at + timedelta(days=n+1), time.min):
    #                 return True
    #         return False

    #     return {n: helper(n) for n in range((datetime.utcnow() + timedelta(days=1) - self.created_at).days)}


    # def check_all_in_last_year(self):
    #     def helper(n):
    #         for a in self.achievements:
    #             # print('acreate',a.created_at,'low',datetime.combine(self.created_at + timedelta(days=n),time.min),'high',datetime.combine(self.created_at + timedelta(days=n+1), time.min))
    #             if a.created_at > datetime.combine(datetime.now() + timedelta(days=n-364),time.min) and a.created_at < datetime.combine(datetime.now() + timedelta(days=n-363), time.min):
    #                 return True
    #         return False

    #     return {n: helper(n) for n in range(365)}

    # def check_all_in_last_week(self):
    #     def helper(n):
    #         for a in self.achievements:
    #             # print('self.name',self.name,'n',n,'a.id',a.id,'aCreate',a.created_at,'low',datetime.combine(datetime.utcnow() + timedelta(days=n-6),time.min),'high',datetime.combine(datetime.utcnow() + timedelta(days=n-5), time.min))
    #             if a.created_at > datetime.combine(datetime.utcnow() + timedelta(days=n-6),time.min) and a.created_at < datetime.combine(datetime.utcnow() + timedelta(days=n-5), time.min):
    #                 return True
    #         return False

    #     return {n: helper(n) for n in range(7)}


    # def count_achievements_in_last_week(self):
    #     count = 0
    #     for a in self.achievements:
    #         if a.created_at > datetime.combine(datetime.now() - timedelta(days=7),time.min) and a.created_at < datetime.now():
    #             # print('---------------now-------->',datetime.now())
    #             # print('---------------utcnow-------->',datetime.utcnow())
    #             # print('---------------low-------->',datetime.combine(datetime.now() - timedelta(days=7),time.min))
    #             # print('---------------high-------->',datetime.now())
    #             count += 1
    #     return count

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'task_name': self.task_name,
            'task_detail': self.task_detail,
            'weekly_or_monthly': self.weekly_or_monthly,
            'due_date': self.due_date,
            'color_id': self.color_id,
            'task_points': self.task_points,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            }
