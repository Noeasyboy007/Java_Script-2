function loadData(){
    // create  a new request
    const xhr = new XMLHttpRequest();
    
    // what to do when response arrives
    xhr.onload = function(){
        const container = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;

        console.log(this.getAllResponseHeaders());    // Here Get All Meta Data or Header Data
    };

    //Prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS,
    xhr.open("GET","https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt")

    // Send request
    xhr.send();
}