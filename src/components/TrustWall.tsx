import React from 'react';

const reviews = [
  {
    name: 'Marco R.',
    location: 'Modena',
    source: 'Google',
    rating: 5,
    text: 'Antonio è stato fantastico. Ha risistemato la centrale termica della nostra azienda a Modena con una precisione chirurgica. Tubazioni perfette e saldature certificate TIG di altissima qualità. Consigliatissimo!',
    date: '1 mese fa'
  },
  {
    name: 'Giulia B.',
    location: 'Sassuolo',
    source: 'Trustpilot',
    rating: 5,
    text: "Installazione dell'impianto di condizionamento a regola d'arte. Puntuale, pulito e trasparente sui prezzi. Un vero professionista, cosa rara di questi tempi.",
    date: '2 settimane fa'
  },
  {
    name: 'Ing. Stefano M. (TecnoImpianti)',
    location: 'Modena',
    source: 'Google',
    rating: 5,
    text: 'Collaboriamo con Antonio per le tubazioni inox AISI 316/304 e staffaggi speciali. Le saldature superano sempre i controlli di qualità e le certificazioni PED. Ottimo partner per il tecnico-industriale.',
    date: '3 mesi fa'
  }
];

export default function TrustWall() {
  return (
    <section className="section-clean reviews-section">
      <div className="container">
        <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 38px' }}>
          <span className="eyebrow">Dicono di noi</span>
          <h2>Cosa dicono i clienti</h2>
          <p style={{ maxWidth: '600px', margin: '10px auto 0' }}>
            La qualità del lavoro è certificata dalle recensioni reali dei nostri clienti su Google e Trustpilot.
          </p>
        </div>

        {/* Brand Summary Badges */}
        <div className="trust-badges-container">
          <div className="trust-badge-card google-badge">
            <div className="badge-header">
              <svg viewBox="0 0 24 24" className="badge-logo-icon">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <strong>Google Recensioni</strong>
            </div>
            <div className="badge-rating">
              <span className="rating-score">4.9</span>
              <div className="rating-stars">★★★★★</div>
            </div>
            <p className="badge-meta">Valutazione basata su recensioni dei clienti</p>
            <a 
              href="https://maps.google.com/?cid=3492371061" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="badge-link-btn"
            >
              Leggi su Google
            </a>
          </div>

          <div className="trust-badge-card trustpilot-badge">
            <div className="badge-header">
              <svg viewBox="0 0 24 24" className="badge-logo-icon" fill="#00b67a">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <strong>Trustpilot</strong>
            </div>
            <div className="badge-rating">
              <span className="rating-score">Eccezionale</span>
              <div className="rating-stars tp-stars">★★★★★</div>
            </div>
            <p className="badge-meta">Valutazione dei clienti TrustScore 4.8</p>
            <a 
              href="https://it.trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="badge-link-btn"
            >
              Leggi su Trustpilot
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card glass-card" key={review.name}>
              <div className="review-card-platform">
                {review.source === 'Google' ? (
                  <span className="source-label google-source">
                    <svg viewBox="0 0 24 24" width="14" height="14" style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }}>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    Google
                  </span>
                ) : (
                  <span className="source-label trustpilot-source">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#00b67a" style={{ marginRight: 4, display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    Trustpilot
                  </span>
                )}
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-card-stars">★★★★★</div>
              <p className="review-card-text">“{review.text}”</p>
              <div className="review-card-meta">
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
