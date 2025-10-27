import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import '../index.css';


// Import your images
import image1 from "../assets/homepage/imageai1.jpeg";
import image2 from "../assets/homepage/imageai2.jpeg";
import image3 from "../assets/homepage/imageai3.jpeg";
import image4 from "../assets/homepage/imageai4.jpeg";
//import image5 from "../assets/homepage/imageai5.jpeg";
import image6 from "../assets/homepage/imageai6.jpeg";

const images = [image1, image2, image3, image4, image6];

const servicesData = {
    Agriculture: [
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
    Industries: [
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
    Fisheries: [
        { label: "Umbalakada & Dried Fish", path: "/services/fisheries/umbalakada&driesfish" },
        { label: "Ornamental Fish", path: "/services/fisheries/ornamentalfish" },
    ],
    "Animal Husbandry": [
        { label: "Dairy Product", path: "/services/AnimalHusbandry/dairyproduct" },
        { label: "Egg", path: "/services/AnimalHusbandry/eggs" },
        { label: "Meats", path: "/services/AnimalHusbandry/meats" },
        { label: "Bee Honey", path: "/services/AnimalHusbandry/beehoney" },
    ],
    Infrastructure: [
        { label: "Road Development", path: "/services/village/roaddevelopment" },
        { label: "Sanitary Facilities", path: "/services/village/sanitaryfacilities" },
        { label: "Tourism Development", path: "/services/village/tourism" },
        { label: "Other Development", path: "/services/village/otherservices" },


    ]
  };
  

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();

  // Function to handle sub-item click
  const handleSubItemClick = (subItem) => {
    console.log(`Sub-item clicked: ${subItem}`);
    navigate(subItem.path);
    // Add your logic here
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
      <main className="w-full h-[650px] relative flex flex-col justify-center items-center">
        
            {/* Background Images */}
                <div className="absolute top-5 left-0 w-full h-full z-0">
                    {images.map((img, index) => (
                        <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                            />
                    ))}
                </div>

            {/* Overlay Boxes */}
            <div className="absolute top-[600px] z-10 flex flex-col md:flex-row justify-center items-center gap-6 px-4 w-[1100px] mx-auto">
              {[
                {
                  title: "Rural Development Programme",
                  //subtitle: "",
                  path: "/components/programme/Ruraldevelopment",
                },
                {
                  title: "Grama Shakthi Programme",
                  //subtitle: "",
                  path: "/components/programme/Gramashakthi",
                },
                {
                  title: "Praja Shakthi Programme",
                // subtitle: "",
                  path: "/components/programme/Prajashakthi",
                },
                {
                  title: "Sawbagya Programme",
                // subtitle: "",
                  path: "/components/programme/Sawbagya",
                },
              ].map((box, index) => (
                <Link
                  to={box.path}
                  key={index}
                  className={`bg-[#F8EEDF] rounded-lg shadow-lg border-t-[6px] border-[#F3931D] h-[200px] w-[300px] flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 opacity-0 animate-slide-in-left`}                  style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
                >
                  <div className="p-4">
                    <p className="text-2xl font-semibold text-[#333] mb-2">{box.title}</p>
                    {/* <p className="text-lg font-bold">{box.subtitle}</p> */}
                  </div>
                </Link>
              ))}
            </div>


      </main>
   
    {/*About Section*/}
    <section className="bg-white py-16 px-6 md:px-20">
        <div className="w-full text-center mt-[200px] gap-10">
            <h2 className="text-3xl font-bold text-[#F3931D] mb-6 uppercase gap-300 ">
                About Ministry of Rural Development
            </h2>
        </div>
            <div className="max-w-9xl mx-auto flex flex-col items-center gap-10">
                
                {/* Officer Cards in One Row */}
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
                {[
                    {
                    title: "President",
                    name: "Hon. Anura Kumara Dissanayake",
                    image: require("../assets/officers/president.jpeg"),
                    },
                    {
                    title: "Minister",
                    name: "Mr.Upali Pannilage",
                    image: require("../assets/officers/minister.jpg"),
                    },
                    {
                    title: "Secretary",
                    name: "Mr. S. Alokabandara",
                    image: require("../assets/officers/secetry.jpg"),
                    },
                ].map((officer, index) => (
                    <div
                    key={index}
                    className="flex items-center gap-4 bg-[#F9F9F9] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full lg:w-1/3"
                    >
                    {/* Circle Image */}
                    <img
                        src= {officer.image}
                        alt={officer.title}
                        className="w-40 h-40 rounded-full object-cover "/>

                    {/* Rectangle Text Block */}
                    <div className="w-50 h-500 pl-4 h-36 justify-center">
                        <p className="text-sm font-semibold text-gray-600 uppercase">
                            {officer.title}
                            </p>
                            <p className="text-base font-bold text-gray-800">
                            {officer.name}
                        </p>
                    </div>
                </div>
                ))}
            </div>

                
            {/* Bottom: Text Content */}
                <div className="w-full text-center mt-10">
                    <p className="text-sm uppercase text-gray-600 mb-2">
                        576 Production Villages Based on Rural Resources
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        The Saubagya Production Village Program was launched to promote home-based products, raise the income
                        level of the rural community, uplift the rural economy, and support the "Vision of Prosperity
                        and Splendour" National Policy Framework.
                    </p>
                    <a
                        href="/AboutUs#services"
                        className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
                    >
                        OFFICER DETAIL →
                    </a>
                </div>
            </div>
    </section>


    <section className="bg-[#EEEEEE] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
            Projects
          </h2>
          <p className="text-sm uppercase text-gray-600 mb-2">
            Explore 5 Key Sectors Driving Rural Development
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Saubagya Production Village Program empowers 576 villages by organizing services into Agriculture, Industries, Fisheries, Animal Husbandry, and Infrastructure. Click a category to discover its sub-items and explore the products that uplift rural livelihoods.
          </p>
        </div>

        {/* Right: Interactive Services */}
        <div className="md:w-1/2 w-full">
          <div className="space-y-4">
            {Object.keys(servicesData).map((service) => (
              <div key={service}>
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
            ))}
          </div>
        </div>
      </div>
    </section>


    {/* New Section Below Carousel */}
    <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left: Text Content */}
            <div className="md:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
                    Product
                </h2>
                <p className="text-sm uppercase text-gray-600 mb-2">
                    576 Production Villages Based on Rural Resources
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
                </p>
                <a
                    href="/about-us#services"
                    className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
                >
                    READ MORE →
                </a>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2">
                <img
                    src={require("../assets/homepage/image 1.jpeg")}// ✅ Replace with your actual image path
                    alt="Pottery making in rural village"
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                />
            </div>
        </div>
    </section>


    {/* Download Section Below Carousel */}
    <section className="bg-[#EEEEEE] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
          Download circulers, Guidelines and Formats
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
          576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community,
           uplift the rural economy, and support the "Vision of Prosperity and Splendour"
            National Policy Framework.
        </p>
        <a
          href="/Download"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          READ MORE →
        </a>
    </section>

    <section className="bg-[#EEEEEE] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            
            {/* Left: Image */}
            <div className="md:w-1/2">
            <img
                src={require("../assets/homepage/image 1.jpeg")} // ✅ Replace with your actual image path
                alt="Pottery making in rural village"
                className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 text-right">
        <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
            Contact Us
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
            576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
        </p>
        <a
            href="/about-us#services"
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
            READ MORE →
        </a>
        </div>

        </div>
    </section>


      

    {/* News Section Below Carousel */}
    <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#F3931D] mb-4 uppercase">
          News
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
          576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community,
           uplift the rural economy, and support the "Vision of Prosperity and Splendour"
            National Policy Framework.
        </p>
        <a
          href="/News"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          READ MORE →
        </a>
    </section>


      


  {/* Related Organizations section */}
    <section className="bg-[#EEEEEE] py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-[#F3931D] mb-10 uppercase relative">
            <span className="px-4 bg-white z-10 relative">Related Organizations</span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-black z-0"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
                name: " ⁠Rural Development and Research Institute",
                logo: require("../assets/logo 2.png"), // Replace with actual logo
                link: "https://stateminsamurdhi.gov.lk/web/index.php?option=com_content&view=article&id=48&Itemid=184&lang=en",
            },
            {
                name: "⁠Ministry of Public Administration",
                logo: require("../assets/logo 2.png"),
                link: "https://pubad.gov.lk/",
            },
            {
                name: "⁠Ministry of Home Affaires",
                logo: require("../assets/logo 2.png"),
                link: "https://www.moha.gov.lk/",
            },
            {
                name: "⁠Ministry of Finance",
                logo: require("../assets/logo 2.png"),
                link: "https://www.treasury.gov.lk/",
            },
            {
                name: " ⁠Export Development Board",
                logo: require("../assets/logo 2.png"),
                link: "https://www.srilankabusiness.com/",
            },
            ].map((org, index) => (
            <a
                key={index}
                href={org.link}
                className="group bg-white border-b-4 border-[#F3931D] rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
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
            ))}
        </div>
    </section>

    </div>

);
};

export default Home;
