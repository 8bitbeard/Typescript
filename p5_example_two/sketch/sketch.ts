var sketch = (p5: p5) => {

  let circle: Circle[] = [];
  let amountOfCircles: number = 15;

  p5.setup = () => {
    p5.createCanvas(600, 400);
    p5.background(0);

    for (let i = 0; i < amountOfCircles; i++) {
      let pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      circle.push(new Circle(p5, pos, 25));
    }
  }

  p5.draw = () => {
    circle.forEach(circle => circle.show());
  }
}

new p5(sketch);
