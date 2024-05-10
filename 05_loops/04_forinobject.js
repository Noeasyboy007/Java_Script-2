const myObject =
{
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'
}
for (const key in myObject) 
{
    console.log(`${key} for myobject value ${myObject[key]}`);    
}

console.log();
console.log();
console.log();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const programming = ["js","cpp","py","rb"]

for (const key in programming) 
{
    console.log(programming[key]);
}