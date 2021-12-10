class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getSum() {
    return this.x || this.y ? this.x + this.y : 0;
  }

  getMultiple() {
    return this.x || this.y ? this.x * this.y : 0;
  }
}

const point = new Point(1, 4);

console.log(point.getSum());
console.log(point.getMultiple());
