// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

// Edited by SubNerd
// https://github.com/SubNerd

const mult = 1;

function Star() {
  this.x = random(-width * mult, width * mult);
  this.y = random(-height * mult, height * mult);
  this.z = random(10000);
  this.pz = this.z;
  this.step = random(-10, 10);
  this.color = [random(255), random(64), random(255)]

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 100) {
      this.z = random(10000);
      this.x = random(-width * mult, width * mult);
      this.y = random(-height * mult, height * mult);
      this.pz = this.z;
      this.color = [random(255), random(64), random(255)]
    }
  }

  this.show = function() {
    fill(this.color[0] * 10000 / this.z, this.color[1] * 10000 / this.z, this.color[2] * 10000 / this.z)
    stroke(this.color[0] * 10000 / this.z, this.color[1] * 100000 / this.z, this.color[2] * 100000 / this.z)

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = (256 / map((this.z * 100), 0, width, 16, 0) * 100 + abs(sin((this.step + frameCount) / 4) * 8)) / 4 + this.z / 6900;
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(this.color[0] * 10000 / this.z, this.color[1] * 100000 / this.z, this.color[2] * 100000 / this.z)
    line(px, py, sx, sy);
  }
}
