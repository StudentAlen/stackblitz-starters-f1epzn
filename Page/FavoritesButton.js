// for favorites burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const burgerCounter = document.getElementById('burgercounter');

    let burgercount = localStorage.getItem('burgercount') ? parseInt(localStorage.getItem('burgercount')) : 0;
    let burgerActive = localStorage.getItem('burgerActive') === 'true';

    // Set nilai awal di tampilan
    burgerCounter.textContent = burgercount;
    if (burgerActive) {
        burger.classList.add('clicked');
    }

    burger.addEventListener('click', () => {
        if (!burgerActive) {
            burgercount++;
            burger.classList.add('clicked');
            burgerActive = true;
        } else {
            burgercount--;
            burger.classList.remove('clicked');
            burgerActive = false;
        }

        // Update tampilan dan simpan ke localStorage
        burgerCounter.textContent = burgercount;
        localStorage.setItem('burgercount', burgercount);
        localStorage.setItem('burgerActive', burgerActive);
    });
});


// for favorites taco
document.addEventListener('DOMContentLoaded', () => {
    const taco = document.getElementById('taco');
    const tacoCounter = document.getElementById('tacocounter');

    let tacocount = localStorage.getItem('tacocount') ? parseInt(localStorage.getItem('tacocount')) : 0;
    let tacoActive = localStorage.getItem('tacoActive') === 'true';

    // Set nilai awal di tampilan
    tacoCounter.textContent = tacocount;
    if (tacoActive) {
        taco.classList.add('clicked');
    }

    taco.addEventListener('click', () => {
        if (!tacoActive) {
            tacocount++;
            taco.classList.add('clicked');
            tacoActive = true;
        } else {
            tacocount--;
            taco.classList.remove('clicked');
            tacoActive = false;
        }

        // Update tampilan dan simpan ke localStorage
        tacoCounter.textContent = tacocount;
        localStorage.setItem('tacocount', tacocount);
        localStorage.setItem('tacoActive', tacoActive);
    });
});
