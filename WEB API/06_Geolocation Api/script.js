const display = document.getElementById("display");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else {
        display.innerHTML("Geo Location is not Available in your Broweser!")
    }
}

function showPosition(position){
    display.innerHTML="latitude:- "+position.coords.latitude + "<br/>Longitude:- " +position.coords.longititude; 
}