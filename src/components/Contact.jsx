import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styling/Contact.css';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      
      const result = await emailjs.sendForm(
        'service_vtxq2m',
        'template_2k141ha',
        form.current,
        'Jtlx84Mlpg9qEqCRt'
      );

      console.log('Email sent successfully:', result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className="status-message success">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="status-message error">
            ❌ Failed to send message. Please try again or contact me directly.
          </div>
        )}
      </form>
    </section>
  );
}