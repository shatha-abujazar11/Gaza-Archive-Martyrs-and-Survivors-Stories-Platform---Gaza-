const copyBtn = document.getElementById("copyEmailBtn");
const emailEl = document.getElementById("contactEmail");
const toast   = document.getElementById("copyToast");

copyBtn?.addEventListener("click", async () => {
  try {
    const email = emailEl?.textContent?.trim() || "";
    await navigator.clipboard.writeText(email);
    if (toast) {
      toast.hidden = false;
      setTimeout(() => toast.hidden = true, 1500);
    }
  } catch (e) {
    alert("لم نتمكن من النسخ تلقائيًا. انسخ البريد يدويًا من الرابط.");
  }
});
const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = contactForm.name?.value?.trim() || '';
      const email = contactForm.email?.value?.trim() || '';
      const message = contactForm.message?.value?.trim() || '';

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !email || !emailOk || !message) {
        contactStatus.textContent = 'تحقق من البيانات: الاسم والبريد والرسالة مطلوبة، والبريد يجب أن يكون صحيحًا.';
        contactStatus.className = 'form-status error';
        return;
      }
      contactStatus.textContent = 'تم إرسال رسالتك (محاكاة). سنفعّل الإرسال الحقيقي عند ربط الواجهة الخلفية.';
      contactStatus.className = 'form-status success';
      contactForm.reset();
    });
  }