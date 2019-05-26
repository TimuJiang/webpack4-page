import EventEmitter from '../../base/EventEmitter'

export default class Button extends EventEmitter{
    constructor() {
        super()
        this._toggle = false;
        this.create()
        this.mounted()
    }

    create() {
        this.$root = document.querySelector("body")
        this.$el = document.createElement('div')
        this.$el.classList.add('button')
        this.$el.innerText = 'button'
    }

    mounted() {
        this.toggle = false;
        this.$root.appendChild(this.$el)
        this.$el.addEventListener('click', this.onClick.bind(this))
    }

    changeView() {
        let state = this._toggle ? 'open' : 'close'
        let unstate = !this._toggle ? 'open' : 'close'
        this.$el.classList.remove(unstate)
        this.$el.classList.add(state)

    }

    onClick(event) {
        this.toggle = !this.toggle
        this.emit('click', event)
    }

    set toggle(value) {
        this._toggle = value
        this.changeView()
    }

    get toggle() {
        return this._toggle
    }
}
