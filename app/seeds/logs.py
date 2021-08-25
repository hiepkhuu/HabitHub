from app.models import db, Log


def seed_logs():
    l1 = Log(task_id=1)
    l2 = Log(task_id=2, completed=True);
    l3 = Log(task_id=1, completed=True, created_at= '2021-08-24 11:17:38')


    logs= [
        l1,
        l2,
        l3
    ]
    for l in logs:
        db.session.add(l)
    db.session.commit()

def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
