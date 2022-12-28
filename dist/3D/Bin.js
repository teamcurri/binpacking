'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const util_1 = require('./util')

class Bin {
  constructor(name, w, h, d, mw) {
    this.name = ''
    this.width = 0
    this.height = 0
    this.depth = 0
    this.maxWeight = 0
    this.items = []
    this.name = name
    this.width = (0, util_1.factoredInteger)(w)
    this.height = (0, util_1.factoredInteger)(h)
    this.depth = (0, util_1.factoredInteger)(d)
    this.maxWeight = (0, util_1.factoredInteger)(mw)
  }

  getName() {
    return this.name
  }

  getWidth() {
    return this.width
  }

  getHeight() {
    return this.height
  }

  getDepth() {
    return this.depth
  }

  getMaxWeight() {
    return this.maxWeight
  }

  getItems() {
    return this.items
  }

  getVolume() {
    return this.getWidth() * this.getHeight() * this.getDepth()
  }

  getPackedWeight() {
    return this.items.reduce((weight, item) => weight + item.getWeight(), 0)
  }

  weighItem(item) {
    const maxWeight = this.getMaxWeight()
    return !maxWeight || item.getWeight() + this.getPackedWeight() <= maxWeight
  }

  scoreRotation(item, rotationType) {
    item.rotationType = rotationType
    let d = item.getDimension()
    if (
      this.getWidth() < d[0] ||
      this.getHeight() < d[1] ||
      this.getDepth() < d[2]
    ) {
      return 0
    }
    const widthScore = Math.pow(d[0] / this.getWidth(), 2)
    const heightScore = Math.pow(d[1] / this.getHeight(), 2)
    const depthScore = Math.pow(d[2] / this.getDepth(), 2)
    return widthScore + heightScore + depthScore
  }

  getBestRotationOrder(item) {
    const rotationScores = {}
    for (let i = 0; i < item.allowedRotation.length; i++) {
      const r = item.allowedRotation[i]
      rotationScores[r] = this.scoreRotation(item, r)
    }
    const sortedRotations = Object.keys(rotationScores)
      .sort((a, b) => {
        return rotationScores[b] - rotationScores[a]
      })
      .map(Number)
    return sortedRotations
  }

  putItem(item, p) {
    const box = this
    let fit = false
    const rotations = this.getBestRotationOrder(item)
    item.position = p
    for (let i = 0; i < rotations.length; i++) {
      item.rotationType = rotations[i]
      let d = item.getDimension()
      if (
        box.getWidth() < p[0] + d[0] ||
        box.getHeight() < p[1] + d[1] ||
        box.getDepth() < p[2] + d[2]
      ) {
        fit = false
      } else {
        fit = true
        for (let j = 0; j < box.items.length; j++) {
          let _j = box.items[j]
          if (_j.intersect(item)) {
            fit = false
            break
          }
        }
        if (fit) {
          box.items.push(item)
        }
      }

      // console.log('try to putItem', fit, 'item', item.toString(), 'box', box.toString());

      if (fit) {
        break
      }
    }
    return fit
  }

  toString() {
    return `Bin:${
      this.name
    } (WxHxD = ${this.getWidth()}x${this.getHeight()}x${this.getDepth()}, MaxWg. = ${this.getMaxWeight()})`
  }
}

exports.default = Bin
//# sourceMappingURL=Bin.js.map
