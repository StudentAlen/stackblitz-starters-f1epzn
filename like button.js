// Ambil elemen tombol dan angka dari HTML
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCounter = document.getElementById('likeCounter');
const dislikeCounter = document.getElementById('dislikeCounter');

// Variabel untuk menyimpan angka
let likeCount = 0;
let dislikeCount = 0;

// Fungsi untuk menambah like
likeBtn.addEventListener('click', function() {
    likeCount++;
    likeCounter.textContent = likeCount;
});

// Fungsi untuk menambah dislike
dislikeBtn.addEventListener('click', function() {
    dislikeCount++;
    dislikeCounter.textContent = dislikeCount;
});

// Ambil elemen tombol dan angka dari HTML
const likeBtn2 = document.getElementById('likeBtn2');
const dislikeBtn2 = document.getElementById('dislikeBtn2');
const likeCounter2 = document.getElementById('likeCounter2');
const dislikeCounter2 = document.getElementById('dislikeCounter2');

// Variabel untuk menyimpan angka
let likeCount2 = 0;
let dislikeCount2 = 0;

// Fungsi untuk menambah like
likeBtn2.addEventListener('click', function() {
    likeCount2++;
    likeCounter2.textContent = likeCount2;
});

// Fungsi untuk menambah dislike
dislikeBtn2.addEventListener('click', function() {
    dislikeCount2++;
    dislikeCounter2.textContent = dislikeCount2;
});
