/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});


/* Menu hidden */
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    this, scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.claasList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionID = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']'
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        }
        else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this, scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home-data, .footer-container, .footer-group`);
sr.reveal(`.home-img`, { delay: 700, origin: 'bottom' });
sr.reveal(`.logo-img .program-card, .pricing-card`, { interval: 100 });
sr.reveal(`.choose-group, .calculate-content`, { origin: 'left' });
sr.reveal(`.choose-content, .calculate-images`, { origin: 'right' });

/*=============== CALCULATE BMI ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // Empty field validation
    if (calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-first');
        calculateMessage.classList.add('color-red');
        calculateMessage.textContent = 'Fill in the Height and Weight 👨‍💻';

        setTimeout(() => {
            calculateMessage.textContent = '';
            calculateMessage.classList.remove('color-red');
        }, 3000);

        return;
    }

    // Convert cm to meters
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    // Reset color classes first
    calculateMessage.classList.remove('color-red');
    calculateMessage.classList.add('color-first');

    // BMI categories
    if (bmi < 18.5) {
        calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`;
    }
    else if (bmi < 25) {
        calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 👌`;
    }
    else {
        calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`;
    }

    // Clear input fields
    calculateCm.value = '';
    calculateKg.value = '';

    // Remove message after 4 sec
    setTimeout(() => {
        calculateMessage.textContent = '';
        calculateMessage.classList.remove('color-first');
    }, 4000);
};

// Event listener
calculateForm.addEventListener('submit', calculateBmi);