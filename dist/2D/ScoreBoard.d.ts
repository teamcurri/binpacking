import ScoreBoardEntry from './ScoreBoardEntry';
import Box from './Box';
import Bin from './Bin';
export default class ScoreBoard {
    entries: ScoreBoardEntry[];
    bins: Bin[];
    boxes: Box[];
    constructor(bins: any, boxes: any);
    addBinEntries(bin: any, boxes: any): void;
    any(): boolean;
    bestFit(): ScoreBoardEntry | null;
    removeBox(box: any): void;
    addBin(bin: any): void;
    recalculateBin(bin: any): void;
    currentBoxes(): (Box | null | undefined)[];
}
//# sourceMappingURL=ScoreBoard.d.ts.map