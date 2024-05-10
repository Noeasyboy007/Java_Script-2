const coding = ["js", "css", "html", "react"]

// using Fuction

// coding.forEach( function (item) {
//     console.log(item)
// })


// or Arrow Function

// coding.forEach((item) => {
//     console.log(item)
// })


// or Print me 

// function printMe(iteam){
//     console.log(iteam);
// }
// coding.forEach(printMe)

/////////////////////////////////////////////////////////////////////////////////////////////////////

const myCoding = [
    {
        languagename: "javaScript",
        languagefile: "js"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "cpp",
        languagefile: "c++"
    },
    {
        languagename: "ruby",
        languagefile: "rb"
    },
]

myCoding.forEach((item)=>{

    console.log(item.languagefile)
    console.log(item.languagename)
})


