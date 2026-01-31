import { useNavigate } from "react-router-dom";
import "./productCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
   <div className="main-card">
     <div className="product-card"
      onClick={() => navigate(`/product/${product.id}`)} >
        <img src={product.image} alt={product.name} className="img-card" />
      <h3>{product.name}</h3>
      <p>{product.category.name}</p>
    </div>
   </div>
  );
}

// import { Link } from "react-router-dom";

// export default function ProductCard({ product }) {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//       <img src={product.image} alt={product.name} width="200" />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <Link to={`/product/${product.id}`}>View Details</Link>
//     </div>
//   );
// }