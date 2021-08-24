from .db import db

class Color(db.Model):
    __tablename__='colors'

    id = db.Column(db.Integer, primary_key=True)
    color_hue = db.Column(db.String(100), nullable=True)

    habits = db.relationship('Habit', back_populates='color')

    def to_dict(self):
        return {
          'id': self.id,
          'color_hue': self.color_hue
        }
