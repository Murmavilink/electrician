
const modal = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn');
    const carouselElements = document.querySelectorAll('.services-carousel a');
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = modalCallback.querySelector('.modal-close');

    const arrayElements = [...callbackBtns, ...carouselElements];

    arrayElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        });
    });


    modalClose.addEventListener('click', () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', (e) => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    });


}


export default modal