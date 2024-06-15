// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

// Edited by SubNerd
// https://github.com/SubNerd


var stars = [];
var bg;
var speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 4096; i++) {
    stars[i] = new Star();
  }
  bg = loadImage('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg');
}

function draw() {
  background(bg);
  speed = 10;
  speed += map(abs(mouseX - pmouseX) * 4, 0, width, 0, 50) * 10;
  speed += map(abs(mouseY - pmouseY) * 4, 0, height, 0, 50) * 10;
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
