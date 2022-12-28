export default class Score {
    static MAX_INT: number;
    score1: number;
    score2: number;
    constructor(score1?: number, score2?: number);
    valueOf(): number;
    assign(other: any): void;
    isBlank(): boolean;
    decreaseBy(delta: any): void;
}
//# sourceMappingURL=Score.d.ts.map