import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-brand">
            <Image src="/opaque-v2-nobg.png" alt="" width={42} height={42} className="brand-mark"/>
            <div>
              <h3>L&apos;IDRAULICO</h3>
              <span>di Bozzi Antonio</span>
            </div>
          </div>
          <p>Impianti idrotermo sanitari, centrali tecniche, carpenteria e tubazioni inox.</p>
        </div>

        <div className="footer-col">
          <h4>Servizi</h4>
          <a href="#servizi">Impianti idrotermo sanitari</a>
          <a href="#servizi">Centrali termiche e frigorifere</a>
          <a href="#servizi">Antincendio e carpenteria</a>
          <a href="#servizi">Tubazioni inox AISI 316/304</a>
          <a href="#lavori">Lavori eseguiti</a>
        </div>

        <div className="footer-col">
          <h4>Contatti</h4>
          <a href="tel:+393492371061">349 237 1061</a>
          <a href="mailto:lidraulicobozzi@gmail.com">lidraulicobozzi@gmail.com</a>
          <span>Modena e provincia</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {currentYear} L&apos;IDRAULICO di Bozzi Antonio</span>
        <span>P.IVA IT 03348530365</span>
      </div>
    </footer>
  );
}
