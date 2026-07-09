
(function () {
  const header = document.querySelector('header');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  function syncHeader() {
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 12);
  }
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        menu.hidden = true;
      } else {
        menu.hidden = false;
      }
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (event) {
      if (menu.hidden) return;
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        alert('Please complete the required fields: name, email, and message.');
        return;
      }

      const subject = encodeURIComponent('Website inquiry from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Company: ' + company + '\n\n' +
        'Message:\n' + message
      );
      window.location.href = 'mailto:general@edgaroo.com?subject=' + subject + '&body=' + body;
    });
  }
})();
