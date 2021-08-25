from app.models import db, Color


def seed_colors():
    color1 = Color(color_hue='300')
    color2 = Color(color_hue='60')
    color3 = Color(color_hue='240')
    color4 = Color(color_hue='180')
    color5 = Color(color_hue='120')

    colors = [
        color1,
        color2,
        color3,
        color4,
        color5,
    ]
    for color in colors:
        db.session.add(color)
    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
