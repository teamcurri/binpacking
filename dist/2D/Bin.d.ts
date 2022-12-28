import Box from './Box';
import { HeuristicBase } from './heuristics/HeuristicBase';
import { FreeSpaceBox } from './FreeSpaceBox';
export default class Bin {
    width: number;
    height: number;
    boxes: Box[];
    heuristic: HeuristicBase;
    freeSpaces: FreeSpaceBox[];
    constructor(width: any, height: any, heuristic: any);
    get area(): number;
    get efficiency(): number;
    get label(): string;
    insert(box: any): boolean;
    scoreFor(box: any): import("./Score").default;
    isLargerThan(box: any): boolean;
    splitFreeNode(freeNode: any, usedNode: any): boolean;
    trySplitFreeNodeVertically(freeNode: any, usedNode: any): void;
    tryLeaveFreeSpaceAtTop(freeNode: any, usedNode: any): void;
    tryLeaveFreeSpaceAtBottom(freeNode: any, usedNode: any): void;
    trySplitFreeNodeHorizontally(freeNode: any, usedNode: any): void;
    tryLeaveFreeSpaceOnLeft(freeNode: any, usedNode: any): void;
    tryLeaveFreeSpaceOnRight(freeNode: any, usedNode: any): void;
    pruneFreeList(): void;
    isContainedIn(rectA: any, rectB: any): any;
}
//# sourceMappingURL=Bin.d.ts.map