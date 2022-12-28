import Score from './Score'
import ScoreBoard from './ScoreBoard'
import Box from './Box'
import Bin from './Bin'
import ScoreBoardEntry from './ScoreBoardEntry'

interface PackerOptions {
  limit?: number
}

export default class Packer {
  bins: Bin[] = []
  unpackedBoxes: Box[] = []

  constructor(bins) {
    this.bins = bins
  }

  pack(boxes: Box[], options: PackerOptions = {}) {
    let packedBoxes: Box[] = []
    let entry: ScoreBoardEntry | null

    boxes = boxes.filter(box => !box.packed)
    if (boxes.length === 0) return packedBoxes

    let limit = options.limit || Score.MAX_INT
    let board = new ScoreBoard(this.bins, boxes)

    while ((entry = board.bestFit())) {
      entry.bin?.insert(entry.box)
      board.removeBox(entry.box)
      board.recalculateBin(entry.bin)

      if (entry.box) {
        packedBoxes.push(entry.box)
      }

      if (packedBoxes.length >= limit) {
        break
      }
    }

    this.unpackedBoxes = boxes.filter(box => {
      return !box.packed
    })

    return packedBoxes
  }
}
