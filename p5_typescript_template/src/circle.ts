class Circle {
  _p5: p5;
  _pos: p5.Vector;
  _size: number;
  _color: string;

  constructor(p5: p5, atPosition: p5.Vector, size: number) {
    this._p5 = p5;
    this._pos = atPosition;
    this._size = size;
    this._color = `#${Math.floor(Math.random()*16777215).toString(16)}`
  }

  show() {
    const p5 = this._p5;

    p5.push();

    p5.translate(this._pos);
    p5.noStroke();
    p5.fill(this._color);
    p5.ellipse(0, 0, this._size);

    p5.pop();
  }
}
