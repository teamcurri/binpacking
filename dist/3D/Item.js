"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectIntersect = exports.RotationTypeStrings = exports.StartPosition = exports.DepthAxis = exports.HeightAxis = exports.WidthAxis = exports.RotationType_WDH = exports.RotationType_DWH = exports.RotationType_DHW = exports.RotationType_HDW = exports.RotationType_HWD = exports.RotationType_WHD = void 0;
const util_1 = require("./util");
exports.RotationType_WHD = 0;
exports.RotationType_HWD = 1;
exports.RotationType_HDW = 2;
exports.RotationType_DHW = 3;
exports.RotationType_DWH = 4;
exports.RotationType_WDH = 5;
exports.WidthAxis = 0;
exports.HeightAxis = 1;
exports.DepthAxis = 2;
exports.StartPosition = [0, 0, 0];
exports.RotationTypeStrings = {
    [exports.RotationType_WHD]: 'RotationType_WHD (w,h,d)',
    [exports.RotationType_HWD]: 'RotationType_HWD (h,w,d)',
    [exports.RotationType_HDW]: 'RotationType_HDW (h,d,w)',
    [exports.RotationType_DHW]: 'RotationType_DHW (d,h,w)',
    [exports.RotationType_DWH]: 'RotationType_DWH (d,w,h)',
    [exports.RotationType_WDH]: 'RotationType_WDH (w,d,h)',
};
class Item {
    constructor(name, w, h, d, wg, allowedRotation) {
        this.name = '';
        this.width = 0;
        this.height = 0;
        this.depth = 0;
        this.weight = 0;
        this.allowedRotation = [0, 1, 2, 3, 4, 5];
        this.rotationType = exports.RotationType_WHD;
        this.position = [];
        this.name = name;
        this.width = (0, util_1.factoredInteger)(w);
        this.height = (0, util_1.factoredInteger)(h);
        this.depth = (0, util_1.factoredInteger)(d);
        this.weight = (0, util_1.factoredInteger)(wg);
        this.allowedRotation = allowedRotation
            ? allowedRotation
            : this.allowedRotation;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getDepth() {
        return this.depth;
    }
    getWeight() {
        return this.weight;
    }
    getRotationType() {
        return this.rotationType;
    }
    getAllowedRotation() {
        return this.allowedRotation;
    }
    getRotationTypeString() {
        return exports.RotationTypeStrings[this.getRotationType()];
    }
    getDimension() {
        let d;
        switch (this.rotationType) {
            case exports.RotationType_WHD:
                d = [this.getWidth(), this.getHeight(), this.getDepth()];
                break;
            case exports.RotationType_HWD:
                d = [this.getHeight(), this.getWidth(), this.getDepth()];
                break;
            case exports.RotationType_HDW:
                d = [this.getHeight(), this.getDepth(), this.getWidth()];
                break;
            case exports.RotationType_DHW:
                d = [this.getDepth(), this.getHeight(), this.getWidth()];
                break;
            case exports.RotationType_DWH:
                d = [this.getDepth(), this.getWidth(), this.getHeight()];
                break;
            case exports.RotationType_WDH:
                d = [this.getWidth(), this.getDepth(), this.getHeight()];
                break;
        }
        return d;
    }
    intersect(i2) {
        return ((0, exports.rectIntersect)(this, i2, exports.WidthAxis, exports.HeightAxis) &&
            (0, exports.rectIntersect)(this, i2, exports.HeightAxis, exports.DepthAxis) &&
            (0, exports.rectIntersect)(this, i2, exports.WidthAxis, exports.DepthAxis));
    }
    getVolume() {
        return this.getWidth() * this.getHeight() * this.getDepth();
    }
    toString() {
        return `Item:${this.name} (${this.getRotationTypeString()} = ${this.getDimension().join('x')}, Wg. = ${this.weight})`;
    }
}
exports.default = Item;
const rectIntersect = (i1, i2, x, y) => {
    let d1, d2, cx1, cy1, cx2, cy2, ix, iy;
    d1 = i1.getDimension();
    d2 = i2.getDimension();
    cx1 = i1.position[x] + d1[x] / 2;
    cy1 = i1.position[y] + d1[y] / 2;
    cx2 = i2.position[x] + d2[x] / 2;
    cy2 = i2.position[y] + d2[y] / 2;
    ix = Math.max(cx1, cx2) - Math.min(cx1, cx2);
    iy = Math.max(cy1, cy2) - Math.min(cy1, cy2);
    return ix < (d1[x] + d2[x]) / 2 && iy < (d1[y] + d2[y]) / 2;
};
exports.rectIntersect = rectIntersect;
//# sourceMappingURL=Item.js.map