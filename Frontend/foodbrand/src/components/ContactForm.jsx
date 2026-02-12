import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import './ContactForm.css'

export default function ContactForm() {
  const [queryType, setQueryType] = useState("general");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Fetch login user info from localStorage
  const userName = localStorage.getItem("username");
  const userEmail = localStorage.getItem("email");

  // Login check: if user is not login then redirect on login
  useEffect(() => {
    if (!userName || !userEmail) {
      alert("Please login to use the contact form.");
      navigate("/login", { state: { from: "/contact" } });
    }
  }, [userName, userEmail, navigate]);

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s3gthdy",      // EmailJS Service ID
        "template_gpy0vh5",     // EmailJS Template ID
        {
          user_name: userName,   // login user name
          user_email: userEmail, // login user email
          query_type: queryType, // form select value
          message: message       // message textarea value
        },
        "FPmVUHbq4wpYIsxX5"      // EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully ");
        setMessage("");  // clear message field
      })
      .catch((error) => {
        alert("Failed to send message ");
        console.error(error);
      });
  };

  // If user not logged in, don't render form
  if (!userName || !userEmail) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Name field (auto-filled & readonly) */}
      <label>
        Name:
        <input
          type="text"
          value={userName || ""}
          readOnly
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </label>

      {/* Email field (auto-filled & readonly) */}
      <label>
        Email:
        <input
          type="email"
          value={userEmail || ""}
          readOnly
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </label>

      {/* Query type dropdown */}
      <label>
        Query Type:
        <select
          value={queryType}
          onChange={(e) => setQueryType(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="order">Order</option>
          <option value="complaint">Complaint</option>
          <option value="general">General</option>
        </select>
      </label>

      {/* Message textarea */}
      <label>
        Message:
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ width: "100%", height: "100px", marginBottom: "10px" }}
        />
      </label>

      <button type="submit" style={{ width: "100%" }}>
        Send Message
      </button>
    </form>
  );
}




// ===============================================================================

// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";

// export default function ContactForm() {
//   const [queryType, setQueryType] = useState("general");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   // Login user info fetch
//   const userName = localStorage.getItem("username");
//   const userEmail = localStorage.getItem("email");

//   // Login check: user login nasel tar redirect
//   useEffect(() => {
//     if (!userName || !userEmail) {
//       alert("Please login to use the contact form.");
//       navigate("/login", { state: { from: "/contact" } }); // redirect to login and remember original page
//     }
//   }, [userName, userEmail, navigate]);

//   // Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EmailJS send
//     emailjs
//       .send(
//         "service_s3gthdy",      // EmailJS service ID
//         "template_gpy0vh5",     // EmailJS template ID
//         {
//           user_name: userName,   // hidden username from login
//           user_email: userEmail, // hidden email from login
//           query_type: queryType, // selected query type
//           message: message       // message from textarea
//         },
//         "FPmVUHbq4wpYIsxX5"      // EmailJS public key
//       )
//       .then(() => {
//         alert("Message sent successfully ");
//         setMessage("");  // clear message field
//       })
//       .catch((error) => {
//         alert("Failed to send message ");
//         console.error(error);
//       });
//   };

//   // If user is not logged in, form will not render
//   if (!userName || !userEmail) {
//     return null;
//   }

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
//       <label>
//         Query Type:
//         <select
//           value={queryType}
//           onChange={(e) => setQueryType(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px" }}
//         >
//           <option value="order">Order</option>
//           <option value="complaint">Complaint</option>
//           <option value="general">General</option>
//         </select>
//       </label>

//       <label>
//         Message:
//         <textarea
//           placeholder="Enter your message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//           style={{ width: "100%", height: "100px", marginBottom: "10px" }}
//         />
//       </label>

//       <button type="submit" style={{ width: "100%" }}>
//         Send Message
//       </button>
//     </form>
//   );
// }





// ==================================================================================

// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";

// export default function ContactForm() {
//   const [queryType, setQueryType] = useState("general");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   // Login user info fetch
//   const userName = localStorage.getItem("username");
//   const userEmail = localStorage.getItem("email");

//   // Login check
//   useEffect(() => {
//     if (!userName || !userEmail) {
//       alert("Please login to use the contact form.");
//       navigate("/login"); // redirect to login page if not logged in
//     }
//   }, [userName, userEmail, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_s3gthdy",      // EmailJS service ID
//         "template_gpy0vh5",     // EmailJS template ID
//         {
//           user_name: userName,   // login user's username
//           user_email: userEmail, // login user's email
//           query_type: queryType, // form select value
//           message: message       // form message value
//         },
//         "FPmVUHbq4wpYIsxX5"      // EmailJS public key
//       )
//       .then(() => {
//         alert("Message sent successfully ✅");
//         setMessage("");  // clear message field
//       })
//       .catch((error) => {
//         alert("Failed to send message ❌");
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
//       <label>
//         Query Type:
//         <select
//           value={queryType}
//           onChange={(e) => setQueryType(e.target.value)}
//           style={{ width: "100%", marginBottom: "10px" }}
//         >
//           <option value="order">Order</option>
//           <option value="complaint">Complaint</option>
//           <option value="general">General</option>
//         </select>
//       </label>

//       <label>
//         Message:
//         <textarea
//           placeholder="Enter your message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//           style={{ width: "100%", height: "100px", marginBottom: "10px" }}
//         />
//       </label>

//       <button type="submit" style={{ width: "100%" }}>
//         Send Message
//       </button>
//     </form>
//   );
// }




