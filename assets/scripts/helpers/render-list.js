export default (target, data) => {
    let ul = document.createElement('ul')

    for (let i in data) {
        const li = document.createElement('li')
        li.innerHTML = data.length ? `<a class="planet-link" data-action="planet#getPlanet" data-href="${data[i].url}" href="#">${data[i].name}</a>` : `<strong>${i}:</strong> ${data[i]}`
        ul.appendChild(li)
    }

    target.innerHTML = ul.outerHTML
}
