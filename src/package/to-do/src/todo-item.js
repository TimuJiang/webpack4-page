import EventEmitter from '../../base/EventEmitter'

export default class ToDoItem extends EventEmitter{
    constructor(data){
        super()
        this._data = data || {}
        //初始化组件属性
        this._date = new Date()
        this.id =  this._date.getTime()  //思考：如何保证组件实例的唯一性
        this._state = false // false： 开始， true： 完成
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
        this.$fragment = document.createDocumentFragment();
        this.$el = document.createElement('div')
        this.$state = document.createElement('i')
        this.$operat = document.createElement('i')
        this.$label = document.createElement('span')
        this.$fragment.appendChild(this.$el)
        this.$el.classList.add('todo-item')
        this.$el.appendChild(this.$state)
        this.$el.appendChild(this.$label)
        this.$el.appendChild(this.$operat)
        this.$label.classList.add('label')
        this.$state.classList.add('iconfont')
        this.$state.classList.add('icon-feild-DateTime')
        this.$operat.classList.add('iconfont')
        this.$operat.classList.add('icon-link-delete')
    }

    mounted() {
    }

    changeState() {
        if(this._state) {
            this.$state.classList.remove('icon-feild-DateTime')
            this.$state.classList.add('iconzhengque-o')
        }else{
            this.$state.classList.add('icon-feild-DateTime')
            this.$state.classList.remove('iconzhengque-o')
        }
    }

    initEvent() {
        this.$state.addEventListener('click', this.onChangeState.bind(this))
        this.$operat.addEventListener('click', this.onDelete.bind(this))
    }
    //改变任务状态
    onChangeState () {
        this._state = !this._state
        this.changeState()
    }

    //删除任务
    onDelete () {
        this.emit('delete', this._data)
    }

    update () {
        this.$label.innerHTML = `<p class="create-content">任务内容：${this._data.name}</p><p class="create-date">创建时间：${this._date}</p>`
    }

    get data () {
        return this._data
    }
}
