"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Score_1 = __importDefault(require("./Score"));
const ScoreBoard_1 = __importDefault(require("./ScoreBoard"));
class Packer {
    constructor(bins) {
        this.bins = [];
        this.unpackedBoxes = [];
        this.bins = bins;
    }
    pack(boxes, options = {}) {
        var _a;
        let packedBoxes = [];
        let entry;
        boxes = boxes.filter(box => !box.packed);
        if (boxes.length === 0)
            return packedBoxes;
        let limit = options.limit || Score_1.default.MAX_INT;
        let board = new ScoreBoard_1.default(this.bins, boxes);
        while ((entry = board.bestFit())) {
            (_a = entry.bin) === null || _a === void 0 ? void 0 : _a.insert(entry.box);
            board.removeBox(entry.box);
            board.recalculateBin(entry.bin);
            if (entry.box) {
                packedBoxes.push(entry.box);
            }
            if (packedBoxes.length >= limit) {
                break;
            }
        }
        this.unpackedBoxes = boxes.filter(box => {
            return !box.packed;
        });
        return packedBoxes;
    }
}
exports.default = Packer;
//# sourceMappingURL=Packer.js.map