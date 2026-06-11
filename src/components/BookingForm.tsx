'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    issueType: 'Impianto idrotermo sanitario',
    date: '',
    timeSlot: 'Mattina',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      alert('Per favore compila nome, telefono e data.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        issueType: 'Impianto idrotermo sanitario',
        date: '',
        timeSlot: 'Mattina',
        notes: '',
      });
    } catch (error) {
      console.error('Errore durante la prenotazione:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="prenotazione" className="section-clean booking-section">
      <div className="container booking-layout">
        <div className="booking-copy">
          <span className="eyebrow">Contatto</span>
          <h2>Raccontami il lavoro da fare</h2>
          <p>
            Lascia pochi dettagli e verrai ricontattato per confermare disponibilità,
            tempi e preventivo. Per lavorazioni tecniche o urgenze resta meglio chiamare.
          </p>
          <a href="tel:+393492371061" className="contact-number">349 237 1061</a>
        </div>

        <div className="booking-card glass-card">
          {submitStatus === 'success' ? (
            <div className="form-state">
              <h3>Richiesta inviata.</h3>
              <p>Grazie, ti ricontatteremo al numero indicato per confermare i dettagli.</p>
              <button type="button" onClick={() => setSubmitStatus('idle')} className="btn-outline">
                Nuova richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="booking-form-grid">
                <label className="booking-field">
                  <span className="booking-label">Nome *</span>
                  <input name="name" value={formData.name} onChange={handleInputChange} required className="booking-input" />
                </label>
                <label className="booking-field">
                  <span className="booking-label">Telefono *</span>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="booking-input" />
                </label>
              </div>

              <div className="booking-form-grid">
                <label className="booking-field">
                  <span className="booking-label">Email</span>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="booking-input" />
                </label>
                <label className="booking-field">
                  <span className="booking-label">Tipo intervento</span>
                  <select name="issueType" value={formData.issueType} onChange={handleInputChange} className="booking-select">
                    <option value="Impianto idrotermo sanitario">Impianto idrotermo sanitario</option>
                    <option value="Condizionamento civile">Condizionamento civile</option>
                    <option value="Centrale termica">Centrale termica</option>
                    <option value="Centrale frigorifera">Centrale frigorifera</option>
                    <option value="Impianto antincendio">Impianto antincendio</option>
                    <option value="Tubazioni INOX AISI 316/304">Tubazioni INOX AISI 316/304</option>
                    <option value="Carpenteria medio leggera">Carpenteria medio leggera</option>
                    <option value="Altro">Altro</option>
                  </select>
                </label>
              </div>

              <div className="booking-form-grid">
                <label className="booking-field">
                  <span className="booking-label">Data *</span>
                  <input name="date" type="date" value={formData.date} onChange={handleInputChange} required className="booking-input" />
                </label>
                <label className="booking-field">
                  <span className="booking-label">Fascia preferita</span>
                  <select name="timeSlot" value={formData.timeSlot} onChange={handleInputChange} className="booking-select">
                    <option value="Mattina">Mattina</option>
                    <option value="Pomeriggio">Pomeriggio</option>
                    <option value="Sera">Sera</option>
                    <option value="Urgente">Urgente</option>
                  </select>
                </label>
              </div>

              <label className="booking-field">
                <span className="booking-label">Descrizione</span>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="booking-textarea"
                  placeholder="Esempio: centrale termica, tubazioni inox, impianto antincendio, staffaggi, condizionamento..."
                />
              </label>

              <button type="submit" disabled={isSubmitting} className="btn-copper">
                <Send size={17} />
                {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
              </button>

              {submitStatus === 'error' && (
                <p className="form-error">Errore temporaneo. Puoi chiamare direttamente il 347 123 4567.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
