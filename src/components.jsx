import React from "react";
import { Icon } from "./icons.jsx";
import { PHONE_DISPLAY, PHONE_E164, WA_GENERIC, WA_NUMBER, FB_URL, FB_LABEL, EMAIL, WEB, MESSAGE_MAX } from "./constants.js";

// ---------- Header -----------------------------------------------------
export const Header = ({ onContact }) => (
  <header className="l-header">
    <div className="l-container l-header__inner">
      <a href="#" className="l-header__logo">
        <img src="/assets/logo.png" alt="CA Electric" width="44" height="44"/>
        <div className="l-header__brand">CA Electric<small>Sabemos todo de electricidad</small></div>
      </a>
      <nav className="l-header__nav" aria-label="Principal">
        <a href="#servicios">Servicios</a>
        <a href="#solar">Solar</a>
        <a href="#proceso">Proceso</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="l-header__cta">
        <a className="btn btn-ghost" href={`tel:${PHONE_E164}`}><Icon name="phone" size={16}/> {PHONE_DISPLAY}</a>
        <button className="btn btn-yellow" type="button" onClick={onContact}>Cotiza hoy <span className="dot">→</span></button>
      </div>
    </div>
  </header>
);

// ---------- Hero -------------------------------------------------------
export const Hero = ({ onContact }) => (
  <section className="hero">
    <div className="l-container hero__inner">
      <div>
        <div className="hero__eyebrow"><span className="bolt">⚡</span> Zacatecas · Ingeniería certificada</div>
        <h1 className="hero__headline">
          <span className="b">Servicios eléctricos</span>
          <span className="y">y paneles solares</span>
        </h1>
        <p className="hero__lead">
          Ingeniero en energías renovables especializado en <strong>instalaciones eléctricas</strong> y <strong>sistemas de energía solar</strong>. Soluciones seguras, profesionales y a la medida — residencial, comercial e industrial.
        </p>
        <ul className="hero__features">
          <li><span className="check">✓</span>Paneles solares</li>
          <li><span className="check">✓</span>Instalaciones eléctricas</li>
          <li><span className="check">✓</span>Calentadores solares</li>
          <li><span className="check">✓</span>Puesta a tierra</li>
          <li><span className="check">✓</span>Plantas de emergencia</li>
          <li><span className="check">✓</span>Media tensión</li>
        </ul>
        <div className="hero__actions">
          <button className="btn btn-primary btn-lg" type="button" onClick={onContact}>Solicita cotización <span className="dot">→</span></button>
          <a className="btn btn-wa btn-lg" href={WA_GENERIC} target="_blank" rel="noopener noreferrer"><Icon name="wa" size={18}/> WhatsApp</a>
        </div>
      </div>
      <div className="hero__media">
        <div className="shape-y"></div>
        <div className="shape-b"></div>
        <div className="photo">
          <picture>
            <source srcSet="/assets/photo-instalacion.avif" type="image/avif"/>
            <img src="/assets/photo-instalacion.png" alt="Electricista trabajando en instalación" width="1200" height="1600" loading="eager" decoding="async" fetchPriority="high"/>
          </picture>
        </div>
        <div className="hero__badge">
          <div className="seal"><Icon name="shield" size={22}/></div>
          <div className="text">Trabajo garantizado<small>Diagnóstico y cotización sin costo</small></div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Services ---------------------------------------------------
const SERVICES = [
  { ico: "sun",    title: "Paneles solares",          desc: "Para casas, negocios e industrias. Reduce hasta 80% tu recibo de luz." },
  { ico: "zap",    title: "Instalaciones eléctricas", desc: "Residenciales, comerciales e industriales. Cableado, contactos y tableros." },
  { ico: "wrench", title: "Mantenimiento eléctrico",  desc: "Preventivo y correctivo. Diagnóstico especializado y detección de fallas." },
  { ico: "flame",  title: "Calentadores solares",     desc: "Instalación de sistemas térmicos para agua caliente con ahorro de gas." },
  { ico: "ground", title: "Puesta a tierra",          desc: "Sistemas que protegen equipo, instalaciones y vidas frente a descargas." },
  { ico: "shield", title: "Plantas de emergencia",    desc: "Diseño, instalación y mantenimiento de respaldo eléctrico continuo." },
  { ico: "panel",  title: "Media tensión",            desc: "Proyectos industriales, subestaciones, pruebas y puesta en marcha." },
  { ico: "file",   title: "Diagnóstico y cotización", desc: "Visita técnica para sistemas eléctricos y solares. Sin compromiso." },
];

export const Services = ({ onContact }) => (
  <section className="l-section" id="servicios">
    <div className="l-container">
      <div className="l-eyebrow">¿Qué hacemos?</div>
      <h2 className="l-section-title">Servicios <span className="y">técnicos</span></h2>
      <p className="l-section-lead">Cubrimos todo el ciclo eléctrico: desde una falla puntual hasta proyectos de media tensión. Trabajo certificado, materiales de calidad y garantía por escrito.</p>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <div className="svc-card" key={s.title} onClick={onContact} role="button" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onContact()}>
            <div className="hex"><Icon name={s.ico} size={26}/></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="more">Cotizar <Icon name="arrow" size={14}/></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Stats band -------------------------------------------------
export const Stats = () => (
  <section className="l-section dark">
    <div className="l-container stats">
      <div className="stat"><div className="num">80<small>%</small></div><div className="lbl">Ahorro promedio en el recibo con paneles solares</div></div>
      <div className="stat"><div className="num">100<small>%</small></div><div className="lbl">Trabajos con garantía por escrito y materiales certificados</div></div>
      <div className="stat"><div className="num">24<small>h</small></div><div className="lbl">Respuesta a urgencias eléctricas en Zacatecas</div></div>
      <div className="stat"><div className="num">+200</div><div className="lbl">Proyectos eléctricos y solares completados</div></div>
    </div>
  </section>
);

// ---------- Solar value-prop -------------------------------------------
export const Solar = ({ onContact }) => (
  <section className="l-section alt" id="solar">
    <div className="l-container solar">
      <div>
        <div className="l-eyebrow">Paneles solares</div>
        <h2 className="l-section-title">Reduce tu <span className="y">recibo de luz</span></h2>
        <p className="l-section-lead">
          Convierte el sol en ahorro 💡. Instala paneles solares y nota la diferencia desde el primer recibo — instalación certificada y trámites ante CFE incluidos.
        </p>
        <ul className="solar__features">
          <li><span className="ico">✓</span>Ahorro inmediato desde el primer recibo</li>
          <li><span className="ico">✓</span>Instalación certificada con garantía</li>
          <li><span className="ico">✓</span>Trámites CFE incluidos sin costo extra</li>
          <li><span className="ico">✓</span>Casas, negocios e industrias</li>
          <li><span className="ico">✓</span>Soporte técnico durante toda la vida útil</li>
        </ul>
        <div className="solar__cta">
          <button className="btn btn-primary btn-lg" type="button" onClick={onContact}>Solicita tu cotización <span className="dot"><Icon name="arrow" size={12}/></span></button>
          <a className="btn btn-outline btn-lg" href={WA_GENERIC} target="_blank" rel="noopener noreferrer"><Icon name="wa" size={16}/> WhatsApp</a>
        </div>
      </div>
      <div className="solar__media">
        <picture>
          <source srcSet="/assets/photo-panel.avif" type="image/avif"/>
          <img src="/assets/photo-panel.jpeg" alt="Instalación de paneles solares" width="900" height="900" loading="lazy" decoding="async"/>
        </picture>
        <div className="solar__savings">
          <span className="big">−80%</span>
          <span className="lbl">en tu recibo</span>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Process ----------------------------------------------------
const STEPS = [
  { n: "01", title: "Contacto", desc: "Nos escribes por WhatsApp o llamas. Te respondemos el mismo día." },
  { n: "02", title: "Diagnóstico", desc: "Visita técnica para revisar tu instalación o recibo de luz. Sin costo." },
  { n: "03", title: "Cotización", desc: "Propuesta clara, con materiales, tiempos y garantías por escrito." },
  { n: "04", title: "Instalación", desc: "Trabajo profesional, certificado y con trámites ante CFE incluidos." },
];

export const Process = () => (
  <section className="l-section marfil" id="proceso">
    <div className="l-container">
      <div className="l-eyebrow">Cómo trabajamos</div>
      <h2 className="l-section-title">Tu proyecto en <span className="y">4 pasos</span></h2>
      <p className="l-section-lead">Sin sorpresas. Cada etapa con su entregable, comunicación directa y precio cerrado antes de empezar.</p>
      <div className="steps">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step__num">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- About / Engineer ------------------------------------------
export const About = () => (
  <section className="l-section" id="nosotros">
    <div className="l-container about">
      <div className="about__media">
        <picture>
          <source srcSet="/assets/photo-instalacion.avif" type="image/avif"/>
          <img src="/assets/photo-instalacion.png" alt="Ingeniero CA Electric" width="1200" height="1600" loading="lazy" decoding="async"/>
        </picture>
        <div className="about__stamp"><Icon name="shield" size={14}/> Ingeniero certificado</div>
      </div>
      <div>
        <div className="l-eyebrow">Quién está detrás</div>
        <h2 className="l-section-title">Ingeniería <span className="y">de confianza</span></h2>
        <p className="l-section-lead">
          Soy <strong>ingeniero en energías renovables</strong>, especializado en instalaciones eléctricas y sistemas de energía solar. Atiendo personalmente cada proyecto en Zacatecas y alrededores — desde una falla en casa hasta media tensión industrial.
        </p>
        <div className="about__quote">"Sabemos todo de electricidad."</div>
        <p style={{ color: "var(--fg-2)", fontSize: 15, lineHeight: 1.55, margin: "0 0 22px" }}>
          Trabajo con materiales certificados, garantía por escrito y compromiso de cumplir tiempos. Si no puedo resolverlo, lo digo desde el principio.
        </p>
        <div className="about__certs">
          <span>Energías renovables</span>
          <span>Instalaciones certificadas</span>
          <span>Trámites CFE</span>
          <span>Media tensión</span>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Before / After --------------------------------------------
export const BeforeAfter = () => (
  <section className="l-section alt" id="casos">
    <div className="l-container">
      <div className="l-eyebrow">Trabajos reales</div>
      <h2 className="l-section-title">De problema <span className="y">→ solucionado</span></h2>
      <p className="l-section-lead">Así queda un trabajo bien hecho: reemplazo y orden completo de tablero, con materiales certificados y memoria de cálculo entregada.</p>
      <div className="ba">
        <div className="ba__tile">
          <span className="ba__label">Antes</span>
          <div className="ba__crop ba__crop--left"></div>
        </div>
        <div className="ba__arrow" aria-hidden="true">→</div>
        <div className="ba__tile">
          <span className="ba__label" style={{ background: "var(--ca-yellow-500)", color: "var(--ca-blue-700)" }}>Después</span>
          <div className="ba__crop ba__crop--right"></div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Urgency ----------------------------------------------------
export const Urgency = () => (
  <section className="l-section">
    <div className="l-container">
      <div className="urg">
        <div>
          <div className="urg__warn"><Icon name="alert" size={42}/></div>
          <h2>¿Tu instalación es <span className="y">segura?</span></h2>
          <p>Podría ser más grave de lo que crees. No ignores una falla eléctrica — un diagnóstico especializado evita riesgos, incendios y reparaciones costosas.</p>
          <a href={`tel:${PHONE_E164}`} className="urg__phone"><span className="pcircle"><Icon name="phone" size={16}/></span> {PHONE_DISPLAY}</a>
        </div>
        <div className="urg__media">
          <picture>
            <source srcSet="/assets/sample-diagnostico.avif" type="image/avif"/>
            <img src="/assets/sample-diagnostico.png" alt="Diagnóstico especializado" width="900" height="1600" loading="lazy" decoding="async"/>
          </picture>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Coverage / Zacatecas --------------------------------------
const ZacatecasMap = () => (
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.18)"/>
      </pattern>
    </defs>
    <rect width="400" height="300" fill="var(--ca-blue-700)"/>
    <rect width="400" height="300" fill="url(#dots)"/>
    <path d="M70 80 Q90 50 130 55 L180 60 Q220 50 260 70 L300 90 Q330 110 320 150 L310 200 Q290 240 240 245 L180 240 Q130 245 100 220 L80 180 Q60 140 70 80 Z"
          fill="var(--ca-blue-600)" stroke="var(--ca-yellow-500)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M120 100 Q180 140 230 130 Q280 125 300 160" fill="none" stroke="rgba(248,201,42,.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
    <path d="M140 200 Q190 180 240 195 Q280 205 305 180" fill="none" stroke="rgba(248,201,42,.25)" strokeWidth="1.5" strokeDasharray="4 4"/>
  </svg>
);

export const Coverage = () => (
  <section className="l-section" id="cobertura">
    <div className="l-container coverage">
      <div className="coverage__map">
        <ZacatecasMap/>
        <div className="coverage__pin" style={{ left: "32%", top: "48%" }}><span className="dot"></span> Zacatecas Capital</div>
        <div className="coverage__pin" style={{ left: "55%", top: "28%" }}><span className="dot"></span> Fresnillo</div>
        <div className="coverage__pin" style={{ left: "20%", top: "70%" }}><span className="dot"></span> Jerez</div>
        <div className="coverage__pin" style={{ left: "62%", top: "68%" }}><span className="dot"></span> Guadalupe</div>
      </div>
      <div>
        <div className="l-eyebrow">Cobertura</div>
        <h2 className="l-section-title">Servicio en <span className="y">Zacatecas</span> y alrededores</h2>
        <p className="l-section-lead">
          Atendemos toda la zona metropolitana y municipios cercanos. Si tu proyecto está fuera de esta lista, escríbenos — coordinamos visita técnica.
        </p>
        <ul className="coverage__list">
          <li><span className="pin"></span>Zacatecas Capital</li>
          <li><span className="pin"></span>Guadalupe</li>
          <li><span className="pin"></span>Fresnillo</li>
          <li><span className="pin"></span>Jerez de García Salinas</li>
          <li><span className="pin"></span>Calera de Víctor Rosales</li>
          <li><span className="pin"></span>Sombrerete, Río Grande y zonas industriales</li>
        </ul>
      </div>
    </div>
  </section>
);

// ---------- FAQ -------------------------------------------------------
const FAQS = [
  { q: "¿Cuánto puedo ahorrar con paneles solares?", a: "Depende de tu consumo y tarifa, pero los proyectos típicos para casa logran entre 70% y 90% de reducción en el recibo de CFE desde el primer mes. Hacemos el cálculo basado en tu recibo actual antes de cotizar." },
  { q: "¿Incluyen los trámites ante CFE?", a: "Sí. Desde alta de servicio hasta interconexión bidireccional para paneles solares y cambio de tarifa — los trámites están incluidos en la cotización, sin cobros sorpresa." },
  { q: "¿Atienden urgencias eléctricas?", a: `Sí. Respondemos a urgencias en Zacatecas Capital y zona metropolitana. Llámanos directamente al ${PHONE_DISPLAY} y damos seguimiento el mismo día.` },
  { q: "¿Qué garantía dan?", a: "Garantía por escrito en mano de obra (mínimo 1 año), más la garantía de fabricante en equipo y paneles (de 10 a 25 años según la marca). Te entregamos pólizas y memoria de cálculo." },
  { q: "¿Trabajan proyectos industriales o solo residenciales?", a: "Trabajamos los tres: residencial, comercial e industrial — incluidos proyectos de media tensión, subestaciones y plantas de emergencia." },
];

export const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="l-section marfil">
      <div className="l-container" style={{ maxWidth: 920 }}>
        <div className="l-eyebrow" style={{ textAlign: "center", display: "block" }}>Preguntas frecuentes</div>
        <h2 className="l-section-title" style={{ textAlign: "center" }}>¿Tienes <span className="y">dudas?</span></h2>
        <p className="l-section-lead" style={{ textAlign: "center", margin: "0 auto" }}>Las respuestas que la mayoría nos pide antes de cotizar.</p>
        <div className="faq">
          {FAQS.map((f, i) => (
            <div className={"faq__item " + (open === i ? "open" : "")} key={i}>
              <button type="button" className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span><span className="plus" aria-hidden="true">+</span>
              </button>
              <div className="faq__a"><div>{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Contact form ----------------------------------------------
const SERVICE_OPTIONS = [
  "Paneles solares",
  "Instalación eléctrica residencial",
  "Instalación comercial / industrial",
  "Mantenimiento preventivo / correctivo",
  "Calentadores solares",
  "Puesta a tierra",
  "Plantas de emergencia",
  "Media tensión",
  "Trámites ante CFE",
  "Urgencia eléctrica",
];

export const ContactForm = () => {
  const [data, setData] = React.useState({ name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `Hola CA Electric, soy ${data.name.trim() || "(sin nombre)"}.`,
      `Teléfono: ${data.phone.trim() || "(no proporcionado)"}`,
      `Servicio: ${data.service}`,
    ];
    if (data.message.trim()) lines.push(`Mensaje: ${data.message.trim()}`);
    const text = lines.join("\n");
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const remaining = MESSAGE_MAX - data.message.length;
  const counterClass = remaining < 50 ? "counter warn" : "counter";

  return (
    <section className="l-section alt" id="contacto">
      <div className="l-container">
        <div className="l-eyebrow" style={{ textAlign: "center", display: "block" }}>Contáctanos</div>
        <h2 className="l-section-title" style={{ textAlign: "center" }}>Cotiza <span className="y">hoy mismo</span></h2>
        <p className="l-section-lead" style={{ textAlign: "center", margin: "0 auto 40px" }}>
          Cuéntanos qué necesitas — al enviar abrimos WhatsApp con tu mensaje listo para mandar.
        </p>
        <div className="contact-grid">
          <div className="contact-side">
            <h3>Habla con un <span className="y">ingeniero</span></h3>
            <p>Atención directa, sin call-centers. Te contesta quien va a hacer el trabajo.</p>
            <div className="info">
              <a href={`tel:${PHONE_E164}`}><span className="ico"><Icon name="phone" size={16}/></span> {PHONE_DISPLAY}</a>
              <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="wa" size={16}/></span> WhatsApp</a>
              <a href={`mailto:${EMAIL}`}><span className="ico"><Icon name="mail" size={16}/></span> {EMAIL}</a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="facebook" size={16}/></span> {FB_LABEL}</a>
              <a href={`https://${WEB}`} target="_blank" rel="noopener noreferrer"><span className="ico"><Icon name="map" size={16}/></span> {WEB}</a>
            </div>
          </div>
          <form className="form-wrap" onSubmit={submit} noValidate={false}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="f-name">Nombre</label>
                <input id="f-name" type="text" placeholder="Juan Pérez" value={data.name} onChange={set("name")} maxLength={80} required/>
              </div>
              <div className="field">
                <label htmlFor="f-phone">Teléfono / WhatsApp</label>
                <input id="f-phone" type="tel" inputMode="tel" placeholder="492 228 19 83" value={data.phone} onChange={set("phone")} maxLength={20} required pattern="[0-9 +()\-]{7,20}"/>
              </div>
              <div className="field full">
                <label htmlFor="f-service">Tipo de servicio</label>
                <select id="f-service" value={data.service} onChange={set("service")}>
                  {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-msg">
                  ¿Cómo te podemos ayudar?
                  <span className={counterClass}>{data.message.length}/{MESSAGE_MAX}</span>
                </label>
                <textarea
                  id="f-msg"
                  placeholder="Cuéntanos qué necesitas — un recibo de luz alto, una falla, un proyecto nuevo…"
                  value={data.message}
                  onChange={set("message")}
                  maxLength={MESSAGE_MAX}
                />
              </div>
              <div className="field full form-actions">
                <small>* Al enviar abriremos WhatsApp con tu mensaje.</small>
                <button className="btn btn-wa btn-lg" type="submit"><Icon name="wa" size={16}/> Enviar por WhatsApp</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// ---------- Sticky WhatsApp FAB ---------------------------------------
export const WhatsAppFab = () => (
  <a className="wa-fab" href={WA_GENERIC} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
    <Icon name="wa" size={32}/>
  </a>
);

// ---------- Footer ----------------------------------------------------
export const Footer = () => (
  <footer className="l-footer">
    <div className="l-container">
      <div className="grid">
        <div>
          <div className="l-footer__brand">
            <img src="/assets/logo.png" alt="CA Electric" width="50" height="50"/>
            <div>
              <div className="name">CA Electric</div>
              <small>Sabemos todo de electricidad</small>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.7)", margin: 0 }}>
            Ingeniería en energías renovables, instalaciones eléctricas y sistemas solares. Zacatecas y alrededores — residencial, comercial e industrial.
          </p>
          <div className="social">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={18}/></a>
            <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="wa" size={18}/></a>
            <a href={`tel:${PHONE_E164}`} aria-label="Teléfono"><Icon name="phone" size={18}/></a>
            <a href={`mailto:${EMAIL}`} aria-label="Correo"><Icon name="mail" size={18}/></a>
          </div>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li><a href="#solar">Paneles solares</a></li>
            <li><a href="#servicios">Instalaciones eléctricas</a></li>
            <li><a href="#servicios">Calentadores solares</a></li>
            <li><a href="#servicios">Puesta a tierra</a></li>
            <li><a href="#servicios">Plantas de emergencia</a></li>
            <li><a href="#servicios">Media tensión</a></li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#proceso">Cómo trabajamos</a></li>
            <li><a href="#cobertura">Cobertura</a></li>
            <li><a href="#casos">Casos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="phone" size={14}/> {PHONE_DISPLAY}</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="wa" size={14}/> WhatsApp directo</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="mail" size={14}/> {EMAIL}</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="facebook" size={14}/> {FB_LABEL}</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><Icon name="map" size={14}/> Zacatecas, México</li>
          </ul>
        </div>
      </div>
      <div className="l-footer__bottom">
        <span>© {new Date().getFullYear()} CA Electric · Todos los derechos reservados</span>
        <span>{WEB}</span>
      </div>
    </div>
  </footer>
);
