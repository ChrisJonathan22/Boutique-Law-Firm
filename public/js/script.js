console.log("It works");

let text = document.getElementById('parallax-text');
text.style.display = 'none';
window.addEventListener('load', () => {
        setTimeout(() => {text.style.display = '';}, 1000);
}, false);