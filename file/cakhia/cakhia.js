cleanlink = (url) => {
    return url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"")
}

blockvalid = (url) => {
    clean = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"")
    return clean.match('cakhia') != null
}

if (blockvalid(window.location.href)) {
    console.log(`Bongda Adblocker Extension: Detected ${cleanlink(window.location.href)}`)
    banned_tag = blocklist
    for (let element_tag of banned_tag) {
        for (let element of document.querySelectorAll(element_tag)) {
            element.style.display = 'none'
            element.style.visibility = 'hidden'
            console.log(`Deleting element: ${element}`)
            element.remove()
        }
    }
    document.querySelectorAll('.section-match-info')[0].style.padding = '10px'
    document.querySelectorAll('.match-info')[0].style.margin = '0px'
    document.querySelectorAll('.section-match-info')[0].insertAdjacentHTML('afterbegin', '<a href="/" class="custom-home-button">Home</a>')
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<div class="blackbox"></div>')
}
