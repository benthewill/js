function camelizeString(str) {
    let strSplit = str.split(`-`);
    let newSplitArr = [];
    let testArr = []

    for (item of strSplit) {
        item == strSplit[0] ? newSplitArr.unshift(item) : testArr.push(item)
    }

    for (test of testArr) {
        let cap = test[0].toUpperCase() + test.slice(1);
        newSplitArr += cap
    }

    return newSplitArr;
}

console.log(camelizeString(`this-is-a-test-please`))





function camelize(str) {
    return str.split(`-`).map((a,b) => b == 0 ? a : a[0].toUpperCase(0) + a.slice(1)).join(``)
}

console.log(camelize(`he-guides-others-to-a-treasure`));