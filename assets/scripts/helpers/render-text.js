export default (target, text) => {
    let p = document.createElement('p')

    p.innerHTML = text
    
    target.innerHTML = p.outerHTML
}