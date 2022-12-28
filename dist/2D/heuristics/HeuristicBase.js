"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeuristicBase = void 0;
const Score_1 = __importDefault(require("../Score"));
class HeuristicBase {
    findPositionForNewNode(box, freeSpaces) {
        let bestScore = new Score_1.default();
        let width = box.width;
        let height = box.height;
        freeSpaces.forEach(freeRect => {
            this.tryPlaceRectIn(freeRect, box, width, height, bestScore);
            if (!box.constrainRotation) {
                this.tryPlaceRectIn(freeRect, box, height, width, bestScore);
            }
        });
        return bestScore;
    }
    tryPlaceRectIn(freeSpace, box, rectWidth, rectHeight, bestScore) {
        var _a, _b;
        if (freeSpace.width >= rectWidth && freeSpace.height >= rectHeight) {
            let score = this.calculateScore(freeSpace, rectWidth, rectHeight);
            if (score < bestScore) {
                box.x = (_a = freeSpace.x) !== null && _a !== void 0 ? _a : 0;
                box.y = (_b = freeSpace.y) !== null && _b !== void 0 ? _b : 0;
                box.width = rectWidth;
                box.height = rectHeight;
                box.packed = true;
                bestScore.assign(score);
            }
        }
    }
}
exports.HeuristicBase = HeuristicBase;
//# sourceMappingURL=HeuristicBase.js.map