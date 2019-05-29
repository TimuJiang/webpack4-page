import ToDoItem from './src/todo-item'

export default class ToDo {
    constructor(data, config){
        this._data = data || []
        this._itemList = []
        //初始化组件属性
        this.id = new Date().getTime()  //思考：如何保证组件实例的唯一性
        //这里开始创建组件UI
        this.create()
        //挂载组件
        this.mounted()
        //绑定事件
        this.initEvent()
        //更新组件
        this.update()
    }
    create() {
        this.$root = document.querySelector("body")
        this.$el = document.createElement('div')
        this.$el.classList.add('todo')
    }

    mounted() {
        this.$root.appendChild(this.$el)
    }

    initEvent() {

    }

    update () {
        //清理原来的
        this._itemList.forEach(item => {
            this.$el.removeChild(item.$el)
        })
        let todoItem
        this._data.forEach(item => {
            todoItem =  new ToDoItem(item)
            this._itemList.push(todoItem)
            this.$el.appendChild(todoItem.$el)
        })
    }
    get data () {
        return this._data
    }
}
