const promoButton = document.querySelector(".promoLink");
const componLink = document.querySelector(".componLink");
const advertLink = document.querySelector(".advertLink");



promoButton.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".form__submit").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

componLink.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".form__submit").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});

advertLink.addEventListener('click', function () { 

    window.scrollTo({
        top: document.querySelector(".form__submit").getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    });

});