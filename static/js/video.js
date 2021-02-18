
let video;
let features;
// let knn;
// let labelP;
// let ready = False

function setup () {
  createCanvas(320, 240);
  video = createCapture(VIDEO)
  video.size(320,240);
  video.hide();
  features = ml5.featureExtractor('MobileNet', modelReady);
  // knn = ml5.KNNClassifier();
  // labelP = createP("need training data")
}

//function goClassify() {
//   const logits = features.infer(video);
//   knn.classify(logits, function (error, result) {
//    if (error) {
//      console.error(error);
//    } else {
//      labelP.html(result.label)
//      console.log(result);
//      goClassify();
//    }
// });
//}


function mousePressed() {
  // if (knn.getNumLabels() > 0) {
    const logits = features.infer(video);
    console.log(logits.dataSync())
    // knn.classify(logits, gotResults);
  // }
}

// function keyPressed() {
//   const logits = features.infer(video);
//   if (key == "d") {
//     knn.addExample(logits, "drink");
//     console.log('drink');
//   } else if (key == "e") {
//     knn.addExample(logits, "eat");
//     console.log('eat');
//   }
// }

function modelReady() {
  console.log("model ready");
}

function draw() {
  image(video, 0, 0);

  // if (!ready && knn.getNumLabels() > 0) {
  //   goClassify()   
  //   ready = true;
  // }
}



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

