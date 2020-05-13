const apiUrl = 'https://swapi.dev/api/'

export default async (url, body) => {
    return fetch(`${apiUrl}${url}`, {
        method: 'post',
        body: JSON.stingify(body) 
    })
}