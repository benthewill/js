let worker = {
    slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
    }
};

function cachingDecorator(func, h) {
    let cache = new Map();

    console.log(func)

    return function() {
    let key = hash(arguments);
    
    console.log(key);

    if (cache.has(key)) {
        return cache.get(key);
    }

    let result = func.call(this, ...arguments);
    
    cache.set(key, result);

    console.log(cache);
    console.log(result);
    
    return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) );

