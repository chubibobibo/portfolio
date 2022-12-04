function reveal() {
    var revealCont = document.querySelectorAll('.jsCont')
    console.log('hello')
    for (var i = 0; i < revealCont.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealCont[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            revealCont[i].classList.add('active')
        } else {
            revealCont[i].classList.remove('active');
        }

    }
}
window.addEventListener('scroll', reveal)