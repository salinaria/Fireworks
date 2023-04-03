const fireworks = [];
let gravity;
let start;

function setup() {
  song = loadSound('./sound.mp3')
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  var maxLong = -1 * windowHeight / 36
  colorMode(RGB);
  background(0, 0, 0, 20);

  if (random(1) < 0.02) {
    fireworks.push(
      new Firework(random(windowWidth), windowHeight, random(maxLong, -5))
    );
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
function mousePressed() {
  start = millis();
}
function mouseReleased() {
  let end = millis() - start;
  fireworks.push(new Firework(mouseX, mouseY, -5 - end / 100));
}
function keyPressed() {
  windwit = windowWidth / 100;
  var maxLong = -1 * windowHeight / 40
  
  if (key == 1) {
    for (let i = 100; i >= 0; i--) {
      fireworks.push(new Firework(windwit * i, windowHeight, random(maxLong, -5)));
    }
  }
  if (key == 2) {
    for (let i = 100; i >= 0; i--) {
      fireworks.push(new Firework(windwit * i, windowHeight, random(maxLong, -5)));
      if (i % 3 == 0) {
        for (let i = fireworks.length - 1; i >= 0; i--) {
          fireworks[i].update();
          fireworks[i].show();
        }
      }
    }
  }
  if (key == 3) {
    for (let i = 0; i <= 100; i++) {
      fireworks.push(new Firework(windwit * i, windowHeight, random(maxLong, -5)));
      if (i % 3 == 0) {
        for (let i = fireworks.length - 1; i >= 0; i--) {
          fireworks[i].update();
          fireworks[i].show();
        }
      }
    }
  }
}
