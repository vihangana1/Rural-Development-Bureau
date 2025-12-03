import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useLanguage } from '../contexts/LanguageContext';

const Header = ({
  accessibilitySettings,
  setAccessibilitySettings,
  showAccessibilityBox,
  setShowAccessibilityBox,
  accessibilityBoxRef,
}) => {
  const { language, changeLanguage, t } = useLanguage();
  
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeAccessibility, setActiveAccessibility] = useState("");

  // Navigation items with translations
  const navItems = [
    { label: t('home'), path: "/" },
    {
      label: t('aboutUs'),
      path: "/AboutUs",
      subItems: [
        { label: t('introduction'), anchor: "#introduction" },
        { label: t('overview'), anchor: "#overview" },
        { label: t('officerDetails'), anchor: "#services" },
      ],
    },
    

    {
      label: t('download'),
      path: "/Download",
      subItems: [
        { label: t('circulars'), anchor: "#Circulars" },
        { label: t('guidelines'), anchor: "#Guidelines" },
        { label: t('formats'), anchor: "#Formats" },
      ],
    },

    { label: t('news'), path: "/News" },

    {
      label: t('services'),
      path: '',
      mainCategories: [
        {
          label: t('agriculture'),
          subItems: [
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
        },
        {
          label: t('industries'),
          subItems: [
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
        },
        {
          label: t('fisheries'),
          subItems: [
            { label: t('umbalakadaDriedFish'), path: "/services/fisheries/umbalakada&driesfish" },
            { label: t('ornamentalFish'), path: "/services/fisheries/ornamentalfish" },
          ],
        },
        {
          label: t('animalHusbandry'),
          subItems: [
            { label: t('dairyProduct'), path: "/services/AnimalHusbandry/dairyproduct" },
            { label: t('egg'), path: "/services/AnimalHusbandry/eggs" },
            { label: t('meats'), path: "/services/AnimalHusbandry/meats" },
            { label: t('beeHoney'), path: "/services/AnimalHusbandry/beehoney" },
          ],
        },
        {
          label: t('infrastructure'),
          subItems: [
            { label: t('roadDevelopments'), path: "/services/village/roaddevelopment" },
            { label: t('sanitaryFacilities'), path: "/services/village/sanitaryfacilities" },
            { label: t('tourismIndustry'), path: "/services/village/tourism" },
            { label: t('otherServices'), path: "/services/village/otherservices" },
          ],
        },
      ],
    },
    //{ label: t('product'), path: "/Product" },
    
    
    { label: t('contactUs'), path: "/ContactUs" },
  ];

  const AccessibilityButton = ({ label, onClick, isActive }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md transition ${
        isActive
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-200 hover:text-black"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="w-full text-white py-4" style={{ background: "linear-gradient(to right, #F7941D, #6AA84F)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Ministry Logo" className="h-[100px] w-[100px] object-contain rounded-full" />
            <h1 className="text-sm md:text-lg font-bold leading-snug" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              ග්‍රාමීය සංවර්ධන කාර්යංශය<br />
              Rural Development Bureau<br />
              கிராமிய அபிவிருத்தி அமைச்சு
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Language Switcher Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('si')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  language === 'si'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                සිංහල
              </button>
              <button
                onClick={() => changeLanguage('ta')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  language === 'ta'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                தமிழ்
              </button>
            </div>

            {/* Accessibility Icon + Box */}
            <div className="relative">
              <button
                onClick={() => setShowAccessibilityBox(!showAccessibilityBox)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-xl text-white hover:bg-blue-100 hover:text-blue-600 transition"
                title="Accessibility"
              >
                <i className="bi bi-universal-access"></i>
              </button>

              {showAccessibilityBox && (
                <div
                  ref={accessibilityBoxRef}
                  className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-[9999] w-64 space-y-2 text-sm text-black"
                >
                  <button
                    onClick={() => setShowAccessibilityBox(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>
                  <h3 className="font-bold text-red mb-2">Accessibility Options</h3>

                  <AccessibilityButton
                    label="Increase Text Size"
                    onClick={() => setAccessibilitySettings((s) => ({ ...s, textSize: "text-lg" }))}
                    isActive={activeAccessibility === "Increase Text Size"}
                  />
                  <AccessibilityButton
                    label="Decrease Text Size"
                    onClick={() => setAccessibilitySettings((s) => ({ ...s, textSize: "text-sm" }))}
                    isActive={activeAccessibility === "Decrease Text Size"}
                  />
                  <AccessibilityButton
                    label="Increase Text Spacing"
                    onClick={() => setAccessibilitySettings((s) => ({ ...s, spacing: "tracking-wide" }))}
                    isActive={activeAccessibility === "Increase Text Spacing"}
                  />
                  <AccessibilityButton
                    label="Decrease Text Spacing"
                    onClick={() => setAccessibilitySettings((s) => ({ ...s, spacing: "tracking-tight" }))}
                    isActive={activeAccessibility === "Decrease Text Spacing"}
                  />
                  <AccessibilityButton
                    label="Invert Colors"
                    onClick={() =>
                      setAccessibilitySettings((s) => ({
                        ...s,
                        invert: !s.invert,
                      }))
                    }
                    isActive={accessibilitySettings.invert}
                  />
                  <AccessibilityButton
                    label="Gray Hues"
                    onClick={() =>
                      setAccessibilitySettings((s) => ({
                        ...s,
                        grayscale: !s.grayscale,
                      }))
                    }
                    isActive={accessibilitySettings.grayscale}
                  />
                  <AccessibilityButton
                    label="Big Cursor"
                    onClick={() =>
                      setAccessibilitySettings((s) => ({
                        ...s,
                        bigCursor: !s.bigCursor,
                      }))
                    }
                    isActive={accessibilitySettings.bigCursor}
                  />
                  <AccessibilityButton
                    label="Reading Guide"
                    onClick={() => alert("Reading guide feature coming soon")}
                    isActive={activeAccessibility === "Reading Guide"}
                  />
                  <AccessibilityButton
                    label="Text to Speech"
                    onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(
                        "Welcome to the Rural Development Bureau website"
                      );
                      speechSynthesis.speak(utterance);
                    }}
                    isActive={activeAccessibility === "Text to Speech"}
                  />
                  <AccessibilityButton
                    label="Disable Animations"
                    onClick={() =>
                      setAccessibilitySettings((s) => ({
                        ...s,
                        disableAnimations: !s.disableAnimations,
                      }))
                    }
                    isActive={accessibilitySettings.disableAnimations}
                  />
                  <AccessibilityButton
                    label="Reset Accessibility Settings"
                    onClick={() => {
                      setAccessibilitySettings({
                        textSize: "text-base",
                        spacing: "tracking-normal",
                        invert: false,
                        grayscale: false,
                        bigCursor: false,
                        disableAnimations: false,
                      });
                      setActiveAccessibility("Reset Accessibility Settings");
                    }}
                    isActive={activeAccessibility === "Reset Accessibility Settings"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="w-full bg-[#EFDCAB]">
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between h-12">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isAboutUs = item.label === t('aboutUs');
              const isDownload = item.label === t('download');
              const isServices = item.label === t('services');

              return isServices ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => {
                    setIsServicesHovered(false);
                    setHoveredCategory(null);
                  }}
                >
                  <Link to={item.path} className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-[#F3931D] transition">
                    {item.label}
                  </Link>
                  {isServicesHovered && (
                    <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md z-50">
                      {Array.isArray(item.mainCategories) &&
                        item.mainCategories.map((category, index) => (
                          <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => setHoveredCategory(category.label)}
                            onMouseLeave={() => setHoveredCategory(null)}
                          >
                            <div className="px-4 py-2 text-black hover:bg-[#F3931D] cursor-pointer">
                              {category.label}
                            </div>
                            {hoveredCategory === category.label && (
                              <ul className="absolute left-full top-0 w-[200px] bg-white shadow-lg rounded-md z-50 grid grid-cols-1 gap-2 p-4">
                                {Array.isArray(category.subItems) &&
                                  category.subItems.map((sub, i) => (
                                    <li key={i}>
                                      <Link to={sub.path} className="block text-sm text-gray-700 hover:text-white hover:bg-[#F3931D] px-3 py-2 rounded-md">
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ) : (item.subItems && (isAboutUs || isDownload)) ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (isAboutUs) setIsAboutUsHovered(true);
                    if (isDownload) setIsDownloadHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (isAboutUs) setIsAboutUsHovered(false);
                    if (isDownload) setIsDownloadHovered(false);
                  }}
                >
                  <Link to={item.path} className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-[#F3931D] transition">
                    {item.label}
                  </Link>
                  {(isAboutUs && isAboutUsHovered) || (isDownload && isDownloadHovered) ? (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a href={`${item.path}${sub.anchor}`} className="block px-4 py-2 hover:bg-[#F3931D] text-sm cursor-pointer">
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.label}>
                  <Link to={item.path} className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-[#F3931D] transition">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;