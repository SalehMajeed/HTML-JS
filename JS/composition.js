class com {
    constructor(num) {
        this.num = num;
    }
    add() {
        this.num = 2 + this.num
        return this;
    }
    mul(num) {
        this.num = 2 * this.num
        return this;
    }
}

let result = new com(2)
let va = result.add().mul()
console.log(va)

function* createFlow() {
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}
const returnNextElement = createFlow();
console.log(typeof returnNextElement);
console.log(returnNextElement);
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next(2) // 7
