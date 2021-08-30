from app.models import db, Color


def seed_colors():
    color1 = Color(color_hue='#91ec7a')
    color2 = Color(color_hue='#eceb86')
    color3 = Color(color_hue='#fac371')
    color4 = Color(color_hue='#eb6d61')
    color5 = Color(color_hue='#e9a1c7')
    color6 = Color(color_hue='#c093df ')
    color7 = Color(color_hue='#6099e9')
    color8 = Color(color_hue='#5fc5eb')

    colors = [
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7,
        color8,

    ]
    for color in colors:
        db.session.add(color)
    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
