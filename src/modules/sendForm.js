const sendForm = (idForm) => {
    const form = document.getElementById(idForm);

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val
        });

        console.log(formBody);

        sendData(formBody).then(data => {
            console.log(data);
        });

    });


};


export default sendForm;