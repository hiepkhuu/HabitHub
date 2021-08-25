from app.models import db, Log


def seed_logs():
    l1 = Log(task_id=1,created_at= '2021-08-25 12:00:00')
    l2 = Log(task_id=2, completed=True);
    l3 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l4 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l5 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l6 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l7 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l8 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l9 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    l10 = Log(task_id=1, completed=True, created_at= '2021-08-24 12:00:00')


    logs= []

    i = 1
    while(i < 11):
        logs.append('l'+ str(i))
        i+=1

    for l in logs:
        db.session.add(l)
    db.session.commit()

def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
