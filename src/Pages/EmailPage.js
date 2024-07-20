import React, { useState } from 'react';
import '../Style/EmailPage.css';

const EmailPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  // Sample email contacts
  const emailContacts = [
    { email: 'support@example.com', phone: '+1 (123) 456-7890' },
    { email: 'info@example.com', phone: '+1 (987) 654-3210' },
    { email: 'sales@example.com', phone: '+1 (555) 123-4567' },
    { email: 'feedback@example.com', phone: '+1 (321) 987-6543' },
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    // Here, you can add the logic to send the email
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form fields
    setEmail('');
    setMessage('');
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div
      className="email-page"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/originals/6f/fe/ae/6ffeae089199b045d0e52aa7aa69db14.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh',
      }}
    >
      <h1>Contact Us</h1>
      <div className="email-contacts">
        <h2>Email Contacts</h2>
        <ul>
          {emailContacts.map((contact, index) => (
            <li key={index}>
              {contact.email}
              <span className="phone">{contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="email-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={handleMessageChange} />
          </label>
          <button type="submit" disabled={!email}>Send</button>
          {sent && (
            <p className="sent-message">
              Your message has been sent successfully!
              THANK YOU 
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailPage;