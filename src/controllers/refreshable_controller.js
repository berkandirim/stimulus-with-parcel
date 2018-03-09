import { Controller } from "stimulus"

const data = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur laudantium, quam quos neque praesentium magni laborum natus harum molestiae beatae! Natus unde harum similique corporis, aut magni. Illo, dolore consequatur.'
}

export default class extends Controller {
    static targets = [ "content", "headline" ]
    refresh () {
        this.headlineTarget.innerHTML = "Hello"
        this.contentTarget.innerHTML = data.text
    }
}