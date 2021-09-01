from app.models import db, Quotes


def seed_quotes():
    quote1 = Quotes(quote='We are what we repeatedly do. Excellence, then, is not an act, but a habit.',author='Will Durant')
    quote2 = Quotes(quote='Quality is not an act, it is a habit.',author='Aristotle')
    quote3 = Quotes(quote='Motivation is what gets you started. Habit is what keeps you going.',author='Jim Ryun')
    quote4 = Quotes(quote='If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.',author='Colin Powell')
    quote5 = Quotes(quote='Humans are creatures of habit. If you quit when things get tough, it gets that much easier to quit the next time. On the other hand, if you force yourself to push through it, the grit begins to grow in you.',author='Travis Bradberry')
    quote6 = Quotes(quote='A lot of people mistake habit for hard work. Doing something over and over again is not working hard.',author='Shannon Sharpe')
    quote7 = Quotes(quote='Laziness is nothing more than the habit of resting before you get tired.',author='Jules Renard')
    quote8 = Quotes(quote='Creativity is a habit, and the best creativity is the result of good work habits.',author='Twyla Tharp')
    quote9 = Quotes(quote='Positivity is like a muscle: keep exercising it, and it becomes a habit.',author='Natalie Massenet')
    quote10 = Quotes(quote='Chains of habit are too light to be felt until they are too heavy to be broken.',author='Warren Buffett')
    quote11 = Quotes(quote='Failure is only postponed success as long as courage \'coaches\' ambition. The habit of persistence is the habit of victory.',author='Herbert Kaufman')
    quote12 = Quotes(quote='Sow an act and you reap a habit. Sow a habit and you reap a character. Sow a character and you reap a destiny.',author='Charles Reade')
    quote13 = Quotes(quote='Make it a habit to tell people thank you. To express your appreciation, sincerely and without the expectation of anything in return. Truly appreciate those around you, and you\'ll soon find many others around you. Truly appreciate life, and you\'ll find that you have more of it.',author='Ralph Marston')
    quote14 = Quotes(quote='Habit is a second nature that destroys the first. But what is nature? Why is habit not natural? I am very much afraid that nature itself is only a first habit, just as habit is a second nature.',author='Blaise Pascal')
    quote15 = Quotes(quote='A nail is driven out by another nail. Habit is overcome by habit.',author='Desiderius Erasmus')
    quote16 = Quotes(quote='Habit is a cable; we weave a thread of it each day, and at last we cannot break it.',author='Horace Mann')
    quote17 = Quotes(quote='A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time.',author='Mark Twain')
    quote18 = Quotes(quote='And once you understand that habits can change, you have the freedom and the responsibility to remake them. ',author='Charles Duhigg')
    quote19 = Quotes(quote='Discipline is choosing between what you want now and what you want most.',author='Abraham Lincoln')
    quote20 = Quotes(quote='Drop by drop is the water pot filled.',author='Buddha')
    quote21 = Quotes(quote='Feeling sorry for yourself, and your present condition is not only a waste of energy but the worst habit you could possibly have.',author='Dale Carnegie')
    quote22 = Quotes(quote='First forget inspiration. Habit is more dependable. Habit will sustain you whether you’re inspired or not.',author='Octavia Butler')
    quote23 = Quotes(quote='Good habits are worth being fanatical about.',author='John Irving')
    quote24 = Quotes(quote=' Good habits formed at youth make all the difference.',author='Aristotle')
    quote25 = Quotes(quote='Habit is the intersection of knowledge (what to do), skill (how to do), and desire (want to do).',author='Stephen R. Covey')
    quote26 = Quotes(quote='Happiness is a habit—cultivate it.',author='Elbert Hubbard')
    quote27 = Quotes(quote='I fear not the man who has practiced 10,000 kicks, but I do fear the man who has practiced one kick 10,000 times. ',author='Bruce Lee')
    quote28 = Quotes(quote='In essence, if we want to direct our lives, we must take control of our consistent actions.It\'s not what we do once in a while that shapes our lives, but what we do consistently.',author='Tony Robbins')
    quote29 = Quotes(quote='Let today be the day you give up who you\'ve been for who you can become.',author='Hal Elrod')
    quote30 = Quotes(quote='Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good.',author='Malcolm Gladwell')
    quote31 = Quotes(quote='Successful people are simply those with successful habits.',author='Brian Tracy')
    quote32 = Quotes(quote='The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.',author='Albert Einstein')
    quote33 = Quotes(quote='There is no elevator to success, you have to take the stairs.',author='Zig Ziglar')
    quote34 = Quotes(quote='Tis easier to prevent bad habits than to break them.',author='Benjamin Franklin')
    quote35 = Quotes(quote=' We are our own potters; for our habits make us, and we make our habits. ',author='Frederick Langbridge')
    quote36 = Quotes(quote='Wouldn\'t it be great to be gifted? In fact... It turns out that choices lead to habits. Habits become talents. Talents are labeled gifts. You\'re not born this way, you get this way.',author='Seth Godin')



    quotes = [
        quote1,
        quote2,
        quote3,
        quote4,
        quote5,
        quote6,
        quote7,
        quote8,
        quote9,
        quote10,
        quote11,
        quote12,
        quote13,
        quote14,
        quote15,
        quote16,
        quote17,
        quote18,
        quote19,
        quote20,
        quote21,
        quote22,
        quote23,
        quote24,
        quote25,
        quote26,
        quote27,
        quote28,
        quote29,
        quote30,
        quote31,
        quote32,
        quote33,
        quote34,
        quote35,
        quote36


    ]
    for quote in quotes:
        db.session.add(quote)
    db.session.commit()


def undo_quotes():
    db.session.execute('TRUNCATE quotes RESTART IDENTITY CASCADE;')
    db.session.commit()
