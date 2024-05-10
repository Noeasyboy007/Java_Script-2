//Immediately Invoked Function Expression (IIFE)//

(function chai(){
    console.log(`DB CONNECTED`)
})();
console.log();


console.log("Named IIFE");
((name)=>{
    console.log(`DB CPNNECTED TWO ${name}`);
}) ("Aritra");
