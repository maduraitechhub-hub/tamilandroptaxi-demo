'use client';

import { useState } from 'react';
import { submitSiteForm } from '../../lib/submitSiteForm';
import FormFeedbackModal from '../ui/FormFeedbackModal';

const INITIAL = { customerName: '', phone: '', email: '', subject: 'Cab Booking Inquiry', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState({ open: false, variant: 'success', title: '', message: '' });

  const closeModal = () => setModal((m) => ({ ...m, open: false }));
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.message.trim().length < 3) return;
    setSending(true);
    try {
      await submitSiteForm('contact', {
        customerName: form.customerName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        subject: form.subject,
        message: form.message.trim(),
      });
      setForm(INITIAL);
      setModal({ open: true, variant: 'success', title: 'Message sent! ✅', message: "Thanks — we'll get back to you within 2 hours." });
    } catch (err) {
      setModal({
        open: true, variant: 'error',
        title: 'Could not send',
        message: err instanceof Error ? err.message : 'Could not send your message.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form-card">
      <div className="partner-title">Send Us a Message</div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contactName">Full Name</label>
            <input id="contactName" type="text" value={form.customerName} onChange={update('customerName')} placeholder="Your name" required disabled={sending} />
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">Mobile Number</label>
            <input id="contactPhone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 XXXXX XXXXX" required disabled={sending} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Email (optional)</label>
          <input id="contactEmail" type="email" value={form.email} onChange={update('email')} placeholder="your@email.com" disabled={sending} />
        </div>
        <div className="form-group">
          <label htmlFor="contactSubject">Subject</label>
          <select id="contactSubject" value={form.subject} onChange={update('subject')} disabled={sending}>
            <option>Cab Booking Inquiry</option>
            <option>Price Quote Request</option>
            <option>Airport Transfer</option>
            <option>Corporate Booking</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contactMessage">Message</label>
          <textarea
            id="contactMessage"
            value={form.message}
            onChange={update('message')}
            placeholder="Describe your travel need..."
            rows={4}
            required
            minLength={3}
            disabled={sending}
            style={{ resize: 'vertical' }}
          />
        </div>
        <button type="submit" className="btn-book-full" disabled={sending || form.message.trim().length < 3}>
          {sending ? 'Sending…' : '📨 Send Message'}
        </button>
      </form>

      <FormFeedbackModal open={modal.open} variant={modal.variant} title={modal.title} message={modal.message} onClose={closeModal} />
    </div>
  );
}
