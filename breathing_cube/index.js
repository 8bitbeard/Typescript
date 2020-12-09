var sketch = function (p5) {
    var angle = 0;
    var w = 24;
    var maxD;
    p5.setup = function () {
        p5.createCanvas(400, 400, p5.WEBGL);
        p5.ortho(-300, 300, -300, 300, 0, 800);
        maxD = p5.dist(0, 0, 200, 200);
    };
    p5.draw = function () {
        p5.background(255);
        p5.translate(0, 0, -50);
        p5.rotateX(-p5.PI / 6);
        p5.rotateY(-p5.PI / 4);
        p5.rectMode(p5.CENTER);
        for (var z = 0; z < p5.height; z += w) {
            for (var x = 0; x < p5.width; x += w) {
                var d = p5.dist(x, z, p5.width / 2, p5.height / 2);
                var offset = p5.map(d, 0, maxD, -4, 4);
                var a = angle + offset;
                var h = p5.map(Math.sin(a), -1, 1, 100, 300);
                p5.push();
                p5.translate(x - p5.width / 2, 0, z - p5.height / 2);
                p5.normalMaterial();
                p5.box(w - 2, h, w - 2);
                p5.pop();
            }
        }
        angle += 0.1;
    };
};
new p5(sketch);
//# sourceMappingURL=../src/src/index.js.map