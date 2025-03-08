document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCounter = document.getElementById('likeCounter');
    const dislikeCounter = document.getElementById('dislikeCounter');
    
    let likeCount = 0;
    let dislikeCount = 0;
    let likeActive = false;
    let dislikeActive = false;
    
    likeBtn.addEventListener('click', () => {
        if (!likeActive) {
            likeCount++;
            likeCounter.textContent = likeCount;
            likeBtn.classList.add('clicked');
            likeActive = true;
            
            // If dislike was active, reset it
            if (dislikeActive) {
                dislikeBtn.classList.remove('clicked');
                dislikeActive = false;
            }
        } else {
            likeCount--;
            likeCounter.textContent = likeCount;
            likeBtn.classList.remove('clicked');
            likeActive = false;
        }
    });
    
    dislikeBtn.addEventListener('click', () => {
        if (!dislikeActive) {
            dislikeCount++;
            dislikeCounter.textContent = dislikeCount;
            dislikeBtn.classList.add('clicked');
            dislikeActive = true;
            
            // If like was active, reset it
            if (likeActive) {
                likeBtn.classList.remove('clicked');
                likeActive = false;
            }
        } else {
            dislikeCount--;
            dislikeCounter.textContent = dislikeCount;
            dislikeBtn.classList.remove('clicked');
            dislikeActive = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCounter = document.getElementById('likeCounter');
    const dislikeCounter = document.getElementById('dislikeCounter');
    
    let likeCount = 0;
    let dislikeCount = 0;
    let likeActive = false;
    let dislikeActive = false;
    
    likeBtn.addEventListener('click', () => {
        if (!likeActive) {
            likeCount++;
            likeCounter.textContent = likeCount;
            likeBtn.classList.add('clicked');
            likeActive = true;
            
            // If dislike was active, reset it
            if (dislikeActive) {
                dislikeBtn.classList.remove('clicked');
                dislikeActive = false;
            }
        } else {
            likeCount--;
            likeCounter.textContent = likeCount;
            likeBtn.classList.remove('clicked');
            likeActive = false;
        }
    });
    
    dislikeBtn.addEventListener('click', () => {
        if (!dislikeActive) {
            dislikeCount++;
            dislikeCounter.textContent = dislikeCount;
            dislikeBtn.classList.add('clicked');
            dislikeActive = true;
            
            // If like was active, reset it
            if (likeActive) {
                likeBtn.classList.remove('clicked');
                likeActive = false;
            }
        } else {
            dislikeCount--;
            dislikeCounter.textContent = dislikeCount;
            dislikeBtn.classList.remove('clicked');
            dislikeActive = false;
        }
    });
});

// for favorites burger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const burgerCounter = document.getElementById('burgercount');

    let burgercount = 0;
    let burgerActive = false;
    
    likeBtn.addEventListener('click', () => {
        if (!burgerActive) {
            burgercount++;
            burgerCounter.textContent = burgercount;
            burger.classList.add('clicked');
            burgerActive = true;
        } else {
            burgercount--;
            burgerCounter.textContent = burgercount;
            burger.classList.remove('clicked');
            burgerActive = false;
        }
    });
});