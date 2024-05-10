const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`accval: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);
console.log();
console.log();
console.log();

/////////////////////////////////// Arrow Function /////////////////////////////////////////////////

console.log(" Using Arrow Function");
const newmyTotal = myNums.reduce((acc, currval) => acc + currval, 0)

console.log(newmyTotal);

console.log()
console.log()
console.log()

/////////////////////////////////////////////////////////////////////////////////////////////////////

const shoppingCart = [
    {
        itemName: "js course", price: 2999,
    },
    {
        itemName: "py course", price: 1999,
    },
    {
        itemName: "react course", price: 5999,
    },
    {
        itemName: "c++ course", price: 999,
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay.toLocaleString('en-IN'))