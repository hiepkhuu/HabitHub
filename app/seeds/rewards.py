from app.models import db, Reward


def seed_rewards():
    r1 = Reward(task_id=1,user_id=1, reward_name='Netflix-Binge', reward_detail='5hrs', reward_reason='cuz i deserve it!!!', reward_points=200 )
    r2 = Reward(task_id=3,user_id=1,  reward_name='Beach Day', reward_detail='', reward_reason='show off all my hard work', reward_points=300 )
    r3 = Reward(task_id=2,user_id=1,  reward_name='Trip to the Meuseum', reward_detail='SF or Monterey Bay', reward_reason='I always wanted to go there', reward_points=80 )
    r4= Reward(task_id=4,user_id=1, reward_name='Hawaii Vacay', reward_detail='5 days', reward_reason='reading is good in general!', reward_points=1000 )


    rewards= [
        r1,
        r2,
        r3,
        r4,

    ]
    for r in rewards:
        db.session.add(r)
    db.session.commit()


def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
