import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "content", "headline" ]
    refresh () {
        this.headlineTarget.innerHTML = "Hello"
        this.contentTarget.innerHTML = "Refresh!"
    }
}