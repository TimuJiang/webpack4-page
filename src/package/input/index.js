import EventEmitter from '../base/EventEmitter'

export default class Input extends EventEmitter {
	constructor(text, config) {
		super()
		this._text = text
		this.$parent = null
		this.$el = document.createElement('input')
	}
	/*
	* 将组建挂载到，文档已有得节点
	* */
	mount(id) {
		this.$parent = document.querySelector(id)
		if (this.$parent) {
			this.$parent.appendChild(this.$el)
		}
	}

	get value () {
		return this.$el.value
	}
}
