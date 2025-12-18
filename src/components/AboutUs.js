import React, { useEffect, useState, useRef } from "react"; // Added useState, useRef
import { useLocation } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

// Import officer images
//import nimalImage from "../assets/officers/image 2.jpeg";
//import tharushiImage from "../assets/officers/image 2.jpeg";
import yahanadanImage from "../assets/officers/yohanadan.jpeg";
import wickramageImage from "../assets/officers/wickramage.jpeg";
import wijayakoonImage from "../assets/officers/W.M.U.M.Wijayakoon.jpeg";
import WickramanayakaImage from "../assets/officers/N.C.Wickramanayaka.jpeg";
import VijewardanaImage from "../assets/officers/vijewardhana.jpeg";
import RathnayakeImage from "../assets/officers/rathnayake.jpeg";
import jayasooriyaImage from "../assets/officers/jayasooriya.jpeg";
import champikaImage from "../assets/officers/champika.jpg";

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

const AboutUs = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const officers = [
    {
      name: "S.",
      designation: t('directorGeneral'),
      office: " 011 2877122",
      phone: "N/A",
      email: "nimal.perera@ministry.gov.lk",
      //image: nimalImage,
    },
    {
      name: "W.P.S. Wickramge",
      designation: t('director'),
      office: "N/A",
      phone: "071-8025137",
      email: "suranga.wick75@gmail.com",
      image: wickramageImage,
    },
    {
      name: "W.M.U.M. Wijeyakoon",
      designation: t('director'),
      office: "N/A",
      phone: "0714434091",
      email: "uthlk@yahoo.com",
      image: wijayakoonImage,
    },
    {
      name: "N.C. Wickramanayaka",
      designation: t('director'),
      office: "N/A",
      phone: "0718318434",
      email: "nilanthawickramanayake@gmail.com",
      image: WickramanayakaImage,
    },
    {
      name: "Champika D Rathnayake",
      designation: t('director'),
      office: "N/A",
      phone: "0766580912",
      email: "-",
      image: champikaImage,
    },
    {
      name: "R.H.C.K.Ramasinghe",
      designation: t('deputyDirector'),
      office: "N/A",
      phone: "Mobile-0702599805",
      email: "vijewardhana87@gmail.com",
      //image: RathnayakeImage,
    },
    {
      name: "V.C. Wijewardana",
      designation: t('deputyDirector'),
      office: "N/A",
      phone: "0702599805",
      email: "ruwan.jayasena@ministry.gov.lk",
      image: VijewardanaImage,
    },
    
    {
      name: "J.A.W.N.Jayasooriya",
      designation: t('deputyDirector'),
      office: "N/A",
      phone: "0713227593",
      email: "wjayasooriya@gmail.com",
      image: jayasooriyaImage,
    },
    
    
    {
      name: "K.Yohanadan",
      designation: t('assistantDirector'),
      office: "N/A",
      phone: "0777284657",
      email: "yohanadhan1967@gmail.com",
      image: yahanadanImage,
    },
    // {
    //   name: "S.G.A.K. Subawickrama",
    //   designation: t('assistantDirector'),
    //   office: "N/A",
    //   phone: "071-2921285",
    //   email: "ayeshasubhawickrama92@gmail.com",
    //   image: subhawickramaImage,
    // },
    {
      name: "R.M.C.S. Rathnayaka",
      designation: t('assistantDirector'),
      office: "N/A",
      phone: "0703065277",
      email: "rmcsrathnayake00@gmail.com",
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
        <Reveal>
          <h1 className="text-4xl font-bold text-black text-center mb-6 ">
            {t('aboutUsTitle')}
          </h1>
        </Reveal>

        {/* Introduction Section */}
        <section id="introduction">
          <Reveal delay={200}>
            <h2 className="text-2xl font-bold text-black mb-2">{t('introduction')}</h2>
            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <p className="text-lg leading-relaxed">
                {t('introductionText')}
                <br />
                {/* {t('introductionText2')} */}
              </p>
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Overview Section */}
        <section id="overview">
          <Reveal>
            <h2 className="text-2xl font-bold text-black mb-4">{t('overview')}</h2>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal delay={200}>
              <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2">{t('vision')}</h3>
                <p className="text-base  text-xl leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2">{t('mission')}</h3>
                <p className="text-base  text-xl  leading-relaxed">
                  {t('missionText')}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Officer Overview Section */}
        <section id="services">
          <Reveal>
            <h2 className="text-2xl font-bold text-black mb-4">{t('officersDetails')}</h2>
          </Reveal>
          
          <div className="bg-w py-160 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <Reveal key={index} delay={index * 150} className="h-full">
                  <div
                    className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 h-full"
                  >
                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-35 h-350 object-cover mb-4 border-2"
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;