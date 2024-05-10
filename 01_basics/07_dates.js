//Dates

let myDates = new Date()
console.log(typeof myDates)

console.log("Default")
console.log(myDates)
console.log()

console.log("toString")
console.log(myDates.toString())
console.log()



console.log("toLocaleString")
console.log(myDates.toLocaleString())
console.log()



console.log("toDateString")
console.log(myDates.toDateString())
console.log()



console.log("toLocaleDateString")
console.log(myDates.toLocaleDateString())
console.log()


console.log("toISOString")
console.log(myDates.toISOString())
console.log()


console.log("toJSON")
console.log(myDates.toJSON())
console.log()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let myCreatedDates = new Date(2024, 0, 26, 6, 40)
let myCreatedDates = new Date("01-26-2024")
console.log(myCreatedDates.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
