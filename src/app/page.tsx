'use client';

import Image from 'next/image';
import React from 'react';
import Script from 'next/script';
import {
  Bubbles,
  Building2,
  CalendarCheck, Dam, Drill,
  Flame,
  Phone,
  ShieldCheck,
  Snowflake,
  Sprout,
  Wrench,
  Zap,
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import TrustWall from '@/components/TrustWall';
import Head from "next/head";

const services = [
  {
    icon: Wrench,
    imageURL: '/pics/sanitari.jpg',
    title: 'Impianti idrotermo sanitari',
    text: 'Costruzione e montaggio di impianti civili, linee acqua, distribuzioni, sanitari e condizionamento.',
  },
  {
    icon: Flame,
    imageURL: '/pics/centrali-termiche.jpg',
    title: 'Centrali termiche',
    text: 'Realizzazione e montaggio di centrali vapore, olio diatermico e gas con attenzione a sicurezza e norme.',
  },
  {
    icon: Snowflake,
    imageURL: '/pics/1.jpg',
    title: 'Climatizzazione',
    text: 'Tubazioni, collegamenti e montaggi per impianti frigoriferi civili, tecnici e produttivi.',
  },
  {
    icon: ShieldCheck,
    imageURL: '/pics/impianti-antincendio.jpg',
    title: 'Impianti antincendio',
    text: 'Montaggio di reti e componenti antincendio, con lavorazioni ordinate e documentazione tecnica.',
  },
  {
    icon: Building2,
    imageURL: '/pics/carpenteria.jpg',
    title: 'Carpenteria medio leggera',
    text: 'Supporti, staffaggi, strutture e lavorazioni metalliche coordinate con gli impianti da installare.',
  },
  {
    icon: Zap,
    imageURL: '/pics/tubazioni-inox.jpg',
    title: 'Tubazioni INOX AISI 316/304',
    text: 'Inserimento impianti inox per mezzo di saldatura TIG, lettura di eventuale disegno.',
  },
];

const gallerySlots = [
  {
    imageURL: '/pics/centrali-termiche.jpg',
    title: 'Centrali termiche',
  },
  {
    imageURL: '/pics/tubazioni-inox.jpg',
    title: 'Tubazioni inox',
  },
  {
    imageURL: '/pics/sanitari.jpg',
    title: 'Impianti civili',
  },
  {
    imageURL: '/pics/carpenteria.jpg',
    title: 'Carpenteria e staffaggi',
  }
];

const extraServices = [
  {
    icon: Bubbles,
    title: 'Trattamento Acqua/Osmosi',
    text: "Sistemi professionali di filtrazione e addolcimento dell'acqua per uso domestico e industriale, inclusi impianti a osmosi inversa per garantire acqua pura e sicura.",
  },
  {
    icon: Zap,
    title: 'Saldature TIG',
    text: 'Saldature ad alta precisione con metodo TIG (Tungsten Inert Gas) eseguite da personale qualificato e munito di patentino su acciaio inox, ferro e leghe.',
  },
  {
    icon: Drill,
    title: 'Carotaggio',
    text: 'Foratura professionale di murature e cemento armato con carotatrici ad acqua o a secco per il passaggio ordinato di tubazioni e condotti di aerazione.',
  },
  {
    icon: Sprout,
    title: "Attenti all'ambiente",
    text: "Progettazione e posa orientate all'efficienza energetica e alla sostenibilità, utilizzando materiali eco-compatibili e riducendo al minimo gli sprechi energetici.",
  },
];

interface ServiceItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}

function AccordionItem({ service, isExpanded, onToggle }: {
  service: ServiceItem;
  isExpanded: boolean;
  onToggle: () => void
}) {
  return (
    <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span className="accordion-title-block">
          <service.icon size={20} className="accordion-icon"/>
          <span className="accordion-title">{service.title}</span>
        </span>
        <span className="accordion-chevron">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      <div className="accordion-content">
        <div className="accordion-inner">
          <p>{service.text}</p>
        </div>
      </div>
    </div>
  );
}

function MobileServicesAccordion({ servicesList }: { servicesList: ServiceItem[] }) {
  const [ expandedIndex, setExpandedIndex ] = React.useState<number | null>(null);

  return (
    <div className="services-accordion-mobile">
      {servicesList.map((service, index) => (
        <AccordionItem
          key={service.title}
          service={service}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [ activeSlide, setActiveSlide ] = React.useState(0);
  const [ heroImageIndex, setHeroImageIndex ] = React.useState(0);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  // Gallery slider auto loop
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallerySlots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Hero image fade loop
  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % gallerySlots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setActiveSlide((prev) => (prev + 1) % gallerySlots.length);
    } else if (diff < -50) {
      setActiveSlide((prev) => (prev - 1 + gallerySlots.length) % gallerySlots.length);
    }
  };

  const handleScrollTo = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18260339354" />
      <Script id="google-ads" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18260339354');`}
      </Script>
      <div className="site-shell">
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <linearGradient id="copperMetal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c2d12"/>
              <stop offset="18%" stopColor="#b45309"/>
              <stop offset="46%" stopColor="#f3a15f"/>
              <stop offset="68%" stopColor="#b45309"/>
              <stop offset="100%" stopColor="#6b250f"/>
            </linearGradient>
            <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0"/>
              <stop offset="45%" stopColor="#64748b"/>
              <stop offset="100%" stopColor="#f8fafc"/>
            </linearGradient>
          </defs>
        </svg>


        <nav className="navbar clean-navbar"
             style={{ top: 0, left: 0, right: 0, width: '100%', transform: 'none', borderRadius: 0 }}>
          <a className="navbar-brand" href="#" aria-label="L&apos;IDRAULICO di Bozzi Antonio">
            <Image src="/opaque-v2-nobg.png" alt="" width={44} height={44} className="brand-mark" priority/>
            <span>
            <span className="navbar-title">L&apos;IDRAULICO</span>
            <span className="navbar-subtitle">di Bozzi Antonio</span>
          </span>
          </a>

          <div className="navbar-links">
            <a href="#servizi" onClick={(e) => handleScrollTo(e, 'servizi')}>Servizi</a>
            <a href="#lavori" onClick={(e) => handleScrollTo(e, 'lavori')}>Lavori</a>
            <a href="#prenotazione" onClick={(e) => handleScrollTo(e, 'prenotazione')}>Contatto</a>
          </div>

          <a href="tel:+393492371061" className="btn-copper navbar-emergency btn-phone" onClick={() => gtag('event','conversion',{'send_to':'AW-18260339354/5ooiCM7b9cQcEJrVmoNE'})}>
            <Phone size={16}/>
            349 237 1061
          </a>
        </nav>

        <main>
          <section className="hero-section">
            <Image src="/pipes-background.jpg" fill style={{ objectFit: 'cover' }} alt="pipes background"
                   className="hero-bg" priority/>
            <div className="hero-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255,255,255,0.95)',
              zIndex: 1
            }}></div>
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Impianti civili e industriali</span>
                <h1 className="hero-title">
                  Impianti tecnici su misura
                </h1>
                <p className="hero-lead">
                  Costruzione, montaggio e manutenzione di impianti idrotermo sanitari,
                  centrali termiche, centrali frigorifere, antincendio e tubazioni inox.
                </p>
                <div className="hero-actions">
                  <a href="tel:+393492371061" className="btn-copper btn-phone">
                    <Phone size={18}/>
                    Chiama Antonio
                  </a>
                  <a href="#prenotazione" onClick={(e) => handleScrollTo(e, 'prenotazione')} className="btn-outline">
                    <CalendarCheck size={18}/>
                    Richiedi preventivo
                  </a>
                </div>
                <div className="trust-row">
                  <span><ShieldCheck size={17}/> Saldatori patentati TIG</span>
                  <span><ShieldCheck size={17}/> Certificazione direttiva PED</span>
                </div>
              </div>

              <div className="hero-media" aria-label="Area immagine principale">
                <div className="hero-image-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                  {gallerySlots.map((slot, index) => (
                    <Image
                      key={slot.imageURL}
                      src={slot.imageURL}
                      alt={slot.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{
                        objectFit: 'cover',
                        opacity: index === heroImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        position: 'absolute',
                        inset: 0
                      }}
                      priority={index === 0}
                    />
                  ))}
                </div>
                <div className="hero-media-card">
                  <strong>Dal civile al tecnico-industriale</strong>
                  <span>Impianti, centrali, carpenteria, inox AISI 316/304.</span>
                </div>
              </div>
            </div>
          </section>

          <section id="servizi" className="section-clean">
            <div className="container">
              <div className="section-heading">
                <span className="eyebrow">Servizi</span>
                <h2>Compentenze tecniche</h2>
                <p></p>
              </div>

              {/* Desktop Services Grid */}
              <div className="service-grid hidden-mobile-services">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <service.icon size={24}/>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile Services Accordion */}
              <MobileServicesAccordion servicesList={[ ...services, ...extraServices ]}/>

              <div className="credentials-strip">
                <span><Bubbles size={18}/> Trattamento Acqua/Osmosi</span>
                <span><Zap size={18}/> Saldature TIG</span>
                <span><Drill size={18}/> Carotaggio</span>
                <span><Sprout size={18}/> Attenti all'ambiente</span>
              </div>
            </div>
          </section>

          <section id="lavori" className="section-clean section-blueprint">
            <div className="container">
              <div className="section-heading split-heading">
                <div className="booking-copy">
                  <span className="eyebrow">Galleria lavori</span>
                  <h2>Lavorazioni reali</h2>
                </div>
                <p>
                  Comprovata esperienza nella realizzazione, nel montaggio e nella manutenzione
                  di centrali, tubazioni, saldature, impianti civili e molto altro.
                </p>
              </div>

              {/* Desktop Gallery Grid */}
              <div className="gallery-grid hidden-mobile-gallery">
                {gallerySlots.map((slot) => (
                  <figure className="image-slot" key={slot.title}>
                    <div className="image-slot-surface">
                      <Image
                        src={slot.imageURL}
                        alt={`Foto servizio: ${slot.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <figcaption className="hero-media-card" style={{ zIndex: 3 }}>
                      {slot.title}
                    </figcaption>
                  </figure>
                ))}
              </div>

              {/* Mobile Auto-Looping Slider */}
              <div
                className="mobile-gallery-slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="slider-track"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {gallerySlots.map((slot) => (
                    <div className="slide-item" key={slot.title}>
                      <figure className="slide-image-slot">
                        <div className="slide-image-surface">
                          <Image
                            src={slot.imageURL}
                            alt={`Foto servizio: ${slot.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <figcaption className="slide-media-card">
                          <strong>{slot.title}</strong>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
                <div className="slider-dots">
                  {gallerySlots.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-clean">
            <div className="container process-band">
              {[
                [ '01', 'Analisi tecnica', 'Valutazione del lavoro, dei materiali e delle condizioni di cantiere.' ],
                [ '02', 'Montaggio qualificato', 'Tubazioni, staffaggi, saldature e componenti installati con metodo.' ],
                [ '03', 'Consegna documentata', 'Verifiche finali, ordine in cantiere e attenzione alla conformità richiesta.' ],
              ].map(([ step, title, text ]) => (
                <div className="process-item" key={step}>
                  <span>{step}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <BookingForm/>

          <div id="recensioni">
            <TrustWall/>
          </div>
        </main>

        <Footer/>

        <a href="tel:+393471234567" className="mobile-call btn-phone" aria-label="Chiama L'IDRAULICO">
          <Phone size={18}/>
          Chiama ora
        </a>
      </div>
    </>
  );
}
