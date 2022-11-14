
const modal = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn');
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = modalCallback.querySelector('.modal-close');


    callbackBtns.forEach(callbackBtn => {
        callbackBtn.addEventListener('click', (e) => {
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