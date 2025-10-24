import React from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/homepage/image 1.jpeg"; // Replace with actual thumbnails

const newsItems = [
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news1" },
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news2" },
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news3" },
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news4" },
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news5" },
  { title: "Dehydrated Product", image: placeholderImage, link: "/news/news6" },
];


const News = () => {
  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">News</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-45 mb-4 border-2 rounded overflow-hidden" style={{ borderColor: "white" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333] mb-2">{item.title}</h3>
              <Link to={item.link}>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                  READ MORE →
                </button>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default News;
