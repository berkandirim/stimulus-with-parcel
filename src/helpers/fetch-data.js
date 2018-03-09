const apiUrl = 'https://swapi.co/api/'

export default async (url) => {
    return fetch(`${apiUrl}${url}`, {
        method: 'get'
    })
    .then(res => res.json())
}