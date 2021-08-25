from app.models import db, Reward


def seed_rewards():
    r1 = Reward(task_id=1, reward_name='Netflix-Binge', reward_details='5hrs', reward_reason='cuz i deserve it!!!', reward_points=200 )
    r2 = Reward(task_id=3, reward_name='Beach Day', reward_details='', reward_reason='So i can show off all my hard work', reward_points=300 )
    r3 = Reward(task_id=2, reward_name='Trip to the Meuseum', reward_details='Maybe go to SF or Monterey Bay', reward_reason='I always wanted to go there', reward_points=80 )
    r4= Reward(task_id=4, reward_name='Hawaii Vacay', reward_details='5 days', reward_reason='want to see if this will help me actually read every day!', reward_points=1000 )


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
