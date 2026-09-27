// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const topnav = document.querySelector('.topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

topnav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    topnav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (client-side only — wire this up to a form service or
// backend endpoint of your choice, e.g. Formspree, Netlify Forms, EmailJS)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Please fill in every field.';
    formNote.style.color = '#B91C1C';
    return;
  }

  // Fallback: open the user's email client with the message pre-filled.
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:tk301839@gmail.com?subject=${subject}&body=${body}`;

  formNote.style.color = '#0D9488';
  formNote.textContent = 'Opening your email client…';
  form.reset();
});
