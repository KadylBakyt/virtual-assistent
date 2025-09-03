// Multilingual content and assistant modal logic

(function () {
  'use strict';

  // Simple i18n dictionary
  const i18n = {
    en: {
      title: 'Astana City Hospital',
      hospitalName: 'Astana City Hospital',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title': 'Quality healthcare in the heart of Astana',
      'hero.subtitle': 'Modern diagnostics, compassionate care, and trusted specialists.',
      'hero.book': 'Book an appointment',
      'hero.viewServices': 'View services',
      'services.title': 'Our Services',
      'services.cards.0.title': 'Outpatient Clinic',
      'services.cards.0.body': 'Family medicine, pediatrics, and specialist consultations.',
      'services.cards.1.title': 'Diagnostics',
      'services.cards.1.body': 'Laboratory, ultrasound, X-ray, MRI.',
      'services.cards.2.title': 'Emergency Care',
      'services.cards.2.body': '24/7 urgent help with rapid triage.',
      'about.title': 'About our hospital',
      'about.body': 'We combine international standards with local expertise to deliver safe, patient‑centered care for the community of Astana.',
      'about.stats.0': 'Emergency',
      'about.stats.1': 'Doctors',
      'about.stats.2': 'Departments',
      'contact.title': 'Contact us',
      'contact.address': 'Astana, Kazakhstan',
      'contact.phone': '+7 700 000 00 00',
      'contact.email': 'info@astanahospital.kz',
      'contact.hours': 'Mon–Sun, 24/7 Emergency',
      'footer.rights': '© Astana City Hospital. All rights reserved.',
      'assistant.button': 'Assistant',
      'assistant.title': 'Virtual Assistant',
      'assistant.tabs.chat': 'Chat',
      'assistant.tabs.faq': 'FAQ',
      'assistant.tabs.social': 'Social',
      'assistant.tabs.contact': 'Contacts',
      'assistant.chat.placeholder': 'Type your message...',
      'assistant.chat.send': 'Send',
      'faq.q1': 'How do I make an appointment?',
      'faq.a1': 'You can call us, write an email, or use the assistant to request a callback.',
      'faq.q2': 'Do you accept insurance?',
      'faq.a2': 'Yes, we work with major insurance providers. Please bring your policy.',
      'faq.q3': 'Where are you located?',
      'faq.a3': 'We are in Astana. See the Contact section for the address.'
    },
    kk: {
      title: 'Астана қалалық ауруханасы',
      hospitalName: 'Астана қалалық ауруханасы',
      'nav.services': 'Қызметтер',
      'nav.about': 'Біз туралы',
      'nav.contact': 'Байланыс',
      'hero.title': 'Астананың жүрегіндегі сапалы медицина',
      'hero.subtitle': 'Заманауи диагностика, жанашыр күтім және сенімді мамандар.',
      'hero.book': 'Қабылдауға жазылу',
      'hero.viewServices': 'Қызметтерді көру',
      'services.title': 'Қызметтеріміз',
      'services.cards.0.title': 'Амбулатория',
      'services.cards.0.body': 'Отбасылық дәрігер, педиатрия және мамандар кеңесі.',
      'services.cards.1.title': 'Диагностика',
      'services.cards.1.body': 'Зертхана, УДЗ, рентген, МРТ.',
      'services.cards.2.title': 'Жедел жәрдем',
      'services.cards.2.body': 'Тәулік бойы шұғыл көмек.',
      'about.title': 'Аурухана туралы',
      'about.body': 'Біз халықаралық стандарттар мен жергілікті тәжірибені біріктіріп, Астана тұрғындарына қауіпсіз әрі пациентке бағытталған күтім ұсынамыз.',
      'about.stats.0': 'Жедел көмек',
      'about.stats.1': 'Дәрігер',
      'about.stats.2': 'Бөлім',
      'contact.title': 'Бізбен байланысыңыз',
      'contact.address': 'Астана, Қазақстан',
      'contact.phone': '+7 700 000 00 00',
      'contact.email': 'info@astanahospital.kz',
      'contact.hours': 'Дс–Жс, тәулік бойы жедел жәрдем',
      'footer.rights': '© Астана қалалық ауруханасы. Барлық құқықтар қорғалған.',
      'assistant.button': 'Көмекші',
      'assistant.title': 'Виртуалды көмекші',
      'assistant.tabs.chat': 'Чат',
      'assistant.tabs.faq': 'Жиі сұрақтар',
      'assistant.tabs.social': 'Әлеуметтік желі',
      'assistant.tabs.contact': 'Байланыс',
      'assistant.chat.placeholder': 'Хабарлама жазыңыз...',
      'assistant.chat.send': 'Жіберу',
      'faq.q1': 'Қалай жазыламын?',
      'faq.a1': 'Қоңырау шалыңыз, электрондық хат жазыңыз немесе кері қоңырауға өтініш қалдырыңыз.',
      'faq.q2': 'Сақтандыру қабылдайсыздар ма?',
      'faq.a2': 'Иә, негізгі сақтандыру компанияларымен жұмыс жасаймыз. Полисті алып келіңіз.',
      'faq.q3': 'Қайда орналасқансыздар?',
      'faq.a3': 'Астанадамыз. Мекенжайды Байланыс бөлімінен қараңыз.'
    },
    ru: {
      title: 'Городская больница Астаны',
      hospitalName: 'Городская больница Астаны',
      'nav.services': 'Услуги',
      'nav.about': 'О нас',
      'nav.contact': 'Контакты',
      'hero.title': 'Качественная медицинская помощь в центре Астаны',
      'hero.subtitle': 'Современная диагностика, забота и опытные специалисты.',
      'hero.book': 'Записаться на прием',
      'hero.viewServices': 'Смотреть услуги',
      'services.title': 'Наши услуги',
      'services.cards.0.title': 'Поликлиника',
      'services.cards.0.body': 'Семейная медицина, педиатрия и прием узких специалистов.',
      'services.cards.1.title': 'Диагностика',
      'services.cards.1.body': 'Лаборатория, УЗИ, рентген, МРТ.',
      'services.cards.2.title': 'Скорая помощь',
      'services.cards.2.body': 'Круглосуточная экстренная помощь.',
      'about.title': 'О нашей больнице',
      'about.body': 'Мы объединяем международные стандарты и местный опыт, чтобы обеспечить безопасную и ориентированную на пациента помощь жителям Астаны.',
      'about.stats.0': 'Скорая помощь',
      'about.stats.1': 'Врачи',
      'about.stats.2': 'Отделения',
      'contact.title': 'Свяжитесь с нами',
      'contact.address': 'Астана, Казахстан',
      'contact.phone': '+7 700 000 00 00',
      'contact.email': 'info@astanahospital.kz',
      'contact.hours': 'Пн–Вс, скорая 24/7',
      'footer.rights': '© Городская больница Астаны. Все права защищены.',
      'assistant.button': 'Ассистент',
      'assistant.title': 'Виртуальный ассистент',
      'assistant.tabs.chat': 'Чат',
      'assistant.tabs.faq': 'FAQ',
      'assistant.tabs.social': 'Соцсети',
      'assistant.tabs.contact': 'Контакты',
      'assistant.chat.placeholder': 'Введите сообщение...',
      'assistant.chat.send': 'Отправить',
      'faq.q1': 'Как записаться на прием?',
      'faq.a1': 'Позвоните, напишите на почту или закажите обратный звонок через ассистента.',
      'faq.q2': 'Вы принимаете страхование?',
      'faq.a2': 'Да, мы работаем с основными страховыми компаниями. Возьмите полис.',
      'faq.q3': 'Где вы находитесь?',
      'faq.a3': 'Мы в Астане. Адрес в разделе Контакты.'
    },
    zh: {
      title: '阿斯塔纳市医院',
      hospitalName: '阿斯塔纳市医院',
      'nav.services': '服务',
      'nav.about': '关于',
      'nav.contact': '联系',
      'hero.title': '阿斯塔纳中心的优质医疗',
      'hero.subtitle': '现代诊断、人文关怀、值得信赖的专家团队。',
      'hero.book': '预约就诊',
      'hero.viewServices': '查看服务',
      'services.title': '我们的服务',
      'services.cards.0.title': '门诊部',
      'services.cards.0.body': '全科、儿科及专科门诊。',
      'services.cards.1.title': '诊断检查',
      'services.cards.1.body': '化验、超声、X光、核磁共振。',
      'services.cards.2.title': '急诊',
      'services.cards.2.body': '24/7 紧急救治。',
      'about.title': '关于医院',
      'about.body': '我们结合国际标准与本地经验，为阿斯塔纳社区提供安全、以患者为中心的医疗服务。',
      'about.stats.0': '急诊',
      'about.stats.1': '医生',
      'about.stats.2': '科室',
      'contact.title': '联系我们',
      'contact.address': '阿斯塔纳，哈萨克斯坦',
      'contact.phone': '+7 700 000 00 00',
      'contact.email': 'info@astanahospital.kz',
      'contact.hours': '周一至周日，急诊 24/7',
      'footer.rights': '© 阿斯塔纳市医院。保留所有权利。',
      'assistant.button': '助手',
      'assistant.title': '虚拟助手',
      'assistant.tabs.chat': '聊天',
      'assistant.tabs.faq': '常见问题',
      'assistant.tabs.social': '社交媒体',
      'assistant.tabs.contact': '联系方式',
      'assistant.chat.placeholder': '输入您的消息…',
      'assistant.chat.send': '发送',
      'faq.q1': '如何预约？',
      'faq.a1': '您可以致电、发送电子邮件，或通过助手申请回电。',
      'faq.q2': '是否接受保险？',
      'faq.a2': '是的，我们与主要保险公司合作。请携带保单。',
      'faq.q3': '你们在哪里？',
      'faq.a3': '我们在阿斯塔纳。地址见“联系”。'
    }
  };

  // State
  const langSelect = document.getElementById('lang');
  const root = document.documentElement;

  function applyTranslations(lang) {
    const dict = i18n[lang] || i18n.en;

    // data-i18n text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) el.textContent = dict[key];
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key] && 'placeholder' in el) el.placeholder = dict[key];
    });

    // Update <title>
    const titleEl = document.querySelector('title[data-i18n="title"]');
    if (titleEl && dict.title) titleEl.textContent = dict.title;

    root.lang = lang;
    localStorage.setItem('lang', lang);
  }

  // Assistant modal logic
  const modal = document.getElementById('assistant-modal');
  const btn = document.getElementById('assistant-button');
  const closeBtn = document.getElementById('assistant-close');

  function openModal() {
    modal.hidden = false;
    // Focus first tab
    const firstTab = modal.querySelector('.tab');
    firstTab && firstTab.focus();
    document.addEventListener('keydown', escClose);
  }

  function closeModal() {
    modal.hidden = true;
    btn.focus();
    document.removeEventListener('keydown', escClose);
  }

  function escClose(e) {
    if (e.key === 'Escape') closeModal();
  }

  btn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Tabs
  const tabs = Array.from(document.querySelectorAll('.assistant-tabs .tab'));
  const panels = {
    chat: document.getElementById('panel-chat'),
    faq: document.getElementById('panel-faq'),
    social: document.getElementById('panel-social'),
    contact: document.getElementById('panel-contact')
  };

  function selectTab(id) {
    tabs.forEach((t) => {
      const active = t.dataset.tab === id;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });

    Object.entries(panels).forEach(([pid, el]) => {
      const isActive = pid === id;
      el.hidden = !isActive;
      el.classList.toggle('active', isActive);
    });
  }

  tabs.forEach((t) =>
    t.addEventListener('click', () => selectTab(t.dataset.tab))
  );

  // Minimal demo chat bot
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatWindow = document.getElementById('chat-window');

  function addMessage(kind, text) {
    const msg = document.createElement('div');
    msg.className = `message ${kind}`;

    const from = document.createElement('div');
    from.className = 'from';
    from.textContent = kind === 'user' ? 'You' : 'Bot';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;

    msg.appendChild(from);
    msg.appendChild(bubble);
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function botReply(userText) {
    // Extremely simple rules; replace with real API later
    const text = userText.trim().toLowerCase();
    if (!text) return;

    if (/(hello|hi|сәлем|привет|你好)/.test(text)) {
      addMessage('bot', 'Hello! How can I help you today?');
      return;
    }
    if (/appoint|запис|жазыл|预约/.test(text)) {
      addMessage('bot', 'To book an appointment, please share your name and preferred time.');
      return;
    }
    if (/where|address|адрес|қайда|位置/.test(text)) {
      addMessage('bot', 'We are in Astana. See Contact tab for details.');
      return;
    }
    addMessage('bot', "I'm here to help with appointments, services, and contacts.");
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = chatInput.value;
    if (!val.trim()) return;
    addMessage('user', val);
    chatInput.value = '';
    setTimeout(() => botReply(val), 400);
  });

  // Boot
  const saved = localStorage.getItem('lang');
  if (saved && i18n[saved]) {
    langSelect.value = saved;
  }
  applyTranslations(langSelect.value);
  langSelect.addEventListener('change', () => applyTranslations(langSelect.value));
})();
