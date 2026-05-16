import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    {
      label: 'Singapore',
      value: '+65 9140 4482',
      href: 'tel:+6591404482',
      icon: <FiPhone aria-hidden="true" />,
    },
    {
      label: 'Philippines',
      value: '+63 9565 327 579',
      href: 'tel:+639565327579',
      icon: <FiPhone aria-hidden="true" />,
    },
    {
      label: 'Email',
      value: 'drlimbag@gmail.com ',
      href: 'mailto:drlimbag@gmail.com',
      icon: <FiMail aria-hidden="true" />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-details">
          {contacts.map((contact) => (
            <a className="contact-card" href={contact.href} key={contact.label}>
              <span className="icon-shell">{contact.icon}</span>
              <span>
                <span className="contact-label">{contact.label}</span>
                <span className="contact-value">{contact.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
