import React from 'react';
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="fathers-name">Father's Name</label>
          <input id="fathers-name" type="text" placeholder="Richard Roe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="abc.school@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" placeholder="1234567890" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message here..." required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="********" required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
