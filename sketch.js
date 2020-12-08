"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var p5_1 = __importDefault(require("p5"));
require("p5/lib/addons/p5.sound");
var circle_1 = __importDefault(require("./circle"));
var sketch = function (p5) {
    var myCircles = [];
    p5.setup = function () {
        p5.createCanvas(600, 400);
        p5.background(0);
        for (var i = 0; i < 10; i++) {
            var pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
            myCircles.push(new circle_1.default(p5, pos, 15));
        }
    };
    p5.draw = function () {
        myCircles.forEach(function (circle) { return circle.draw(); });
    };
};
new p5_1.default(sketch);
//# sourceMappingURL=sketch.js.map