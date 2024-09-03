
const navbarLinks = document.querySelectorAll("nav a");

const toggle = document.querySelector("#toggle")
const mode = document.querySelectorAll(".mode")


navbarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
       
      
        navbarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');


        const targetSectionId = link.getAttribute("href");


        if (targetSectionId === "#") {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
      
            document.querySelector(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');


const observerOptions = {
    root: null,
    threshold: 0.3 
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
      
            navLinks.forEach(link => link.classList.remove('active'));


         
            const sectionId = entry.target.getAttribute('id');
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}, observerOptions);



sections.forEach(section => {
    observer.observe(section);
});

let count = 0;

toggle.addEventListener('click', () => {
    switch (count) {
        case  0:
            mode.forEach(element => {
                element.classList.add('dark')
            })
            break;
        case 1:
            mode.forEach(element => {
                element.classList.remove('dark')
            element.classList.add('light')
            })
            break;
        case 2:
            mode.forEach(element => {
                element.classList.remove('light')
            })
            break;

        default:
            break;
    }
    count++
    if (count > 2) {
        count = 0;
    }
})