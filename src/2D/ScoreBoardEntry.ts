import Bin from './Bin'
import Box from './Box'
import Score from './Score'

export default class ScoreBoardEntry {
  bin?: Bin | null = null
  box?: Box | null = null
  score?: Score | null = null

  constructor(bin?: Bin, box?: Box) {
    this.bin = bin
    this.box = box
  }

  calculate() {
    this.score = this.bin?.scoreFor(this.box)

    return this.score
  }

  fit() {
    return !this.score?.isBlank()
  }
}
