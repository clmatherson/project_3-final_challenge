from flask import Flask, render_template
#  render_template
# import cv2
# import Tensorflow
import numpy as np
import os
import opencv-python
import onnx
import onnxruntime

import step_5_camera

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

@app.route('/test')
def dynamic_page():
    return step_5_camera.main()



if __name__ == "__main__":
    app.run(debug=True)