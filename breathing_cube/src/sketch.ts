const sketch = (p5: p5) => {

  let angle: number = 0;
  let w: number = 24;
  let maxD: number;

  p5.setup = () => {
    p5.createCanvas(400, 400, p5.WEBGL);
    p5.ortho(-300, 300, -300, 300, 0, 800);

    maxD = p5.dist(0, 0, 200, 200);
  }

  p5.draw = () => {
    p5.background(255);
    p5.translate(0, 0, -50);
    p5.rotateX(-p5.PI / 6);
    p5.rotateY(-p5.PI / 4);
    p5.rectMode(p5.CENTER);

    for (let z = 0; z < p5.height; z += w) {
      for (let x = 0; x < p5.width; x += w) {
        let d = p5.dist(x, z, p5.width / 2, p5.height / 2);
        let offset = p5.map(d, 0, maxD, -4, 4);
        let a = angle + offset;
        let h = p5.map(Math.sin(a), -1, 1, 100, 300);
        p5.push();
        p5.translate(x - p5.width / 2, 0, z - p5.height / 2);
        p5.normalMaterial();
        p5.box(w - 2, h, w - 2);
        p5.pop();
      }
    }
    angle += 0.1;
  }
}

new p5(sketch);