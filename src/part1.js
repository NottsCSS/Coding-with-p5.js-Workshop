// Variables that needs to persist state here.
let x = 320;
let y = 300;

// This functions runs once at the start of the program
function setup() {
  createCanvas(640, 600);
  background(255);
}

// This function loops; As in it will be called continuously throughout the application
function draw() {
  // Clear the screen
  clear();
  background(255);

  // Drawing shapes (Can use fill, noFill, stroke, noStroke)
  ellipse(100, 200, 80, 80);
  rect(300, 250, 60, 60);
  rect(400, 250, 60, 80);

  // Event based drawing (Extra things that would be shown but not learnt.)
  ellipse(x, y, 60, 60);
  if (mouseIsPressed) {
    print(mouseX);
    print(mouseY);
  }
  if (keyIsPressed) {
    print(key);
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 1;
  } else if (keyIsDown(DOWN_ARROW)) {
    y += 1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 1;
  } else if (keyIsDown(LEFT_ARROW)) {
    x -= 1;
  }
}
