"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScoreBoardEntry {
    constructor(bin, box) {
        this.bin = null;
        this.box = null;
        this.score = null;
        this.bin = bin;
        this.box = box;
    }
    calculate() {
        var _a;
        this.score = (_a = this.bin) === null || _a === void 0 ? void 0 : _a.scoreFor(this.box);
        return this.score;
    }
    fit() {
        var _a;
        return !((_a = this.score) === null || _a === void 0 ? void 0 : _a.isBlank());
    }
}
exports.default = ScoreBoardEntry;
//# sourceMappingURL=ScoreBoardEntry.js.map