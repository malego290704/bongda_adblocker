banned_tag = blocklist

for (let element_tag of banned_tag) {
    for (let element of document.querySelectorAll(element_tag)) {
        element.style.display = 'none'
        element.style.visibility = 'hidden'
        console.log(`Deleting ${element}`)
        element.remove()
    }
}

setInterval(() => {
    for (let element_tag of banned_tag) {
        for (let element of document.querySelectorAll(element_tag)) {
            element.style.visibility = 'hidden'
        }
    }
}, 1000)