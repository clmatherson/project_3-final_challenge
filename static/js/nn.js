let model;

function setup() {
    createCanvas(400, 400);

    let options = {
        inputs:['x', 'y'],
        output:['label' ],
        task: 'classification'
    };
    model = ml5.neuralNetwork(options)
}

function draw() {
    background(255);
}