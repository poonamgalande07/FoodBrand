import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        form
      );

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send Us a Message</h2>

      {success && <p style={{ color: "green" }}>{success}</p>}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}


// import React from "react";

// export default function ContactForm() {
//   return (
//     <form className="contact-form">
//       <h2>Send Us a Message</h2>

//       <input type="text" placeholder="Your Name" required />
//       <input type="email" placeholder="Your Email" required />
//       <input type="text" placeholder="Subject" />

//       <textarea placeholder="Your Message" rows="5"></textarea>

//       {/*  No backend submit now */}
//       <button type="button">Send Message</button>
//     </form>
//   );
// }