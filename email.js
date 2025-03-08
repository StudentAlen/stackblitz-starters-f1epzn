const email = document.querySelector('#email');
let emailValue = '';

const cekUser= localStorage.getItem('user');

if (cekUser != null) {
    document.querySelector('#register').remove();
}

email.addEventListener('keyup', function(e) {
    emailValue = e.target.value;
    console.log('email anda :', emailValue)
});

const registerForm = document.querySelector('#register');

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailValue.length == 0) {
        alert("email tidak dapat dideteksi");
    } else {
        alert("xie xie peng you!");
        localStorage.setItem ('user', emailValue);
        document.querySelector('#register').remove();
        location.reload();
    }
});