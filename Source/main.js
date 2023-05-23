
const mobileNav = () => {
    const headerBtn = document.querySelector('.Header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile__nav-link')
   
    // state
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', ()=> {
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen === true) {
            mobileNav.style.display = 'flex'
            document.body.style.overflowY = 'hidden'
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';

        }

})
mobileLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        isMobileNavOpen = false;
        mobileNav.style.display = 'none'
        document.body.style.overflowY = 'auto'
    })
});
};

mobileNav();

const darkMode = () => {

    const themeToggleBtn = document.querySelectorAll('#toggle');
    // state 
    const theme = localStorage.getItem('theme');
    // ommonut
    theme && document.body.classList.add('theme');
    // handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle ('light-mode');
            if (document.body.classList.contains('light-mode')){
                localStorage.setItem('theme','light-mode');

            } else {
                document.body.removeAttribute('class')
            }

    };

// events
    themeToggleBtn.forEach((btn) => 
        btn.addEventListener('click', handleThemeToggle )
    );
};
    
darkMode ();


const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy') 

    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target
                img.src = img.dataset.src
                img.classList.remove('loading');
                img.classList.add('loaded')
                observer.unobserve(img);

            }
        })
    
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img)
    });

}

lazyLoading();