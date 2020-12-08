"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = (function () {
    function Circle(p5, atPosition, size) {
        this._p5 = p5;
        this._pos = atPosition;
        this._size = size;
    }
    Circle.prototype.draw = function () {
        var p5 = this._p5;
        p5.push();
        p5.translate(this._pos);
        p5.noStroke();
        p5.fill(255, 0, 0);
        p5.ellipse(0, 0, this._size);
        p5.pop();
    };
    return Circle;
}());
exports.default = Circle;
//# sourceMappingURL=circle.js.map