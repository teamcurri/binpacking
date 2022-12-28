import { HeuristicBase } from './HeuristicBase'
import Score from '../Score'

export default class BestLongSideFit extends HeuristicBase {
  calculateScore(freeRect, rectWidth, rectHeight) {
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth)
    let leftOverVert = Math.abs(freeRect.height - rectHeight)
    let args = [leftOverHoriz, leftOverVert].sort((a, b) => a - b).reverse()
    return new Score(args[0], args[1])
  }
}
