// Image Classification with MobileNet
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// https://youtu.be/D9BoBSkLvFo
// https://thecodingtrain.com/learning/ml5/1.2-webcam-classification.html
// https://editor.p5js.org/codingtrain/sketches/JrudwwVD

let mobilenet;
let classifier;
let video;
let label = '';
// let label = 'loading model'
let eatButton;
let upButton;
let trainButton;
let drinkButton;
let helpButton;

function modelReady() {
  console.log('Model is ready!!!');
//   classifier.load('../model.json', '../model.weights.bin', customModelReady)
}

// function customModelReady() {
//     console.log('Custom Model is ready!')
//     label = 'model ready'
//     classifier.classify(gotResults)
// }

function videoReady() {
    console.log("video is ready!!")
}

function whileTraining(loss) {
    if (loss == null) {
        console.log('Training Complete');
        classifier.classify(gotResults);
    } else {
        console.log(loss)
    }
}


// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady)
  
  eatButton = createButton('eat sign');
  eatButton.mousePressed(function() {
      classifier.addImage('eat Sign')
  });
  upButton = createButton('up sign');
  upButton.mousePressed(function() {
      classifier.addImage('up Sign')
  });

  drinkButton = createButton('drink sign');
  drinkButton.mousePressed(function() {
      classifier.addImage('drink Sign')
  });

  helpButton = createButton('help sign');
  helpButton.mousePressed(function() {
      classifier.addImage('help Sign')
  });

  trainButton = createButton('Train');
  trainButton.mousePressed(function() {
      classifier.train(whileTraining);
  });

  saveButton = createButton('Save');
  saveButton.mousePressed(function() {
      classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      //console.log(results); 
      //label = results[0].className; this is p5 I believe or mobilenet
      label = results[0].label;
      classifier.classify(gotResults);
    }
}

