import React, { useState } from "react";

interface Props {
  onSubmit: (name: string, email: string, message: string) => void;
}

const Contact = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(name, email, message);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
