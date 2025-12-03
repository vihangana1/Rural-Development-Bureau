import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext"; // ✅ make sure this path is correct
import news1Image1 from "../assets/news/news1.jpeg";
import News2Image from "../assets/news/news2.jpeg";

const FeaturedNewsSection = () => {
  const { t } = useLanguage(); // ✅ access translation function

  const newsItems = [
    {
      date: t("news1.date"),
      title: t("news1.title"),
      image: news1Image1,
      link: "/news/news1",
    },
    {
      date: t("news2.date"),
      title: t("news2.title"),
     // image: null,
     image:News2Image,
      link: "/news/news2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === newsItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? newsItems.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === newsItems.length - 1 ? 0 : prev + 1
    );

  const current = newsItems[currentIndex];

  return (
    <section className="bg-[#EEEEEE] py-16 px-6 md:px-20 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-black uppercase">
          {t("featuredNews.title")}
        </h2>
        <a
          href="/news"
          className="text-yellow-600 font-semibold text-sm hover:underline"
        >
          {t("featuredNews.readMoreNews")}
        </a>
      </div>

      {/* News Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
        {current.image && (
          <img
            src={current.image}
            alt={t("featuredNews.imageAlt")}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{current.date}</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {current.title}
          </h3>
          <a
            href={current.link}
            className="text-yellow-600 font-semibold text-sm hover:underline"
          >
            {t("featuredNews.readMore")}
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-yellow-100"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-yellow-100"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex
                ? "bg-[#F3931D]"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNewsSection;
