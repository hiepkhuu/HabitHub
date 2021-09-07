from app.models import db, Quotes


def seed_quotes():
    quote1 = Quotes(quote='We are what we repeatedly do. Excellence, then, is not an act, but a habit.',author='Will Durant')
    quote2 = Quotes(quote='Quality is not an act, it is a habit.',author='Aristotle')
    quote3 = Quotes(quote='Motivation is what gets you started. Habit is what keeps you going.',author='Jim Ryun')
    quote4 = Quotes(quote='If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.',author='Colin Powell')

    quote6 = Quotes(quote='A lot of people mistake habit for hard work. Doing something over and over again is not working hard.',author='Shannon Sharpe')
    quote7 = Quotes(quote='Laziness is nothing more than the habit of resting before you get tired.',author='Jules Renard')
    quote8 = Quotes(quote='Creativity is a habit, and the best creativity is the result of good work habits.',author='Twyla Tharp')

    quote10 = Quotes(quote='Chains of habit are too light to be felt until they are too heavy to be broken.',author='Warren Buffett')


    quote15 = Quotes(quote='A nail is driven out by another nail. Habit is overcome by habit.',author='Desiderius Erasmus')
    quote16 = Quotes(quote='Habit is a cable; we weave a thread of it each day, and at last we cannot break it.',author='Horace Mann')
    quote17 = Quotes(quote='A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time.',author='Mark Twain')
    quote18 = Quotes(quote='And once you understand that habits can change, you have the freedom and the responsibility to remake them. ',author='Charles Duhigg')
    quote19 = Quotes(quote='Discipline is choosing between what you want now and what you want most.',author='Abraham Lincoln')
    quote20 = Quotes(quote='Drop by drop is the water pot filled.',author='Buddha')

    quote22 = Quotes(quote='First forget inspiration. Habit is more dependable. Habit will sustain you whether you’re inspired or not.',author='Octavia Butler')
    quote23 = Quotes(quote='Good habits are worth being fanatical about.',author='John Irving')
    quote24 = Quotes(quote=' Good habits formed at youth make all the difference.',author='Aristotle')
    quote25 = Quotes(quote='Habit is the intersection of knowledge (what to do), skill (how to do), and desire (want to do).',author='Stephen R. Covey')
    quote26 = Quotes(quote='Happiness is a habit—cultivate it.',author='Elbert Hubbard')
    quote27 = Quotes(quote='I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times. ',author='Bruce Lee')

    quote29 = Quotes(quote='Let today be the day you give up who you\'ve been for who you can become.',author='Hal Elrod')
    quote30 = Quotes(quote='Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good.',author='Malcolm Gladwell')
    quote31 = Quotes(quote='Successful people are simply those with successful habits.',author='Brian Tracy')
    quote32 = Quotes(quote='The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.',author='Albert Einstein')
    quote33 = Quotes(quote='There is no elevator to success, you have to take the stairs.',author='Zig Ziglar')
    quote34 = Quotes(quote='Tis easier to prevent bad habits than to break them.',author='Benjamin Franklin')
    quote35 = Quotes(quote=' We are our own potters; for our habits make us, and we make our habits. ',author='Frederick Langbridge')




    quotes = [
        quote1,
        quote2,
        quote3,
        quote4,

        quote6,
        quote7,
        quote8,
    
        quote10,

        quote15,
        quote16,
        quote17,
        quote18,
        quote19,
        quote20,

        quote22,
        quote23,
        quote24,
        quote25,
        quote26,
        quote27,

        quote29,
        quote30,
        quote31,
        quote32,
        quote33,
        quote34,
        quote35,



    ]
    for quote in quotes:
        db.session.add(quote)
    db.session.commit()


def undo_quotes():
    db.session.execute('TRUNCATE quotes RESTART IDENTITY CASCADE;')
    db.session.commit()
