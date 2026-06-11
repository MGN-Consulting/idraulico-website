const reviews = [
  {
    name: 'Responsabile tecnico',
    location: 'Modena',
    text: 'Montaggio ordinato su linee tecniche e staffaggi. Squadra precisa, disponibile e attenta alle richieste di cantiere.',
  },
  {
    name: 'Studio progettazione',
    location: 'Emilia-Romagna',
    text: 'Buona gestione delle tubazioni inox e confronto chiaro sulle soluzioni da adottare prima della posa.',
  },
  {
    name: 'Cliente civile',
    location: 'Provincia di Modena',
    text: 'Impianto consegnato pulito, spiegazioni semplici e grande attenzione ai dettagli visibili.',
  },
];

export default function TrustWall() {
  return (
    <section className="section-clean reviews-section">
      <div className="container">
        <div className="section-heading">
          <h2>Affidabilità in cantiere e negli impianti civili</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card glass-card" key={review.name}>
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
