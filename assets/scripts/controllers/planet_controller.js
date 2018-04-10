import { Controller } from 'stimulus'
import fetchData from '../helpers/fetch-data'
import renderList from '../helpers/render-list'
import renderText from '../helpers/render-text'
import looper from '../helpers/looper'

let planetInfo = {}
let residentUrls = []
let filmUrls = []

export default class extends Controller {
    static targets = ['content', 'searchResults', 'term']
    loopsDone(planetInfo) {
        this.contentTarget.classList.add('card')
        renderList(this.contentTarget, planetInfo)
    }

    getPlanet(e) {
        e.preventDefault()
        this.contentTarget.classList.remove('card')
        renderText(this.contentTarget, 'Getting planet info...')
        const url = e.target.getAttribute('data-href')
        fetchData(url)
            .then(data => {
                residentUrls = data['residents']
                filmUrls = data['films'] || []
                planetInfo = data
                planetInfo.residents = []
                planetInfo.films = []
                console.log(data)
            })
            .then(() => {
                looper(residentUrls, planetInfo.residents, 'name', () => {
                    looper(filmUrls, planetInfo.films, 'title', () => {
                        this.loopsDone(planetInfo)
                    })
                })
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

    initialize() {}
}
