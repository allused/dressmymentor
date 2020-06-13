from flask import Flask, request, render_template, session
from os import listdir

TOPS = listdir('static/images/tops')
BOTTOMS = listdir('static/images/bottoms')
DRESSES = listdir('static/images/dresses')
ACCESSORIES = listdir('static/images/accessories')
BGS = listdir('static/images/background')


app = Flask(__name__)
app.secret_key = b'__420__'


@app.route('/')
def hello_world():
    dirs = [TOPS, BOTTOMS, DRESSES, ACCESSORIES, BGS]
    keys = ['tops', 'bottoms', 'dresses', 'accessories', 'bgs']
    for i, d in enumerate(dirs):
        session[keys[i]] = ';'.join(d)
    return render_template('home.html')


if __name__ == '__main__':
    app.run(
        debug=True
    )
