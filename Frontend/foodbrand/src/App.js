import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import axios from 'axios';
import ApplyJob from './pages/ApplyJob';
import Careers from './pages/Careers';
import Register from './pages/Register';
import Login from './pages/Login';
import Privacy from './pages/Privacy';


function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // --------------------------------------------------------------------------------

   const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // ------------------------------------------------------------------------------------

  return (
    <BrowserRouter>
      {/* <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
      /> */}

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        products={products} //  Pass all products to Navbar
      />

      <Routes>
        <Route
          path="/products"
          element={
            <Products
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        {/* <Route path="/" element={<Home />} /> */}

 <Route
    path="/"
    element={
      <Home
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}  />}/>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/career' element={<Careers/>} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ------------------------------------------------------------ */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path='/privacy' element={<Privacy/>} />

      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;





// import './App.css';
// import Home from './pages/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Contact from './pages/Contact';
// import AboutUs from './pages/AboutUs';
// // import Footer from './components/Footer';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from './components/Navbar';
// import { useState } from 'react';


// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   return (
//     <BrowserRouter>
//       <Navbar
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         setSelectedCategory={setSelectedCategory}
//       />

//       <Routes>
//         <Route
//           path="/products"
//           element={
//             <Products
//               searchTerm={searchTerm}
//               selectedCategory={selectedCategory}
//               setSelectedCategory={setSelectedCategory}
//             />
//           }
//         />
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product/:id" element={<ProductDetails />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









