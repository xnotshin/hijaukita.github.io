// Simple interactions: nav toggle, contact form simulation, year
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuBtn && menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // contact form
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formMsg.textContent = 'Isi semua kolom dulu ya.';
        return;
      }
      // Simple fake-send (no backend). You can replace with real API later.
      formMsg.textContent = 'Mengirim...';
      setTimeout(() => {
        formMsg.textContent = 'Terima kasih! Pesanmu sudah terkirim (simulasi). Kami akan menghubungi.';
        form.reset();
      }, 900);
    });
  }

  // year
  const year = document.getElementById('year');
  year && (year.textContent = new Date().getFullYear());
});
