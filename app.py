from flask import Flask, render_template, Response
#  render_template
# import Tensorflow
import numpy as np
from camera import Camera
# import cv2
import step_5_camera # this will be your file name; minus the `.py`

app = Flask(__name__)


# @app.route('/')
# def home():
#     print("Server received request for 'Home' page...")
#     return "Welcome to my 'Home' page!"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def page1():
    return render_template('about.html')

@app.route('/installation')
def page4():
    return render_template('installation.html')

@app.route('/signvideo')
def page2():
    return render_template('signvideo.html')

@app.route('/uploadSigns')
def page3():
    return render_template('signUpload.html')
	
if __name__ == "__main__":
    app.run(debug=True)