import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const carouselImages = [
  "https://mirchibites.com/os/cdn/content/images/Namkeen_mobile_193555.jpg",
  "https://img.freepik.com/free-vector/chocolate-banner-template-design_742173-19435.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-vector/cookies-banner-template_23-2148870610.jpg?semt=ais_user_personalization&w=740&q=80",
  "https://static.vecteezy.com/system/resources/thumbnails/024/854/340/small/realistic-bread-ads-horizontal-poster-vector.jpg",
  "https://img.freepik.com/premium-psd/facebook-cover-post-banner-template-restaurant-food-menu-special-drink_65983-2340.jpg?semt=ais_hybrid&w=740&q=80",
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselImages.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
