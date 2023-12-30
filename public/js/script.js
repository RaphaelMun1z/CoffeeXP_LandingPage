document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    verifyScroll()

    function verifyScroll() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    }

    window.onscroll = function () {
        verifyScroll()
    };
});
