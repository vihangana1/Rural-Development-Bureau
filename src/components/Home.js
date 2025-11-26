import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import '../index.css';
import { useLanguage } from '../contexts/LanguageContext';
import FeaturedNewsSection from "../components/FeaturedNewsSection";

// Import your images
import image1 from "../assets/homepage/imageai1.jpeg";
import image2 from "../assets/homepage/imageai2.jpeg";
import image3 from "../assets/homepage/imageai3.jpeg";
import image4 from "../assets/homepage/imageai4.jpeg";
import image5 from "../assets/homepage/imageai5.jpeg";
import image6 from "../assets/homepage/imageai6.jpeg";

const images = [image1, image2, image3, image4, image5, image6];

// --- 1. FIXED Reveal Component ---
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
      {
        threshold: 0.1,
      }
    );

    // FIX: Capture the current ref value to a variable
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the captured variable in the cleanup
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

const Home = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  // Services data with translations
  const servicesData = {
    [t('agriculture')]: [
      { label: t('coconutRelatedProduct'), path: "/services/agriculture/coconut" },
      { label: t('kithulRelatedProduct'), path: "/services/agriculture/kithul" },
      { label: t('palmRelatedProduct'), path: "/services/agriculture/palm" },
      { label: t('spicesRelatedProduct'), path: "/services/agriculture/spices" },
      { label: t('flowersOrnamentalPlants'), path: "/services/agriculture/flowers" },
      { label: t('seedProduct'), path: "/services/agriculture/seed" },
      { label: t('fruitRelatedProduct'), path: "/services/agriculture/fruits" },
      { label: t('vegetableValueAddition'), path: "/services/agriculture/vegetable" },
      { label: t('mushroomProduct'), path: "/services/agriculture/mushroom" },
      { label: t('otherProduct'), path: "/services/agriculture/other" },
      { label: t('teaProduct'), path: "/services/agriculture/tea" },
      { label: t('bulathProduct'), path: "/services/agriculture/bulath" },
      { label: t('cinnamonProduct'), path: "/services/agriculture/cinnamon" },
    ],
    [t('industries')]: [
      { label: t('clothRelatedProduct'), path: "/services/industries/cloth" },
      { label: t('footwear'), path: "/services/industries/footwear" },
      { label: t('caneRelatedProduct'), path: "/services/industries/cane" },
      { label: t('clayRelatedProduct'), path: "/services/industries/clay" },
      { label: t('woodenItems'), path: "/services/industries/wooden" },
      { label: t('poojaItems'), path: "/services/industries/pooja" },
      { label: t('sweetOrganicFoods'), path: "/services/industries/sweet&foods" },
      { label: t('coconutHuskProduct'), path: "/services/industries/coconutHusk" },
      { label: t('handCraftProduct'), path: "/services/industries/handcraft" },
      { label: t('ironGoldProduct'), path: "/services/industries/iron&gold" }
    ],
    [t('fisheries')]: [
      { label: t('umbalakadaDriedFish'), path: "/services/fisheries/umbalakada&driesfish" },
      { label: t('ornamentalFish'), path: "/services/fisheries/ornamentalfish" },
    ],
    [t('animalHusbandry')]: [
      { label: t('dairyProduct'), path: "/services/AnimalHusbandry/dairyproduct" },
      { label: t('egg'), path: "/services/AnimalHusbandry/eggs" },
      { label: t('meats'), path: "/services/AnimalHusbandry/meats" },
      { label: t('beeHoney'), path: "/services/AnimalHusbandry/beehoney" },
    ],
    [t('infrastructure')]: [
      { label: t('roadDevelopments'), path: "/services/village/roaddevelopment" },
      { label: t('sanitaryFacilities'), path: "/services/village/sanitaryfacilities" },
      { label: t('tourismIndustry'), path: "/services/village/tourism" },
      { label: t('otherServices'), path: "/services/village/otherservices" },
    ]
  };

  // Function to handle sub-item click
  const handleSubItemClick = (subItem) => {
    console.log(`Sub-item clicked: ${subItem}`);
    navigate(subItem.path);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      {/* Carousel Section */}
      <main className="w-full h-[350px] relative flex flex-col justify-center items-center">
        
        {/* Background Images */}
        <div className="absolute top-5 left-0 w-full h-[100%] z-0 overflow-hidden">
        {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}<br></br> <br></br>
        </div>

        {/* Overlay Boxes */}
        <div className="absolute top-[600px] z-10 flex flex-col md:flex-row justify-center items-center gap-6 px-4 w-[710px] mx-auto">
          {[
          ].map((box, index) => (
            <Link
              to={box.path}
              key={index}
              className={`bg-[#F8EEDF] rounded-lg shadow-lg border-t-[6px] border-[#F3931D] h-[120px] w-[600px] flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 opacity-0 animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
            >
              <div className="p-4">
                <p className="text-2xl font-semibold text-[#333] mb-2">{box.title}</p>
              </div>
              <br></br>
            </Link>
          ))}
        </div>
      </main>
   
      {/* About Section */}
      <section className="bg-[#F9F8F6] py-10 px-4 md:px-12">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#F3931D] uppercase mb-4">
              {t('aboutMinistry')}
            </h2>
          </Reveal>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-yellow-400 pb-2">
                {t('vision')}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4 border-b-2 border-yellow-400 pb-2">
                {t('mission')}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('missionText')}
              </p>
              <a
                href="/AboutUs"
                className="inline-block mt-4 text-yellow-600 font-semibold text-sm hover:underline"
              >
                {t('readMore')} →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-6 justify-center min-w-[800px]">
            {[
              {
                title: t('president'),
                name: t('presidentName'),
                image: require("../assets/officers/president.jpeg"),
              },
              {
                title: t('minister'),
                name: t('ministerName'),
                image: require("../assets/officers/minister.jpg"),
              },
              {
                title: t('secretary'),
                name: t('secretaryName'),
                image: require("../assets/officers/secetry.jpg"),
              },
            ].map((officer, index) => (
              <Reveal key={index} delay={index * 200}>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-64">
                  <img
                    src={officer.image}
                    alt={officer.title}
                    className="w-40 h-40 rounded-full object-cover mb-4"
                  />
                  <p className="text-sm font-semibold text-gray-600 uppercase">
                    {officer.title}
                  </p>
                  <p className="text-base font-bold text-gray-800 text-center">
                    {officer.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="w-full overflow-x-auto pb-4 mb-6">
            <div className="flex gap-10 justify-center min-w-[900px]">
              {/* officer cards */}
            </div>
          </div>

          <div className="w-full text-center">
            <Reveal delay={600}>
              <a
                href="/AboutUs#services"
                className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
              >
                {t('officerDetail')} →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#EEEEEE] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-left">
            <Reveal>
              <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
                {t('projects')}
              </h2>
              <p className="text-sm uppercase text-gray-600 mb-2">
                {t('exploreSectors')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('projectsDescription')}
              </p>
            </Reveal>
          </div>

          {/* Right: Interactive Services */}
          <div className="md:w-1/2 w-full">
            <div className="space-y-4">
              {Object.keys(servicesData).map((service, index) => (
                <Reveal key={service} delay={index * 100}>
                  <div>
                    <button
                      onClick={() =>
                        setActiveService(activeService === service ? null : service)
                      }
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-lg font-semibold shadow-md transition duration-300 ${
                        activeService === service
                          ? "bg-[#FFF7E6] border border-[#F3931D]"
                          : "bg-white border border-gray-300 hover:bg-[#FFF7E6] hover:border-[#F3931D]"
                      }`}
                    >
                      <span>{service}</span>
                      <span className="text-gray-500 text-lg transform transition-transform duration-300">
                        {activeService === service ? "↑" : "↓"}
                      </span>
                    </button>

                    {activeService === service && (
                      <div className="mt-2 grid grid-cols-2 gap-2 bg-white p-4 rounded-md shadow-sm border border-[#F3931D] animate-fade-in">
                        {servicesData[service].map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleSubItemClick(subItem)}
                            className="bg-[#F9E6CF] hover:bg-[#FAC67A] text-[#2C3E50] py-2 px-3 rounded-md text-sm font-medium transition duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-[#F3931D] mb-4 text-center uppercase">
            {t('downloadTitle')}<br></br>
          </h2>
        </Reveal>
        <br></br>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: t('latestCirculars'),
              files: [
                { name: 'Prajashakthi Circular-Sinhala', path: '/downloads/circular/Prajashakthi Circular-Sinhala.pdf' },
                { name: 'Prajashakthi Circular-Tamil', path: '/downloads/circular/Prajashakthi Circular-Tamil.pdf' },
              ],
              link: '/Download#Circulars',
            },
            {
              title: t('latestGuidelines'),
              files: [
                { name: 'Prajashakthi Guidline - Sinhala', path: '/downloads/guidline/Prajashakthi Guidline - Sinhala.pdf' },
                { name: 'Prajashakthi Guidline  - Tamil', path: '/downloads/guidline/Prajashakthi Guidline  - Tamil.pdf' },
              ],
              link: '/Download#Guidelines',
            },
            {
              title: t('latestFormats'),
              files: [
                { name: 'Livelihood Project Proposal Format-English', path: '/downloads/Livelihood Project Proposal Format_En.pdf' },
                { name: 'Livelihood Project Proposal Format-Sinhala.pdf', path: '/downloads/Livelihood Project Proposal Format_Si.pdf' },
              ],
              link: '/Download#Formats',
            },
          ].map((item, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="relative bg-gradient-to-br from-white to-yellow-50 border border-yellow-200 p-8 min-h-[250px]  rounded-xl shadow-md group hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2">{item.title}</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {item.files.map((file, i) => (
                    <li key={i}>
                      <a
                        href={file.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={item.link}
                  className="absolute bottom-4 right-4 text-yellow-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition"
                >
                  {t('viewAll')} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div>
        {/* Other homepage sections */}
        <FeaturedNewsSection />
        {/* More sections */}
      </div>

      {/* Related Organizations section */}
      <section className="bg-[#EEEEEE] py-16 px-6 md:px-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-[#F3931D] mb-10 uppercase relative">
            <span className="px-4 bg-white z-10 relative">{t('relatedOrganizations')}</span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-black z-0"></div>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: t('ruralDevResearchInstitute'),
              logo: require("../assets/gov_logo.jpeg"),
              link: "https://stateminsamurdhi.gov.lk/web/index.php?option=com_content&view=article&id=48&Itemid=184&lang=en",
            },
            {
              name: t('ministryPublicAdmin'),
              logo: require("../assets/gov_logo.jpeg"),
              link: "https://pubad.gov.lk/",
            },
            {
              name: t('ministryHomeAffairs'),
              logo: require("../assets/gov_logo.jpeg"),
              link: "https://www.moha.gov.lk/",
            },
            {
              name: t('ministryFinance'),
              logo: require("../assets/gov_logo.jpeg"),
              link: "https://www.treasury.gov.lk/",
            },
            {
              name: t('exportDevBoard'),
              logo: require("../assets/gov_logo.jpeg"),
              link: "https://www.srilankabusiness.com/",
            },
          ].map((org, index) => (
            <Reveal key={index} delay={index * 100}>
              <a
                href={org.link}
                className="group bg-white border-b-4 border-[#F3931D] rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg h-full"
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-20 h-20 object-contain mb-4 transition duration-300 group-hover:scale-105"
                />
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#9A3F3F]">
                  {org.name}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;