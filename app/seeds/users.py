from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='DemoUser', email='demo@aa.io', password='password', first_name='Erin', last_name='Lee', birthday='01-01-1995', profile_image_url="",)
    frank = User(
        username='frankAwesome', email='frank@aa.io', password='password', first_name='Frank', last_name='Gomez', birthday='12-14-2000', profile_image_url="",)
    charlie = User(
        username='PuppyPrincess', email='Charlie@aa.io', password='password',  first_name='Charlie', last_name='frank', birthday='11-11-1999', profile_image_url="",)

    db.session.add(demo)
    db.session.add(frank)
    db.session.add(charlie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
