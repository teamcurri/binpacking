"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(width, height, constrainRotation = false) {
        this.width = 0;
        this.height = 0;
        this.constrainRotation = false;
        this.x = 0;
        this.y = 0;
        this.packed = false;
        this.width = width;
        this.height = height;
        this.constrainRotation = constrainRotation;
    }
    rotate() {
        this.width = this['height'];
        this.height = this['width'];
    }
    get label() {
        return `${this.width}x${this.height} at [${this.x},${this.y}]`;
    }
    get area() {
        return this.width * this.height;
    }
}
exports.default = Box;
//# sourceMappingURL=Box.js.map