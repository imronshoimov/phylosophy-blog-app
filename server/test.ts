// let a: number = 1
// let b: boolean = true
// let c: string = 'Imron'
// let d: any = 1 || false
// let e: number[] = [1, 2, 3, 4]
// let f: any[] = [1, true, 'a', false]

// const ColorRed = 0
// const ColorGreen = 1
// const ColorBlue = 2

// enum Color {
//   Red = 0,
//   Green = 1,
//   Blue = 2,
//   Purple = 3,
// }

// let backgroundColor = Color.Red

// let message

// message = 'abc'

// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')

// // console.log(endsWithC)
// // console.log(alternativeWay)

// interface Point {
//   x: number
//   y: number
// }

// let log = (a: Point) => {
//   // console.log(a.x + a.y)
// }

// console.log({ x: 1, y: 2 })

// // const doLog = (id: number) => console.log(id)

// import { Points } from './test2'

// const point = new Points(1)

// point.X = 10

// // console.log(point.X)

class Todo {
  array: any[]

  constructor() {
    this.array = []
  }

  addItem(value: string) {
    let array = this.array
    let id = array.length ? array[array.length - 1].id + 1 : 1

    interface TypeTodo {
      id: number
      value: string
    }

    let newTodo: TypeTodo = {
      id,
      value,
    }

    array.push(newTodo)
    return 'successfully added!'
  }

  getItem() {
    return this.array
  }

  updateItem(id: number, value: string) {
    let array = this.array

    let found = array.find((el) => el.id === id)
    if (!found) return 'not found'

    interface TypeTodo {
      id: number
      value: string
    }

    let updateTodo: TypeTodo = {
      id,
      value,
    }

    array.splice(found.id - 1, 1, updateTodo)

    return 'updated'
  }

  deleteItem(id: number) {
    let array = this.array
    let found = array.find((el) => el.id === id)

    if (!found) return 'not found'

    array.splice(found.id - 1, 1)

    return 'deleted'
  }
}

const todo = new Todo()

todo.addItem('todo 1')
todo.addItem('todo 2')
todo.addItem('todo 3')

todo.updateItem(2, 'todo ikki')
todo.deleteItem(3)

console.log(todo.getItem())
