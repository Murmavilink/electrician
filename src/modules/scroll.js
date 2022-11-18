const scroll = () => {
    const topMenu = document.querySelector('.top-menu');
    const upBtn = document.querySelector('.up');
    const upScroll = document.getElementById('upScroll');


    const scrollToSection = (section) => {
        if(section) {
            section.scrollIntoView({
                block: "center", 
                behavior: "smooth"
            });
        }
    }

    topMenu.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.matches('li a')) {
            let link = e.target.closest('a');
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);
            
            scrollToSection(section);
        } 
    });


    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 500) {
            upBtn.style.display = 'block';
        } else {
            upBtn.style.display = 'none';
        }
    });


    upBtn.addEventListener('click', () => {
        scrollToSection(upScroll)
    });
    
}

export default scroll