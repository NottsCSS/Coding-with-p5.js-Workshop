function setup() {
    createCanvas(640, 600);
    background(255);
  }
  
  function draw() {
    ellipse(100, 200, 80, 80);
    rect(300, 250, 60, 60);
    rect(400, 250, 60, 80);
    print(mouseX);
    print(mouseY);
  }
  