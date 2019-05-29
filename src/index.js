
import "./less/index.less"

import Button from './package/button'

let button = new Button()

let button2 = new Button()

button.on('click', function (event) {
    console.log(this)
    console.log(/event/, event)
    button2.toggle = !button.toggle
})


import ToDo from './package/to-do'


let myTodoList = [
    {name: '任务1' , state: 0},
    {name: '任务2' , state: 0},
    {name: '任务3' , state: 0},
    {name: '任务4' , state: 0},
    {name: '任务5' , state: 0},
    {name: '任务6' , state: 0},
]
let todo = new ToDo(myTodoList)
