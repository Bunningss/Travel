// preloader
const preLoader = document.querySelector('.preloader');
window.onload = function() {
    preLoader.style.display = 'none';
}

// Menu toggle
const toggleBtn = document.querySelector('.toggle');
const landingPage = document.querySelector('.landing');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    landingPage.classList.toggle('active');
})

