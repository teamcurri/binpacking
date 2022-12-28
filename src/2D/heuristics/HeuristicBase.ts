import Score from '../Score'
import Box from '../Box'
import { FreeSpaceBox } from '../FreeSpaceBox'

export abstract class HeuristicBase {
  findPositionForNewNode(box: Box, freeSpaces: FreeSpaceBox[]) {
    let bestScore = new Score()
    let width = box.width ?? 0
    let height = box.height ?? 0

    freeSpaces.forEach(freeRect => {
      this.tryPlaceRectIn(freeRect, box, width, height, bestScore)

      if (!box.constrainRotation) {
        this.tryPlaceRectIn(freeRect, box, height, width, bestScore)
      }
    })

    return bestScore
  }

  tryPlaceRectIn(
    freeSpace: FreeSpaceBox,
    box: Box,
    rectWidth: number,
    rectHeight: number,
    bestScore: Score
  ) {
    let freeSpaceWidth = freeSpace.width ?? 0
    let freeSpaceHeight = freeSpace.height ?? 0

    if (freeSpaceWidth >= rectWidth && freeSpaceHeight >= rectHeight) {
      let score = this.calculateScore(freeSpace, rectWidth, rectHeight)
      if (score < bestScore) {
        box.x = freeSpace.x ?? 0
        box.y = freeSpace.y ?? 0
        box.width = rectWidth
        box.height = rectHeight
        box.packed = true
        bestScore.assign(score)
      }
    }
  }

  abstract calculateScore(
    freeRect: FreeSpaceBox,
    rectWidth: number,
    rectHeight: number
  )
}
