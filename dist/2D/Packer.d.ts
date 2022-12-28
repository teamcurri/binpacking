import Box from './Box';
import Bin from './Bin';
interface PackerOptions {
    limit?: number;
}
export default class Packer {
    bins: Bin[];
    unpackedBoxes: Box[];
    constructor(bins: any);
    pack(boxes: Box[], options?: PackerOptions): Box[];
}
export {};
//# sourceMappingURL=Packer.d.ts.map