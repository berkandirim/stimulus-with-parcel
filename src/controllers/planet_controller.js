import { Controller } from "stimulus"
import fetchData from '../helpers/fetch-data'

let remoteData = {}

export default class extends Controller {
    static targets = [ "title", "content" ]
    getPlanet () {
        let list = document.createElement('ul')
        fetchData('planets/3/').then(data => {
            remoteData = data
            console.log(remoteData.length)

            for (let i in remoteData) {
                const item = document.createElement('li')
                item.innerHTML = `<strong>${i}:</strong> ${remoteData[i]}`
                list.appendChild(item)
            }

            this.contentTarget.innerHTML = list.innerHTML
        })
    }
}