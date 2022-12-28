export default class Box {
    width: number;
    height: number;
    constrainRotation: boolean;
    x: number;
    y: number;
    packed: boolean;
    constructor(width: number, height: number, constrainRotation?: boolean);
    rotate(): void;
    get label(): string;
    get area(): number;
}
//# sourceMappingURL=Box.d.ts.map