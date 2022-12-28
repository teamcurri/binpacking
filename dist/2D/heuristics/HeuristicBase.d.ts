import Score from '../Score';
import Box from '../Box';
import { FreeSpaceBox } from '../FreeSpaceBox';
export declare abstract class HeuristicBase {
    findPositionForNewNode(box: Box, freeSpaces: FreeSpaceBox[]): Score;
    tryPlaceRectIn(freeSpace: FreeSpaceBox, box: Box, rectWidth: number, rectHeight: number, bestScore: Score): void;
    abstract calculateScore(freeRect: FreeSpaceBox, rectWidth: number, rectHeight: number): any;
}
//# sourceMappingURL=HeuristicBase.d.ts.map