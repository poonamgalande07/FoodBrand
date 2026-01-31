import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import { IoIosSearch } from "react-icons/io";

export default function Navbar({ searchTerm, setSearchTerm, setSelectedCategory, products }) {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedCategory(null);

    if (value.length > 0) {
      //  Filter products locally
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // show top 5 suggestions
    } else {
      setSuggestions([]);
    }
  };

  const handleClick = (product) => {
    setSearchTerm("");  // optional: clear search
    setSuggestions([]);
    navigate(`/product/${product.id}`);
  };

  return (
    <nav className="navbar">
      <h2>EveryBiteTaste</h2>

      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search products..."
          
          value={searchTerm}
          onChange={handleChange}
          className="nav-search"
        />
      

        {/* 🔹 Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul style={{
            position: "absolute",
            top: "40px",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 999,
            listStyle: "none",
            padding: "5px 0",
            margin: 0,
            maxHeight: "250px",
            overflowY: "auto"
          }}>
            {suggestions.map((product) => (
              <li
                key={product.id}
                onClick={() => handleClick(product)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.background = "white"}
              >
                <img
                  src={product.image} // product image
                  alt={product.name}
                  style={{ width: "40px", height: "40px", objectFit: "cover", marginRight: "10px", borderRadius: "4px" }}
                />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <a href="/career">Careers</a>
      </div>
    </nav>
  );
}









// =====================================================================================================

// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar({ searchTerm, setSearchTerm, setSelectedCategory }) {
//   return (
//     <nav className="navbar">
//       <h2>EveryBiteTaste</h2>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           setSelectedCategory(null);
//         }}
//         className="nav-search"
//       />

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about-us">About Us</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }



// ==================================================================================






// =================================================================================



// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar({ searchTerm, setSearchTerm }) {
//   return (
//     <nav className="navbar">
//       <h2>EveryBiteTaste</h2>

//       {/* 🔍 SEARCH BAR IN HEADER */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="nav-search"
//       />

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about-us">About Us</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }


