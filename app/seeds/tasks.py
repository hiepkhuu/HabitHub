from app.models import db, Task


def seed_tasks():
    t1 = Task(user_id=1, task_name='Walk', task_detail='Try to do 15min', task_reason='The doc says I have high cholestrol', target_num=4,  color_id = 1, task_points=2)
    t2 = Task(user_id=1, task_name='Read', task_detail='10 min', task_reason='Get my brain up and working', target_num=7,  color_id = 2,task_points=2)
    t3 = Task(user_id=1, task_name='Exercise', task_detail='do 20min aerobics', task_reason='get fitter', target_num=3,  color_id = 3, task_points=2)
    t4 = Task(user_id=1, task_name='Journaling', task_detail='for 15min ', task_reason='to record my life and jotting down thoughts', target_num=7,  color_id = 4, task_points=2)

    tasks = [
        t1,
        t2,
        t3,
        t4,
    ]
    for t in tasks:
        db.session.add(t)
    db.session.commit()


def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
