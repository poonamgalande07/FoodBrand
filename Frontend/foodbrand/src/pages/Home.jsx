// import { useEffect, useState } from "react";
// import axios from "axios";
// import Footer from "../components/Footer";
// import CategoryCard from "../components/CategoryCard";
// import "./home.css";
// import Hero from "../components/Hero";
// // import Carousel from "../components/Carousel";


// export default function Home() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/catagories/")
//       .then((res) => setCategories(res.data));
//   }, []);

//   return (
//     <>

//       {/* <Carousel/> */}

//       <Hero/>

//       <div className="home-container">
//         <h2 className="section-title">Best Sellers</h2>

//         <div className="category-grid">
//           {categories.map((cat) => (
//             <CategoryCard key={cat.id} category={cat} />
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }





import { useEffect, useState } from "react";
import axios from "axios";
// import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "./home.css";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

export default function Home({ searchTerm, selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/catagories/")
      .then((res) => setCategories(res.data));

    axios.get("http://127.0.0.1:8000/api/products/")
      .then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory ? product.category.id === selectedCategory : true;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
    <Carousel/>
      <Hero />

      {/* 🔹 Search Results at TOP if searchTerm exists */}
      {searchTerm && (
        <div style={{ padding: "20px" }}>
          <h2>Search Results</h2>
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categories / Best Sellers below search */}
      <div className="home-container">
        <h2 className="section-title"> Our Top Categories </h2>

        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
