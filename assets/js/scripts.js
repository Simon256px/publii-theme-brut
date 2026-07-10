(function () {
    'use strict';

    // Mobile menu toggle
    var toggle = document.querySelector('.js-nav-toggle');
    var nav = document.querySelector('.js-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Footer clock (HH:MM, updated every 30s)
    var clock = document.querySelector('.js-clock');

    if (clock) {
        var tick = function () {
            var now = new Date();
            clock.textContent =
                String(now.getHours()).padStart(2, '0') +
                ':' +
                String(now.getMinutes()).padStart(2, '0');
        };
        tick();
        setInterval(tick, 30000);
    }
})();
