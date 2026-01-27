import React from "react";
import news3Image from "../../assets/news/news3.jpeg";   // fixed path
import { useLanguage } from "../../contexts/LanguageContext"; // fixed path

const News3 = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-[#FFF8F6] rounded-lg shadow-md">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#F3931D] text-center leading-snug">
        {t("prajashakthiTrainingofTrainersEasternProvinceProgram")}
      </h1>

      {/* Intro paragraph */}
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
        {t("easternProgramIntro")}
      </p>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <img
          src={news3Image}
          alt={t("easternProgramAlt")}
          className="rounded-lg shadow-lg w-full md:w-3/4 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Optional extra description */}
      {/* <p className="text-lg leading-relaxed text-gray-700">
        {t("dehydratedProductDescription")}
      </p> */}
    </div>
  );
};

export default News3;
