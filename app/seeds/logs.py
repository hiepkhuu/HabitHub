from app.models import db, Log


def seed_logs():
    a1 = Log(task_id=1, user_id=1, completed=True,created_at= '2021-08-26 12:00:00')
    a2 = Log(task_id=1, user_id=1, completed=True,created_at= '2021-08-25 12:00:00')
    a3 = Log(task_id=1, user_id=1,  completed=True, created_at= '2021-08-24 12:00:00')
    a4 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-23 12:00:00')
    a5 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-22 12:00:00')
    a6 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-21 12:00:00')
    a7 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-19 12:00:00')
    a8 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-18 12:00:00')
    a9 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-17 12:00:00')
    a10 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-16 12:00:00')
    a11 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-15 12:00:00')
    a12 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-14 12:00:00')
    a13 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-13 12:00:00')
    a14 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-12 12:00:00')
    a15 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-11 12:00:00')
    a16 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-10 12:00:00')
    a17 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-09 12:00:00')
    a18 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-08 12:00:00')
    a19 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-08-07 12:00:00')
    a20 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-08-06 12:00:00')
    a21 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-09-20 12:00:00')
    a22 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-09-22 12:00:00')
    a23 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-09-24 12:00:00')
    a24 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-09-26 12:00:00')
    a25 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-09-27 12:00:00')
    a26 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-09-29 12:00:00')
    a27 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-09-30 12:00:00')
    a28 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-10-01 12:00:00')
    a29 = Log(task_id=1, user_id=1, completed=False, created_at= '2021-10-02 12:00:00')
    a30 = Log(task_id=1, user_id=1, completed=True, created_at= '2021-10-03 12:00:00')

    b1 = Log(task_id=2, user_id=1, completed=True,created_at= '2021-08-26 12:00:00')
    b2 = Log(task_id=2, user_id=1, completed=True,created_at= '2021-08-25 12:00:00')
    b3 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    b4 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-23 12:00:00')
    b5 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-22 12:00:00')
    b6 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-21 12:00:00')
    b7 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-19 12:00:00')
    b8 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-18 12:00:00')
    b9 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-17 12:00:00')
    b10 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-16 12:00:00')
    b11 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-15 12:00:00')
    b12 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-14 12:00:00')
    b13 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-13 12:00:00')
    b14 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-12 12:00:00')
    b15 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-11 12:00:00')
    b16 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-10 12:00:00')
    b17 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-09 12:00:00')
    b18 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-08 12:00:00')
    b19 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-07 12:00:00')
    b20 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-08-06 12:00:00')
    b21 = Log(task_id=2, user_id=1, completed=False, created_at= '2021-09-20 12:00:00')
    b22 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-09-22 12:00:00')
    b23 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-09-24 12:00:00')
    b24 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-09-26 12:00:00')
    b25 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-09-27 12:00:00')
    b26 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-09-29 12:00:00')
    b27 = Log(task_id=2, user_id=1, completed=False, created_at= '2021-09-30 12:00:00')
    b28 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-10-01 12:00:00')
    b29 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-10-02 12:00:00')
    b30 = Log(task_id=2, user_id=1, completed=True, created_at= '2021-10-03 12:00:00')

    c1 = Log(task_id=3, user_id=1, completed=True,created_at= '2021-08-26 12:00:00')
    c2 = Log(task_id=3, user_id=1, completed=False,created_at= '2021-08-25 12:00:00')
    c3 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    c4 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-23 12:00:00')
    c5 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-22 12:00:00')
    c6 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-21 12:00:00')
    c7 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-19 12:00:00')
    c8 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-18 12:00:00')
    c9 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-17 12:00:00')
    c10 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-16 12:00:00')
    c11 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-15 12:00:00')
    c12 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-14 12:00:00')
    c13 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-13 12:00:00')
    c14 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-12 12:00:00')
    c15 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-11 12:00:00')
    c16 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-10 12:00:00')
    c17 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-09 12:00:00')
    c18 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-08 12:00:00')
    c19 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-08-07 12:00:00')
    c20 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-08-06 12:00:00')
    c21 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-09-20 12:00:00')
    c22 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-09-22 12:00:00')
    c23 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-09-24 12:00:00')
    c24 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-09-26 12:00:00')
    c25 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-09-27 12:00:00')
    c26 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-09-29 12:00:00')
    c27 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-09-30 12:00:00')
    c28 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-10-01 12:00:00')
    c29 = Log(task_id=3, user_id=1, completed=True, created_at= '2021-10-02 12:00:00')
    c30 = Log(task_id=3, user_id=1, completed=False, created_at= '2021-10-03 12:00:00')

    d1 = Log(task_id=4, user_id=1, completed=True,created_at= '2021-08-26 12:00:00')
    d2 = Log(task_id=4, user_id=1, completed=True,created_at= '2021-08-25 12:00:00')
    d3 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-24 12:00:00')
    d4 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-23 12:00:00')
    d5 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-22 12:00:00')
    d6 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-21 12:00:00')
    d7 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-19 12:00:00')
    d8 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-18 12:00:00')
    d9 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-17 12:00:00')
    d10 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-16 12:00:00')
    d11 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-15 12:00:00')
    d12 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-14 12:00:00')
    d13 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-13 12:00:00')
    d14 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-12 12:00:00')
    d15 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-11 12:00:00')
    d16 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-10 12:00:00')
    d17 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-09 12:00:00')
    d18 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-08 12:00:00')
    d19 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-07 12:00:00')
    d20 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-08-06 12:00:00')
    d21 = Log(task_id=4, user_id=1, completed=False, created_at= '2021-09-20 12:00:00')
    d22 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-09-22 12:00:00')
    d23 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-09-24 12:00:00')
    d24 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-09-26 12:00:00')
    d25 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-09-27 12:00:00')
    d26 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-09-29 12:00:00')
    d27 = Log(task_id=4, user_id=1, completed=False, created_at= '2021-09-30 12:00:00')
    d28 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-10-01 12:00:00')
    d29 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-10-02 12:00:00')
    d30 = Log(task_id=4, user_id=1, completed=True, created_at= '2021-10-03 12:00:00')


    logs= [
           a1,
           a2,
           a3,
           a4,
           a5,
           a6,
           a7,
           a8,
           a9,
           a10,
           a11,
           a12,
           a13,
           a14,
           a15,
           a16,
           a17,
           a18,
           a19,
           a20,
           a21,
           a22,
           a23,
           a24,
           a25,
           a26,
           a27,
           a28,
           a29,
           a30,

           b1,
           b2,
           b3,
           b4,
           b5,
           b6,
           b7,
           b8,
           b9,
           b10,
           b11,
           b12,
           b13,
           b14,
           b15,
           b16,
           b17,
           b18,
           b19,
           b20,
           b21,
           b22,
           b23,
           b24,
           b25,
           b26,
           b27,
           b28,
           b29,
           b30,

           c1,
           c2,
           c3,
           c4,
           c5,
           c6,
           c7,
           c8,
           c9,
           c10,
           c11,
           c12,
           c13,
           c14,
           c15,
           c16,
           c17,
           c18,
           c19,
           c20,
           c21,
           c22,
           c23,
           c24,
           c25,
           c26,
           c27,
           c28,
           c29,
           c30,

           d1,
           d2,
           d3,
           d4,
           d5,
           d6,
           d7,
           d8,
           d9,
           d10,
           d11,
           d12,
           d13,
           d14,
           d15,
           d16,
           d17,
           d18,
           d19,
           d20,
           d21,
           d22,
           d23,
           d24,
           d25,
           d26,
           d27,
           d28,
           d29,
           d30,
           ]

    # i = 1
    # while(i < 11):
    #     logs.append('l'+ str(i))
    #     i+=1

    for l in logs:
        db.session.add(l)
    db.session.commit()

def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
