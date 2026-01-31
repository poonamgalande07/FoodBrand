import React, { useEffect, useState } from "react";
import axios from "axios";
// import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

export default function Products({
  searchTerm,
  selectedCategory,
  setSelectedCategory
}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://127.0.0.1:8000/api/catagories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category.id === selectedCategory
      : true;

    const searchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <div style={{ padding: "20px", marginTop:"60px"
       }}>
        <h1>Our Products</h1>

        {/* CATEGORY FILTER */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {filteredProducts.length === 0 && (
          <p>No products found</p>
        )}

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}





// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ProductCard from "../components/ProductCard";
// import CategoryFilter from "../components/CategoryFilter";
// import SearchBar from "../components/SearchBar";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   //  Fetch products & categories
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/products/")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error(err));

//     axios
//       .get("http://127.0.0.1:8000/api/catagories/")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   //  Filter logic (CATEGORY + SEARCH)
//   const filteredProducts = products.filter((product) => {
//     const categoryMatch = selectedCategory
//       ? product.category.id === selectedCategory
//       : true;

//     const searchMatch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   return (
//     <>
//       {/* <Navbar /> */}

//       <div style={{ padding: "20px" }}>
//         <h1>Our Products</h1>

//         {/*  Search */}
//         <SearchBar value={searchTerm} onChange={setSearchTerm} />

//         {/*  Category Filter */}
//         <CategoryFilter
//           categories={categories}
//           selected={selectedCategory}
//           onSelect={setSelectedCategory}
//         />

//         {/*  Products */}
//         {filteredProducts.length === 0 && (
//           <p>No products found</p>
//         )}

//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


