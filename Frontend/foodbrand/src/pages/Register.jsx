import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/careers";

  const handleRegister = () => {
    axios.post("http://127.0.0.1:8000/api/register/", {
      username,
      email,
      password
    })
    .then(res => {
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", username);
       localStorage.setItem("email", email); 

      navigate(redirectTo); // redirect to intended page
    })
    .catch(() => alert("Error"));
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <p>
          Already have an account?{" "}
          <Link to="/login" state={{ from: redirectTo }}>Login</Link>
        </p>
      </div>
    </div>
  );
}






// ===============================================================================================

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "./Register.css";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = () => {
//  axios.post("http://127.0.0.1:8000/api/register/", {
//   username,
//   email,
//   password
// })
// .then(res => {
//   localStorage.setItem("access", res.data.access);
//   localStorage.setItem("refresh", res.data.refresh);

//   navigate("/careers");  // auto login effect
// })
// .catch(() => alert("Error"));



// };


//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Register</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           onChange={e => setUsername(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={e => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button onClick={handleRegister}>Register</button>

//         {/* Login link */}
//         <p>
//           Already have an account?{" "}
//           <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// =================================================================================================

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "./Register.css";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     axios.post("http://127.0.0.1:8000/api/register/", {
//       username,
//       email,
//       password
//     })
//     .then(() => navigate("/login"))
//     .catch(() => alert("Error"));
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <h2>Register</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           onChange={e => setUsername(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           onChange={e => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button onClick={handleRegister}>Register</button>

//         {/*  Login link */}
//         <p>
//           Already have an account?{" "}
//           <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
