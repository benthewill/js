function useCat() {
    let name = 'Ben'

    return [
        () => `My name is ${name}`,
        (newName) => name = newName
    ]
}

const [meow, setName] = useCat()

console.log(meow());

setName('Feli');

console.log(meow());