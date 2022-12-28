import { HeuristicBase } from './HeuristicBase';
import Score from '../Score';
import { FreeSpaceBox } from "../FreeSpaceBox";
export default class BestAreaFit extends HeuristicBase {
    calculateScore(freeRect: FreeSpaceBox, rectWidth: number, rectHeight: number): Score;
}
//# sourceMappingURL=BestAreaFit.d.ts.map