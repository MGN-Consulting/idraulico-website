'use client';

import Image from 'next/image';
import React from 'react';
import {
  Building2,
  CalendarCheck,
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
    title: 'Centrali frigorifere',
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
    text: 'Lavorazioni su acciaio inox con saldatori patentati TIG ed elettrodo, anche per direttiva PED.',
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

export default function Home() {
  const handleScrollTo = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
          <Image src="/logo4.png" alt="" width={44} height={44} className="brand-mark" priority/>
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

        <a href="tel:+393492371061" className="btn-copper navbar-emergency btn-phone">
          <Phone size={16}/>
          349 237 1061
        </a>
      </nav>

      <main>
        <section className="hero-section">
          <Image src="/pipes-background.jpg" fill style={{ objectFit: 'cover' }} alt="pipes background"
                 className="hero-bg" priority/>
          <div className="hero-overlay" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(255,255,255,0.95)',zIndex:1}}></div>
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
                <span><ShieldCheck size={17}/> Saldatori patentati TIG ed elettrodo</span>
                <span><ShieldCheck size={17}/> Certificazione direttiva PED</span>
              </div>
            </div>

            <div className="hero-media" aria-label="Area immagine principale">
              <div className="hero-image-placeholder">
                <Image src={"/pics/principale.jpg"} alt={"Foto Intervento Pincipale"} fill
                       style={{ objectFit: 'cover' }} priority/>
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
              <h2>Montaggi e impianti eseguiti con competenza tecnica</h2>
              <p>
                Una panoramica chiara delle lavorazioni principali, pensata per parlare sia
                a clienti civili sia ad aziende, progettisti e responsabili tecnici.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <service.icon size={24}/>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>

            <div className="credentials-strip">
              <span><Sprout size={18}/> Condizionamento civile</span>
              <span><ShieldCheck size={18}/> Direttiva PED</span>
              <span><Zap size={18}/> TIG ed elettrodo</span>
              <span><Wrench size={18}/> INOX AISI 316/304</span>
            </div>
          </div>
        </section>

        <section id="lavori" className="section-clean section-blueprint">
          <div className="container">
            <div className="section-heading split-heading">
              <div className="booking-copy">
                <span className="eyebrow">Galleria lavori</span>
                <h2>Cantieri completati e lavorazioni reali</h2>
              </div>
              <p>
                Comprovata esperienza nella realizzazione, nel montaggio e nella manutenzione
                di centrali, tubazioni, saldature, impianti civili e molto altro.
              </p>
            </div>

            <div className="gallery-grid">
              {gallerySlots.map((slot, index) => (
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
  );
}
