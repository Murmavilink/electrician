import maskPhone from './maskPhone';
import validate from './validate';

maskPhone('.tel');


const sendForm = (idForm) => {
    const form = document.getElementById(idForm);
    const formInputs = document.querySelectorAll('#form input');
    const statusBlock = document.createElement('p');
    const loadText = 'Загрузка...';
    const errorText = 'Что-то пошло не так...';
    const successText = 'Спасибо! Мы скоро с вами свяжемся!';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
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
        }, 3000);
    };

    const examinationFormSubmit = (e) => {
        e.preventDefault();

        if (validate(formInputs)) {
            submitForm();
            removeStatusText();
        }

    };



    const examinationFormInput = (e) => {
        const element = e.target;

        if(element.matches('[name="fio"]')) {

            element.value = element.value.replace(/\w+/, '');

            if (element.value.length < 2) {
                element.classList.add('error');
            } else {
                element.classList.remove('error');
            }

        } else if(element.matches('[name="tel"]')) {

            if (element.value.length < 18) {
                element.classList.add('error');
            } else {
                element.classList.remove('error');
            }

        }

    };



    form.addEventListener('input', examinationFormInput);
    form.addEventListener('submit', examinationFormSubmit);

};


export default sendForm;