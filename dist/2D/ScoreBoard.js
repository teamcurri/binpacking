"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScoreBoardEntry_1 = __importDefault(require("./ScoreBoardEntry"));
class ScoreBoard {
    constructor(bins, boxes) {
        this.entries = [];
        this.bins = bins;
        this.boxes = boxes;
        bins.forEach(bin => {
            this.addBinEntries(bin, boxes);
        });
    }
    addBinEntries(bin, boxes) {
        boxes.forEach(box => {
            let entry = new ScoreBoardEntry_1.default(bin, box);
            entry.calculate();
            this.entries.push(entry);
        });
    }
    any() {
        return this.boxes.some(box => box);
    }
    bestFit() {
        var _a, _b;
        let best = null;
        for (let i = 0; i < this.entries.length; i++) {
            let entry = this.entries[i];
            if (!entry.fit()) {
                continue;
            }
            if (best === null || ((_a = entry.score) !== null && _a !== void 0 ? _a : 0) < ((_b = best.score) !== null && _b !== void 0 ? _b : 0)) {
                best = entry;
            }
        }
        return best;
    }
    removeBox(box) {
        this.entries = this.entries.filter(entry => {
            return entry.box !== box;
        });
    }
    addBin(bin) {
        this.addBinEntries(bin, this.currentBoxes());
    }
    recalculateBin(bin) {
        this.entries
            .filter(entry => entry.bin === bin)
            .forEach(entry => entry.calculate());
    }
    currentBoxes() {
        return [...new Set(this.entries.map(entry => entry.box))];
    }
}
exports.default = ScoreBoard;
//# sourceMappingURL=ScoreBoard.js.map