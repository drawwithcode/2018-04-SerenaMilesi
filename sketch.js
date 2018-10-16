function preload() {
  song = loadSound('addons/bubbles.mp3'); //load song
}

//empty array
let bubbles = [];
var song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();

  textFont('Roboto')

  //create bubbles
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

//if you click on the circle it will disappear
function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1); //index and how many, remove an item from the array
    }
  }
}

function draw() {
  //lyrics
  background(45, 47, 45);
  textSize(30);
  fill(234, 215, 33);
  stroke(160, 146, 17);
  strokeWeight(3);
  text('You are creating all the bubbles at night', 30, 50);
  text("I'm chasing round trying to pop them all the time", windowWidth - 680, windowHeight - 30);

  //effects
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255); //white
    } else {
      bubbles[i].changeColor(0); //black
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

//the constructor function is used to create a new object
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  //if d>r the point is outside the circle
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  //shaking function
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  //show function
  show() {
    stroke(160, 146, 17);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
