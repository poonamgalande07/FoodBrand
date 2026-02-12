import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import axios from "axios";
import "./ProductDetails.css"; 

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      {/* <Navbar/> */}

      <div className="product-details-container">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p className="info">Category: {product.category.name}</p>
        <p className="info">Taste: {product.taste.name}</p>
        <p className="info">Season: {product.season.name}</p>
      </div>

      {/* <Footer/>  */}
    </>
  );
}





// ====================================================================================================

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import axios from "axios";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <>
//       <Navbar/>

//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} width="300" />
//       <p>{product.description}</p>
//       <p>Category: {product.category.name}</p>
//       <p>Taste: {product.taste.name}</p>
//       <p>Season: {product.season.name}</p>
       

//     </div>
//      <Footer/> 
//     </>
//   );
// }