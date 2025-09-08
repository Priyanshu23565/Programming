from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def data():
    return render_template('index.html')

@app.route('/music.html')
def data1():
    return render_template('music.html')

if __name__ == '__main__':
    app.run(debug=True)
