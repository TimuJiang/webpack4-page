
import "./less/index.less"

import Button from './package/button'

let button = new Button()

let button2 = new Button()

button.on('click', function (event) {
    console.log(this)
    console.log(/event/, event)

    button2.toggle = !button.toggle
})
