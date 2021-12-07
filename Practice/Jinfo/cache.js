let worker = {
    slow() {
        return 2
    },
    fast(x) {
        return x * this.slow()
    }
}

function cachingDecorator (func) {
    let cache = new Map()
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = func.call(this, x)
        cache.set(x, result)
        return result
    }

}

console.log(worker.fast(2));
console.log(worker.fast(4));
console.log(worker.fast(4));
console.log(worker.fast(3));

console.log(cachingDecorator.cache);

let caching = new Map()

caching.set(`name`, `ben`)
caching.set(`girlfriend`, `feli`)

console.log(caching);

function testing (caching) {
    if (caching.has(`name`)) {
        return caching.get(`girlfriend`)
    }
}

console.log(testing(caching));