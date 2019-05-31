
import "./less/index.less"
import Input from './package/input'
import Button from './package/button'
import ToDo from './package/to-do'
let input = new Input()
let button = new Button()
let save = new Button()
let todo = new ToDo()

input.mount('#task-input')
button.label = '添加任务'
save.label = '同步'
button.on('click', function (event) {
    todo.addTask(input.value)
})
save.on('click', function (event) {
    console.log(todo.data)
})




