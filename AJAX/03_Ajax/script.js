function loadData(){
    // create  a new request
    const xhr = new XMLHttpRequest();
    
    // what to do when response arrives
    xhr.onload = function(){
        console.log("Response Finished");
        const container = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;
    };

    //Prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS,
    xhr.open("GET","https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt",true)             //Here True or False

    // Send request
    xhr.send();
    console.log("Helllo");
}