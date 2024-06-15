const opacity = { opacity: 0 };

function setup() {
  createCanvas(100, 100);
  gsap.to(opacity, {
    duration: 1.5,
    opacity: 255,
    repeat: -1,
    yoyo: true,
  });
}

function draw() {
  background(255);
  push();
  translate(50, 50);
  fill(opacity.opacity);
  noStroke();
  rect(-10, -10, 20, 20);
  pop();
}
