import './categoryCard.css'
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() => navigate(`/products?category=${category.id}`)}>
      
      
        <img
        src={category.image}
        alt={category.name}
        className="category-image"/>
    

<div className="category-content">
         <h3>{category.name}</h3>
      </div>

    </div>
  );
}