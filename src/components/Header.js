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
  
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeAccessibility, setActiveAccessibility] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items with translations
  const navItems = [
    { label: t('home'), path: "/", icon: "🏠" },
    {
      label: t('aboutUs'),
      path: "/AboutUs",
      icon: "👥",
      subItems: [
        { label: t('introduction'), anchor: "#introduction", icon: "📋" },
        { label: t('overview'), anchor: "#overview", icon: "👁️" },
        { label: t('officerDetails'), anchor: "#services", icon: "👤" },
      ],
    },
    {
      label: t('download'),
      path: "/Download",
      icon: "📥",
      subItems: [
        { label: t('circulars'), anchor: "#Circulars", icon: "📄" },
        { label: t('guidelines'), anchor: "#Guidelines", icon: "📖" },
        { label: t('formats'), anchor: "#Formats", icon: "📝" },
      ],
    },
    { label: t('news'), path: "/News", icon: "📰" },
    {
      label: t('services'),
      icon: "🛠️",
      mainCategories: [
        {
          label: t('agriculture'),
          icon: "🌾",
          color: "from-green-400 to-green-600",
          subItems: [
            { label: t('coconutRelatedProduct'), path: "/services/agriculture/coconut", icon: "🥥" },
            { label: t('kithulRelatedProduct'), path: "/services/agriculture/kithul", icon: "🌴" },
            //{ label: t('palmRelatedProduct'), path: "/services/agriculture/palm", icon: "🌴" },
            { label: t('spicesRelatedProduct'), path: "/services/agriculture/spices", icon: "🌶️" },
            { label: t('flowersOrnamentalPlants'), path: "/services/agriculture/flowers", icon: "🌺" },
            { label: t('seedProduct'), path: "/services/agriculture/seed", icon: "🌱" },
            { label: t('fruitRelatedProduct'), path: "/services/agriculture/fruits", icon: "🍎" },
            { label: t('vegetableValueAddition'), path: "/services/agriculture/vegetable", icon: "🥕" },
            { label: t('mushroomProduct'), path: "/services/agriculture/mushroom", icon: "🍄" },
            { label: t('otherProduct'), path: "/services/agriculture/other", icon: "🌿" },
            { label: t('teaProduct'), path: "/services/agriculture/tea", icon: "🍵" },
            { label: t('bulathProduct'), path: "/services/agriculture/bulath", icon: "🌿" },
            { label: t('cinnamonProduct'), path: "/services/agriculture/cinnamon", icon: "🌰" },
          ],
        },
        {
          label: t('industries'),
          icon: "🏭",
          color: "from-blue-400 to-blue-600",
          subItems: [
            { label: t('clothRelatedProduct'), path: "/services/industries/cloth", icon: "👕" },
            { label: t('footwear'), path: "/services/industries/footwear", icon: "👟" },
            { label: t('caneRelatedProduct'), path: "/services/industries/cane", icon: "🦯" },
            { label: t('clayRelatedProduct'), path: "/services/industries/clay", icon: "🏺" },
            { label: t('woodenItems'), path: "/services/industries/wooden", icon: "🪵" },
            { label: t('poojaItems'), path: "/services/industries/pooja", icon: "🕯️" },
            { label: t('sweetOrganicFoods'), path: "/services/industries/sweet&foods", icon: "🍯" },
            { label: t('coconutHuskProduct'), path: "/services/industries/coconutHusk", icon: "🥥" },
            { label: t('handCraftProduct'), path: "/services/industries/handcraft", icon: "🎨" },
            { label: t('ironGoldProduct'), path: "/services/industries/iron&gold", icon: "⚙️" }
          ],
        },
        {
          label: t('fisheries'),
          icon: "🐟",
          color: "from-cyan-400 to-cyan-600",
          subItems: [
            { label: t('umbalakadaDriedFish'), path: "/services/fisheries/umbalakada&driesfish", icon: "🐠" },
            { label: t('ornamentalFish'), path: "/services/fisheries/ornamentalfish", icon: "🐡" },
          ],
        },
        {
          label: t('animalHusbandry'),
          icon: "🐄",
          color: "from-amber-400 to-amber-600",
          subItems: [
            { label: t('dairyProduct'), path: "/services/AnimalHusbandry/dairyproduct", icon: "🥛" },
            { label: t('egg'), path: "/services/AnimalHusbandry/eggs", icon: "🥚" },
            { label: t('meats'), path: "/services/AnimalHusbandry/meats", icon: "🍖" },
            { label: t('beeHoney'), path: "/services/AnimalHusbandry/beehoney", icon: "🍯" },
          ],
        },
        {
          label: t('infrastructure'),
          icon: "🏗️",
          color: "from-gray-400 to-gray-600",
          subItems: [
            { label: t('roadDevelopments'), path: "/services/village/roaddevelopment", icon: "🛣️" },
            { label: t('sanitaryFacilities'), path: "/services/village/sanitaryfacilities", icon: "🚿" },
            { label: t('tourismIndustry'), path: "/services/village/tourism", icon: "🏖️" },
            { label: t('otherServices'), path: "/services/village/otherservices", icon: "⚡" },
          ],
        },
      ],
    },
    { label: t('contactUs'), path: "/ContactUs", icon: "📞" },
  ];

  const AccessibilityButton = ({ label, onClick, isActive, icon }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-3 ${
        isActive
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
          : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 border border-gray-200 hover:border-blue-300"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );

  return (
    <header className="w-full shadow-2xl relative z-50">
      {/* Top Bar with Enhanced Gradient */}
      <div 
        className="w-full text-white py-4 sm:py-6 relative overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #F7941D 0%, #6AA84F 50%, #2E8B57 100%)",
        }}
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 relative z-10">
          {/* Enhanced Logo & Title */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-30"></div>
              <img 
                src={logo} 
                alt="Ministry Logo" 
                className="relative h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-contain rounded-full border-4 border-white shadow-xl" 
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight" 
                  style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)" }}>
                <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text ">
                  ග්‍රාමීය සංවර්ධන කාර්යංශය
                </span>
                <span className="block text-yellow-100 font-semibold">
                  Rural Development Bureau
                </span>
                <span className="block text-yellow-200 text-sm lg:text-base">
                  கிராமிய அபிவிருத்தி அமைச்சு
                </span>
              </h1>
            </div>
          </div>

          {/* Enhanced Right Side Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Improved Language Switcher */}
            <div className="flex flex-col sm:flex-row gap-2 bg-white/20 backdrop-blur-sm rounded-xl p-2">
              {[
                { code: 'en', label: 'English', short: 'EN' },
                { code: 'si', label: 'සිංහල', short: 'සිං' },
                { code: 'ta', label: 'தமிழ்', short: 'த' }
              ].map(({ code, label, short }) => (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    language === code
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm'
                  }`}
                >
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{short}</span>
                </button>
              ))}
            </div>

 {/* Accessibility Button + Popup */}
 <div className="relative">
  {/* Accessibility Button */}
  <button
    onClick={() => setShowAccessibilityBox(!showAccessibilityBox)}
    className="w-12 h-12 flex items-center justify-center rounded-full
               bg-white border-2 border-blue-600 text-blue-600"
    aria-label="Accessibility Options"
  >
    <i className="bi bi-universal-access text-xl"></i>
  </button>


  {/* Popup appears below the icon */}
  {showAccessibilityBox && (
    <div
    className="fixed top-28 right-6 w-72 bg-white text-black rounded-xl shadow-2xl border z-[9999]"
    role="dialog"
      aria-label="Accessibility Options"
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="font-bold text-lg">Accessibility Options</h3>
        <button
          onClick={() => setShowAccessibilityBox(false)}
          aria-label="Close Accessibility Options"
          className="text-xl hover:text-red-600"
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-2">
        <AccessibilityButton
          label="Increase Text Size"
          onClick={() => {
            setAccessibilitySettings((s) => ({
              ...s,
              textSize:
                s.textSize === "text-sm"
                  ? "text-base"
                  : s.textSize === "text-base"
                  ? "text-lg"
                  : "text-lg",
            }));
            setActiveAccessibility("inc");
          }}
          isActive={activeAccessibility === "inc"}
        />

        <AccessibilityButton
          label="Decrease Text Size"
          onClick={() => {
            setAccessibilitySettings((s) => ({
              ...s,
              textSize:
                s.textSize === "text-lg"
                  ? "text-base"
                  : s.textSize === "text-base"
                  ? "text-sm"
                  : "text-sm",
            }));
            setActiveAccessibility("dec");
          }}
          isActive={activeAccessibility === "dec"}
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
          label="Reset All"
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
          isActive={false}
        />
      </div>
    </div>
  )}
</div>




            </div>
          </div>
        </div>
     

      {/* Enhanced Navigation Bar */}
      <nav className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-t border-orange-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isAboutUs = item.label === t('aboutUs');
              const isDownload = item.label === t('download');
              const isServices = item.label === t('services');

              // Enhanced Services dropdown
              if (isServices && item.mainCategories) {
                return (
                  <li
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => {
                      setIsServicesHovered(false);
                      setHoveredCategory(null);
                    }}
                  >
                    <span className="flex items-center gap-2 px-4 py-3 bg-white text-sm font-medium shadow-md hover:shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 border border-orange-200">
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                      <i className="bi bi-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>
                    </span>
                    
                    {isServicesHovered && (
                      <div className="absolute left-0 mt-3 w-[600px] bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl z-50 flex border border-gray-200 overflow-hidden">
                        {/* Categories Column */}
                        <div className="w-2/5 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200">
                          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <h4 className="font-bold text-sm">Service Categories</h4>
                          </div>
                          <ul className="p-2">
                            {item.mainCategories.map((category, i) => (
                              <li 
                                key={i}
                                onMouseEnter={() => setHoveredCategory(category)}
                                className="mb-1"
                              >
                                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                                  hoveredCategory === category 
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105` 
                                    : 'hover:bg-white hover:shadow-md'
                                }`}>
                                  <span className="text-xl">{category.icon}</span>
                                  <span className="text-sm font-medium">{category.label}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Sub Items Column */}
                        <div className="w-3/5 max-h-96 overflow-y-auto">
                          {hoveredCategory ? (
                            <div>
                              <div className={`p-4 bg-gradient-to-r ${hoveredCategory.color} text-white`}>
                                <h4 className="font-bold text-sm flex items-center gap-2">
                                  <span className="text-lg">{hoveredCategory.icon}</span>
                                  {hoveredCategory.label}
                                </h4>
                              </div>
                              <ul className="p-2">
                                {hoveredCategory.subItems.map((sub, i) => (
                                  <li key={i} className="mb-1">
                                    <Link 
                                      to={sub.path} 
                                      className="flex items-center gap-3 px-4 py-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg text-xs transition-all duration-300 hover:shadow-md border border-transparent hover:border-blue-200"
                                    >
                                      <span className="text-sm">{sub.icon}</span>
                                      <span>{sub.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="p-8 text-center text-gray-500">
                              <div className="text-4xl mb-4">👆</div>
                              <p className="text-sm">Hover over a category to see available services</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }
              
              // Enhanced regular dropdowns
              if ((isAboutUs || isDownload) && item.subItems) {
                return (
                  <li
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => {
                      if (isAboutUs) setIsAboutUsHovered(true);
                      if (isDownload) setIsDownloadHovered(true);
                    }}
                    onMouseLeave={() => {
                      if (isAboutUs) setIsAboutUsHovered(false);
                      if (isDownload) setIsDownloadHovered(false);
                    }}
                  >
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-2 px-4 py-3 bg-white text-sm font-medium shadow-md hover:shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 border border-orange-200"
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                      <i className="bi bi-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>
                    </Link>
                    
                    {(isAboutUs && isAboutUsHovered) || (isDownload && isDownloadHovered) ? (
                      <ul className="absolute left-0 mt-3 w-64 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl z-50 border border-gray-200 overflow-hidden">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          <h4 className="font-bold text-sm flex items-center gap-2">
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                          </h4>
                        </div>
                        <div className="p-2">
                          {item.subItems.map((sub, i) => (
                            <li key={i} className="mb-1">
                              <a 
                                href={`${item.path}${sub.anchor}`} 
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg text-sm transition-all duration-300 hover:shadow-md border border-transparent hover:border-blue-200"
                              >
                                <span className="text-lg">{sub.icon}</span>
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </div>
                      </ul>
                    ) : null}
                  </li>
                );
              }

              // Regular menu items
              return (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-2 px-4 py-3 bg-white text-sm font-medium shadow-md hover:shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 border border-orange-200"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Enhanced Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-3 ml-auto bg-white rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200">
            <ul className="flex flex-col max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-100 last:border-b-0">
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 text-sm font-medium transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-gray-700">
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </span>
                  )}
                  
                  {/* Mobile subItems */}
                  {item.subItems && (
                    <ul className="bg-gradient-to-r from-gray-50 to-blue-50">
                      {item.subItems.map((sub, i) => (
                        <li key={i}>
                          <a 
                            href={`${item.path}${sub.anchor}`} 
                            className="flex items-center gap-3 px-12 py-3 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-sm transition-all duration-300 border-l-4 border-transparent hover:border-blue-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-sm">{sub.icon}</span>
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Mobile Services categories */}
                  {item.mainCategories && (
                    <ul className="bg-gradient-to-r from-gray-50 to-blue-50">
                      {item.mainCategories.map((category, i) => (
                        <li key={i}>
                          <div className={`flex items-center gap-3 px-10 py-3 text-sm font-medium bg-gradient-to-r ${category.color} text-white`}>
                            <span className="text-lg">{category.icon}</span>
                            {category.label}
                          </div>
                          <ul className="bg-gradient-to-r from-blue-50 to-purple-50">
                            {category.subItems.map((sub, j) => (
                              <li key={j}>
                                <Link 
                                  to={sub.path} 
                                  className="flex items-center gap-3 px-16 py-2 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-xs transition-all duration-300 border-l-4 border-transparent hover:border-purple-400"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="text-sm">{sub.icon}</span>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
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