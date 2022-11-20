const accordeon = () => {
    const accordeonElements = document.querySelectorAll('.accordeon .element');

    const removeClassActive = () => {
        accordeonElements.forEach(element => {
            element.classList.remove('active');
            element.querySelector('.element-content').style.display = 'none';
        })
    }


    accordeonElements.forEach(element => {
        element.addEventListener('click', () => {
            if(element.classList.contains('active')) {
                removeClassActive();
            } else {
                removeClassActive();
                element.classList.add('active');
                element.querySelector('.element-content').style.display = 'block';
            }
        });
    });


}


export default accordeon
