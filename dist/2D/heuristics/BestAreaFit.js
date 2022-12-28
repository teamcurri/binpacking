"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeuristicBase_1 = require("./HeuristicBase");
const Score_1 = __importDefault(require("../Score"));
class BestAreaFit extends HeuristicBase_1.HeuristicBase {
    calculateScore(freeRect, rectWidth, rectHeight) {
        let areaFit = freeRect.width * freeRect.height - rectWidth * rectHeight;
        let leftOverHoriz = Math.abs(freeRect.width - rectWidth);
        let leftOverVert = Math.abs(freeRect.height - rectHeight);
        let shortSideFit = Math.min(leftOverHoriz, leftOverVert);
        return new Score_1.default(areaFit, shortSideFit);
    }
}
exports.default = BestAreaFit;
//# sourceMappingURL=BestAreaFit.js.map