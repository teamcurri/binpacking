export default class Box {
  width: number = 0
  height: number = 0
  constrainRotation: boolean = false
  x: number = 0
  y: number = 0
  packed: boolean = false

  constructor(
    width: number,
    height: number,
    constrainRotation: boolean = false
  ) {
    this.width = width
    this.height = height

    // Avoid the packer to try the rotated dimensions
    this.constrainRotation = constrainRotation
  }

  rotate() {
    this.width = this['height']
    this.height = this['width']
  }

  get label() {
    return `${this.width}x${this.height} at [${this.x},${this.y}]`
  }

  get area() {
    return this.width * this.height
  }
}
