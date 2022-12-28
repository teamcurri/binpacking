import { HeuristicBase } from './HeuristicBase';
import Score from '../Score';
import { FreeSpaceBox } from '../FreeSpaceBox';
export default class BestLongSideFit extends HeuristicBase {
    calculateScore(freeRect: FreeSpaceBox, rectWidth: number, rectHeight: number): Score;
}
//# sourceMappingURL=BestLongSideFit.d.ts.map