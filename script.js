/* ───────────────────────────────────────────
   CV BRANCHER — Landing Page Script
   ─────────────────────────────────────────── */

// ── IDIOMA (ES / EN) ──
const I18N = {
  es: {
    'nav.features': 'Características',
    'nav.how': 'Cómo funciona',
    'nav.pricing': 'Precios',
    'nav.cta': 'Obtener ahora',
    'hero.title': 'Tu próximo trabajo<br />empieza con un<br /><span class="gradient-text">CV perfecto</span>',
    'hero.subtitle': 'CV Brancher es la aplicación de escritorio que transforma la forma en que creas tu currículum. Plantillas profesionales, editor inteligente y exportación instantánea en PDF.',
    'hero.cta': 'Disponible en Microsoft Store',
    'trust.label': 'Diseñado para profesionales de todas las industrias',
    'trust.corporate': 'Corporativo',
    'trust.tech': 'Tech',
    'trust.health': 'Salud',
    'trust.creative': 'Creativo',
    'trust.finance': 'Finanzas',
    'trust.education': 'Educación',
    'features.tag': 'Características',
    'features.title': 'Todo lo que necesitas para <span class="gradient-text">destacar</span>',
    'features.subtitle': 'CV Brancher combina diseño profesional con tecnología inteligente para que tu CV abra puertas.',
    'feat.smart.t': 'MCP server integrado',
    'feat.smart.d': 'Con el MCP integrado puedes crear CVs automáticamente con Claude u opencode.',
    'feat.templates.t': 'Plantillas premium',
    'feat.templates.d': 'Diseños modernos y clásicos para cualquier industria. Actualizadas constantemente.',
    'feat.export.t': 'Exportación perfecta',
    'feat.export.d': 'Genera PDFs de alta resolución listos para enviar, imprimir o subir a portales de empleo.',
    'feat.multiversion.t': 'Multi-versión de CV',
    'feat.multiversion.d': 'Crea y gestiona distintas versiones de tu currículum para diferentes puestos o industrias desde un solo lugar.',
    'feat.multilang.t': 'Multiidioma',
    'feat.multilang.d': 'Genera tu CV en español o inglés con solo un clic.',
    'feat.preview.t': 'Vista previa en tiempo real',
    'feat.preview.d': 'Cada cambio que realizas se refleja instantáneamente en la vista previa del documento. Sin sorpresas al exportar.',
    'feat.offline.t': '100% offline',
    'feat.offline.d': 'Tus datos nunca salen de tu equipo. Privacidad total sin necesidad de conexión.',
    'feat.autosave.t': 'Guardado automático',
    'feat.autosave.d': 'Nunca pierdas tu progreso. CV Brancher guarda tu trabajo en segundo plano continuamente.',
    'how.tag': 'Proceso',
    'how.title': 'Tu CV listo en <span class="gradient-text">3 pasos</span>',
    'how.subtitle': 'Sin curva de aprendizaje. Sin complicaciones. Solo resultados.',
    'how.step1.t': 'Completa tu perfil',
    'how.step1.d': 'Ingresa tu información personal, experiencia laboral, educación y habilidades en formularios claros y guiados.',
    'how.step2.t': 'Elige tu plantilla',
    'how.step2.d': 'Explora diseños profesionales y aplica el que mejor represente tu perfil e industria.',
    'how.step3.t': 'Exporta y envía',
    'how.step3.d': 'Descarga tu CV en PDF de calidad profesional y comienza a postular con confianza.',
    'hero.vf1': 'Editor en tiempo real',
    'hero.vf2': 'Cambio de plantilla instantáneo',
    'hero.vf3': 'Exportación a PDF en 1 clic',
    'hero.vf4': 'Gestión de múltiples versiones',
    'tpl.tag': 'Plantillas',
    'tpl.title': 'Diseños que <span class="gradient-text">impresionan</span>',
    'tpl.subtitle': 'Plantillas diseñadas por expertos en RRHH y diseño gráfico.',
    'tpl.name1': 'Moderno Pro',
    'tpl.tag1': 'Popular',
    'tpl.name2': 'Minimalista',
    'tpl.tag2': 'Elegante',
    'tpl.name3': 'Creativo',
    'tpl.tag3': 'Diseño',
    'tpl.name4': 'Ejecutivo',
    'tpl.tag4': 'Corporativo',
    'tpl.more': 'Y mucho más...',
    'tpl.cta': 'Explorar todas las plantillas',
    'test.tag': 'Testimonios',
    'test.title': 'Lo que dicen <span class="gradient-text">nuestros usuarios</span>',
    'test.1': '"CV Brancher me ayudó a conseguir entrevistas en 3 empresas la primera semana. Las plantillas son increíblemente profesionales y el editor es muy intuitivo."',
    'test.role1': 'Desarrollador Backend',
    'test.2': '"Llevaba meses sin actualizar mi CV porque no sabía cómo organizarlo. Con CV Brancher lo tuve listo en 20 minutos. ¡Increíble!"',
    'test.role2': 'Diseñadora UX',
    'test.3': '"La función de múltiples versiones es oro puro. Tengo un CV para startups y otro para empresas grandes. Todo desde la misma app."',
    'test.role3': 'Product Manager',
    'price.tag': 'Precios',
    'price.title': 'Invierte en tu <span class="gradient-text">carrera</span>',
    'price.subtitle': 'Un precio justo por una herramienta que puede cambiar tu vida profesional.',
    'price.free.period': 'Prueba 7 días · todas las funciones',
    'price.free.period': '3 días · todas las funciones',
    'price.trial.badge': '⏱ Prueba gratuita · 3 días',
    'price.trial.name': 'Trial',
    'price.free.period': 'Acceso completo sin restricciones',
    'price.free.f1': 'Todas las plantillas incluidas',
    'price.free.f2': 'Exportación HD en PDF',
    'price.free.f3': 'CVs ilimitados',
    'price.free.f4': 'Multi-versión ilimitada',
    'price.free.f6': 'Generación de CV con IA',
    'price.free.f7': 'MCP · integración completa',
    'price.free.cta': 'Descargar gratis',
    'price.badge': 'Más popular',
    'price.launch': '🚀 Precio lanzamiento',
    'price.pro.period': 'pago único · sin suscripción',
    'price.pro.f1': 'Plantillas premium',
    'price.pro.f2': 'Exportación HD en PDF',
    'price.pro.f3': 'CVs ilimitados',
    'price.pro.f4': 'Multi-versión ilimitada',
    'price.pro.f5': 'Actualizaciones de por vida',
    'price.pro.cta': 'Obtener en Microsoft Store',
    'price.note': 'Compra segura a través de Microsoft Store. Garantía de reembolso de 14 días.',
    'final.title': 'Empieza hoy. Tu carrera<br />te lo va a agradecer.',
    'final.subtitle': 'Descarga CV Brancher gratis desde Microsoft Store y crea tu primer CV profesional en minutos.',
    'final.cta': 'Descargar en Microsoft Store',
    'final.badge': 'Aplicación certificada por Microsoft · 100% segura',
    'footer.tagline': 'La forma más inteligente de crear tu currículum profesional en Windows.',
    'footer.product': 'Producto',
    'footer.nav.features': 'Características',
    'footer.nav.how': 'Cómo funciona',
    'footer.nav.pricing': 'Precios',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos de uso',
    'footer.cookies': 'Política de cookies',
    'footer.contact': 'Contacto',
    'footer.help': 'Centro de ayuda',
    'footer.copyright': '© 2026 CV Brancher. Todos los derechos reservados.',
    'footer.made': 'Hecho<i class="ph ph-heart-fill" style="color:#35cc33"></i> para profesionales'
  },
  en: {
    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.cta': 'Get it now',
    'hero.title': 'Your next job<br />starts with a<br /><span class="gradient-text">perfect resume</span>',
    'hero.subtitle': 'CV Brancher is the desktop app that transforms the way you create your resume. Professional templates, smart editor, and instant PDF export.',
    'hero.cta': 'Available on Microsoft Store',
    'trust.label': 'Designed for professionals across every industry',
    'trust.corporate': 'Corporate',
    'trust.tech': 'Tech',
    'trust.health': 'Healthcare',
    'trust.creative': 'Creative',
    'trust.finance': 'Finance',
    'trust.education': 'Education',
    'features.tag': 'Features',
    'features.title': 'Everything you need to <span class="gradient-text">stand out</span>',
    'features.subtitle': 'CV Brancher combines professional design with smart technology so your resume opens doors.',
    'feat.smart.t': 'Built-in MCP server',
    'feat.smart.d': 'With the built-in MCP you can create resumes automatically with Claude or opencode.',
    'feat.templates.t': 'Premium templates',
    'feat.templates.d': 'Modern and classic designs for any industry. Constantly updated.',
    'feat.export.t': 'Perfect export',
    'feat.export.d': 'Generate high-resolution PDFs ready to send, print, or upload to job portals.',
    'feat.multiversion.t': 'Multi-version resumes',
    'feat.multiversion.d': 'Create and manage different versions of your resume for different roles or industries from a single place.',
    'feat.multilang.t': 'Multilingual',
    'feat.multilang.d': 'Generate your resume in Spanish or English with just one click.',
    'feat.preview.t': 'Real-time preview',
    'feat.preview.d': 'Every change you make is reflected instantly in the document preview. No surprises when exporting.',
    'feat.offline.t': '100% offline',
    'feat.offline.d': 'Your data never leaves your computer. Total privacy with no connection required.',
    'feat.autosave.t': 'Auto-save',
    'feat.autosave.d': 'Never lose your progress. CV Brancher continuously saves your work in the background.',
    'how.tag': 'Process',
    'how.title': 'Your resume ready in <span class="gradient-text">3 steps</span>',
    'how.subtitle': 'No learning curve. No complications. Just results.',
    'how.step1.t': 'Complete your profile',
    'how.step1.d': 'Enter your personal information, work experience, education, and skills in clear, guided forms.',
    'how.step2.t': 'Choose your template',
    'how.step2.d': 'Browse over 50 professional designs and apply the one that best represents your profile and industry.',
    'how.step3.t': 'Export and send',
    'how.step3.d': 'Download your resume as a professional-quality PDF and start applying with confidence.',
    'hero.vf1': 'Real-time editor',
    'hero.vf2': 'Instant template switching',
    'hero.vf3': '1-click PDF export',
    'hero.vf4': 'Multi-version management',
    'tpl.tag': 'Templates',
    'tpl.title': 'Designs that <span class="gradient-text">impress</span>',
    'tpl.subtitle': 'Templates designed by HR and graphic design experts.',
    'tpl.name1': 'Modern Pro',
    'tpl.tag1': 'Popular',
    'tpl.name2': 'Minimalist',
    'tpl.tag2': 'Elegant',
    'tpl.name3': 'Creative',
    'tpl.tag3': 'Design',
    'tpl.name4': 'Executive',
    'tpl.tag4': 'Corporate',
    'tpl.more': 'And much more...',
    'tpl.cta': 'Explore all templates',
    'test.tag': 'Testimonials',
    'test.title': 'What <span class="gradient-text">our users</span> say',
    'test.1': '"CV Brancher helped me get interviews at 3 companies in the first week. The templates are incredibly professional and the editor is very intuitive."',
    'test.role1': 'Backend Developer',
    'test.2': '"I had gone months without updating my resume because I didn\'t know how to organize it. With CV Brancher I had it ready in 20 minutes. Amazing!"',
    'test.role2': 'UX Designer',
    'test.3': '"The multi-version feature is pure gold. I have one resume for startups and another for large companies. All from the same app."',
    'test.role3': 'Product Manager',
    'price.tag': 'Pricing',
    'price.title': 'Invest in your <span class="gradient-text">career</span>',
    'price.subtitle': 'A fair price for a tool that can change your professional life.',
    'price.free.period': '3-day trial · all features',
    'price.trial.badge': '⏱ Free trial · 3 days',
    'price.trial.name': 'Trial',
    'price.free.period': 'Full access, no restrictions',
    'price.free.f1': 'All templates included',
    'price.free.f2': 'HD PDF export',
    'price.free.f3': 'Unlimited resumes',
    'price.free.f4': 'Unlimited multi-version',
    'price.free.f6': 'AI-powered CV generation',
    'price.free.f7': 'MCP · full integration',
    'price.free.cta': 'Download free',
    'price.badge': 'Most popular',
    'price.launch': '🚀 Launch price',
    'price.pro.period': 'one-time payment · no subscription',
    'price.pro.f1': 'Premium templates',
    'price.pro.f2': 'HD PDF export',
    'price.pro.f3': 'Unlimited resumes',
    'price.pro.f4': 'Unlimited multi-version',
    'price.pro.f5': 'Lifetime updates',
    'price.pro.cta': 'Get it on Microsoft Store',
    'price.note': 'Secure purchase through Microsoft Store. 14-day money-back guarantee.',
    'final.title': 'Start today. Your career<br />will thank you.',
    'final.subtitle': 'Download CV Brancher for free from Microsoft Store and create your first professional resume in minutes.',
    'final.cta': 'Download from Microsoft Store',
    'final.badge': 'Microsoft-certified application · 100% safe',
    'footer.tagline': 'The smartest way to create your professional resume on Windows.',
    'footer.product': 'Product',
    'footer.nav.features': 'Features',
    'footer.nav.how': 'How it works',
    'footer.nav.pricing': 'Pricing',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of use',
    'footer.cookies': 'Cookie policy',
    'footer.contact': 'Contact',
    'footer.help': 'Help center',
    'footer.copyright': '© 2026 CV Brancher. All rights reserved.',
    'footer.made': 'Made<i class="ph ph-heart-fill" style="color:#35cc33"></i> for professionals'
  }
};

const META = {
  es: {
    title: 'CV Brancher – Crea tu CV Profesional en Minutos',
    description: 'CV Brancher es la app de escritorio más inteligente para crear currículums profesionales. Disponible en Microsoft Store.'
  },
  en: {
    title: 'CV Brancher – Create Your Professional Resume in Minutes',
    description: 'CV Brancher is the smartest desktop app for creating professional resumes. Available on Microsoft Store.'
  }
};

function applyLang(lang) {
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').setAttribute('content', META[lang].description);
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang.toUpperCase();
}

function setLang(lang) {
  localStorage.setItem('cvb-lang', lang);
  applyLang(lang);
}

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('cvb-lang'); } catch (e) {}
  const lang = (saved === 'es' || saved === 'en')
    ? saved
    : ((navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');
  applyLang(lang);
})();

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const next = document.documentElement.lang === 'es' ? 'en' : 'es';
    setLang(next);
  });
}

// ── NAVBAR scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── HAMBURGER mobile menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
  const isOpen = navLinks.classList.contains('mobile-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
  });
});

// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll(
  '.feature-card, .step, .testimonial-card, .pricing-card, .template-card, ' +
  '.vf-item, .trust-icon, .section-header'
);

// Add reveal class
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger delay based on element index within parent
      const siblings = Array.from(entry.target.parentElement.children);
      const siblingIndex = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${siblingIndex * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── TEMPLATE CARD active toggle ──
document.querySelectorAll('.template-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
