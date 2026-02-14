
const toggleBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;


const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'dark') {
    htmlTag.setAttribute('data-theme', 'dark');
    toggleBtn.innerHTML = '☀️'; 
}


toggleBtn.addEventListener('click', () => {
 
    const isDark = htmlTag.getAttribute('data-theme') === 'dark';

    if (isDark) {
        
        htmlTag.setAttribute('data-theme', 'light');
        toggleBtn.innerHTML = '🌙'; 
        localStorage.setItem('theme', 'light'); 
    } else {
        
        htmlTag.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '☀️'; 
        localStorage.setItem('theme', 'dark'); 
    }
});