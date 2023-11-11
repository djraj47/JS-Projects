window.addEventListener('scroll', function () {
    var navItems = document.querySelector('.nav-items');
    var logo = document.querySelector('.logo');
    var social = document.querySelector('.social');

    var distance = window.scrollY;

    if (distance > 50) {
        logo.style.display = 'none';
        social.style.display = 'none';
    } else {
        logo.style.display = 'block';
        social.style.display = 'block';
    }
});


// download button

document.getElementById('downloadButton').addEventListener('click', function () {
    window.location.href = 'Resume-RAJ-KIRAN (1).pdf';
});
