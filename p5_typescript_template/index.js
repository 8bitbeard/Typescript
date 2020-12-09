var Circle = (function () {
    function Circle(p5, atPosition, size) {
        this._p5 = p5;
        this._pos = atPosition;
        this._size = size;
        this._color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    Circle.prototype.show = function () {
        var p5 = this._p5;
        p5.push();
        p5.translate(this._pos);
        p5.noStroke();
        p5.fill(this._color);
        p5.ellipse(0, 0, this._size);
        p5.pop();
    };
    return Circle;
}());
var sketch = function (p5) {
    var circle = [];
    var amountOfCircles = 15;
    p5.setup = function () {
        p5.createCanvas(600, 400);
        p5.background(0);
        for (var i = 0; i < amountOfCircles; i++) {
            var pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
            circle.push(new Circle(p5, pos, 25));
        }
    };
    p5.draw = function () {
        circle.forEach(function (circle) { return circle.show(); });
    };
};
new p5(sketch);
//# sourceMappingURL=../src/src/index.js.map