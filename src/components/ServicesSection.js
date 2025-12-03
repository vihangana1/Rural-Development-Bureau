import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

// ✅ Correct image paths
const serviceImg1 = require("../assets/homepage/services/service1.jpeg");
const serviceImg2 = require("../assets/homepage/services/service2.jpeg");
const serviceImg3 = require("../assets/homepage/services/service3.jpeg");
// Add more photos here as needed
const serviceImg4 = require("../assets/homepage/services/service3.jpeg");

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("services.healthWellbeing"), image: serviceImg1 },
    { title: t("services.hospitalCare"), image: serviceImg2 },
    { title: t("services.publicHealth"), image: serviceImg3 },
    { title: t("services.extraService"), image: serviceImg4 }, // example new photo
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-black mb-12 uppercase">
        {t("ourServices")}
      </h2>

      {/* Carousel wrapper */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // speed of scroll (lower = faster)
            ease: "linear",
          }}
        >
          {/* Duplicate services array to make seamless loop */}
          {[...services, ...services].map((s, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] rounded-lg shadow-md overflow-hidden min-w-[450px]"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
