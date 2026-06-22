document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  setupForm('signupForm', 'signupFeedback', 'Thanks! Please check your inbox for your free guide.');
  setupForm('contactForm', 'contactFeedback', "Thanks for reaching out! We'll reply within 1-2 business days.");

  function setupForm(formId, feedbackId, successMessage) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach((field) => {
        const value = field.value.trim();
        const isEmailField = field.type === 'email';
        if (!value || (isEmailField && !/^\S+@\S+\.\S+$/.test(value))) {
          valid = false;
        }
      });

      if (!valid) {
        feedback.textContent = 'Please fill in the required fields with a valid email address.';
        feedback.classList.add('error');
        return;
      }

      feedback.classList.remove('error');
      feedback.textContent = successMessage;
      form.reset();
    });
  }
});
