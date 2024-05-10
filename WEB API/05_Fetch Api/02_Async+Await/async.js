const display = document.getElementById("display")

async function getData() {
    const response = await fetch("https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt")
    const data = await response.text();

    display.innerText = data;

}