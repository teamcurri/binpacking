import Item from './Item';
import Bin from './Bin';
export default class Packer {
    bins: Bin[];
    items: Item[];
    unfitItems: Item[];
    addBin(bin: any): void;
    addItem(item: any): void;
    findFittedBin(i: any): Bin | null;
    getBiggerBinThan(b: any): Bin | null;
    unfitItem(): void;
    packToBin(b: any, items: any): any;
    pack(): null;
}
//# sourceMappingURL=Packer.d.ts.map