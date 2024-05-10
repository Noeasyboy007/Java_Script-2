//////////////////////////////////////////// OBJECTS LITERALS //////////////////////////////////////////////////////
const mySym = Symbol("key1")

const JsUser = {
    name: "Aritra",
    age: 23,
    location: "Kolkata",
    email: "aritrabera@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday,Saturday", "thusday"],

    "fullName": "Aritra Bera",

    [mySym]: "mykey1"

}
console.log("Acess an Objects 1st method")
console.log(JsUser.email)
console.log()
console.log("Acess an Objects 2nd method")
console.log(JsUser["email"])
console.log()
console.log("Create an object in another method and acess another method")
console.log(JsUser["fullName"])
console.log()
console.log("Create Symbol and acess an Squre braket method")
console.log(JsUser[mySym])
console.log()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("Over Write object")
JsUser.email = "aritrabera@gmail.com"
console.log(JsUser.email)
console.log()

console.log("Object Freez")
Object.freeze(JsUser)
JsUser.name="Noeasyboy"
console.log(JsUser)
console.log()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("create object using greeting funtion")
JsUser.greeting=function(){
    console.log("Hello js user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting)
console.log(JsUser.greetingTwo)