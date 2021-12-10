export class Points {
  private _x: number

  constructor(x: number) {
    this._x = x
  }

  get X(): number {
    return this._x
  }

  set X(value: number) {
    if (value < 0) {
      throw new Error('x is smaller than 0')
    }

    this._x = value
  }
}
