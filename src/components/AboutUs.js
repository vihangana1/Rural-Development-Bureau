import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import officer images
import nimalImage from "../assets/officers/image 2.jpeg";
import tharushiImage from "../assets/officers/image 2.jpeg";
import ruwanImage from "../assets/officers/image 2.jpeg";

const officers = [
  {
    name: "S.K.W. Sisira Kumara",
    designation: "Director General",
    office: " Office-011 2877122",
    phone: "Mobile-N/A",
    email: "nimal.perera@ministry.gov.lk",
    image: nimalImage,
  },
  {
    name: "W.P.S. Wickramge",
    designation: "Director",
    office: "Office-011 288714",
    phone: "Mobile-071 8765432",
    email: "tharushi.silva@ministry.gov.lk",
    image: tharushiImage,
  },
  {
    name: "W.M.U.M. Wijeyakoon",
    designation: "Director",
    office: "Office-N/A",
    phone: "Mobile-0714434091",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "N.C. Wickramanayaka",
    designation: "Director",
    office: "Office-112186018",
    phone: "Mobile-094 718318437",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "V.C. Wijewardana",
    designation: "Deputy Director",
    office: "Office-112887478",
    phone: "Mobile-0702599805",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "S.G.A.K. Subawickrama",
    designation: "Assistant Director",
    office: "Office-N/A",
    phone: "Mobile-0741520766",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "R.M.C.S. Rathnayaka",
    designation: "Assistant Director",
    office: "Office-112887831",
    phone: "Mobile-0703065277",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
];

const AboutUs = () => {
  const location = useLocation();

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
          About Us
        </h1>

        {/* Introduction Section */}
        <section id="introduction">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-2">Introduction</h2>
          <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
            <p className="text-lg leading-relaxed">
              The Saubagya Production Village Programme was launched to promote home-based products,
              raising the income level of the rural community, uplifting the rural economy, and making
              a significant contribution to the national product, in order to realize the “Saubagyaye Dakma”
              Political Manifest.
              <br />
              The aim is to establish 1000 villages as “Saubhagya Production Villages” throughout the country
              (500 villages in the first phase and another 500 in the second phase), involving low-income earners
              including Samurdhi recipients as well as more potential family units who directly contribute to the production process.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Overview Section */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-4">Overview</h2>

          <div className="space-y-6">
            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">Vision</h3>
              <p className="text-base leading-relaxed">
                An empowered community where every individual has the opportunity to lead a fulfilling and dignified life.
              </p>
            </div>

            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">Mission</h3>
              <p className="text-base leading-relaxed">
                Promoting rural community development by overseeing a wide range of programs including rural infrastructure,
                livelihood support, social protection schemes, and community engagement initiatives. Our work is collaborative,
                involving local governments, NGOs, and citizens to deliver impactful solutions tailored to each region’s needs.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Officer Overview Section */}
        <section id="services">
        <h2 className="text-2xl font-bold text-[#9A3F3F] mb-4">Officer's Details</h2>
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
                <p className="text-sm text-gray-600 mb-1">{officer.office}</p>
                <p className="text-sm text-blue-600 mb-1">{officer.email}</p>
                <p className="text-sm text-gray-700">{officer.phone}</p>
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
