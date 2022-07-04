function loadScript (src, callback) {
    let theScript = document.createElement(`script`);
    theScript.src = src

    theScript.onload = () => callback(theScript)

    document.head.append(theScript)
}

loadScript('/tobecalled.js', script => {
    console.log(`This is ${script.src}`);
})

