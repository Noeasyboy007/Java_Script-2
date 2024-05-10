// if
// <,>,<=,>=,==,!=,===



// const temp=18
// if(temp<=14){
//     console.log("Current Temp is ",temp);
// }

// else
// {
//     console.log("current temp is ")
// }


//////////////////////////////////////////////////////////////////////////////////////////////

// const score = 200

// if (score>100)
// {
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////


// const blance = 60000

// if(blance>50000) console.log("My Blance : ",blance.toLocaleString('en-IN'))

// console.log()

///////////////////////////////////////////////////////////////////////////////////////////

// if(blance==50000)
// {
//     console.log("Less Then 50000")
// }
// else if(blance<40000)
// {
//     console.log("Less Then 40000 ")
// }
// else if(blance<30000)
// {
//     console.log("Less Then 30000")
// }
// else
// {
//     console.log("Blance is 60000")
// }

//////////////////////////////////////////////////////////////////////////////////////////

const userLoggedIn = true
const debitCard = true
const userLoggedInFromEmail =false
const userLoggedInId =true

if (userLoggedIn && debitCard) {
    console.log("User Can Buy Course")
}
if (userLoggedInFromEmail || userLoggedInId)
{
    console.log("User logged in")
}

