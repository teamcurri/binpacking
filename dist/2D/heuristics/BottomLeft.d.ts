import { HeuristicBase } from './HeuristicBase';
import Score from '../Score';
import { FreeSpaceBox } from '../FreeSpaceBox';
export default class BottomLeft extends HeuristicBase {
    calculateScore(freeRect: FreeSpaceBox, rectWidth: number, rectHeight: number): Score;
}
//# sourceMappingURL=BottomLeft.d.ts.map