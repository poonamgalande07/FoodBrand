import React from "react";
import "./AboutUs.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function AboutUs() {
  return (
   <>
   {/* <Navbar/> */}
     <div className="about-us-container">
      <h1>About Us</h1>

      <section className="about-us-section">
        <h2>Welcome to EveryBiteTaste!</h2>
        <p>
          At <strong>EveryBiteTaste</strong>, we bring the authentic flavors of India
          right to your doorstep. From crispy namkeens to delicious sweets, freshly
          baked breads, and irresistible cookies, every product is made with care,
          love, and the finest ingredients.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple – <strong>to make every bite a delightful experience</strong>.
          We are dedicated to creating high-quality, tasty, and safe food products
          that bring happiness to your everyday life.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Promise</h2>
        <ul>
          <li><strong>Premium Ingredients:</strong> Only the best ingredients go into our products.</li>
          <li><strong>Fresh & Tasty:</strong> Every item is freshly made or baked.</li>
          <li><strong>Authentic Recipes:</strong> Traditional Indian recipes with a modern twist.</li>
          <li><strong>Customer Happiness:</strong> Your satisfaction is our priority.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Why Choose EveryBiteTaste?</h2>
        <p>
          EveryBiteTaste is more than just food – it’s an <strong>experience</strong>.
          We combine tradition, taste, and innovation to bring snacks, sweets, and
          bakery items that make every occasion special.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Join Our Journey</h2>
        <p>
          Explore our wide range of snacks, sweets, and bakery delights, taste the
          freshness, and enjoy every bite with <strong>EveryBiteTaste</strong>!
        </p>
      </section>
    </div>
{/* <Footer/> */}
 
   </>
  );
}
