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

let filter = {
  'YGdqOTDDmrbGm80gM5UHicxMBgS2': true,
  'HUXmyv1dSSUnIvYk976MPWUSaTG2': true,
  'hPdk0Qpo0Gb5NsWSgxsqPM7M2EA2': true
};

function setup() {
  noCanvas();
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPekCKX4ee6h9NVR2lEITGAM0XIHn-c7c",
    authDomain: "color-classification.firebaseapp.com",
    databaseURL: "https://color-classification.firebaseio.com",
    projectId: "color-classification",
    storageBucket: "",
    messagingSenderId: "590040209608"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  let ref = database.ref('colors');
  ref.once('value', gotData); //, errorData);
}


function gotData(results) {
  let data = results.val();

  let allData = {
    entries: []
  };

  // Processing data
  let keys = Object.keys(data);
  for (let key of keys) {
    let record = data[key];
    let id = record.uid;
    if (!filter[id]) {
      allData.entries.push(record);
    }
  }

  //saveJSON(allData, 'colorData.json');
  console.log(allData.entries.length);
}
