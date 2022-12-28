import { HeuristicBase } from './HeuristicBase'
import Score from '../Score'
import { FreeSpaceBox } from '../FreeSpaceBox'

export default class BottomLeft extends HeuristicBase {
  calculateScore(
    freeRect: FreeSpaceBox,
    rectWidth: number,
    rectHeight: number
  ) {
    let topSideY = freeRect.y + rectHeight
    return new Score(topSideY, freeRect.x)
  }
}
