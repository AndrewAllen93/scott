const navOpenButton = document.querySelector('#nav-open');
const navCloseButton = document.querySelector('#nav-close');
const navElement = document.querySelector('nav');

navOpenButton.addEventListener('click', function() {
    navElement.classList.add('show'); // Add the 'show' class to display the nav
});

navCloseButton.addEventListener('click', function() {
    navElement.classList.remove('show'); // Remove the 'show' class to hide the nav
});
