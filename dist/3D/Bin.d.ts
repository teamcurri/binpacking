import Item from "./Item";
export default class Bin {
    name: string;
    width: number;
    height: number;
    depth: number;
    maxWeight: number;
    items: Item[];
    constructor(name: any, w: any, h: any, d: any, mw: any);
    getName(): string;
    getWidth(): number;
    getHeight(): number;
    getDepth(): number;
    getMaxWeight(): number;
    getItems(): Item[];
    getVolume(): number;
    getPackedWeight(): number;
    weighItem(item: any): boolean;
    scoreRotation(item: any, rotationType: any): number;
    getBestRotationOrder(item: any): number[];
    putItem(item: any, p: any): boolean;
    toString(): string;
}
//# sourceMappingURL=Bin.d.ts.map