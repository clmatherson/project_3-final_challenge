let video;
let features;
let knn;
let labelP;
let ready = false;
let label = 'nothing';


function setup () {
  createCanvas(320, 240);
  // canvas.style("margin":'60px')
  // video.style('')
  video = createCapture(VIDEO)
  video.size(320,240);
  video.hide();
  features = ml5.featureExtractor('MobileNet', modelReady);
  // knn = ml5.KNNClassifier();   
  labelP = createP("need training data")
//knn=ml5.knnclassifier was moved down in third video
  // x = width/2;
  // y = height/2;
}

// function goClassify() {
//   const logits = features.infer(video);
//   knn.classify(logits, function (error, result) {
//     if (error) {
//       console.error(error);
//     } else {
//       label = result.label
//       labelP.html(result.label)
//       console.log(result);
//       goClassify();
//     }
//   });
// }

function gotResult(error, results) {
  if (error) {
    console.log(results)
  } else {
    console.log(results);
  }
}

function mousePressed() {
  if (knn.getNumLabels() > 0) {
    const logits = features.infer(video);
    // console.log(logits.dataSync())
    knn.classify(logits, gotResult);
  }
}
// result.html(result)
function keyPressed() {
  const logits = features.infer(video);
  if (key == "b") {
    knn.addExample(logits, "letter b");
    console.log('b');
  } else if (key == "l") {
    knn.addExample(logits, "letter l");
    console.log('l');
  } else if (key == "i") {
    knn.addExample(logits, "i");
    console.log('i')
  } else if (key == "s") {
    knn.save("knnLetters.json");
  }
}

function modelReady() {
  knn = ml5.KNNClassifier();
  console.log("model ready");
  knn.load("../KNN/KNN_knnLetters.json", function() {
    console.log("knnData loaded")  
    // goClassify()
  });
}
// C:\Users\jump1\sign_language_detection\KNN\KNN_knnLetters.json
// function sign() {
//   background(0);
//   fill(255);

// }

function draw() {
  image(video, 0, 0);
  // if (knn.getNumLabels() > 0) {
  //   knn.classify(logits, html.results);
  //   goClassify();
  //   ready = true;
  // }
}

// const save = (knn, name) => {
//   const dataset = knn.knn
// }

// // Create a KNN classifier
// const knnClassifier = ml5.KNNClassifier();

// // Create a featureExtractor that can extract features of an image
// const featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

// // Get the features of an image
// const features = featureExtractor.infer(myImg);

// // Add an example with a label to the KNN Classifier
// knnClassifier.addExample(features, label);

// // Use KNN Classifier to classify these features
// knnClassifier.classify(features, (err, result) => {
//   console.log(result); // result.label is the predicted label
// });

// //Initialize
// const knnClassifier = ml5.KNNClassifier();

// const classifier = ml5.imageClassifier('MobileNet', modelReady);

