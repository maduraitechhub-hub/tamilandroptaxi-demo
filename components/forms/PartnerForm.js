'use client';

import { useState } from 'react';
import { submitSiteForm } from '../../lib/submitSiteForm';
import FormFeedbackModal from '../ui/FormFeedbackModal';
import { site } from '../../config/site';

export default function PartnerForm() {
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState({ open: false, variant: 'success', title: '', message: '' });

  const closeModal = () => setModal((m) => ({ ...m, open: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      await submitSiteForm('partner', Object.fromEntries(new FormData(form).entries()));
      form.reset();
      setModal({
        open: true, variant: 'success',
        title: "You're on the list! 🎉",
        message: 'Thank you for your interest! Our partnership team will contact you within 24 hours.',
      });
    } catch (err) {
      setModal({
        open: true, variant: 'error',
        title: 'Could not send',
        message: err instanceof Error ? err.message : 'Could not send your application.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="partner-section">
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="section-label">— Partner With Us —</div>
        <h2 className="section-title">Drive With {site.siteName}</h2>
        <p className="section-sub">
          Join our growing network of 500+ drivers. Earn more, work flexibly.
        </p>
      </div>

      <div className="partner-card">
        <div className="partner-title">Join Our Driver Network</div>
        <p className="partner-sub">Fill in your details and we'll get back to you within 24 hours.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" name="fullName" placeholder="Your full name" required disabled={sending} />
            </div>
            <div className="form-group">
              <label htmlFor="partnerPhone">Mobile Number</label>
              <input id="partnerPhone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required disabled={sending} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="partnerEmail">Email Address</label>
              <input id="partnerEmail" type="email" name="email" placeholder="your@email.com" disabled={sending} />
            </div>
            <div className="form-group">
              <label htmlFor="partnerCity">City / District</label>
              <select id="partnerCity" name="city" required disabled={sending}>
                <option value="Madurai">Madurai</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
                <option value="Salem">Salem</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="vehicle">Vehicle Type</label>
              <select id="vehicle" name="vehicle" required disabled={sending}>
                <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios)</option>
                <option value="SUV (Innova)">SUV (Innova)</option>
                <option value="Premium (Innova Crysta)">Premium (Innova Crysta)</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Driving Experience</label>
              <select id="experience" name="experience" required disabled={sending}>
                <option value="1-2 years">1-2 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="notes">About Yourself (optional)</label>
            <input id="notes" type="text" name="notes" placeholder="Brief description" disabled={sending} />
          </div>
          <button type="submit" className="btn-book-full" style={{ marginTop: 8 }} disabled={sending}>
            {sending ? 'Sending…' : 'Join Tamilandroptaxi Partner '}
          </button>
        </form>
      </div>

      <FormFeedbackModal open={modal.open} variant={modal.variant} title={modal.title} message={modal.message} onClose={closeModal} />
    </div>
  );
}
