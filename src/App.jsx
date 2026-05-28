import React from "react";
import {
  Header, Hero, Services, Stats, Solar, Process, About,
  BeforeAfter, Coverage, Urgency, FAQ, ContactForm, WhatsAppFab, Footer,
} from "./components.jsx";

export default function App() {
  const onContact = () => {
    const el = document.getElementById("contacto");
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  // Reveal-on-scroll for sections
  React.useEffect(() => {
    const els = document.querySelectorAll(".l-section, .hero");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header onContact={onContact} />
      <main>
        <Hero onContact={onContact} />
        <Services onContact={onContact} />
        <Stats />
        <Solar onContact={onContact} />
        <Process />
        <About />
        <BeforeAfter />
        <Coverage />
        <Urgency />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
