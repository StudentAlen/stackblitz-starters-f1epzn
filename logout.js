const logoutUser = document.getElementById('logout');

logoutUser.addEventListener('click', function(e) {
    localStorage.removeItem('user');
    location.reload();
});