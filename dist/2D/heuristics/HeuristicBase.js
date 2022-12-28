"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeuristicBase = void 0;
const Score_1 = __importDefault(require("../Score"));
class HeuristicBase {
    findPositionForNewNode(box, freeSpaces) {
        var _a, _b;
        let bestScore = new Score_1.default();
        let width = (_a = box.width) !== null && _a !== void 0 ? _a : 0;
        let height = (_b = box.height) !== null && _b !== void 0 ? _b : 0;
        freeSpaces.forEach(freeRect => {
            this.tryPlaceRectIn(freeRect, box, width, height, bestScore);
            if (!box.constrainRotation) {
                this.tryPlaceRectIn(freeRect, box, height, width, bestScore);
            }
        });
        return bestScore;
    }
    tryPlaceRectIn(freeSpace, box, rectWidth, rectHeight, bestScore) {
        var _a, _b, _c, _d;
        let freeSpaceWidth = (_a = freeSpace.width) !== null && _a !== void 0 ? _a : 0;
        let freeSpaceHeight = (_b = freeSpace.height) !== null && _b !== void 0 ? _b : 0;
        if (freeSpaceWidth >= rectWidth && freeSpaceHeight >= rectHeight) {
            let score = this.calculateScore(freeSpace, rectWidth, rectHeight);
            if (score < bestScore) {
                box.x = (_c = freeSpace.x) !== null && _c !== void 0 ? _c : 0;
                box.y = (_d = freeSpace.y) !== null && _d !== void 0 ? _d : 0;
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