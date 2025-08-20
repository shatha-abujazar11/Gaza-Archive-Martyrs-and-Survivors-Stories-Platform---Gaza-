
window.onload = function() {
    document.getElementById('welcome-popup').style.display = 'flex';
};

  function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

const roleFilter = document.querySelector("#roleFilter");
const areaFilter = document.querySelector("#areaFilter");
const normalize = str => (str ?? "")
.replace(/[\u200e\u200f]/g , "")
.trim();
function applyFilters(){
  const selectedRole = normalize(roleFilter?.value || "all");
  const selectedArea = normalize(areaFilter?.value || "all");

   document.querySelectorAll(".card").forEach(card => {
     const role = normalize(card.dataset.role);
     const area =  normalize(card.dataset.area);
     const matchRole =(selectedRole === "all" || role === selectedRole); 
     const matchArea=(selectedArea === "all" || area === selectedArea);
     card.style.display = (matchRole && matchArea)? "": "none";
});
}
  roleFilter?.addEventListener("change" , applyFilters);
  areaFilter?.addEventListener("change" , applyFilters);
  document.addEventListener("DOMContentLoaded" , applyFilters);
 
 document.querySelectorAll(".read-more-btn").forEach(button =>{
  button.addEventListener("click" , ()=> {
  const story = button.previousElementSibling;
  story.classList.toggle("hidden");
  button.textContent = story.classList.contains("hidden")? "إقرأ المزيد":" اخفاء"
 });
});




// أكورديون
document.querySelectorAll(".accordion .acc-title").forEach(btn => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    const panel = btn.nextElementSibling;
    if (!panel) return;
    // إظهار/إخفاء بانسيابية بسيطة
    panel.style.display = expanded ? "none" : "block";
  });
});

// نسخ البريد إلى الحافظة
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

// Reveal on Scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  // متصفحات قديمة
  revealEls.forEach(el => el.classList.add("is-visible"));
}

// تمرير سلس للروابط الداخلية (إن وجدت روابط #)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const target = id && document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const topnav = document.querySelector('.topnav');
  if (burger && topnav) {
    burger.addEventListener('click', () => {
      const isOpen = topnav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  try {
    const here = location.pathname.replace(/\\/g, '/').toLowerCase();
    document.querySelectorAll('.topnav ul a').forEach(a => {
      const href = a.getAttribute("href");
      if (!href) return;
      const link = new URL(href, location.origin + location.pathname).pathname.toLowerCase();
      if (here.endsWith(link)) a.classList.add('active');
    });
  } catch (e) { }
  const revealEls = document.querySelectorAll('.card, .text-box, .figure img, .contact-card, .section');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('reveal-in'));
  }

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
  const survivorForm = document.getElementById('survivorForm');
  const survivorList = document.getElementById('survivorList');

  function escapeHTML(s = '') {
    return s.replace(/[&<>"'`=\/]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;' }[c] || c));
  }
  function addCardToDOM(story) {
    if (!survivorList) return;
    const card = document.createElement('article');
    card.className = 'card';
    const imgSrc = story.imageUrl || '../images/survivor_placeholder.jpg';

    let cityParagraph = '';
    if (story.city) {
      cityParagraph = `<p class="meta">المكان: ${escapeHTML(story.city)}</p>`;
    }

    card.innerHTML = `
    <img src="${escapeHTML(imgSrc)}" alt="قصة ناجٍ من المستخدم" loading="lazy">
    <div class="card-body">
      <h3>${escapeHTML(story.name)} - ${escapeHTML(story.age || 'غير محدد')} سنة</h3>
      <p>${escapeHTML(story.text || '')}</p>
      ${cityParagraph}
    </div>`;
    survivorList.prepend(card);
  }
  function loadUserStories() {
    if (!survivorList) return;
    const raw = localStorage.getItem('userSurvivorStories');
    const stories = raw ? JSON.parse(raw) : [];
    stories.forEach(addCardToDOM);
  }

  if (survivorForm && survivorList) {
    loadUserStories();
    survivorForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = survivorForm.querySelector('[name="s_name"]').value.trim();
      const text = survivorForm.querySelector('[name="s_text"]').value.trim();
      const age = survivorForm.querySelector('[name="s_age"]').value.trim();
      const city = survivorForm.querySelector('[name="s_city"]').value.trim();
      const imageUrl = survivorForm.querySelector('[name="s_image"]').value.trim();

      if (!name || !text) { alert('الاسم والقصة مطلوبان.'); return; }

      const raw = localStorage.getItem('userSurvivorStories');
      const stories = raw ? JSON.parse(raw) : [];
      const newStory = { name, age, city, text, imageUrl };
      stories.push(newStory);
      localStorage.setItem('userSurvivorStories', JSON.stringify(stories));
      addCardToDOM(newStory);
      survivorForm.reset();
      alert('تمت إضافة القصة (محفوظة محليًا في متصفحك).');
    });
  }
});