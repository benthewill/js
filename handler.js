function ask(q, ...hs) {
    let isYes = true

    for (let h of hs) {
        if (h.length == 0) {
            if (isYes) h()
        } else {
            h(isYes)
        }
    }
}

ask("Q", 
        () => console.log(`You said yes`), 
        result => console.log(result) )

function saySomething () {
    console.log(`hello`);

    saySomething.count++
}

saySomething.count = 0

saySomething()
saySomething()

console.log(saySomething.count);