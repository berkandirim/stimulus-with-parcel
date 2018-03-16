import { Controller } from 'stimulus'
import fetchData from '../helpers/fetch-data'
import renderList from '../helpers/render-list'
import renderText from '../helpers/render-text'

let remoteData = {}

export default class extends Controller {
    static targets = [ 'content', 'searchResults', 'term' ]

    getPlanet (e) {
        e.preventDefault()
        console.log('content loading...')
        const url = e.target.getAttribute('data-href')
        fetchData(url).then(data => {
            this.contentTarget.classList.add('card')
            renderList(this.contentTarget, data)
            console.log('content loaded')
        })
    }

    searchInPlanets () {
        const term = this.termTarget.value
        fetchData(`https://swapi.co/api/planets/?search=${term}`).then(data => {
            console.log(data)
            if (data.results.length < 1) {
                console.log('rendering text but no see nothing')
                renderText(this.searchResultsTarget, 'There is no such planet!')
            } else {
                renderList(this.searchResultsTarget, data.results)
            }
            
        })
    }

    initialize () {
        
    }
}