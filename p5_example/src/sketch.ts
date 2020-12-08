import P5 from "p5";
import 'p5/lib/addons/p5.sound'

import Circle from "./circle";

const sketch = (p5: P5) => {

  let myCircles: Circle[] = [];

  p5.setup = () => {
    p5.createCanvas(600, 400);
    p5.background(0);

    for (let i = 0; i < 10; i++) {
      let pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      myCircles.push(new Circle(p5, pos, 15))
    }
  }

  p5.draw = () => {
    myCircles.forEach(circle => circle.draw());
  }
}

new P5(sketch);
