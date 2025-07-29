import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styling/Contact.css';
import mailSentImage from '../assets/undraw_mail-sent_ujev.svg';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init('Jtlx84Mlpg9qEqCRt');
  }, []);

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

    console.log('=== EMAIL SENDING DEBUG ===');
    console.log('Form data:', formData);
    console.log('EmailJS initialized:', typeof emailjs);

    // Test EmailJS connection first
    try {
      console.log('Testing EmailJS connection...');
      
      // Simple test parameters
      const templateParams = {
        from_name: formData.name || 'Test User',
        from_email: formData.email || 'test@example.com',
        message: formData.message || 'Test message',
        to_name: 'Mokaya Nchore',
      };

      console.log('Template params:', templateParams);
      console.log('Service ID:', 'service_vtxq2m');
      console.log('Template ID:', 'template_2k141ha');
      console.log('Public Key:', 'Jtlx84Mlpg9qEqCRt');

      // Try sending email
      const result = await emailjs.send(
        'service_vt2xq2m',
        'template_2k141ha',
        templateParams,
        'Jtlx84Mlpg9qEqCRt'
      );

      console.log('✅ Email sent successfully!', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('❌ Email sending failed!');
      console.error('Full error object:', error);
      console.error('Error message:', error.message);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Error stack:', error.stack);
      
      // Check if it's a network error
      if (!navigator.onLine) {
        console.error('🌐 No internet connection detected');
      }
      
      // Check specific error types
      if (error.name === 'TypeError') {
        console.error('🔧 This might be a configuration or network issue');
      }
      
      setStatus('error');
    } finally {
      setIsLoading(false);
      console.log('=== EMAIL SENDING DEBUG END ===');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-form-section">
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
              rows="5"
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
        </div>
        
        <div className="contact-image-section">
          <img
            src={mailSentImage}
            alt="Mail sent illustration"
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}