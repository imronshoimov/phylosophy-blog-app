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
var Todo = /** @class */ (function () {
    function Todo() {
        this.array = [];
    }
    Todo.prototype.addItem = function (value) {
        var array = this.array;
        var id = array.length ? array[array.length - 1].id + 1 : 1;
        var newTodo = {
            id: id,
            value: value
        };
        array.push(newTodo);
        return 'successfully added!';
    };
    Todo.prototype.getItem = function () {
        return this.array;
    };
    Todo.prototype.updateItem = function (id, value) {
        var array = this.array;
        var found = array.find(function (el) { return el.id === id; });
        if (!found)
            return 'not found';
        var updateTodo = {
            id: id,
            value: value
        };
        array.splice(found.id - 1, 1, updateTodo);
        return 'updated';
    };
    Todo.prototype.deleteItem = function (id) {
        var array = this.array;
        var found = array.find(function (el) { return el.id === id; });
        if (!found)
            return 'not found';
        array.splice(found.id - 1, 1);
        return 'deleted';
    };
    return Todo;
}());
var todo = new Todo();
todo.addItem('todo 1');
todo.addItem('todo 2');
todo.addItem('todo 3');
todo.updateItem(2, 'todo ikki');
todo.deleteItem(3);
console.log(todo.getItem());
