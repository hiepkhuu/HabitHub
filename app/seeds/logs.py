from app.models import db, Log


def seed_logs():
    l1 = Log(task_id=1)


    logs= [
        l1
    ]
    for l in logs:
        db.session.add(l)
    db.session.commit()

def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
