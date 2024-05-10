
var c = 300
let a = 300;

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner Scopes Value ",a);
}

console.log("Global Scopes Value ",a)
// console.log(b)
// console.log(c) 
console.log()

///////////////////////////////////////////////////// Nested Function ////////////////////////////////////////////////////////////

console.log("Nested Function")
function one()
{
    const username0="Aritra"

    function two ()
    {
        const website ="Youtube"
        console.log(username0);
    }
    // console.log(website);

    two()

}

one()

if(true) {
    const username0="Aritra"
    if(username0 === "Aritra")
    {
        const website = " YOUTUBE"
        console.log(username0+website);
    }

    // console.log(website);
}

// console.log(username0);
console.log()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Interesting Things.................")
console.log(addone(5))
function addone(num)
{
    return num +1;
}


let addTwo = function(num)
{
    return num+2;
}

// addTwo(5);