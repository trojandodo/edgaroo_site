
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
      menu.hidden = expanded;
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
    const feedback = document.getElementById('form-feedback');
    const feedbackSubject = document.getElementById('feedback-subject');
    const feedbackBody = document.getElementById('feedback-body');
    const copyButton = document.getElementById('copy-message');
    const openEmailLink = document.getElementById('open-email-link');

    function buildEmailDraft() {
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const company = (data.get('company') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      return {
        name: name,
        email: email,
        company: company,
        message: message,
        subject: 'Website inquiry from ' + name,
        body:
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Company: ' + company + '\n\n' +
          'Message:\n' + message
      };
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const draft = buildEmailDraft();
      const mailto =
        'mailto:general@edgaroo.com?subject=' +
        encodeURIComponent(draft.subject) +
        '&body=' +
        encodeURIComponent(draft.body);

      if (feedback && feedbackSubject && feedbackBody) {
        feedback.hidden = false;
        feedbackSubject.textContent = draft.subject;
        feedbackBody.textContent = draft.body;
        if (openEmailLink) {
          openEmailLink.href = mailto;
        }
      }

      window.location.href = mailto;
    });

    if (copyButton) {
      copyButton.addEventListener('click', async function () {
        if (!form.reportValidity()) {
          return;
        }

        const draft = buildEmailDraft();

        try {
          await navigator.clipboard.writeText(
            'To: general@edgaroo.com\n' +
            'Subject: ' + draft.subject + '\n\n' +
            draft.body
          );
          copyButton.textContent = 'Copied';
          window.setTimeout(function () {
            copyButton.textContent = 'Copy message';
          }, 1500);
        } catch (error) {
          copyButton.textContent = 'Copy failed';
          window.setTimeout(function () {
            copyButton.textContent = 'Copy message';
          }, 1500);
        }
      });
    }
  }
})();
