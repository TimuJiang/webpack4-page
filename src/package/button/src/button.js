export default class Button {
    constructor(){
        this.$root = document.querySelector("body")
        this.$el = document.createElement('div')
        this.$el.classList.add('button')
        this.$el.innerText = 'button'
        this.$root.appendChild(this.$el)
    }
    add() {

    }
}
