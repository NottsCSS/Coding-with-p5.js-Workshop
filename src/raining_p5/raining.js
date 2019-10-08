let raindropArr = new Array(500);

class Rain {
  constructor() {
    this.x = random(width);
    this.y = random(-1000, -100);
    this.length = random(10, 30);
  }

  fall() {
    if (this.y > height) {
      this.x = random(width);
      this.y = random(-1000, -100);
      this.length = random(10, 30);
    }
    const previousY = this.y;
    this.y += this.length;
    stroke(127, 191, 255, 200);
    line(this.x, previousY, this.x, this.y);
  }
}

function setup() {
  createCanvas(640, 600);
  for (let i = 0; i < raindropArr.length; i++) {
    raindropArr[i] = new Rain();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < raindropArr.length; i++) {
    raindropArr[i].fall();
  }
}
