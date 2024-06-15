const angle = {
  angle_1: 45,
  angle_2: 90,
  angle_3: 135,
  angle_4: 180,
  angle_5: 225,
  angle_6: 270,
  angle_7: 315,
  angle_8: 360,
};

function setup() {
  createCanvas(100, 100);
  gsap.to(angle, {
    duration: 1.5,
    angle_1: -45,
    angle_2: -90,
    angle_3: -135,
    angle_4: -180,
    angle_5: -225,
    angle_6: -270,
    angle_7: -315,
    angle_8: -360,
    repeat: -1,
  });
}

function draw() {
  background(255);

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_1);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_2);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_3);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_4);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_5);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_6);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_7);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();

  push();
  angleMode(DEGREES);
  translate(50, 50);
  rotate(angle.angle_8);
  translate(0, 10);
  fill(0);
  rect(0, 0, 1, 20);
  angleMode(RADIANS);
  pop();
}
