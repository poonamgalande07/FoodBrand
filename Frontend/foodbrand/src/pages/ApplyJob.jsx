import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ApplyJob.css";

export default function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("job", id);
    formData.append("resume", e.target.resume.files[0]);

    

   const token = localStorage.getItem("access");
if (!token) {
  alert("You must login first!");
  navigate("/login");
  return;
}

axios.post(
  "http://localhost:8000/api/apply/",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
)

    
    .then(() => navigate("/careers"))
    .catch(() => alert("Error"));
  };

  return (
    <div className="apply-container">
      <div className="apply-box">
        <h2>Apply for this Job</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" name="resume" required />
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}






// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ApplyJob.css";

// export default function ApplyJob() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("job", id);
//     formData.append("resume", e.target.resume.files[0]);

//     axios.post(
//       "http://localhost:8000/api/apply/",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//       }
//     )
//     .then(() => navigate("/careers"))
//     .catch(() => alert("Error"));
//   };

//   return (
//     <div className="apply-container">
//       <div className="apply-box">
//         <h2>Apply for this Job</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="file" name="resume" required />
//           <button type="submit">Submit Application</button>
//         </form>
//       </div>
//     </div>
//   );
// }
