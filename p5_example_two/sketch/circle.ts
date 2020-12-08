class Circle {
  _p5: p5;
  _pos: p5.Vector;
  _size: number;

  constructor(p5: p5, atPosition: p5.Vector, size: number) {
    this._p5 = p5;
    this._pos = atPosition;
    this._size = size;
  }

  show() {
    const p5 = this._p5;

    p5.push();

    p5.translate(this._pos);
    p5.noStroke();
    p5.fill(100, 200, 100);
    p5.ellipse(0, 0, this._size);

    p5.pop();
  }
}
