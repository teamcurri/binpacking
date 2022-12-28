"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeuristicBase_1 = require("./HeuristicBase");
const Score_1 = __importDefault(require("../Score"));
class BestShortSideFit extends HeuristicBase_1.HeuristicBase {
    calculateScore(freeRect, rectWidth, rectHeight) {
        let leftOverHoriz = Math.abs(freeRect.width - rectWidth);
        let leftOverVert = Math.abs(freeRect.height - rectHeight);
        let args = [leftOverHoriz, leftOverVert].sort((a, b) => a - b);
        return new Score_1.default(args[0], args[1]);
    }
}
exports.default = BestShortSideFit;
//# sourceMappingURL=BestShortSideFit.js.map