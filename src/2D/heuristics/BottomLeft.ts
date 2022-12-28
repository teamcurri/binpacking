import { HeuristicBase } from './HeuristicBase'
import Score from '../Score'

export default class BottomLeft extends HeuristicBase {
  calculateScore(freeRect, rectWidth, rectHeight) {
    let topSideY = freeRect.y + rectHeight
    return new Score(topSideY, freeRect.x)
  }
}
