class RegularList {
    static classId = 1

    static checkClassId() {
        return this.classId
    }

    constructor(...bodyList){
        this.bodyList = bodyList
    }

    listLength() {
        return this.bodyList.length
    }

    listLast() {
        return this.bodyList[this.bodyList.length - 1]
    }

    listFirst() {
        return this.bodyList[0]
    }


}

class ExtendedList extends RegularList {


}

let testList1 = new RegularList(1,3,5,7,9)

console.log(RegularList.checkClassId())

console.log(testList1.bodyList);

console.log(testList1.listLength())
console.log(testList1.listLast())
console.log(testList1.listFirst())


let testSymbol = {
    [Symbol.toStringTag] : "Asd"
}

console.log({}.toString.call(testSymbol));


