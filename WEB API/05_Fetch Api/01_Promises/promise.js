const display = document.getElementById("display")

function getData() {
    fetch("https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt")
        .then(result => result.text())
        .then(data => {
            console.log("Hello 2");
            display.innerText = data;
        });

    console.log("Hello");
}