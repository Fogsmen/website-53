// Daniel Shiffman
// Intelligence and Learning
// The Coding Train

// Full tutorial playlist:
// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bmMRCIoTi72aNWHo7epX4L

// Code from end of ?????
// https://youtu.be/?????????????

// Community version:
// https://codingtrain.github.io/ColorClassifer-TensorFlow.js
// https://github.com/CodingTrain/ColorClassifer-TensorFlow.js

let data;

let labelList = [
  'red-ish',
  'green-ish',
  'blue-ish',
  'orange-ish',
  'yellow-ish',
  'pink-ish',
  'purple-ish',
  'brown-ish',
  'grey-ish'
]

function preload() {
  data = loadJSON('colorData.json');
}


function setup() {
  //console.log(data.entries.length);

  let colors = [];
  let labels = [];
  for (let record of data.entries) {
    let col = [record.r / 255, record.g / 255, record.b / 255];
    colors.push(col);
    labels.push(labelList.indexOf(record.label));
  }
  //console.log(colors);

  let xs = tf.tensor2d(colors);
  //console.log(xs.shape);
  //xs.print();

  let labelsTensor = tf.tensor1d(labels, 'int32');
  labelsTensor.print();

  let ys = tf.oneHot(labelsTensor, 9);
  labelsTensor.dispose();

  console.log(xs.shape);
  console.log(ys.shape);
  xs.print();
  ys.print();

  //console.log(labels);

}
