from app.models import db, Color


def seed_colors():
    color1 = Color(color_hue='#FF9AA2')
    color2 = Color(color_hue='#FFB7B2')
    color3 = Color(color_hue='#FFDAC1')
    color4 = Color(color_hue='#E2F0CB')
    color5 = Color(color_hue='#B5EAD7')
    color6 = Color(color_hue='#C7CEEA')
    color7 = Color(color_hue='#bae1ff')


    colors = [
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7,
       

    ]
    for color in colors:
        db.session.add(color)
    db.session.commit()


def undo_colors():
    db.session.execute('TRUNCATE colors RESTART IDENTITY CASCADE;')
    db.session.commit()
