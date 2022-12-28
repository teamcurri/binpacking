import { HeuristicBase } from './HeuristicBase';
import Score from '../Score';
import { FreeSpaceBox } from '../FreeSpaceBox';
export default class BestShortSideFit extends HeuristicBase {
    calculateScore(freeRect: FreeSpaceBox, rectWidth: number, rectHeight: number): Score;
}
//# sourceMappingURL=BestShortSideFit.d.ts.map