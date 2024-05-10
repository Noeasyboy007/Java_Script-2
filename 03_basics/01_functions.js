console.log("Functions Basics ............")
function sayMyName() {
    console.log("A")
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("R")
    console.log("A")
}
sayMyName()

console.log()
//////////////////////////////////////////////////////////////////////////////


console.log("Functions 1St Method...........")
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);

}
addTwoNumbers(3, 3)

console.log()
////////////////////////////////////////////////////////////////////

function multiplyTwoNumbers(number1, number2) {
    console.log(number1 * number2);

}
let result = multiplyTwoNumbers(3, 3)
console.log("Result:- ", result)

console.log()

///////////////////////////////////////////////////////////////////////

console.log("Functions 2nd Method.................")
function multiplyTwoNumbers1(number1, number2) {
    let result1 = number1 * number2
    return result1;
}
const result1 = multiplyTwoNumbers1(3, 3)
console.log("Result1:- ", result1)
console.log()

///////////////////////////////////////////////////////////////////////////

console.log("Functions 3rd Method....................")
function dividedTwoNumbers(number1, number2) {
    return number1 - number2;
}

let result2 = dividedTwoNumbers(8, 2)
console.log("Result2:- ", result2);
console.log()

///////////////////////////////////////////////////////////////////////////

console.log("String Login System usingg Functions.............")
function loginUserMessage(username) {
    return `${username} just logged in`
}

let output = loginUserMessage("Aritra Bera")

console.log(output)
console.log()

//////////////////////////////////////////////////////////////////////////////

console.log("String Login System usingg Functions (Here Login Undefined, but print worng statment)")
function loginUserMessage1(username) {
    return `${username} just logged in`
}

let output1 = loginUserMessage1()

console.log(output1)
console.log()

///////////////////////////////////////////////////////////////////////////////////

console.log("String Login System usingg Functions (Here Login Undefined,).............")
function loginUserMessage2(username) 
{
    if (username===undefined)
    {
        console.log("Please Enter a user Name")
        return
    }
    return `${username} just logged in`
}

let output2 = loginUserMessage2()

console.log(output2)
console.log()

/////////////////////////////////////////// rest operator //////////////////////////////////////////////

console.log("Functions rest Operator")
function calculateCartPrice(...num5)
{
    return num5
}

console.log(calculateCartPrice(200,400,500,600))
console.log()

///////////////////////////////////////// Object Handel Using Functions ///////////////////////////////////////////////////////////

console.log("Object Handel Using Functions")
// let user ={
//     username:"Aritra",
//     price: 199
// }   
// OR

function handelobject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelobject(user)  
// OR

handelobject({
    username:"Aritra Bera",
    price:200
})
console.log()

/////////////////////////////////////////////////// Array Handel Using Functions /////////////////////////////////////////////

console.log("Array Handel Using Functions ")

let array =[100,200,300,400]

function ArrayHandel(getArray)
{
    return getArray[2];   
}

console.log(ArrayHandel(array))

