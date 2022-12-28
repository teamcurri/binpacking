import Bin from './Bin';
import Box from './Box';
import Score from './Score';
export default class ScoreBoardEntry {
    bin?: Bin | null;
    box?: Box | null;
    score?: Score | null;
    constructor(bin: any, box: any);
    calculate(): Score | undefined;
    fit(): boolean;
}
//# sourceMappingURL=ScoreBoardEntry.d.ts.map