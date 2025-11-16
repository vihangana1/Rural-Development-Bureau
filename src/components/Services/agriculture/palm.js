import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";

// ✅ Import images
import image1 from "../../../assets/homepage/imageai1.jpeg";
import image2 from "../../../assets/homepage/imageai2.jpeg";
import image3 from "../../../assets/homepage/imageai3.jpeg";
import image4 from "../../../assets/homepage/imageai4.jpeg";

const palmProjects = [
  {
    id: 1,
    name: "Thalaimannar Palm Zone",
    district: "Mannar",
    office: "Mannar Town",
    product: "Palm-based products such as jam, yogurt.",
    location: "Thalaimannar",
    images: [image1, image2, image3],
    mapEmbed: "https://www.google.com/maps/embed?...",
    // buyPath: "/buy/thalaimannar-palm-products",
    description: "This zone supports palm growers with training, packaging, and logistics...",
  },
  {
    id: 2,
    name: "Jaffna Palm Craft Cluster",
    district: "Jaffna",
    office: "Valikamam South (Uduvil)",
    product: "Palm kernels and palm-based products",
    location: "Elalai South, Munnakam Town South",
    images: [image1, image4],
    mapEmbed: "https://www.google.com/maps/embed?...",
    // buyPath: "/buy/jaffna-palm-products",
    description: "This zone supports palm growers with training, packaging, and logistics...",
  },
];

const PalmPage = () => {
  
  const [selectedProject, setSelectedProject] = useState(palmProjects[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">plum Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#896C6C] text-white">
            <tr>
              <th className="px-4 py-2 border">{("No")}</th>
              <th className="px-4 py-2 border">{("District")}</th>
              <th className="px-4 py-2 border">{("Office")}</th>
              <th className="px-4 py-2 border">{("Product")}</th>
              <th className="px-4 py-2 border">{("Location")}</th>
              {/* <th className="px-4 py-2 border">{("Buy")}</th> */}
            </tr>
          </thead>
          <tbody>
            {palmProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#BCA88D] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                {/* <td className="px-4 py-2 border">
                  <Link
                    to={item.buyPath}
                    className="text-blue-600 underline hover:text-[#896C6C]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {("clickHere")}
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Palm Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#896C6C] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>

          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
            {selectedProject.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${selectedProject.name} ${idx + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalmPage;
