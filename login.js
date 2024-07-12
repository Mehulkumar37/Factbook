document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closePopup = document.getElementById('closePopup');
    const popupWrapper = document.getElementById('popupWrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    loginBtn.addEventListener('click', function () {
        showForm('login');
    });

    registerBtn.addEventListener('click', function () {
        showForm('register');
    });

    closePopup.addEventListener('click', function () {
        popupWrapper.style.display = 'none';
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        showForm('login');
    });

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        showForm('register');
    });

    // Function to show login or register form
    function showForm(formType) {
        const forms = document.querySelectorAll('.form-box');
        forms.forEach(function (form) {
            form.style.display = 'none';
        });
        const formToShow = document.querySelector('.' + formType);
        formToShow.style.display = 'block';
        popupWrapper.style.display = 'block';
    }

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your login logic here
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your registration logic here
    });
});
