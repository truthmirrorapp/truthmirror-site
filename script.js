const translations = {
  en: {
    'hero.title': "The mirror that won't lie to you.",
    'hero.subtitle': "An AI that asks the questions you've been avoiding.<br>No advice. No comfort. Just truth.",
    'hero.note': "We'll notify you when we launch on App Store and Google Play.",
    'how.title': 'How it works',
    'how.s1.title': "You write",
    'how.s1.desc': "Anything you're avoiding, repeating, or lying to yourself about.",
    'how.s2.title': "It sees what you don't",
    'how.s2.desc': "The AI names your patterns: avoidance, victim-story, intellectualizing.",
    'how.s3.title': "It asks. You answer.",
    'how.s3.desc': "No advice. No comfort. The questions you've been avoiding.",
    'waitlist.title': 'Join the waitlist',
    'waitlist.subtitle': 'Get early access. First month free for waitlist members.',
    'waitlist.placeholder': 'your@email.com',
    'waitlist.button': 'Join the waitlist',
    'waitlist.success': "Got it. We'll let you know.",
    'footer.tag': "The mirror that won't lie to you.",
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.company': 'Company',
  },
  ro: {
    'hero.title': "Oglinda care nu te va minți.",
    'hero.subtitle': "Un AI care pune întrebările pe care le-ai evitat.<br>Fără sfaturi. Fără mângâieri. Doar adevăr.",
    'hero.note': "Te anunțăm când lansăm pe App Store și Google Play.",
    'how.title': 'Cum funcționează',
    'how.s1.title': "Scrii",
    'how.s1.desc': "Orice eviți, repeți sau îți ascunzi ție însuți.",
    'how.s2.title': "Vede ce tu nu vezi",
    'how.s2.desc': "AI-ul îți numește pattern-urile: evitare, victimizare, intelectualizare.",
    'how.s3.title': "Întreabă. Tu răspunzi.",
    'how.s3.desc': "Fără sfaturi. Fără mângâieri. Întrebările pe care le-ai evitat.",
    'waitlist.title': 'Înscrie-te pe waitlist',
    'waitlist.subtitle': 'Acces timpuriu. Prima lună gratis pentru membrii waitlist.',
    'waitlist.placeholder': 'your@email.com',
    'waitlist.button': 'Înscrie-te pe waitlist',
    'waitlist.success': "Am primit. Te anunțăm.",
    'footer.tag': "Oglinda care nu te va minți.",
    'footer.legal': 'Legal',
    'footer.about': 'Despre',
    'footer.terms': 'Termeni și condiții',
    'footer.privacy': 'Politica de confidențialitate',
    'footer.contact': 'Contact',
    'footer.company': 'Companie',
  },
  es: {
    'hero.title': "El espejo que no te mentirá.",
    'hero.subtitle': "Una IA que hace las preguntas que has estado evitando.<br>Sin consejos. Sin consuelo. Solo verdad.",
    'hero.note': "Te avisamos cuando lancemos en App Store y Google Play.",
    'how.title': 'Cómo funciona',
    'how.s1.title': "Escribes",
    'how.s1.desc': "Cualquier cosa que evites, repitas o te ocultes a ti mismo.",
    'how.s2.title': "Ve lo que tú no ves",
    'how.s2.desc': "La IA nombra tus patrones: evitación, victimismo, intelectualización.",
    'how.s3.title': "Pregunta. Tú respondes.",
    'how.s3.desc': "Sin consejos. Sin consuelo. Las preguntas que has estado evitando.",
    'waitlist.title': 'Únete a la waitlist',
    'waitlist.subtitle': 'Acceso anticipado. Primer mes gratis para miembros de la waitlist.',
    'waitlist.placeholder': 'your@email.com',
    'waitlist.button': 'Únete a la waitlist',
    'waitlist.success': "Recibido. Te avisaremos.",
    'footer.tag': "El espejo que no te mentirá.",
    'footer.legal': 'Legal',
    'footer.about': 'Acerca de',
    'footer.terms': 'Términos de servicio',
    'footer.privacy': 'Política de privacidad',
    'footer.contact': 'Contacto',
    'footer.company': 'Empresa',
  },
  ja: {
    'hero.title': "あなたに嘘をつかない鏡。",
    'hero.subtitle': "あなたが避けてきた問いを投げかけるAI。<br>助言なし。慰めなし。ただ真実だけ。",
    'hero.note': "App Store と Google Play でのローンチ時にお知らせします。",
    'how.title': '仕組み',
    'how.s1.title': "書き出す",
    'how.s1.desc': "避けていること、繰り返していること、自分に嘘をついていること——何でも。",
    'how.s2.title': "あなたに見えていないものを映す",
    'how.s2.desc': "AIがあなたのパターンを名指しします: 回避、被害者の物語、理屈づけ。",
    'how.s3.title': "問いかける。あなたが答える。",
    'how.s3.desc': "助言なし。慰めなし。あなたが避けてきた問い。",
    'waitlist.title': 'ウェイトリストに登録',
    'waitlist.subtitle': '早期アクセス。ウェイトリスト会員は初月無料。',
    'waitlist.placeholder': 'your@email.com',
    'waitlist.button': 'ウェイトリストに登録',
    'waitlist.success': "受け付けました。準備ができ次第お知らせします。",
    'footer.tag': "あなたに嘘をつかない鏡。",
    'footer.legal': '法的情報',
    'footer.about': '概要',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.contact': 'お問い合わせ',
    'footer.company': '会社情報',
  },
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('tm.site.lang', lang);
}

function detectInitialLang() {
  const saved = localStorage.getItem('tm.site.lang');
  if (saved && translations[saved]) return saved;
  const browser = navigator.language.slice(0, 2);
  return translations[browser] ? browser : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(detectInitialLang());

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.classList.add('hidden');
          document.getElementById('waitlistSuccess').classList.remove('hidden');
        } else {
          alert('Something went wrong. Try again.');
        }
      } catch {
        alert('Network error. Try again.');
      }
    });
  }
});