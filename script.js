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
});const translations = {
  en: {
    'hero.title': "The mirror that won't lie to you.",
    'hero.subtitle': "An AI that asks the questions you've been avoiding.<br>No advice. No comfort. Just truth.",
    'hero.note': "We'll notify you when we launch on App Store and Google Play.",
    'demo.title': "See the mirror in action",
    'demo.subtitle': "No advice. No comfort. Just the question underneath your answer.",
    'demo.u1': "I keep putting off the talk with my boss about a raise.",
    'demo.badge': "Pattern detected · avoidance",
    'demo.a1': "How many times have you said 'next week' in the last three months?",
    'demo.u2': "...more than I'd like to admit.",
    'demo.a2': "So the conversation isn't the hard part. What are you actually protecting yourself from?",
    'how.title': 'How it works',
    'how.s1.title': "You write",
    'how.s1.desc': "Anything you're avoiding, repeating, or lying to yourself about.",
    'how.s2.title': "It sees what you don't",
    'how.s2.desc': "The AI names your patterns: avoidance, victim-story, intellectualizing.",
    'how.s3.title': "It asks. You answer.",
    'how.s3.desc': "No advice. No comfort. The questions you've been avoiding.",
    'story.title': "Not another feel-good app",
    'story.body': "Most apps are built to keep you comfortable — to flatter you and keep you scrolling. This one is built for the opposite. It's for when you're tired of being lied to, including by yourself. It won't tell you what to do. It asks the question you've been stepping around — and it remembers, so you can't tell the same story twice.",
    'faq.title': "Questions, answered",
    'faq.q1': "Is it private? Who sees what I write?",
    'faq.a1': "Your conversations stay on your device. We never sell your data and never use it to train AI models. Export or delete everything anytime. GDPR-compliant, stored in the EU.",
    'faq.q2': "How is this different from ChatGPT?",
    'faq.a2': "ChatGPT helps and explains. TruthMirror confronts. It won't hand you answers or reassurance — it asks the question under your answer, tracks your patterns over time, and won't let you avoid them.",
    'faq.q3': "Is this therapy?",
    'faq.a3': "No. TruthMirror is a self-reflection tool — not therapy, medical care, or crisis support. If you need clinical help, please see a professional.",
    'faq.q4': "What AI does it use?",
    'faq.a4': "It runs on Anthropic's Claude. Your messages are processed only to generate a reply and are never used to train models.",
    'faq.q5': "What if I write about a crisis?",
    'faq.a5': "If it detects signs of self-harm or crisis, it steps out of its role and shows emergency resources. You can also reach crisis help from any screen.",
    'faq.q6': "Can I delete everything?",
    'faq.a6': "Yes — in one tap, anytime. Nothing is held hostage.",
    'faq.q7': "Why no advice?",
    'faq.a7': "Advice is easy to nod at and easy to ignore. A question you can't answer honestly changes more than advice ever will.",
    'disclaimer.text': "TruthMirror is not a substitute for therapy or medical care. If you're in crisis, please contact a professional or your local emergency line.",
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
    'footer.disclaimer': "Not a substitute for therapy or medical care.",
  },
  ro: {
    'hero.title': "Oglinda care nu te va minți.",
    'hero.subtitle': "Un AI care pune întrebările pe care le-ai evitat.<br>Fără sfaturi. Fără mângâieri. Doar adevăr.",
    'hero.note': "Te anunțăm când lansăm pe App Store și Google Play.",
    'demo.title': "Vezi oglinda în acțiune",
    'demo.subtitle': "Fără sfaturi. Fără mângâieri. Doar întrebarea de sub răspunsul tău.",
    'demo.u1': "Tot amân discuția cu șeful despre o mărire.",
    'demo.badge': "Pattern detectat · evitare",
    'demo.a1': "De câte ori ai zis „săptămâna viitoare” în ultimele trei luni?",
    'demo.u2': "...mai des decât aș vrea să recunosc.",
    'demo.a2': "Deci nu discuția e partea grea. De ce anume te protejezi de fapt?",
    'how.title': 'Cum funcționează',
    'how.s1.title': "Scrii",
    'how.s1.desc': "Orice eviți, repeți sau îți ascunzi ție însuți.",
    'how.s2.title': "Vede ce tu nu vezi",
    'how.s2.desc': "AI-ul îți numește pattern-urile: evitare, victimizare, intelectualizare.",
    'how.s3.title': "Întreabă. Tu răspunzi.",
    'how.s3.desc': "Fără sfaturi. Fără mângâieri. Întrebările pe care le-ai evitat.",
    'story.title': "Nu încă o aplicație care te alintă",
    'story.body': "Majoritatea aplicațiilor sunt făcute să te țină comod — să te lingușească și să te țină dând scroll. Asta e făcută pentru exact opusul. E pentru momentele când te-ai săturat să fii mințit, inclusiv de tine însuți. Nu îți spune ce să faci. Pune întrebarea pe care o tot ocolești — și ține minte, ca să nu poți spune aceeași poveste de două ori.",
    'faq.title': "Întrebări, cu răspunsuri",
    'faq.q1': "E privat? Cine vede ce scriu?",
    'faq.a1': "Conversațiile tale rămân pe telefonul tău. Nu îți vindem datele și nu le folosim niciodată pentru antrenarea AI-ului. Poți exporta sau șterge totul oricând. Conform GDPR, stocate în UE.",
    'faq.q2': "Cu ce diferă de ChatGPT?",
    'faq.a2': "ChatGPT ajută și explică. TruthMirror confruntă. Nu îți dă răspunsuri sau liniștire — pune întrebarea de sub răspunsul tău, îți urmărește pattern-urile în timp și nu te lasă să le eviți.",
    'faq.q3': "E terapie?",
    'faq.a3': "Nu. TruthMirror e o unealtă de auto-reflecție — nu terapie, îngrijire medicală sau suport în criză. Dacă ai nevoie de ajutor clinic, mergi la un specialist.",
    'faq.q4': "Ce AI folosește?",
    'faq.a4': "Rulează pe Claude de la Anthropic. Mesajele tale sunt procesate doar ca să-ți dea un răspuns și nu sunt folosite niciodată pentru antrenarea modelelor.",
    'faq.q5': "Ce se întâmplă dacă scriu despre o criză?",
    'faq.a5': "Dacă detectează semne de auto-vătămare sau criză, iese din rol și îți arată resurse de urgență. Poți accesa ajutor de criză din orice ecran.",
    'faq.q6': "Pot șterge tot?",
    'faq.a6': "Da — dintr-o singură apăsare, oricând. Nimic nu e ținut ostatic.",
    'faq.q7': "De ce fără sfaturi?",
    'faq.a7': "Sfaturile sunt ușor de aprobat și ușor de ignorat. O întrebare la care nu poți răspunde sincer schimbă mai mult decât o va face vreodată un sfat.",
    'disclaimer.text': "TruthMirror nu înlocuiește terapia sau îngrijirea medicală. Dacă ești în criză, contactează un specialist sau linia locală de urgență.",
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
    'footer.disclaimer': "Nu înlocuiește terapia sau îngrijirea medicală.",
  },
  es: {
    'hero.title': "El espejo que no te mentirá.",
    'hero.subtitle': "Una IA que hace las preguntas que has estado evitando.<br>Sin consejos. Sin consuelo. Solo verdad.",
    'hero.note': "Te avisamos cuando lancemos en App Store y Google Play.",
    'demo.title': "Mira el espejo en acción",
    'demo.subtitle': "Sin consejos. Sin consuelo. Solo la pregunta que hay bajo tu respuesta.",
    'demo.u1': "Sigo posponiendo la charla con mi jefe sobre un aumento.",
    'demo.badge': "Patrón detectado · evitación",
    'demo.a1': "¿Cuántas veces has dicho «la próxima semana» en los últimos tres meses?",
    'demo.u2': "...más de lo que me gustaría admitir.",
    'demo.a2': "Entonces la conversación no es lo difícil. ¿De qué te estás protegiendo en realidad?",
    'how.title': 'Cómo funciona',
    'how.s1.title': "Escribes",
    'how.s1.desc': "Cualquier cosa que evites, repitas o te ocultes a ti mismo.",
    'how.s2.title': "Ve lo que tú no ves",
    'how.s2.desc': "La IA nombra tus patrones: evitación, victimismo, intelectualización.",
    'how.s3.title': "Pregunta. Tú respondes.",
    'how.s3.desc': "Sin consejos. Sin consuelo. Las preguntas que has estado evitando.",
    'story.title': "No es otra app para sentirte bien",
    'story.body': "La mayoría de las apps están hechas para mantenerte cómodo — para adularte y que sigas deslizando. Esta está hecha para lo contrario. Es para cuando estás cansado de que te mientan, incluido tú mismo. No te dice qué hacer. Hace la pregunta que llevas tiempo esquivando — y la recuerda, para que no puedas contar la misma historia dos veces.",
    'faq.title': "Preguntas, respondidas",
    'faq.q1': "¿Es privado? ¿Quién ve lo que escribo?",
    'faq.a1': "Tus conversaciones se quedan en tu dispositivo. Nunca vendemos tus datos ni los usamos para entrenar modelos de IA. Exporta o elimina todo cuando quieras. Cumple el RGPD, almacenado en la UE.",
    'faq.q2': "¿En qué se diferencia de ChatGPT?",
    'faq.a2': "ChatGPT ayuda y explica. TruthMirror confronta. No te da respuestas ni consuelo — hace la pregunta bajo tu respuesta, sigue tus patrones en el tiempo y no te deja evitarlos.",
    'faq.q3': "¿Esto es terapia?",
    'faq.a3': "No. TruthMirror es una herramienta de autorreflexión — no terapia, atención médica ni apoyo en crisis. Si necesitas ayuda clínica, acude a un profesional.",
    'faq.q4': "¿Qué IA usa?",
    'faq.a4': "Funciona con Claude de Anthropic. Tus mensajes se procesan solo para generar una respuesta y nunca se usan para entrenar modelos.",
    'faq.q5': "¿Qué pasa si escribo sobre una crisis?",
    'faq.a5': "Si detecta señales de autolesión o crisis, sale de su rol y muestra recursos de emergencia. También puedes acceder a ayuda en crisis desde cualquier pantalla.",
    'faq.q6': "¿Puedo borrar todo?",
    'faq.a6': "Sí — con un toque, cuando quieras. No retenemos nada.",
    'faq.q7': "¿Por qué sin consejos?",
    'faq.a7': "Los consejos son fáciles de asentir y fáciles de ignorar. Una pregunta que no puedes responder con honestidad cambia más que cualquier consejo.",
    'disclaimer.text': "TruthMirror no sustituye la terapia ni la atención médica. Si estás en crisis, contacta con un profesional o tu línea de emergencia local.",
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
    'footer.disclaimer': "No sustituye la terapia ni la atención médica.",
  },
  ja: {
    'hero.title': "あなたに嘘をつかない鏡。",
    'hero.subtitle': "あなたが避けてきた問いを投げかけるAI。<br>助言なし。慰めなし。ただ真実だけ。",
    'hero.note': "App Store と Google Play でのローンチ時にお知らせします。",
    'demo.title': "鏡の動きを見る",
    'demo.subtitle': "助言なし。慰めなし。あなたの答えの下にある問いだけ。",
    'demo.u1': "昇給について上司と話すのを、ずっと先延ばしにしている。",
    'demo.badge': "パターン検出 · 回避",
    'demo.a1': "この3か月で「来週こそ」と何回言いましたか？",
    'demo.u2': "…認めたくないくらい何度も。",
    'demo.a2': "では、難しいのは会話そのものではありませんね。あなたは本当は何から自分を守っているのですか？",
    'how.title': '仕組み',
    'how.s1.title': "書き出す",
    'how.s1.desc': "避けていること、繰り返していること、自分に嘘をついていること——何でも。",
    'how.s2.title': "あなたに見えていないものを映す",
    'how.s2.desc': "AIがあなたのパターンを名指しします: 回避、被害者の物語、理屈づけ。",
    'how.s3.title': "問いかける。あなたが答える。",
    'how.s3.desc': "助言なし。慰めなし。あなたが避けてきた問い。",
    'story.title': "もう一つの「気分が良くなる」アプリではありません",
    'story.body': "多くのアプリは、あなたを心地よくさせるために作られています——媚びて、スクロールを続けさせるために。これはその逆のために作られています。嘘をつかれることに疲れたとき——自分自身にさえも——のためのものです。何をすべきかは教えません。あなたがずっと避けてきた問いを投げかけ、そして記憶します。だから、同じ物語を二度語ることはできません。",
    'faq.title': "よくある質問",
    'faq.q1': "プライベートですか？書いた内容は誰が見ますか？",
    'faq.a1': "会話はあなたの端末内に残ります。データを販売することも、AIの訓練に使うことも一切ありません。いつでもエクスポート・削除できます。GDPR準拠、データはEU内に保存。",
    'faq.q2': "ChatGPTと何が違いますか？",
    'faq.a2': "ChatGPTは助け、説明します。TruthMirrorは向き合わせます。答えや安心を渡すのではなく、あなたの答えの下にある問いを投げかけ、時間をかけてパターンを追跡し、避けさせません。",
    'faq.q3': "これはセラピーですか？",
    'faq.a3': "いいえ。TruthMirrorは自己省察のためのツールであり、セラピー、医療、危機介入ではありません。臨床的な支援が必要な場合は専門家にご相談ください。",
    'faq.q4': "どのAIを使っていますか？",
    'faq.a4': "AnthropicのClaudeで動いています。あなたのメッセージは返答を生成するためだけに処理され、モデルの訓練には決して使われません。",
    'faq.q5': "危機について書いたらどうなりますか？",
    'faq.a5': "自傷や危機の兆候を検出すると、役割から外れて緊急時のリソースを表示します。どの画面からも危機支援にアクセスできます。",
    'faq.q6': "すべて削除できますか？",
    'faq.a6': "はい——いつでも、ワンタップで。何も人質には取りません。",
    'faq.q7': "なぜ助言しないのですか？",
    'faq.a7': "助言はうなずくのも無視するのも簡単です。正直に答えられない問いは、どんな助言よりも多くを変えます。",
    'disclaimer.text': "TruthMirrorはセラピーや医療の代わりにはなりません。危機的状況にある場合は、専門家またはお住まいの地域の緊急連絡先にご連絡ください。",
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
    'footer.disclaimer': "セラピーや医療の代わりにはなりません。",
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