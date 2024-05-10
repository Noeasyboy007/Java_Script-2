//////////////////////////////////////////// OBJECTS SINGLETON (HELP OF CONSTRACTOR) //////////////////////////////////////////////////////

// const tinderUser=new Object()

console.log("Create a object help of constractor")

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="Aritra"
tinderUser.isLoggedIn=false

console.log(tinderUser)

console.log()
console.log()
///////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Create a object with under an object and access the object")
const olxUser={
    email:"aritrabera43@gmail.com",
    fullname:{
        userfullname:
        {
            fristName:"Aritra",
            lastName:"Bera"
        }
    }
}

console.log(olxUser.fullname.userfullname.fristName)
console.log()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Combind Two object in a  one object")
let  obj1 = {1:"a",2:"b"}
let  obj2 = {3:"c",4:"d"}

console.log("one way to combined")
let obj3 = Object.assign(obj1,obj2)
console.log(obj3)
console.log("Two way to combind")
let obj4 ={...obj1,...obj2}
console.log(obj4)
console.log()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Users=[
    {
    id:1,
    email:"aritra10@gmail.com",
    },
    {
    id:2,
    email:"aritra20@gmail.com",
    },
    {
    id:3,
    email:"aritra30@gmail.com",
    },

]
Users[1].email
console.log()

console.log("object acess using Array Key Method")
console.log(tinderUser);

console.log("key Acess")
console.log(Object.keys(tinderUser));
console.log("value Acess")
console.log(Object.values(tinderUser));
console.log("Entries Acess")
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnproperty('isLogged'))

console.log()

/////////////////////////////////////////////////// Destructuring in Objects //////////////////////////////////////////////////////////
console.log("Destructuring in Objects")
let course ={
    coursename:"js",
    price: "999",
    coueseTeacher:"Aritra"
}

// course.coueseTeacher
let {coueseTeacher:teacher}=course
console.log(teacher)
