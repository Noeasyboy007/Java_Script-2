const promiseOne = new Promise(function (resolve, reject) {
    //Do an asyanc task
    //DB calls, cryptography,network

    setTimeout(function () {
        console.log('Asyan task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {

    console.log("promise consumed");
})

/////////////////////////////////////////////////////********************************//////////////////////////////////////////////////
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asyanc task 2");
        resolve();
    }, 1000)
})

    .then(function () {
        console.log("Async 2 resolve");
    })

console.log();
console.log();
console.log();
console.log();

////////////////////////////////////////////////////////*********************************/////////////////////////////////////

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Aritra", email: "Aritrabera69@gmail.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

console.log();
console.log();
console.log();
console.log();
/////////////////////////////////////////////*****************************//////////////////////////////////////////////////

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ usernmae: "Aritra", password: 123 })
        }
        else {
            reject('ERROR: something went worng')
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.usernmae
}).then((usernmae) => {
    console.log(usernmae);
}).catch(function (error) {
    console.log(error);
}).finally(()=>console.log("The Promise either resolve or rejected"))

console.log();
console.log();
console.log();
console.log();

/////////////////////////////////////////////////**************************************//////////////////////////////////////

const promiseFive = new Promise(function(resolve,reject){
    setTimeout (function(){
        let error=function (arguments) {}
        if(!error)
        {
            resolve({usernmae:"Aritra Bera", password:"007"})
        }
        else
        {
            reject('Error:JS something went worng')
        }
    },1000)
})
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}
consumePromiseFive()