document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCounter = document.getElementById('likeCounter');
    const dislikeCounter = document.getElementById('dislikeCounter');

    // Mengambil data dari localStorage (jika ada)
    let likeCount = localStorage.getItem('nomon_likeCount') ? parseInt(localStorage.getItem('nomon_likeCount')) : 0;
    let dislikeCount = localStorage.getItem('nomon_dislikeCount') ? parseInt(localStorage.getItem('nomon_dislikeCount')) : 0;
    let likeActive = localStorage.getItem('nomon_likeActive') === 'true';
    let dislikeActive = localStorage.getItem('nomon_dislikeActive') === 'true';

    // Set nilai awal ke tampilan
    likeCounter.textContent = likeCount;
    dislikeCounter.textContent = dislikeCount;
    if (likeActive) likeBtn.classList.add('clicked');
    if (dislikeActive) dislikeBtn.classList.add('clicked');

    likeBtn.addEventListener('click', () => {
        if (!likeActive) {
            likeCount++;
            likeBtn.classList.add('clicked');
            likeActive = true;

            if (dislikeActive) {
                dislikeCount--;
                dislikeBtn.classList.remove('clicked');
                dislikeActive = false;
            }
        } else {
            likeCount--;
            likeBtn.classList.remove('clicked');
            likeActive = false;
        }

        // Update tampilan dan simpan ke localStorage
        likeCounter.textContent = likeCount;
        dislikeCounter.textContent = dislikeCount;
        localStorage.setItem('nomon_likeCount', likeCount);
        localStorage.setItem('nomon_dislikeCount', dislikeCount);
        localStorage.setItem('nomon_likeActive', likeActive);
        localStorage.setItem('nomon_dislikeActive', dislikeActive);
    });

    dislikeBtn.addEventListener('click', () => {
        if (!dislikeActive) {
            dislikeCount++;
            dislikeBtn.classList.add('clicked');
            dislikeActive = true;

            if (likeActive) {
                likeCount--;
                likeBtn.classList.remove('clicked');
                likeActive = false;
            }
        } else {
            dislikeCount--;
            dislikeBtn.classList.remove('clicked');
            dislikeActive = false;
        }

        // Update tampilan dan simpan ke localStorage
        likeCounter.textContent = likeCount;
        dislikeCounter.textContent = dislikeCount;
        localStorage.setItem('nomon_likeCount', likeCount);
        localStorage.setItem('nomon_dislikeCount', dislikeCount);
        localStorage.setItem('nomon_likeActive', likeActive);
        localStorage.setItem('nomon_dislikeActive', dislikeActive);
    });
});


// like and dislike for productbaru blog
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn2 = document.getElementById('likeBtn2');
    const dislikeBtn2 = document.getElementById('dislikeBtn2');
    const likeCounter2 = document.getElementById('likeCounter2');
    const dislikeCounter2 = document.getElementById('dislikeCounter2');

    // Mengambil data dari localStorage (jika ada)
    let likeCount2 = localStorage.getItem('French Un Café Allongé_likeCount') ? parseInt(localStorage.getItem('French Un Café Allongé_likeCount')) : 0;
    let dislikeCount2 = localStorage.getItem('French Un Café Allongé_dislikeCount') ? parseInt(localStorage.getItem('French Un Café Allongé_dislikeCount')) : 0;
    let likeActive2 = localStorage.getItem('French Un Café Allongé_likeActive') === 'true';
    let dislikeActive2 = localStorage.getItem('French Un Café Allongé_dislikeActive') === 'true';

    // Set nilai awal ke tampilan
    likeCounter2.textContent = likeCount2;
    dislikeCounter2.textContent = dislikeCount2;
    if (likeActive2) likeBtn2.classList.add('clicked');
    if (dislikeActive2) dislikeBtn2.classList.add('clicked');

    likeBtn2.addEventListener('click', () => {
        if (!likeActive2) {
            likeCount2++;
            likeBtn2.classList.add('clicked');
            likeActive2 = true;

            if (dislikeActive2) {
                dislikeCount2--;
                dislikeBtn2.classList.remove('clicked');
                dislikeActive2 = false;
            }
        } else {
            likeCount2--;
            likeBtn2.classList.remove('clicked');
            likeActive2 = false;
        }

        // Update tampilan dan simpan ke localStorage
        likeCounter2.textContent = likeCount2;
        dislikeCounter2.textContent = dislikeCount2;
        localStorage.setItem('French Un Café Allongé_likeCount', likeCount2);
        localStorage.setItem('French Un Café Allongé_dislikeCount', dislikeCount2);
        localStorage.setItem('French Un Café Allongé_likeActive', likeActive2);
        localStorage.setItem('French Un Café Allongé_dislikeActive', dislikeActive2);
    });

    dislikeBtn2.addEventListener('click', () => {
        if (!dislikeActive2) {
            dislikeCount2++;
            dislikeBtn2.classList.add('clicked');
            dislikeActive2 = true;

            if (likeActive2) {
                likeCount2--;
                likeBtn2.classList.remove('clicked');
                likeActive2 = false;
            }
        } else {
            dislikeCount2--;
            dislikeBtn2.classList.remove('clicked');
            dislikeActive2 = false;
        }

        // Update tampilan dan simpan ke localStorage
        likeCounter2.textContent = likeCount2;
        dislikeCounter2.textContent = dislikeCount2;
        localStorage.setItem('French Un Café Allongé_likeCount', likeCount2);
        localStorage.setItem('French Un Café Allongé_dislikeCount', dislikeCount2);
        localStorage.setItem('French Un Café Allongé_likeActive', likeActive2);
        localStorage.setItem('French Un Café Allongé_dislikeActive', dislikeActive2);
    });
});
