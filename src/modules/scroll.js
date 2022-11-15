const scroll = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.matches('li a')) {
            let link = e.target.closest('a');
            console.log(link);

            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id)
    
            if(section) {
                section.scrollIntoView({
                    block: "center", 
                    behavior: "smooth"
                });
            }
      
        } 
    })
}

export default scroll