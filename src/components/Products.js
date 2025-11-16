
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

import image1 from "../assets/product/imageai1.jpeg";
import image2 from "../assets/product/imageai2.jpeg";
import image3 from "../assets/product/imageai3.jpeg";
import image4 from "../assets/product/imageai4.jpeg";

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
      {/* Carousel Image */}
      <div
        className="border-2 rounded-lg overflow-hidden flex items-center justify-center bg-black"
        style={{ width: "100%", height: "400px" }}
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
const ProductCard = ({ name, image, link, showMoreText }) => (
  <Link to={link}>
    <div className="bg-gray-100 border-2 rounded-lg p-2 flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-sm font-bold text-gray-800 mb-2 text-center">{name}</h3>
      <button className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition">
        {showMoreText} →
      </button>
    </div>
  </Link>
);

// Main page
const ProductPage = () => {
  const { t } = useLanguage();

  // Product list with translations
  const products = [
    { name: t('handCraft'), image: image1, link: "/Products/handcraft" },
    { name: t('dehydratedProductItem'), image: image2, link: "/Products/dehydrate" },
    { name: t('coconutRelatedProductItem'), image: image3, link: "/Products/coconutrelated" },
    { name: t('clayRelatedProductItem'), image: image4, link: "/Products/clayrelated" },
    { name: t('dairyProductItem'), image: image2, link: "/Products/dairyproduct" },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen px-6 py-12 space-y-16">
      {/* Product Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">
          {t('productsTitle')}
        </h1>
        <ImageCarousel />
        <p className="text-sm max-w-3xl mx-auto leading-relaxed">
          {t('productsDescription')}
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              link={item.link}
              showMoreText={t('showMore')}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;