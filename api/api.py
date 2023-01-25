from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def hello():
    response = {'msg': 'Hello, World!'}
    return response
