// import maskPhone from 'maskphone';
import maskPhone from './maskPhone';

maskPhone('.tel');


const sendForm = (idForm) => {
    const form = document.getElementById(idForm);
    const formInputs = document.querySelectorAll('.form-group input'); 
    const statusBlock = document.createElement('p');
    const loadText = 'Загрузка...';
    const errorText = 'Что-то пошло не так...';
    const successText = ' Спасибо! Мы скоро с вами свяжемся!';


    formInputs[0].addEventListener('input', () => {
        formInputs[0].value = formInputs[0].value.replace(/\w/, '')
    });
    

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
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


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        submitForm();
    });


};


export default sendForm;