import maskPhone from './maskPhone';
import validate from './validate';

maskPhone('.tel');


const sendForm = (idForm) => {
    const form = document.getElementById(idForm);
    const formInputs = document.querySelectorAll('#form input');
    const statusBlock = document.createElement('p');
    const loadText = 'Загрузка...';
    const errorText = 'Что-то пошло не так...';
    const successText = ' Спасибо! Мы скоро с вами свяжемся!';


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const formBody = {}

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val
        });

        sendData(formBody).then(data => {
            statusBlock.textContent = successText;

            formInputs.forEach(input => {
                input.value = '';
            });

        }).catch(error => {
            statusBlock.textContent = errorText;
        });
    }

    const removeStatusText = () => {
        setTimeout(() => {
            statusBlock.remove();
        }, 3000)
    }

    const examinationForm = (event) => {
        event.preventDefault();

        if(validate(formInputs)) {
            form.addEventListener('submit', submitForm);
            removeStatusText()
        }
    }



    
    form.addEventListener('input', examinationForm);
    form.addEventListener('submit', examinationForm);
    

};


export default sendForm;