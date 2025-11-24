

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext'; // Import useLanguage

// Import officer images
import nimalImage from "../assets/officers/image 2.jpeg";
//import tharushiImage from "../assets/officers/image 2.jpeg";
import ruwanImage from "../assets/officers/image 2.jpeg";
import wickramageImage from "../assets/officers/W.P.S.Wickramage.jpeg";
import wijayakoonImage from "../assets/officers/W.M.U.M.Wijayakoon.jpeg";
import WickramanayakaImage from "../assets/officers/N.C.Wickramanayaka.jpeg";
import VijewardanaImage from "../assets/officers/V.C.Vijewardana.jpeg";
import RathnayakeImage from "../assets/officers/R.M.C.S.Rathnayake.jpeg";

const AboutUs = () => {
  const { t } = useLanguage(); // Get the translation function
  const location = useLocation();

  // Move the officers array inside the component to use the `t` function
  const officers = [
    {
      name: "S.K.W. Sisira Kumara",
      designation: t('directorGeneral'), // Translate designation
      office: " Office-011 2877122",
      phone: "Mobile-N/A",
      email: "nimal.perera@ministry.gov.lk",
      image: nimalImage,
    },
    {
      name: "W.P.S. Wickramge",
      designation: t('director'), // Translate designation
      office: "Office-011 288714",
      phone: "Mobile-071 8765432",
      email: "tharushi.silva@ministry.gov.lk",
      image: wickramageImage,
    },
    {
      name: "W.M.U.M. Wijeyakoon",
      designation: t('director'), // Translate designation
      office: "Office-N/A",
      phone: "Mobile-0714434091",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: wijayakoonImage,
    },
    {
      name: "N.C. Wickramanayaka",
      designation: t('director'), // Translate designation
      office: "Office-112186018",
      phone: "Mobile-094 718318437",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: WickramanayakaImage,
    },
    {
      name: "V.C. Wijewardana",
      designation: t('deputyDirector'), // Translate designation
      office: "Office-112887478",
      phone: "Mobile-0702599805",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: VijewardanaImage,
    },
    {
      name: "S.G.A.K. Subawickrama",
      designation: t('assistantDirector'), // Translate designation
      office: "Office-N/A",
      phone: "Mobile-0741520766",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: ruwanImage,
    },
    {
      name: "R.M.C.S. Rathnayaka",
      designation: t('assistantDirector'), // Translate designation
      office: "Office-112887831",
      phone: "Mobile-0703065277",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: RathnayakeImage,
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#F3931D] text-center mb-6 font-serif">
          {t('aboutUsTitle')}
        </h1>

        {/* Introduction Section */}
        <section id="introduction">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-2">{t('introduction')}</h2>
          <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
            <p className="text-lg leading-relaxed">
              {t('introductionText')}
              <br />
              {/* {t('introductionText2')} */}
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Overview Section */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-4">{t('overview')}</h2>
          <div className="space-y-6">
            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">{t('vision')}</h3>
              <p className="text-base leading-relaxed">
                {t('visionText')}
              </p>
            </div>

            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">{t('mission')}</h3>
              <p className="text-base leading-relaxed">
                {t('missionText')}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Officer Overview Section */}
        <section id="services">
        <h2 className="text-2xl font-bold text-[#9A3F3F] mb-4">{t('officersDetails')}</h2>
        <div className="bg-w py-160 px-6 md:px-20" >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-35 h-350 object-cover mb-4 border-2 "
                />
                <h3 className="text-xl font-semibold text-black mb-1">
                  {officer.name}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {officer.designation}
                </p>
                <p className="text-sm text-gray-600 mb-1">{t('office')}-{officer.office}</p>
                <p className="text-sm text-blue-600 mb-1">{officer.email}</p>
                <p className="text-sm text-gray-700">{t('mobile')}-{officer.phone}</p>
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;