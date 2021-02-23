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
let cupButton;
let helpButton;
let forkButton;
let knifeButton;
let napkinButton;
let noButton;
let fatherButton;

let saveButton;

// var text = d3.select("#text");
// var output = d3.select(".output")

const options = {
    numLabels: 10
};

// FEATURE_EXTRACTOR_DEFAULTS.numLabels=10

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

// myButton.onHover = function(){
//     console.log("The cursor is over me!");
// } after 5 sec delay?

// myButton.onRelease = function(){
//     console.log("I have been released!");
// }
// setTimeout((5) => {
      
//   }, timeout);
// let setTimeout = 5;

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', options, modelReady);
  classifier = mobilenet.classification(video, videoReady)
  
  eatButton = createButton('eat sign');
  eatButton.position(950, 750)
  eatButton.mousePressed(function() {
      classifier.addImage('eat Sign')
  });
  upButton = createButton('up sign');
  upButton.position(950, 800)
  upButton.mousePressed(function() {
      classifier.addImage('up Sign')
  });

  drinkButton = createButton('drink sign');
  drinkButton.position(950, 850)
  drinkButton.mousePressed(function() {
      classifier.addImage('drink Sign')
  });

  forkButton = createButton('fork sign');
  forkButton.position(950, 900)
  forkButton.mousePressed(function() {
      classifier.addImage('fork Sign')
  });

  cupButton = createButton('cup sign');
  cupButton.position(950, 950)
  cupButton.mousePressed(function() {
      classifier.addImage('cup Sign')
  });

  knifeButton = createButton('knife sign');
  knifeButton.position(950, 1000)
  knifeButton.mousePressed(function() {
      classifier.addImage('knife Sign')
  });

  napkinButton = createButton('napkin');
  napkinButton.position(950, 1050)
  napkinButton.mousePressed(function() {
      classifier.addImage('napkin Sign')
  });

  helpButton = createButton('help sign');
  helpButton.position(1150, 750)
  helpButton.mousePressed(function() {
      classifier.addImage('help Sign')
  });

  noButton = createButton('no sign');
  noButton.position(1150, 800)
  noButton.mousePressed(function() {
      classifier.addImage('no Sign')
  });

  fatherButton = createButton('father sign');
  fatherButton.position(1150, 850)
  fatherButton.mousePressed(function() {
      classifier.addImage('father Sign')
  });

//   choiceButton = createButton('choice sign');
//   choiceButton.mousePressed(function() {
//       classifier.addImage('.output')
//   });

  trainButton = createButton('Train M.L.');
  trainButton.position(1150, 900)
  trainButton.mousePressed(function() {
      classifier.train(whileTraining);
  });

  saveButton = createButton('Save');
  saveButton.position(1150, 950)
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


// // grab references to the input element and the output div
// var text = d3.select("#text");
// var output = d3.select(".output");

// // Function to reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// myButton.onPress = function(){
//     console.log("I have been pressed!");
// }

// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   var inputText = d3.event.target.value;
//  // reverse the input string
//   // var reversedInput = reverseString(inputText);

//   // Set the output text to the reversed input string
//   output.text(inputText);
// }

// text.on("change", handleChange);

{/* <div>
<label for="text">Input Text: </label>
<input type="text" id="text" name="text-input">
</div>
<h1 class="output"></h1> */}
