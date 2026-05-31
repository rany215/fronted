import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Send us a message for football training support.</p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="button">Send Message</button>
      </form>

      <h3>Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default Contact;