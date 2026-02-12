import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

export default function Contact() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <ContactForm />
      </div>
    </div>
  );
}





// import React from "react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// import ContactForm from "../components/ContactForm";
// import "./Contact.css";

// export default function Contact() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <div className="contact-container">
//         <div className="contact-header">
//           <h1>Contact Us</h1>
//           <p>
//             Have a question about our products?  
//             We’d love to hear from you.
//           </p>
//         </div>

//         <div className="contact-content">
//           {/* Left side – Info */}
//           <div className="contact-info">
//             <h3>Our Address</h3>
//             <p>EveryBiteTaste Foods Pvt. Ltd.</p>
//             <p>Pune, Maharashtra, India</p>

//             <h3>Phone</h3>
//             <p>+91 98765 43210</p>

//             <h3>Email</h3>
//             <p>support@everybitetastefoods.com</p>
//           </div>

//           {/* Right side – Form */}
//           <ContactForm />
//         </div>
//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// }