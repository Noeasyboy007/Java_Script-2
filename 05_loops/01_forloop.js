//for

for (let i = 1; i <= 10; i++) 
{
    const element = i;

    if (element==5)
    {
        console.log("5 is best")   
    }
    // console.log(i)
    console.log(i," * " ,2, " = ",i*2)
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log()
console.log()

//////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 1; i <= 10; i++) 
{
    console.log(`Multiplication Table: ${i}`)
    for (let j = 1; j <= 10; j++) 
    {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`)
        console.log(i,"*",j,"=",i*j)
    }    
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log()
console.log()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const super_heros = ["Spiderman","Batman","Ironman","Hulk"]
console.log(super_heros.length);

for (let i = 0; i < super_heros.length; i++) 
{
    const element = super_heros[i];
    console.log(element)  
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log()
console.log()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Continue Statment :- ")

for (let i = 1; i <= 10; i++) 
{
    if (i==5)
    {
        console.log("Detected 5");
        continue   
    }
    console.log(i);
}

console.log()
console.log()


console.log("Break Statment :-")

for (let i = 1; i <= 20; i++) 
{
    if (i==5)
    {
        console.log("Detected 5");
        break   
    }
    console.log(i);
}