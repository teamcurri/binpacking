export default class Score {
  static MAX_INT: number = Number.MAX_SAFE_INTEGER
  score1: number = Score.MAX_INT
  score2: number = Score.MAX_INT

  constructor(score1?: number, score2?: number) {
    if (typeof score1 != 'undefined') this.score1 = score1
    if (typeof score2 != 'undefined') this.score2 = score2
  }

  /**
   * Lower is better
   */
  valueOf() {
    return this.score1 + this.score2
  }

  assign(other: Score) {
    this.score1 = other.score1
    this.score2 = other.score2
  }

  isBlank() {
    return this.score1 === Score.MAX_INT
  }

  decreaseBy(delta: number) {
    this.score1 += delta
    this.score2 += delta
  }
}
