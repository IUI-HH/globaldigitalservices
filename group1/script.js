function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        document.getElementById("icon").innerHTML = "X";
    } else {
        navbar.className = "navbar";
        document.getElementById("icon").innerHTML = "&#9776;";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    var backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 200) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});