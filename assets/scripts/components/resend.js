const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  // Clone values before Netlify eats the event
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  // Fire-and-forget — don't block Netlify submission
  fetch('/.netlify/functions/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  // Let Netlify handle the rest (form capture, redirect, etc.)
});