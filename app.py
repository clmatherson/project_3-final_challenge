from flask import Flask
#  render_template
# import cv2
# import numpy as np

app = Flask(__name__)


@app.route('/')
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"

# def index():
    # return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)