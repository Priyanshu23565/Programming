from flask import Flask, render_template, request
import mysql.connector
from db_config import db_config

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# --------------------------->
@app.route('/menu')
def menu():
    return render_template('menu.html')
# ----------------------------->
@app.route('/login')
def login():
    return render_template('login.html')



@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        try:
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()
            cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
            conn.commit()
            cursor.close()
            conn.close()
            return "✅ Registration Successful!"
        except Exception as e:
            return f"❌ Error: {e}"
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
