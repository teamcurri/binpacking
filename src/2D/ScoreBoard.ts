// #       box_1 box_2 box_3 ...
// # bin_1  100   200    0
// # bin_2   0     5     0
// # bin_3   9    100    0
// # ...
import ScoreBoardEntry from './ScoreBoardEntry'
import Box from './Box'
import Bin from './Bin'

export default class ScoreBoard {
  entries: ScoreBoardEntry[] = []
  bins: Bin[]
  boxes: Box[]

  constructor(bins, boxes) {
    this.bins = bins
    this.boxes = boxes

    bins.forEach(bin => {
      this.addBinEntries(bin, boxes)
    })
  }

  addBinEntries(bin, boxes) {
    boxes.forEach(box => {
      let entry = new ScoreBoardEntry(bin, box)
      entry.calculate()
      this.entries.push(entry)
    })
  }

  any() {
    return this.boxes.some(box => box)
  }

  // TODO: Fix this as it doesn't work. Unused for now
  // largestNotFittingBox() {
  //   let unfit = null;
  //   let fittingBoxes = this.entries.filter((entry) => entry.fit).map((entry) => entry.box);
  //
  //   this.entries.forEach((entry) => {
  //     if (!this.fittingBoxes.contains(entry.box)) {
  //       return;
  //     }
  //     if (unfit === null || unfit.box.area < entry.box.area) {
  //       this.unfit = entry;
  //     }
  //   });
  //
  //   return unfit.box ? unfit : false;
  // }

  bestFit() {
    let best: ScoreBoardEntry | null = null

    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i]
      if (!entry.fit()) {
        continue
      }

      if (best === null || (entry.score ?? 0) < (best.score ?? 0)) {
        best = entry
      }
    }
    return best
  }

  removeBox(box) {
    this.entries = this.entries.filter(entry => {
      return entry.box !== box
    })
  }

  addBin(bin) {
    this.addBinEntries(bin, this.currentBoxes())
  }

  recalculateBin(bin) {
    this.entries
      .filter(entry => entry.bin === bin)
      .forEach(entry => entry.calculate())
  }

  currentBoxes() {
    return [...new Set(this.entries.map(entry => entry.box))]
  }
}
