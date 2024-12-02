document.addEventListener('DOMContentLoaded', function () {
    
    const links = document.querySelectorAll('a[href^="#"]');

    
    const audio = document.getElementById('audio');
    audio.play();

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
