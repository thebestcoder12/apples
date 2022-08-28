x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  to_number = Number(content);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple ";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "The speech has not recognized a number ";
  }

}

function preload() {
  apple = loadImage("apple.png");
}

function setup() {
  canvas = createCanvas(900, 600)

}

function draw() {
  if (draw_apple == "set") {
    for (let index = 0; index <= to_number; index++) {
x = Math.floor (Math.random()*900);
y = Math.floor (Math.random()*600);   
image(apple.x,y,50,50) 

    }
speak_data="applesDrawn"
speak()
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}