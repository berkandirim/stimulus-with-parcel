import store from 'store'

export default (target, data) => {
    let ul = document.createElement('ul')

    for (let i in data) {
        const li = document.createElement('li')
        li.innerHTML = data.length ? `<a class="planet-link" data-action="planet#getPlanet" data-href="${data[i].url}" href="#">${data[i].name}</a>` : `<strong>${i}:</strong> ${data[i]}`
        // TODO: fetch data with resident urls in a seperate method
        if (i === 'residents') store.set('residentUrls', data[i])
        else ul.appendChild(li)
    }

    target.innerHTML = ul.outerHTML
}
