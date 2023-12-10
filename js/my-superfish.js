const liesOut = document.querySelectorAll('.top-menu>ul>li');
const liesIn = document.querySelectorAll('.top-menu>ul>li ul li');


liesOut.forEach(el => {
    if(el.childNodes.length > 3) {
        el.classList.add('arr-down');
    }
});

liesIn.forEach(el => {
    if(el.childNodes.length > 3) {
        el.classList.add('arr-right');
    }
});