document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backgroundPosition = '50% ' + (-scrollPosition / 2) + 'px';
    document.body.style.backgroundPosition = backgroundPosition;
});
