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
  
 // const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  //const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeAccessibility, setActiveAccessibility] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //  //Navigation items with translations
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

    // {
    //   label: t('services'),
    //   mainCategories: [
    //     {
    //       label: t('agriculture'),
    //       subItems: [
    //         { label: t('coconutRelatedProduct'), path: "/services/agriculture/coconut" },
    //         { label: t('kithulRelatedProduct'), path: "/services/agriculture/kithul" },
    //         { label: t('palmRelatedProduct'), path: "/services/agriculture/palm" },
    //         { label: t('spicesRelatedProduct'), path: "/services/agriculture/spices" },
    //         { label: t('flowersOrnamentalPlants'), path: "/services/agriculture/flowers" },
    //         { label: t('seedProduct'), path: "/services/agriculture/seed" },
    //         { label: t('fruitRelatedProduct'), path: "/services/agriculture/fruits" },
    //         { label: t('vegetableValueAddition'), path: "/services/agriculture/vegetable" },
    //         { label: t('mushroomProduct'), path: "/services/agriculture/mushroom" },
    //         { label: t('otherProduct'), path: "/services/agriculture/other" },
    //         { label: t('teaProduct'), path: "/services/agriculture/tea" },
    //         { label: t('bulathProduct'), path: "/services/agriculture/bulath" },
    //         { label: t('cinnamonProduct'), path: "/services/agriculture/cinnamon" },
    //       ],
    //     },
    //     {
    //       label: t('industries'),
    //       subItems: [
    //         { label: t('clothRelatedProduct'), path: "/services/industries/cloth" },
    //         { label: t('footwear'), path: "/services/industries/footwear" },
    //         { label: t('caneRelatedProduct'), path: "/services/industries/cane" },
    //         { label: t('clayRelatedProduct'), path: "/services/industries/clay" },
    //         { label: t('woodenItems'), path: "/services/industries/wooden" },
    //         { label: t('poojaItems'), path: "/services/industries/pooja" },
    //         { label: t('sweetOrganicFoods'), path: "/services/industries/sweet&foods" },
    //         { label: t('coconutHuskProduct'), path: "/services/industries/coconutHusk" },
    //         { label: t('handCraftProduct'), path: "/services/industries/handcraft" },
    //         { label: t('ironGoldProduct'), path: "/services/industries/iron&gold" }
    //       ],
    //     },
    //     {
    //       label: t('fisheries'),
    //       subItems: [
    //         { label: t('umbalakadaDriedFish'), path: "/services/fisheries/umbalakada&driesfish" },
    //         { label: t('ornamentalFish'), path: "/services/fisheries/ornamentalfish" },
    //       ],
    //     },
    //     {
    //       label: t('animalHusbandry'),
    //       subItems: [
    //         { label: t('dairyProduct'), path: "/services/AnimalHusbandry/dairyproduct" },
    //         { label: t('egg'), path: "/services/AnimalHusbandry/eggs" },
    //         { label: t('meats'), path: "/services/AnimalHusbandry/meats" },
    //         { label: t('beeHoney'), path: "/services/AnimalHusbandry/beehoney" },
    //       ],
    //     },
    //     {
    //       label: t('infrastructure'),
    //       subItems: [
    //         { label: t('roadDevelopments'), path: "/services/village/roaddevelopment" },
    //         { label: t('sanitaryFacilities'), path: "/services/village/sanitaryfacilities" },
    //         { label: t('tourismIndustry'), path: "/services/village/tourism" },
    //         { label: t('otherServices'), path: "/services/village/otherservices" },
    //       ],
    //     },
    //   ],
    // },
    //{ label: t('product'), path: "/Product" },
    
    
    { label: t('contactUs'), path: "/ContactUs" },
  ];

  const AccessibilityButton = ({ label, onClick, isActive }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md transition text-xs sm:text-sm ${
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
      <div className="w-full text-white py-3 sm:py-4" style={{ background: "linear-gradient(to right, #F7941D, #6AA84F)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src={logo} 
              alt="Ministry Logo" 
              className="h-12 w-12 sm:h-20 sm:w-20 lg:h-[100px] lg:w-[100px] object-contain rounded-full" 
            />
            <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold leading-tight sm:leading-snug" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              <span className="block">ග්‍රාමීය සංවර්ධන කාර්යංශය</span>
              <span className="block">Rural Development Bureau</span>
              <span className="block">கிராமிய அபிவிருத்தி அமைச்சு</span>
            </h1>
          </div>


          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Responsive */}
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                <span className="hidden sm:inline">English</span>
                <span className="sm:hidden">EN</span>
              </button>
              <button
                onClick={() => changeLanguage('si')}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition ${
                  language === 'si'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                <span className="hidden sm:inline">සිංහල</span>
                <span className="sm:hidden">සිං</span>
              </button>
              <button
                onClick={() => changeLanguage('ta')}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition ${
                  language === 'ta'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                <span className="hidden sm:inline">தமிழ்</span>
                <span className="sm:hidden">த</span>
              </button>
            </div>

            {/* Accessibility Icon */}
            <div className="relative">
              <button
                onClick={() => setShowAccessibilityBox(!showAccessibilityBox)}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black text-base sm:text-xl text-white hover:bg-blue-100 hover:text-blue-600 transition"
                title="Accessibility"
              >
                <i className="bi bi-universal-access"></i>
              </button>

              {showAccessibilityBox && (
                <div
                  ref={accessibilityBoxRef}
                  className="fixed sm:absolute top-16 sm:top-full right-2 sm:right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 sm:p-4 z-[9999] w-56 sm:w-64 space-y-2 text-xs sm:text-sm text-black max-h-[80vh] overflow-y-auto"
                >
                  <button
                    onClick={() => setShowAccessibilityBox(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
                  >
                    ✕
                  </button>
                  <h3 className="font-bold text-red mb-2 pr-6">Accessibility Options</h3>

                  <AccessibilityButton
                    label="Increase Text Size"
                    onClick={() => {
                      setAccessibilitySettings((s) => ({ ...s, textSize: "text-lg" }));
                      setActiveAccessibility("Increase Text Size");
                    }}
                    isActive={activeAccessibility === "Increase Text Size"}
                  />
                  <AccessibilityButton
                    label="Decrease Text Size"
                    onClick={() => {
                      setAccessibilitySettings((s) => ({ ...s, textSize: "text-sm" }));
                      setActiveAccessibility("Decrease Text Size");
                    }}
                    isActive={activeAccessibility === "Decrease Text Size"}
                  />
                  <AccessibilityButton
                    label="Increase Text Spacing"
                    onClick={() => {
                      setAccessibilitySettings((s) => ({ ...s, spacing: "tracking-wide" }));
                      setActiveAccessibility("Increase Text Spacing");
                    }}
                    isActive={activeAccessibility === "Increase Text Spacing"}
                  />
                  <AccessibilityButton
                    label="Decrease Text Spacing"
                    onClick={() => {
                      setAccessibilitySettings((s) => ({ ...s, spacing: "tracking-tight" }));
                      setActiveAccessibility("Decrease Text Spacing");
                    }}
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
                    label="Text to Speech"
                    onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(
                        "Welcome to the Rural Development Bureau website"
                      );
                      speechSynthesis.speak(utterance);
                      setActiveAccessibility("Text to Speech");
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
                    label="Reset Settings"
                    onClick={() => {
                      setAccessibilitySettings({
                        textSize: "text-base",
                        spacing: "tracking-normal",
                        invert: false,
                        grayscale: false,
                        bigCursor: false,
                        disableAnimations: false,
                      });
                      setActiveAccessibility("");
                    }}
                    isActive={activeAccessibility === "Reset Settings"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      
      {/* Navigation Bar */}
      <nav className="w-full bg-[#EFDCAB]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isAboutUs = item.label === t('aboutUs');
              const isDownload = item.label === t('download');

              return (item.subItems && (isAboutUs || isDownload)) ? (
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-2 ml-auto"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-200">
                  <Link 
                    to={item.path} 
                    className="block px-4 py-3 hover:bg-[#F3931D] text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <ul className="bg-gray-50">
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a 
                            href={`${item.path}${sub.anchor}`} 
                            className="block px-8 py-2 hover:bg-[#F3931D] text-xs"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;