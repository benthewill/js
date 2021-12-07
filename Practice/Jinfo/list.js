let list = {
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : {
                    value : 5,
                    next : null
                }
            }
        }
    }
};

let secondlist = list.next.next.next;
list.next.next.next = null;

console.log(secondlist);
console.log(list);

list.next.next.next = secondlist;

console.log(list);
console.log(list.next.next.next.next);

let valuesList = []

function printList (n) {
    if (n.next == null) {
        valuesList.push(n.value)
    }
    else {
        valuesList.push(n.value)
        printList(n.next)
    }

    return valuesList
}

// console.log(printList(list));

console.log(valuesList);

function printListRev (n) {
    if (n.next != null) {
        printListRev(n.next)
    }
    
    valuesList.push(n.value)
    
    return valuesList
}

console.log(printListRev(list));