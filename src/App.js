
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


import { LanguageProvider } from './contexts/LanguageContext';
// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Pages
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import Product from "./components/Products";
import Download from "./components/Download";
import Gallery from "./components/Gallery";

// Programmes
import Gramashakthi from "./components/Programme/Gramashakthi";
import Prajashakthi from "./components/Programme/Prajashakthi";
import Ruraldevelopment from "./components/Programme/Ruraldevelopment";
import Sawbagya from "./components/Programme/Sawbagya";

// Agriculture
import Coconut from "./components/Services/agriculture/coconut";
import Flowers from "./components/Services/agriculture/flowers";
import Fruits from "./components/Services/agriculture/fruits";
import Kithul from "./components/Services/agriculture/kithul";
import Palm from "./components/Services/agriculture/palm";
import Seed from "./components/Services/agriculture/seed";
import Spices from "./components/Services/agriculture/spices";
import Vegetable from "./components/Services/agriculture/vegetable";
import Mushroom from "./components/Services/agriculture/mushroom";
import Tea from "./components/Services/agriculture/tea";
import Cinnamon from "./components/Services/agriculture/cinnamon";
import Bulath from "./components/Services/agriculture/bulath";
import Other from "./components/Services/agriculture/Other";

// Industries
import Cane from "./components/Services/industries/cane";
import Clay from "./components/Services/industries/clay";
import Cloth from "./components/Services/industries/cloth";
import Footwear from "./components/Services/industries/footwear";
import Handcraft from "./components/Services/industries/handcraft";
import IronGold from "./components/Services/industries/iron&gold";
import Pooja from "./components/Services/industries/pooja";
import SweetFoods from "./components/Services/industries/sweet&foods";
import Wooden from "./components/Services/industries/wooden";
import CoconutHusk from "./components/Services/industries/coconutHusk";

// Fisheries
import OrnamentalFish from "./components/Services/Fisheries/ornamentalfish";
import UmbalakadaDries from "./components/Services/Fisheries/umbalakada&driesfish";

// Animal Husbandry
import BeeHoney from "./components/Services/AnimalHusbandry/beehoney";
import DairyProduct from "./components/Services/AnimalHusbandry/dairyproduct";
import Eggs from "./components/Services/AnimalHusbandry/eggs";
import Meats from "./components/Services/AnimalHusbandry/Meats";

// Village
import Roaddevelopment from "./components/Services/village/roaddevelopment";
import Sanitary from "./components/Services/village/sanitaryfacilities";
import Tourism from "./components/Services/village/tourism";
import Otherservices from "./components/Services/village/otherservices";

import News1 from "./components/News/news1";
import News2 from "./components/News/news2";
import News3 from "./components/News/news3";
import News4 from "./components/News/news4";
import News5 from "./components/News/news5";
import News6 from "./components/News/news6";

// Product Pages
import HandCraftProduct from "./components/Products/handcraft";
import DehydratedProduct from "./components/Products/dehydrate";
import CoconutProduct from "./components/Products/coconutrelated";
import ClayProduct from "./components/Products/clayrelated";
import DairyProducts from "./components/Products/dairyproduct";




function App() {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    textSize: "text-base",
    spacing: "tracking-normal",
    invert: false,
    grayscale: false,
    bigCursor: false,
    disableAnimations: false,
  });

  const [showAccessibilityBox, setShowAccessibilityBox] = useState(false);
  const accessibilityBoxRef = useRef(null);

  // Auto-close accessibility box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accessibilityBoxRef.current &&
        !accessibilityBoxRef.current.contains(event.target)
      ) {
        setShowAccessibilityBox(false);
      }
    };

    if (showAccessibilityBox) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAccessibilityBox]);

  return (
    <Router>
      <ScrollToTop /> 
      <LanguageProvider>
        <div
          className={`min-h-screen ${
            accessibilitySettings.invert ? "invert" : ""
          } ${accessibilitySettings.grayscale ? "grayscale" : ""} ${
            accessibilitySettings.disableAnimations ? "animate-none transition-none" : ""
          } ${accessibilitySettings.textSize} ${accessibilitySettings.spacing}`}
          style={{
            cursor: accessibilitySettings.bigCursor ? "url('/big-cursor.png'), auto" : "auto",
          }}
        >
          <Header
            accessibilitySettings={accessibilitySettings}
            setAccessibilitySettings={setAccessibilitySettings}
            showAccessibilityBox={showAccessibilityBox}
            setShowAccessibilityBox={setShowAccessibilityBox}
            accessibilityBoxRef={accessibilityBoxRef}
          />

          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/News" element={<News />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/Gallery" element={<Gallery />} />

            {/* Programmes */}
            <Route path="/components/programme/Gramashakthi" element={<Gramashakthi />} />
            <Route path="/components/programme/Prajashakthi" element={<Prajashakthi />} />
            <Route path="/components/programme/Sawbagya" element={<Sawbagya />} />
            <Route path="/components/programme/Ruraldevelopment" element={<Ruraldevelopment />} />

            {/* Agriculture */}
            <Route path="/services/agriculture/coconut" element={<Coconut />} />
            <Route path="/services/agriculture/flowers" element={<Flowers />} />
            <Route path="/services/agriculture/fruits" element={<Fruits />} />
            <Route path="/services/agriculture/kithul" element={<Kithul />} />
            <Route path="/services/agriculture/palm" element={<Palm />} />
            <Route path="/services/agriculture/seed" element={<Seed />} />
            <Route path="/services/agriculture/spices" element={<Spices />} />
            <Route path="/services/agriculture/vegetable" element={<Vegetable />} />
            <Route path="/services/agriculture/mushroom" element={<Mushroom />} />
            <Route path="/services/agriculture/tea" element={<Tea />} />
            <Route path="/services/agriculture/cinnamon" element={<Cinnamon />} />
            <Route path="/services/agriculture/bulath" element={<Bulath />} />
            <Route path="/services/agriculture/other" element={<Other />} />

            {/* Industries */}
            <Route path="/services/industries/cane" element={<Cane />} />
            <Route path="/services/industries/clay" element={<Clay />} />
            <Route path="/services/industries/cloth" element={<Cloth />} />
            <Route path="/services/industries/footwear" element={<Footwear />} />
            <Route path="/services/industries/handcraft" element={<Handcraft />} />
            <Route path="/services/industries/iron&gold" element={<IronGold />} />
            <Route path="/services/industries/pooja" element={<Pooja />} />
            <Route path="/services/industries/sweet&foods" element={<SweetFoods />} />
            <Route path="/services/industries/wooden" element={<Wooden />} />
            <Route path="/services/industries/coconutHusk" element={<CoconutHusk />} />

            {/* Fisheries */}
            <Route path="/services/fisheries/ornamentalfish" element={<OrnamentalFish />} />
            <Route path="/services/fisheries/umbalakada&driesfish" element={<UmbalakadaDries />} />

            {/* Animal Husbandry */}
            <Route path="/services/AnimalHusbandry/beehoney" element={<BeeHoney />} />
            <Route path="/services/AnimalHusbandry/dairyproduct" element={<DairyProduct />} />
            <Route path="/services/AnimalHusbandry/eggs" element={<Eggs />} />
            <Route path="/services/AnimalHusbandry/Meats" element={<Meats />} />

            {/* Village */}
            <Route path="/services/village/roaddevelopment" element={<Roaddevelopment />} />
            <Route path="/services/village/sanitaryfacilities" element={<Sanitary />} />
            <Route path="/services/village/tourism" element={<Tourism />} />
            <Route path="/services/village/otherservices" element={<Otherservices />} />

            <Route path="/news/news1" element={<News1 />} />
            <Route path="/news/news2" element={<News2 />} />
            <Route path="/news/news3" element={<News3 />} />
            <Route path="/news/news4" element={<News4 />} />
            <Route path="/news/news5" element={<News5 />} />
            <Route path="/news/news6" element={<News6 />} />

            <Route path="/products/handcraft" element={<HandCraftProduct />} />
            <Route path="/products/dehydrate" element={<DehydratedProduct />} />
            <Route path="/products/coconutrelated" element={<CoconutProduct />} />
            <Route path="/products/clayrelated" element={<ClayProduct />} />
            <Route path="/products/dairyproduct" element={<DairyProducts />} />


          </Routes>

          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;