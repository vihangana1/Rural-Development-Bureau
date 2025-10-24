import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/AboutUs",
    subItems: [
      { label: "Introduction", anchor: "#introduction" },
      { label: "Overview", anchor: "#overview" },
      { label: "Officer Details", anchor: "#services" },
    ],
  },
  {
    label: "Services",
    path: '',
    mainCategories: [
      {
        label: "Agriculture",
        subItems: [
          { label: "Coconut Related Product", path: "/services/agriculture/coconut" },
          { label: "Kithul Related Product", path: "/services/agriculture/kithul" },
          { label: "Palm Related Product", path: "/services/agriculture/palm" },
          { label: "Spices and Related Product", path: "/services/agriculture/spices" },
          { label: "Flowers and Ornamental Plants", path: "/services/agriculture/flowers" },
          { label: "Seed Product", path: "/services/agriculture/seed" },
          { label: "Fruit Related Product", path: "/services/agriculture/fruits" },
          { label: "Vegetable Value Addition", path: "/services/agriculture/vegetable" },
          { label: "Mushroom Product", path: "/services/agriculture/mushroom" },
          { label: "Other Product" , path: "/services/agriculture/other"},
          { label: "Tea Product" , path: "/services/agriculture/tea"},
          { label: "Bulath Product" , path: "/services/agriculture/bulath"},
          { label: "Cinnamon Product" , path: "/services/agriculture/cinnamon"} ,
          { label: "Other Product" , path: "/services/agriculture/other"},
        ],
      },
      {
        label: "Industries",
        subItems: [
          { label: "Cloth Related Product", path: "/services/industries/cloth" },
          { label: "Footwear", path: "/services/industries/footwear" },
          { label: "Cane Related Product", path: "/services/industries/cane" },
          { label: "Clay Related Product", path: "/services/industries/clay" },
          { label: "Wooden Items", path: "/services/industries/wooden" },
          { label: "Pooja Items", path: "/services/industries/pooja" },
          { label: "Sweet & Organic Foods", path: "/services/industries/sweet&foods" },
          { label: "Coconut Husk Product", path: "/services/industries/coconutHusk" },
          { label: "Hand Craft Product", path: "/services/industries/handcraft"},
          { label: "Iron & Gold Product", path: "/services/industries/iron&gold"}
        ],
      },
      {
        label: "Fisheries",
        subItems: [
          { label: "Umbalakada & Dried Fish", path: "/services/fisheries/umbalakada&driesfish" },
          { label: "Ornamental Fish", path: "/services/fisheries/ornamentalfish" },
        ],
      },
      {
        label: "Animal Husbandry",
        subItems: [
          { label: "Dairy Product", path: "/services/AnimalHusbandry/dairyproduct" },
          { label: "Egg", path: "/services/AnimalHusbandry/eggs" },
          { label: "Meats", path: "/services/AnimalHusbandry/meats" },
          { label: "Bee Honey", path: "/services/AnimalHusbandry/beehoney" },
        ],
      },
      {
        label: "Infrastructure ",
        subItems: [
          { label: " Road Developments", path: "/services/village/roaddevelopment" },
          { label: " Sanitar Facilities", path: "/services/village/sanitaryfacilities" },
          { label: "Tourism Industry", path: "/services/village/tourism" },
          { label: "Other services", path: "/services/village/otherservices" },
        ],
      },
    ],
  },
  { label: "Product", path: "/Product" },
  {
    label: "Download",
    path: "/Download",
    subItems: [
      { label: "Circulars", anchor: "#Circulars" },
      { label: "Guidelines", anchor: "#Guidelines" },
      { label: "Formats", anchor: "#Formats" },
    ],
  },
  { label: "News", path: "/News" },
  { label: "Contact Us", path: "/ContactUs" },
];


const Header = ({
  accessibilitySettings,
  setAccessibilitySettings,
  showAccessibilityBox,
  setShowAccessibilityBox,
  accessibilityBoxRef,
}) => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeAccessibility, setActiveAccessibility] = useState("");

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
          {/* Accessibility Icon + Box */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowAccessibilityBox(!showAccessibilityBox)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl text-black hover:bg-blue-100 hover:text-blue-600 transition"
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
    <h3 className="font-bold text-black mb-2">Accessibility Options</h3>

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
      onClick={() =>setAccessibilitySettings((s) => ({...s,
      invert: !s.invert,
    }))
      }
      isActive={accessibilitySettings.invert}
    />
    <AccessibilityButton
      label="Gray Hues"
      onClick={() =>setAccessibilitySettings((s) => ({...s,
      grayscale: !s.grayscale,
    }))
    }
    isActive={accessibilitySettings.grayscale}
  />
    <AccessibilityButton
      label="Big Cursor"
      onClick={() => setAccessibilitySettings((s) => ({...s,
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
        const utterance = new SpeechSynthesisUtterance("Welcome to the Rural Development Bureau website");
        speechSynthesis.speak(utterance);
      }}
      isActive={activeAccessibility === "Text to Speech"}
    />
   <AccessibilityButton
      label="Disable Animations"
      onClick={() =>setAccessibilitySettings((s) => ({...s,
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



      {/* Navigation  Bar */}
      <nav className="w-full bg-[#EFDCAB]">
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between h-12">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isAboutUs = item.label === "About Us";
              const isDownload = item.label === "Download";
              const isServices = item.label === "Services";

              return isServices ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => {
                    setIsServicesHovered(false);
                    setHoveredCategory(null); // Reset hovered category when leaving Services
                  }}
                >
                  <Link to={item.path} className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-[#F3931D] transition">
                    {item.label}
                  </Link>
                  {/* First-level dropdown for main categories */}
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
                            <div className="px-4 py-2  text-black hover:bg-[#F3931D] cursor-pointer">
                              {category.label}
                            </div>
                            {/* Second-level dropdown for sub-items of each category */}
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
              ) : (item.subItems && (isAboutUs || isDownload)) ? ( // Apply for About Us and Download
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