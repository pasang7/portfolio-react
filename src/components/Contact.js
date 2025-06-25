import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/css/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    emailjs.send(
      'service_c2vznjr',
      'template_p1l8nr7',
      formData,
      'jEF5A3nUT_ZW_YxMq'
    ).then(() => {
      setShowMessage(true);
      setError('');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setShowMessage(false), 5000);
    }).catch(err => {
      setError('Oops! Something went wrong. Please try again.');
      console.error(err);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title text-center">Get in Touch</h2>
      <p className="contact-subtitle text-center">Feel free to reach out or connect below.</p>

      <form onSubmit={handleSubmit} className="contact-form mx-auto">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
        />

        {showMessage && <div className="thank-you-message">✅ Thanks for reaching out! I’ll get back to you soon.</div>}
        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn-submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        <a href="/Pasang_Yangji_Tamang_Resume.pdf" download>📄 Download Resume</a>
      </div>
    </section>
  );
}
