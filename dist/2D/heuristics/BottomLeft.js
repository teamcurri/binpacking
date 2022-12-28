"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeuristicBase_1 = require("./HeuristicBase");
const Score_1 = __importDefault(require("../Score"));
class BottomLeft extends HeuristicBase_1.HeuristicBase {
    calculateScore(freeRect, rectWidth, rectHeight) {
        let topSideY = freeRect.y + rectHeight;
        return new Score_1.default(topSideY, freeRect.x);
    }
}
exports.default = BottomLeft;
//# sourceMappingURL=BottomLeft.js.map