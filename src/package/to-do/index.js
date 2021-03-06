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
            this.$el.appendChild(todoItem.$fragment)
        })
    }

    addTask(name) {
        if(!name) console.error('添加任务名字')
        let todoItem =  new ToDoItem({
            name: name,
            index: this._itemList.length + 1,
            id: new Date().getTime()
        })
        this._itemList.push(todoItem)
        todoItem.on('delete', this.onDelete.bind(this))
        this.$el.appendChild(todoItem.$fragment)
    }

    onDelete (item) {
        let index  = this._itemList.findIndex(c => {
            return c.id === item.id
        })
        if(index < 0) return
        this.$el.removeChild( this._itemList[index].$el)
        this._itemList.splice(index, 1)
        console.log(/this._itemList/, this._itemList)
    }

    get data () {
        // if(this._itemList.length > 0) {
        //     let string = JSON.stringify(this._itemList)
        //     localStorage.setItem('myTask', string)
        // }else{
        //     this._itemList = JSON.parse( localStorage.getItem('myTask'))
        // }
        return this._itemList
    }
}
