const validate = (formInputs) => {
    let inputValidate = false
    let inputName = false
    let inputTel = false
   

    if(formInputs[0].value.length < 2) {
        formInputs[0].classList.add('error');
    } else if(formInputs[0].value.length >= 2) {
        inputName = true
    }
    
    if(formInputs[1].value.length < 18) {
        formInputs[1].classList.add('error');
    } else if(formInputs[1].value.length == 18) {
        inputTel = true
    }

   
    if(inputName && inputTel) {
        inputValidate = true
    } 


    return inputValidate;
    
}

export default validate