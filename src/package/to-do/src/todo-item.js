export default class ToDoItem {
    constructor(data){
        this._data = data || {}
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
        this.$el = document.createElement('div')
        this.$el.classList.add('todo-item')
    }

    mounted() {
    }

    initEvent() {
    }

    update () {
        this.$el.innerText = this._data.name
    }

    get data () {
        return this._data
    }
}
