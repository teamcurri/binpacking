import { HeuristicBase } from './HeuristicBase'
import Score from '../Score'

export default class BestAreaFit extends HeuristicBase {
  calculateScore(freeRect, rectWidth, rectHeight) {
    let areaFit = freeRect.width * freeRect.height - rectWidth * rectHeight
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth)
    let leftOverVert = Math.abs(freeRect.height - rectHeight)
    let shortSideFit = Math.min(leftOverHoriz, leftOverVert)
    return new Score(areaFit, shortSideFit)
  }
}
