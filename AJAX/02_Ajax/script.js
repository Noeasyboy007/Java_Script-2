function loadData(callbackF) {
    // create  a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function(){
        callbackF(this);
    };

    //Prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS,
    xhr.open("GET", "https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt")

    // // Aadd a request header
    // xhr.setRequestHeader("My_GF","JavaScript")

    // Send request
    xhr.send();
}

function myCallback1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}
function myCallback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}