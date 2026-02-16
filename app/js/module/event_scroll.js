module.exports = () => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header_block');
        if (window.scrollY > 50) {
            header.classList.add('blue_bg');
        } else {
            header.classList.remove('blue_bg');
        }
    });
}