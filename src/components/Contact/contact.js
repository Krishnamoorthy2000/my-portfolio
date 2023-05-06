import React, { useState } from "react";
import "./contact.css";



const ContactContent = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://portfolio-o6wy.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    
  };

  return (
    <div id="contactontent">
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="contact-label" htmlFor="name">Name:</label>
          <input className="contact-field" type="text" id="name" required />
        </div>
        <div>
          <label className="contact-label" htmlFor="email">Email:</label>
          <input
            className="contact-field"
            type="email"
            id="email"
            required
            pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div>
          <label className="contact-label" htmlFor="message">Message:</label>
          <textarea className="contact-field" id="message" required />
        </div>
        <button className="contact-submit" type="submit" disabled={status === 'Sending...'}>
          {status}
        </button>
        <div className="contact-loading">{status === 'Sending...' && 'Sending...'}</div>
        <div className="contact-success">{status === 'Success' && 'Message sent successfully!'}</div>
        <div className="contact-error">{status === 'Error' && 'There was an error sending the message.'}</div>
      </form>
    </div>
    </div>
  );

};

export default ContactContent;
