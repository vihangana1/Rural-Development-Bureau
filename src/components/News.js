import React, { useEffect, useState, useRef } from "react"; // Added hooks
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext'; 
import News1 from "../assets/news/news1.jpeg";
import News2 from "../assets/news/news2.jpeg";
import News3 from "../assets/news/news3.jpeg";
import News4 from "../assets/news/news4.jpeg";
import News5 from "../assets/news/news5.jpeg";
import news6 from "../assets/news/news6.jpeg";

// --- Reusable Reveal Component ---
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const News = () => {
  const { t } = useLanguage(); 

  const newsItems = [
    { title: t('PrajaShakthiWesternProvince'), image: news6, link: "/news/news6" },
    { title: t('prajashakthiTrainingofTrainersNorthWesternProvinceProgram'), image: News1, link: "/news/news1" },
    { title: t('prajashakthiTrainingofTrainersNorthCentralProvinceProgram'), image: News2, link: "/news/news2" },
    { title: t('prajashakthiTrainingofTrainersEasternProvinceProgram'), image: News3, link: "/news/news3" },
    { title: t('prajashakthiTrainingofTrainersNorthProvinceProgram'), image: News4, link: "/news/news4" },
    { title: t('prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram'), image: News5, link: "/news/news5" },
  ];

  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        
        {/* Animated Title s */}
        <Reveal>
          <h1 className="text-4xl font-bold text-center mb-6 text-black">
            {t('newsTitle')}
          </h1>
        </Reveal>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            // Animated News Card with Staggered Delay
            <Reveal key={index} delay={index * 100} className="h-full">
              <div
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 h-full"
              >
                <div className="w-full h-60 mb-4 border-2 rounded overflow-hidden" style={{ borderColor: "white" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#333] mb-2">{item.title}</h3>
                <div className="mt-auto"> {/* Pushes button to bottom if titles vary in length */}
                  <Link to={item.link}>
                    <br />
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                      {t('readMore')} →
                    </button>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </main>
    </div>
  );
};

export default News;