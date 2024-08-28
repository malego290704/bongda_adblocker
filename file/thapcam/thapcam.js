blockvalid = (url) => {
    clean = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"")
    return clean.match('thapcam') != null
}
console.log(blockvalid(window.location.href))

if (blockvalid(window.location.href)) {
    banned_tag = blocklist
    for (let element_tag of banned_tag) {
        for (let element of document.querySelectorAll(element_tag)) {
            element.style.display = 'none'
            element.style.visibility = 'hidden'
            console.log(`Deleting element: ${element}`)
            element.remove()
        }
    }
}
