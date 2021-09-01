from .db import db

class Quotes(db.Model):
    __tablename__='quotes'

    id = db.Column(db.Integer, primary_key=True)
    quote = db.Column(db.String(1000), nullable=True)
    author = db.Column(db.String(100), nullable=True)


    def to_dict(self):
        return {
          'id': self.id,
          'quote': self.quote,
          'author': self.author
        }
