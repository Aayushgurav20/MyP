document.querySelector('.explore a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#cards').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.image a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});