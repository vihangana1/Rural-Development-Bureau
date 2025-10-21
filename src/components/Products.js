import React, { useState, useEffect } from "react";
import image1 from "../assets/product/imageai1.jpeg";
import image2 from "../assets/product/imageai2.jpeg";
import image3 from "../assets/product/imageai3.jpeg";
import image4 from "../assets/product/imageai4.jpeg";

// Product list
const products = [
  { name: "Hand Craft  ", image: image1 },
  { name: "Dehydrated Product", image: image2 },
  { name: "Coconut Related Product", image: image3 },
  { name: "Clay Related Product", image: image4 },
  { name: "Dehydrated Product", image: image1 },
  { name: "Dehydrated Product", image: image2 },
  { name: "dairyProduct", image: image2 },
];

// Carousel images
const carouselImages = [image1, image2, image3, image4];

// Carousel component
const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Images */}
      <div
        className="border-2 rounded-lg overflow-hidden flex items-center justify-center bg-black"
        style={{  width: "1200px" , height: "600px" }}
      >
        <img
          src={carouselImages[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Product card
const ProductCard = ({ name, image }) => (
  <div
    className="bg-gray-100 border-2 rounded-lg p-4 flex flex-col items-center justify-between"
    style={{ borderColor: "#9A3F3F" }}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-32 object-cover mb-4 rounded"
    />
    <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">{name}</h3>
    <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition">
      SHOW MORE →
    </button>
  </div>
);



// Main page
const ProductPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-6 py-12 space-y-16">
      {/* Product Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">
          Products<br></br>
        </h1>
        <ImageCarousel />
        <p className="text-sm max-w-3xl mx-auto leading-relaxed">
          We have a vast range of quality products that made out of our own producers in the Saubagya Production Villages. We produce locally based value-added products and some of them fulfill the requirements of production value chain even in global.
        </p>
      </section>

      {/* Buy and Sell Section */}
      <section className="space-y-6">
        <h2 className="text-3xl italic font-serif text-black text-center">
          Buy And Sell
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} name={item.name} image={item.image} />
          ))}
      
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
