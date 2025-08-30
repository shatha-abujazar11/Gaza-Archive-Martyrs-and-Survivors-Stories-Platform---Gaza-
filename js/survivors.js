document.addEventListener('DOMContentLoaded', () => {
  const survivorForm = document.getElementById('survivorForm');
  const survivorList = document.getElementById('survivorList');

  // تأمين النصوص ضد حقن HTML
  function escapeHTML(s = '') {
    return s.replace(/[&<>"'`=\/]/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    }[c]));
  }

  // ربط زر "اقرأ المزيد" لبطاقة واحدة
  function bindReadMoreFor(card) {
    const btn = card.querySelector('.read-more-btn');
    const full = card.querySelector('.full-story');
    if (!btn || !full) return;
    btn.addEventListener('click', () => {
      full.classList.toggle('hidden');
      btn.textContent = full.classList.contains('hidden')
        ? 'اقرأ المزيد..'
        : 'إخفاء';
    });
  }

  // ربط زر "اقرأ المزيد" لجميع البطاقات الموجودة مسبقًا
  function bindReadMoreForAll() {
    document.querySelectorAll('.card').forEach(card => {
      bindReadMoreFor(card);
    });
  }

  // إنشاء بطاقة جديدة وإدراجها
  function addCardToDOM(story) {
    if (!survivorList) return;

    const card = document.createElement('article');
    card.className = 'card';

    const imgSrc = (story.imageUrl && story.imageUrl.trim()) || '../images/survivor_placeholder.jpg';
    const cityParagraph = story.city
      ? `<p class="meta">المكان: ${escapeHTML(story.city)}</p>`
      : '';

    card.innerHTML = `
      <img src="${escapeHTML(imgSrc)}" alt="قصة ناجٍ من المستخدم" loading="lazy">
      <div class="card-body">
        <h3>${escapeHTML(story.name)} - ${escapeHTML(story.age || 'غير محدد')} سنة</h3>
        <p>${escapeHTML(story.text || '')}</p>
        <div class="full-story hidden">
          <p>${escapeHTML(story.text || '')}</p>
        </div>
        ${cityParagraph}
        <button class="read-more-btn">اقرأ المزيد..</button>
      </div>
    `;

    survivorList.prepend(card);
    bindReadMoreFor(card); // تفعيل الزر للبطاقة الجديدة
  }

  function safeParse(json) {
    try { return JSON.parse(json); } catch { return []; }
  }

  function loadUserStories() {
    if (!survivorList) return;
    const raw = localStorage.getItem('userSurvivorStories');
    const stories = raw ? safeParse(raw) : [];
    stories.forEach(addCardToDOM);
  }

  // حمّل القصص المحفوظة محليًا
  loadUserStories();

  // ✅ فعل زر "اقرأ المزيد" للبطاقات الجاهزة في HTML
  bindReadMoreForAll();

  // معالجة نموذج الإضافة
  if (survivorForm && survivorList) {
    survivorForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const name = survivorForm.querySelector('[name="s_name"]').value.trim();
      const text = survivorForm.querySelector('[name="s_text"]').value.trim();
      const age  = survivorForm.querySelector('[name="s_age"]').value.trim();
      const city = survivorForm.querySelector('[name="s_city"]').value.trim();
      const imageUrl = survivorForm.querySelector('[name="s_image"]').value.trim();

      if (!name || !text) {
        alert('الاسم والقصة مطلوبان.');
        return;
      }

      const raw = localStorage.getItem('userSurvivorStories');
      const stories = raw ? safeParse(raw) : [];
      const newStory = { name, age, city, text, imageUrl };
      stories.push(newStory);
      localStorage.setItem('userSurvivorStories', JSON.stringify(stories));

      addCardToDOM(newStory);
      survivorForm.reset();
      alert('تمت إضافة القصة (محفوظة محليًا في متصفحك).');
    });
  }
});
