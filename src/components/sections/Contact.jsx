import React, { useState } from "react";
import axios from "axios";
import "../StyleSection/Contact.css"; 
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const Contact = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleChangeEmail = (e) => setFromEmail(e.target.value);
  const handleChangeName = (e) => setFromName(e.target.value);
  const handleChangeSubject = (e) => setSubject(e.target.value);
  const handleChangeMessage = (e) => setMessage(e.target.value);

  const apiKey = "your-mailgrid-api-key";  // Replace with your Mailgrid API key

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fromEmail && fromName && message) {
      const emailData = {
        personalizations: [
          {
            to: [{ email: "pallvis827@gmail.com" }],  // Replace with the recipient's email address
            subject: subject || "No Subject",
          },
        ],
        from: { email: fromEmail },
        content: [
          {
            type: "text/plain",
            value: `Name: ${fromName}\nMessage: ${message}`,
          },
        ],
      };

      axios
        .post("https://api.mailgrid.com/v3/mail/send", emailData, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setFormStatus("Message Sent Successfully!");
          setFromEmail("");
          setFromName("");
          setSubject("");
          setMessage("");
          setVisible(true);
        })
        .catch((error) => {
          setFormStatus("Failed to send the message. Please try again.");
          console.error("Error sending message:", error);
          setVisible(true);
        });
    } else {
      setFormStatus("Please fill out all required fields.");
      setVisible(true);
    }
  };

  const handleModalClose = () => {
    setVisible(false);
    window.location.reload();
  };

  return (
    <div className="contact-container" id="Education">
       <CModal
        visible={visible}
        onClose={handleModalClose}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={handleModalClose}>
          <CModalTitle id="LiveDemoExampleLabel">Alert</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{formStatus}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleModalClose}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <div className="contact-wrapper">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-desc">Feel free to reach out to me for any questions or opportunities!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-form-title">Email Me 🚀</h2>
          <input
            className="contact-input"
            type="email"
            placeholder="Your Email"
            name="from_email"
            value={fromEmail}
            onChange={handleChangeEmail}
            required
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
            name="from_name"
            value={fromName}
            onChange={handleChangeName}
            required
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={handleChangeSubject}
          />
          <textarea
            className="contact-input-message"
            placeholder="Message"
            name="message"
            rows={4}
            value={message}
            onChange={handleChangeMessage}
            required
          />
          <input className="contact-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
