export declare const RotationType_WHD = 0;
export declare const RotationType_HWD = 1;
export declare const RotationType_HDW = 2;
export declare const RotationType_DHW = 3;
export declare const RotationType_DWH = 4;
export declare const RotationType_WDH = 5;
export declare const WidthAxis = 0;
export declare const HeightAxis = 1;
export declare const DepthAxis = 2;
export declare const StartPosition: number[];
export declare const RotationTypeStrings: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
};
export default class Item {
    name: string;
    width: number;
    height: number;
    depth: number;
    weight: number;
    allowedRotation: number[];
    rotationType: number;
    position: number[];
    constructor(name: any, w: any, h: any, d: any, wg: any, allowedRotation: any);
    getWidth(): number;
    getHeight(): number;
    getDepth(): number;
    getWeight(): number;
    getRotationType(): number;
    getAllowedRotation(): number[];
    getRotationTypeString(): any;
    getDimension(): any;
    intersect(i2: any): boolean;
    getVolume(): number;
    toString(): string;
}
export declare const rectIntersect: (i1: any, i2: any, x: any, y: any) => boolean;
//# sourceMappingURL=Item.d.ts.map