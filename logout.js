const logoutUser = document.getElementById('logout');
const cekUser = localStorage.getItem('user');

if (cekUser == null) {
    document.querySelector('#logout').remove();
}

logoutUser.addEventListener('click', function(e) {
    localStorage.removeItem('user');
    location.reload();
});