import { Controller } from 'stimulus'
import fetchData from '../helpers/fetch-data'
import renderList from '../helpers/render-list'
import renderText from '../helpers/render-text'

export default class extends Controller {
    static targets = ['content', 'searchResults', 'term']

    getPlanet(e) {
        e.preventDefault()
        renderText(this.contentTarget, 'Getting planet info...')
        const url = e.target.getAttribute('data-href')
        fetchData(url).then(data => {
            this.contentTarget.classList.add('card')
            renderList(this.contentTarget, data)
        })
        let links = document.getElementsByClassName('planet-link')
        for (let link of links) {
            link.classList.remove('active')
        }
        e.target.classList.add('active')
    }

    searchInPlanets() {
        renderText(this.searchResultsTarget, 'Searching...')
        const term = this.termTarget.value
        fetchData(`https://swapi.co/api/planets/?search=${term}`).then(data => {
            if (data.results.length < 1) {
                renderText(this.searchResultsTarget, '☹ There is no such planet!')
            } else {
                renderList(this.searchResultsTarget, data.results)
            }
        })
    }

    // @TODO: create a method for getting resident names (api brings urls)

    initialize() {}
}
