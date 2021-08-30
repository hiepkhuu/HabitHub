from app.models import db, Color


def seed_colors():
    color1 = Color(color_hue='#c4e17f')
    color2 = Color(color_hue='#f7fdca')
    color3 = Color(color_hue='#fad071')
    color4 = Color(color_hue='#f0766b')
    color5 = Color(color_hue='#db9dbe')
    color6 = Color(color_hue='#c49cdf')
    color7 = Color(color_hue='#6599e2')
    color8 = Color(color_hue='#61c2e4')

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
