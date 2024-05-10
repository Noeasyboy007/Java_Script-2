function validation()
{
    const inputObj = document.getElementById('id1')

    if (!inputObj.checkValidity()) {
       document.getElementById('demo').innerHTML= inputObj.validationMessage;
       
    }

    
    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("You have made a range overflow error")
    }
    else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("you have made a range unnderflow error")
    }
    else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("value missing")
    }

}