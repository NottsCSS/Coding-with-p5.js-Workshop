let colorSelect = 1;

function setup() {
  createCanvas(640, 600);
  background(255);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    if (colorSelect == 1) {
      fill(mouseX / 2, mouseY / 2, 200);
    } else if (colorSelect == 2) {
      fill(200, mouseX / 2, mouseY / 2);
    } else {
      fill(mouseY / 2, 200, mouseX / 2);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
}

function keyPressed() {
  if (key == "c" || key == "C") {
    background(255);
  } else if (key == "s" || key == "S") {
    print(colorSelect);
    if (colorSelect == 1) {
      colorSelect = 2;
    } else if (colorSelect == 2) {
      colorSelect = 3;
    } else {
      colorSelect = 1;
    }
  }
}