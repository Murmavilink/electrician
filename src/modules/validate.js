const validate = (list) => {
    let inputValidate = true

    const addValue = (input) => {
        inputValidate = false
        input.classList.add('error');
    }

    list.forEach(input => {

        if (input.value === '' || list[0].value.length < 2 || list[1].value.length < 18) {
            addValue(input);
        }  else if(input.value) {
            input.classList.remove('error');
        }
        
        if(list[0].value.length >= 2) {
            list[0].classList.remove('error');
        } else if (list[1].value.length == 18) {
            list[1].classList.remove('error');
        }

    });

    return inputValidate;
}

export default validate