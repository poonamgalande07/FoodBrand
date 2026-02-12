import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || "/careers";

  const handleLogin = () => {
    axios.post("http://127.0.0.1:8000/api/login/", {
      username,
      password
    })
    .then(res => {
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", res.data.username); // backend response required
      localStorage.setItem("email", res.data.email);       // backend must return email

      navigate(redirectTo);
    })
    .catch(() => alert("Invalid login"));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          If you don't have an account yet?{" "}
          <Link to="/register" state={{ from: redirectTo }}>Register</Link> here
        </p>
      </div>
    </div>
  );
}





// --------------=================================================================-----------------

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Redirect target, default "/careers" if not specified
//   const redirectTo = location.state?.from || "/careers";

//   const handleLogin = () => {
//     axios.post("http://127.0.0.1:8000/api/login/", {
//       username,
//       password
//     })
//     .then(res => {
//       localStorage.setItem("access", res.data.access);
//       localStorage.setItem("refresh", res.data.refresh);
//       localStorage.setItem("username", username);
//       // localStorage.setItem("email", res.data.email); // backend login response madhe email ghetla tar
//  localStorage.setItem("email", email); 

//       navigate(redirectTo); // redirect user to intended page
//     })
//     .catch(() => alert("Invalid login"));
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         <input
//           placeholder="Username"
//           onChange={e => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login </button>

//         <p>
//           If you don't have acc yet?{" "}
//           <Link to="/register" state={{ from: redirectTo }}>Register</Link> here
//         </p>
//       </div>
//     </div>
//   );
// }











// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";   

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     axios.post("http://127.0.0.1:8000/api/login/", {
//       username,
//       password
//     })
//     .then(res => {
//       localStorage.setItem("access", res.data.access);
//       localStorage.setItem("refresh", res.data.refresh);
//       navigate("/careers");
//     })
//     .catch(() => alert("Invalid login"));
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         <input
//           placeholder="Username"
//           onChange={e => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={e => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login </button>


//           <p>
//                      If you don't have acc yet? {" "}
//                     <Link to="/register">Register</Link>
//                     {" "} here
//                   </p>
//       </div>
//     </div>
//   );
// }
