console.log("Acess all Arrays")
const myArr = [1,2,3,4,5,6]
console.log(myArr)
console.log()


console.log("Acess all strings Array")
const myHeros=["ironman","spiderman","superman","batman"]
console.log(myHeros)
console.log()

console.log("Create  New array and Acess her index number")
const  myArry2=new Array(1,2,3,4,5)
console.log(myArry2[1])
console.log()

///////////////////////////////////////////// Arrays Method ////////////////////////////////////////////////////
let myArr3 = [10,11,12,13,14]
console.log("Acess All Arrays")
console.log(myArr3)
console.log()

console.log("Array Push - add 15 in last")
myArr3.push(15)
console.log(myArr3)
console.log()

console.log("Array Pop- remove 15 in last")
myArr3.pop()
console.log(myArr3)
console.log()

console.log("Unshift - add 15 in front")
myArr3.unshift(15)
console.log(myArr3)
console.log()

console.log("Shift - remove 15 in front")
myArr3.shift()
console.log(myArr3)
console.log()

////////////////////////////////////////////////////////////////////
console.log("Arrays Searching")
console.log(myArr3.includes(5))
console.log()
console.log(myArr3.indexOf(9))
console.log(myArr3.indexOf(12))
console.log()

//////////////////////////////////////////////////////////////////////
console.log("Arrays To String")
const newArray=myArr3.join()
console.log(myArr3)
console.log(typeof myArr3)
console.log(newArray)
console.log(typeof newArray)
console.log()

//////////////////////////////////////////////////////////////////////////

let myArray4 = [20,21,22,23,24,25]
console.log(myArray4)
console.log()

console.log("Slice Array")
const newArray1=myArray4.slice(1,3)
console.log(newArray1)

console.log("Splice Array")
const newArray2=myArray4.splice(1,3)
console.log(newArray2)