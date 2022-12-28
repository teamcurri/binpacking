import { HeuristicBase } from './HeuristicBase'
import Score from '../Score'
import { FreeSpaceBox } from '../FreeSpaceBox'

export default class BestLongSideFit extends HeuristicBase {
  calculateScore(
    freeRect: FreeSpaceBox,
    rectWidth: number,
    rectHeight: number
  ) {
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth)
    let leftOverVert = Math.abs(freeRect.height - rectHeight)
    let args = [leftOverHoriz, leftOverVert].sort((a, b) => a - b).reverse()
    return new Score(args[0], args[1])
  }
}
