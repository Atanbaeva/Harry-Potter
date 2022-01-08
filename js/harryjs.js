let section = document.querySelectorAll("section");
let nalink = document.querySelectorAll("header .nav-item a");

window.onscroll = () => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('nav-link');
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('nav-link');
        });
    };
}

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});