
export default async (url) => {
    return fetch(url, {
        method: 'get'
    })
    .then(res => res.json())
}