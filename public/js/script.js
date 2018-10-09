console.log("It works");

let text = document.getElementById('parallax-text');

window.addEventListener('load', () => {
        // setTimeout(() => { text.className = 'fadeIn'; }, 1000);
        text.style.display = "inline-block";
        text.className = 'fadeIn';
}, false);