import fetchData from './fetch-data'

export default (array, model, prop, callback) => {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        counter++
        fetchData(array[i]).then(res => {
            counter--
            model.push(' ' + res[prop])
            if (counter === 0) callback()
        })
    }
}
