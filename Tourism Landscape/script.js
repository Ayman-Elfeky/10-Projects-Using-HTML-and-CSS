const open = document.getElementById('open');
const close = document.getElementById('close');
const aside = document.querySelector('aside');
const main = document.querySelector('main');

function openAside() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        open.style.display = 'none';
        aside.style.display = 'block';
        close.style.display = 'block';
        main.style.display = 'none';
    }
}

function closeAside() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        open.style.display = 'block';
        close.style.display = 'none';
        aside.style.display = 'none';
        main.style.display = 'flex';
    }
}

// Reset styles when viewport width exceeds 768px
function resetStyles() {
    if (window.innerWidth > 768) {
        open.style.display = 'none'; 
        close.style.display = 'none'; 
        aside.style.display = 'block'; 
        main.style.display = 'block';  
    } else {
        // Ensure correct states for smaller screens
        open.style.display = 'block';
        close.style.display = 'none';
        aside.style.display = 'none';
        main.style.display = 'flex';
    }
}

open.addEventListener('click', openAside);
close.addEventListener('click', closeAside);
window.addEventListener('resize', resetStyles);