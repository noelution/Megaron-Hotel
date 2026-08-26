import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, Users, Waves } from "lucide-react";

import heroHarbour from "@/assets/hero-harbour.jpg";
import facadeAsset from "@/assets/facade.jpg.asset.json";
import spaAsset from "@/assets/spa.jpg.asset.json";
import rooftopAsset from "@/assets/rooftop.jpg.asset.json";
import lobbyAsset from "@/assets/lobby.jpg.asset.json";
import cafeAsset from "@/assets/cafe.jpg.asset.json";
import champagneAsset from "@/assets/champagne.jpg.asset.json";
import breakfastAsset from "@/assets/breakfast.jpg.asset.json";
import igFacadeAsset from "@/assets/ig-facade.jpg.asset.json";
import igPoolAsset from "@/assets/ig-pool.jpg.asset.json";
import igBuffetAsset from "@/assets/ig-buffet.jpg.asset.json";
import igFortressAsset from "@/assets/ig-fortress.jpg.asset.json";
import igInteriorAsset from "@/assets/ig-interior.jpg.asset.json";
import igTiropitaAsset from "@/assets/ig-tiropita.jpg.asset.json";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";


const heritage = facadeAsset.url;
const spaPool = igPoolAsset.url;
const spaTreatment = spaAsset.url;
const restaurantImg = rooftopAsset.url;
const cityView = igFacadeAsset.url;

const gallery = [
  { src: lobbyAsset.url, alt: "Lobby des GDM Megaron mit kupferner Schiffsskulptur" },
  { src: cafeAsset.url, alt: "Plaza Café mit Blick auf den alten Hafen" },
  { src: champagneAsset.url, alt: "Abendessen mit Champagner im Megaron" },
  { src: breakfastAsset.url, alt: "Frühstück im Megaron mit Avocado und Ei" },
  { src: igBuffetAsset.url, alt: "Kretisches Frühstücksbuffet im Megaron" },
  { src: igInteriorAsset.url, alt: "Weizenähren in blau-weißen Vasen als Interieur-Detail" },
  { src: igTiropitaAsset.url, alt: "Kretische Spanakopita auf türkisfarbenem Teller" },
  { src: igFortressAsset.url, alt: "Blick über Hafen und Festung Koules unter blauem Himmel" },
  { src: spaTreatment, alt: "Behandlungsraum im Spa des GDM Megaron" },
];



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GDM Megaron Historic Hotel – Heritage Luxury in Heraklion" },
      {
        name: "description",
        content:
          "GDM Megaron Historic Hotel, Heraklion: a 1925 landmark on the Venetian harbour with sea-view suites, rooftop pool and Cretan fine dining.",
      },
      { property: "og:title", content: "GDM Megaron Historic Hotel – Heritage Luxury in Crete" },
      {
        property: "og:description",
        content:
          "Where heritage meets timeless elegance. A 1925 landmark hotel above the Venetian harbour of Heraklion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { href: "#history", label: "The House" },
  { href: "#suites", label: "Suites" },
  { href: "#wellness", label: "Wellness" },
  { href: "#dining", label: "Dining" },
];

const suites = [
  {
    name: "Harbour Deluxe",
    image: roomDeluxe,
    copy: "Linen tones, arched windows and the slow rhythm of the Venetian port below.",
    sqm: "32 m²",
    guests: "2 Guests",
    view: "Harbour View",
  },
  {
    name: "Rocca Suite",
    image: roomSuite,
    copy: "A private terrace framing the fortress of Rocca a Mare and the Aegean horizon.",
    sqm: "54 m²",
    guests: "3 Guests",
    view: "Sea View",
  },
  {
    name: "Megaron Signature",
    image: heritage,
    copy: "The original 1925 corner residence, restored in stone, brass and raw silk.",
    sqm: "78 m²",
    guests: "4 Guests",
    view: "Panoramic",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className={`font-display text-lg tracking-[0.35em] uppercase transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          Megaron<span className="text-accent"> 1925</span>
        </a>

        <ul
          className={`hidden items-center gap-10 text-[0.68rem] uppercase tracking-[0.28em] md:flex ${
            scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden border px-6 py-3 text-[0.65rem] uppercase tracking-[0.3em] transition-colors sm:inline-block ${
              scrolled
                ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                : "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            }`}
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden text-[0.65rem] uppercase tracking-[0.3em] ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-5 px-6 py-8 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
            {navItems.concat({ href: "#contact", label: "Book Now" }).map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[38rem] w-full overflow-hidden">
      <motion.img
        src={heroHarbour}
        alt="The Venetian harbour of Heraklion at dusk seen from the Megaron hotel"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[0.65rem] uppercase tracking-[0.45em] text-primary-foreground/75"
        >
          Heraklion · Crete · Est. 1925
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] text-primary-foreground sm:text-6xl lg:text-7xl"
        >
          Where Heritage Meets Timeless Elegance
        </motion.h1>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 border border-primary-foreground/60 px-10 py-4 text-[0.65rem] uppercase tracking-[0.35em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
        >
          Reserve Your Stay
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.4em] text-primary-foreground/60">
        Scroll
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="history" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <img
            src={heritage}
            alt="Restored 1925 façade and interior detail of the Megaron Historic Hotel"
            loading="lazy"
            className="shadow-soft h-[26rem] w-full object-cover lg:h-[36rem]"
          />
          <img
            src={cityView}
            alt="Das Megaron am Hafen von Heraklion mit dem Bergmassiv im Hintergrund"
            loading="lazy"
            className="mt-6 h-40 w-full object-cover lg:h-52"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <span className="eyebrow">Step Into History</span>
          <span className="hairline mt-6" />
          <h2 className="mt-8 font-display text-3xl leading-tight sm:text-5xl">
            A landmark of the Venetian port, quietly reborn.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-muted-foreground">
            Built in 1925 as the tallest building in Heraklion, the Megaron has watched the city
            change for a century. Its protected stone shell now holds an intimate house of
            forty-six rooms, where Cretan craft, muted linens and Aegean light replace ornament.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed tracking-wide text-muted-foreground">
            Steps from the fortress of Rocca a Mare and the Archaeological Museum, it remains a
            sanctuary — unhurried, understated, entirely of this place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Suites() {
  return (
    <section id="suites" className="bg-secondary/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Rooms & Suites</span>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">Rest, framed by the sea</h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {suites.map((suite, i) => (
            <Reveal key={suite.name} delay={i * 0.12}>
              <article className="group h-full bg-card">
                <div className="overflow-hidden">
                  <img
                    src={suite.image}
                    alt={`${suite.name} at the GDM Megaron Historic Hotel`}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-7 py-8">
                  <h3 className="font-display text-2xl">{suite.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{suite.copy}</p>

                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Maximize2 className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} />
                      {suite.sqm}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} />
                      {suite.guests}
                    </li>
                    <li className="flex items-center gap-2">
                      <Waves className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} />
                      {suite.view}
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-block border-b border-foreground/25 pb-1 text-[0.62rem] uppercase tracking-[0.3em] transition-colors group-hover:border-accent group-hover:text-accent"
                  >
                    Enquire
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Banner({
  id,
  image,
  eyebrow,
  title,
  copy,
  alt,
}: {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  copy: string;
  alt: string;
}) {
  return (
    <section id={id} className="relative h-[34rem] w-full overflow-hidden lg:h-[40rem]">
      <img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-earth/55" />
      <div className="relative z-10 flex h-full items-center px-6 lg:px-10">
        <Reveal className="mx-auto w-full max-w-7xl">
          <div className="max-w-lg">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-6 font-display text-3xl text-primary-foreground sm:text-5xl">{title}</h2>
            <p className="mt-6 text-sm leading-relaxed tracking-wide text-primary-foreground/75">
              {copy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number;
  onClose: () => void;
  onChange: (next: number) => void;
}) {
  const [playing, setPlaying] = useState(true);
  const current = gallery[index]!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % gallery.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, onChange, onClose]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => onChange((index + 1) % gallery.length), 5000);
    return () => window.clearInterval(id);
  }, [playing, index, onChange]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-earth/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Bildergalerie"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-6 text-[0.62rem] uppercase tracking-[0.3em] text-earth-foreground/70 lg:px-10">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={() => setPlaying((v) => !v)} className="hover:text-accent">
            {playing ? "Pause" : "Play"}
          </button>
          <button type="button" onClick={onClose} aria-label="Schließen" className="hover:text-accent">
            Close
          </button>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Vorheriges Bild"
          onClick={() => onChange((index - 1 + gallery.length) % gallery.length)}
          className="absolute left-2 z-10 p-3 text-earth-foreground/70 transition-colors hover:text-accent sm:left-5"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1} />
        </button>

        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-h-full max-w-full object-contain"
        />

        <button
          type="button"
          aria-label="Nächstes Bild"
          onClick={() => onChange((index + 1) % gallery.length)}
          className="absolute right-2 z-10 p-3 text-earth-foreground/70 transition-colors hover:text-accent sm:right-5"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1} />
        </button>
      </div>

      <div className="px-6 pb-8 text-center lg:px-10" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-[0.15em] text-earth-foreground/60">{current.alt}</p>
        <div className="mt-5 flex justify-center gap-2">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Bild ${i + 1}`}
              onClick={() => onChange(i)}
              className={`h-px w-8 transition-colors ${
                i === index ? "bg-accent" : "bg-earth-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Impressionen</span>
        <h2 className="mt-6 font-display text-3xl sm:text-5xl">Momente im Haus</h2>
      </Reveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.1}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${img.alt} – vergrößern`}
              className="group relative block w-full overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="h-80 w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-earth/0 transition-colors duration-700 group-hover:bg-earth/20" />
              <span className="absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.3em] text-primary-foreground opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                Ansehen
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <Lightbox index={active} onChange={setActive} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}


function Contact() {

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Reservations</span>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">Begin your stay</h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-muted-foreground">
            Our concierge replies personally within one day. Share your dates and we will compose a
            stay around them.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <input
                required
                placeholder="Name"
                className="w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide outline-none placeholder:text-muted-foreground focus:border-accent"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide outline-none placeholder:text-muted-foreground focus:border-accent"
              />
              <input
                type="date"
                aria-label="Arrival"
                className="w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide text-muted-foreground outline-none focus:border-accent"
              />
              <input
                type="date"
                aria-label="Departure"
                className="w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide text-muted-foreground outline-none focus:border-accent"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Your message"
              className="w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide outline-none placeholder:text-muted-foreground focus:border-accent"
            />
            <button
              type="submit"
              className="border border-foreground/30 px-10 py-4 text-[0.65rem] uppercase tracking-[0.35em] transition-colors hover:bg-foreground hover:text-background"
            >
              Send Enquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-lg uppercase tracking-[0.35em]">
            Megaron<span className="text-accent"> 1925</span>
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-earth-foreground/60">
            GDM Megaron Historic Hotel — a protected 1925 landmark above the Venetian harbour of
            Heraklion, Crete.
          </p>
        </div>

        <ul className="space-y-4 text-[0.68rem] uppercase tracking-[0.28em] text-earth-foreground/70">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <address className="space-y-3 text-sm not-italic leading-relaxed text-earth-foreground/70">
          <p>D. Beaufort 9, Heraklion 712 02, Crete</p>
          <p>
            <a href="tel:+302810305300" className="hover:text-accent">
              +30 2810 305 300
            </a>
          </p>
          <p>
            <a href="mailto:stay@megaron1925.gr" className="hover:text-accent">
              stay@megaron1925.gr
            </a>
          </p>
          <div className="flex gap-6 pt-3 text-[0.65rem] uppercase tracking-[0.28em]">
            <a href="#top" className="hover:text-accent">
              Instagram
            </a>
            <a href="#top" className="hover:text-accent">
              Facebook
            </a>
          </div>
        </address>
      </div>

      <div className="border-t border-earth-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[0.6rem] uppercase tracking-[0.28em] text-earth-foreground/40 sm:flex-row sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} GDM Megaron Historic Hotel</span>
          <span>Imprint · Privacy</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Suites />
        <Banner
          id="wellness"
          image={spaPool}
          eyebrow="Wellness"
          title="A rooftop of still water"
          copy="The rooftop pool and health club sit above the rooftops of the old town — sun loungers, quiet water and the Aegean beyond. Treatments draw on Cretan olive, sea salt and wild herbs."
          alt="Rooftop pool overlooking Heraklion at golden hour"
        />
        <Banner
          id="dining"
          image={restaurantImg}
          eyebrow="Dining"
          title="The 5th — Cretan, elevated"
          copy="Our rooftop restaurant reworks the island's oldest recipes with produce from mountain villages and boats moored below. Dinner unfolds slowly, framed by the fortress of Rocca a Mare."
          alt="Rooftop restaurant terrace with harbour view at dusk"
        />
        <Gallery />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
