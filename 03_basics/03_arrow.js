let user =
{
    username : "Aritra",
    Price :999,

    welcomeMessage:function()
    {
        console.log(`${this.username} Welcome to Website`);
        // console.log(this)
    }
}

user.welcomeMessage()

user.username="polo"
user.welcomeMessage()
console.log()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function chai()
// {
//     let username6="Aritra"
//     console.log(this.username6);
// }
// chai()
/////////////////
// const chai = () => {
//     let username7 = "aritra"
//     console.log(this)
// }
// chai()
console.log("Arrow Function")
const addTwo = (num1,num2)  =>  (num1+num2)

console.log(addTwo(3,4))
console.log()

console.log("Object in Arrow Function")
let new1 = (num3,num4) =>({username:"Aritra"})
console.log(new1(3,4))

console.log()

