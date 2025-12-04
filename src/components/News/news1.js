import React from "react";
import newsImage from "../../assets/news/news1.jpeg";   // fixed path
import { useLanguage } from "../../contexts/LanguageContext"; // fixed path

const News1 = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-black text-center uppercase">
        {t("prajashakthiTrainingofTrainersNorthWesternProvinceProgram")}
      </h1>

      <p className="text-lg leading-relaxed mb-8 text-center">
        {t("northWesternProgramIntro")}
      </p>

      <div className="flex justify-center mb-10">
        <img
          src={newsImage}
          alt={t("northWesternProgramAlt")}
          className="rounded-lg shadow-lg w-full md:w-3/4 object-cover"
        />
      </div>

      {/* <p className="text-lg leading-relaxed">
        {t("dehydratedProductDescription")}
      </p> */}
    </div>
  );
};

export default News1;
