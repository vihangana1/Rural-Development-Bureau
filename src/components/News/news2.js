import React from "react";
import news2Image from "../../assets/news/news2.jpeg";   // fixed path
import { useLanguage } from "../../contexts/LanguageContext"; // fixed path


const News2 = () => {
  const { t } = useLanguage();


  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-[#F3931D] text-center uppercase">
        {t("prajashakthiTrainingofTrainersNorthWesternProvinceProgram")}
      </h1>

      <p className="text-lg leading-relaxed mb-8 text-center">
        {t("northCentralProgramIntro")}
      </p>

      <div className="flex justify-center mb-10">
        <img
          src={news2Image}
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

export default News2;



