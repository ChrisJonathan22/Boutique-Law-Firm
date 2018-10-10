console.log("It works");

let titleText = document.getElementById('parallax-text');
let practice = document.getElementById('practice-areas-text');



function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        if(isVisible){
                el.style.display = "inline-block";
                el.className = 'fadeIn';
        }
        return isVisible;
    }

    isScrolledIntoView(titleText);
    isScrolledIntoView(practice);


// function isScrolledIntoView(text)
// {
//     var docViewTop = window.scrollTop();
//     var docViewBottom = docViewTop + window.clientHeight();

//     var elemTop = text.scrollTop();
//     var elemBottom = elemTop + text.clientHeight();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }