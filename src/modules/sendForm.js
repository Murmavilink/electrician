import maskPhone from 'maskphone';

maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');


const sendForm = (idForm) => {
    const form = document.getElementById(idForm);
    const formInputs = document.querySelectorAll('.form-group input'); 
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