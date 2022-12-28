"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor(score1, score2) {
        this.score1 = Score.MAX_INT;
        this.score2 = Score.MAX_INT;
        if (typeof score1 != 'undefined')
            this.score1 = score1;
        if (typeof score2 != 'undefined')
            this.score2 = score2;
    }
    valueOf() {
        return this.score1 + this.score2;
    }
    assign(other) {
        this.score1 = other.score1;
        this.score2 = other.score2;
    }
    isBlank() {
        return this.score1 === Score.MAX_INT;
    }
    decreaseBy(delta) {
        this.score1 += delta;
        this.score2 += delta;
    }
}
exports.default = Score;
Score.MAX_INT = Number.MAX_SAFE_INTEGER;
//# sourceMappingURL=Score.js.map