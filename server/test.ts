let a: number = 1
let b: boolean = true
let c: string = 'Imron'
let d: any = 1 || false
let e: number[] = [1, 2, 3, 4]
let f: any[] = [1, true, 'a', false]

const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}

let backgroundColor = Color.Red

let message

message = 'abc'

let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')

console.log(endsWithC)
console.log(alternativeWay)

interface Point {
  x: number
  y: number
}

let log = (a: Point) => {
  console.log(a.x + a.y)
}

console.log({ x: 1, y: 2 })

const doLog = (id: number) => console.log(id)

import { Points } from './test2'

const point = new Points(1)

point.X = 10

console.log(point.X)
