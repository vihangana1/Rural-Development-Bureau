import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/industry/cloth/id01/image1.jpg";
import image2 from "../../../assets/services/industry/cloth/id01/image2.jpg";
import image3 from "../../../assets/services/industry/cloth/id01/image3.jpg";
import image4 from "../../../assets/services/industry/cloth/id01/image4.jpg";


const clothProject = [
  {
    id: 1,//recheckked
    name: "Nikaweratiya Coir Industry Zone",
    district: "Ampara",
    office: "Addalaichenaia ",
    product: "Coir ropes, mats, brushes",
    location: "Alamkulam Village",
    images: [image1, image2, image3, image4], // Only 3 images
    // buyPath: "/buy/nikaweratiya-coir",
    description:
      "Establishing a Mini Garment Factory has been approved for allocation of Rs 7,014,792.50 to implement in Addalaichenaia – 17 (Alamkulam Village) Grama Niladhari Division of Addalaichenai Divisional Secretary Division in Ampara District under the Rural Development Programme- 2025. Through this project, 20 beneficiaries selected priority basis are expected to increase their family income and improve their daily livelihood and quality of life by establishing this garment factory in a government owned building in this village. As at 30.09.2025, 60% of works has been completed with expenditure of Rs 1,309,415.73",    
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d80.2159383!3d7.7576504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fddc602ccdb%3A0xcc8a51875ff74a03!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Nikaweratiya Coir Industry Zone",
    district: "Kurunegala",
    office: "Nikaweratiya",
    product: "Coir ropes, mats, brushes",
    location: "Nikaweratiya Industrial Zone",
    images: [image1, image2, image3], // Only 3 images

    // buyPath: "/buy/nikaweratiya-coir",
    description:
      "This zone supports coir product manufacturers with improved machinery, training, and export facilitation. It promotes eco-friendly production and connects artisans to global markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d80.2159383!3d7.7576504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fddc602ccdb%3A0xcc8a51875ff74a03!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Wennappuwa Coir Cluster",
    district: "Puttalam",
    office: "Wennappuwa",
    product: "Eco-friendly packaging, coir blocks",
    location: "Wennappuwa Coir Cluster",
    // buyPath: "/buy/wennappuwa-coir",
    images: [image1, image2, image3], // Only 3 images

    description:
      "This cluster promotes sustainable coir packaging and block production. It supports innovation in biodegradable materials and connects producers to agriculture and construction sectors.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d79.9919143!3d7.309449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sWennappuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Ambalangoda Coastal Coir Zone",
    district: "Galle",
    office: "Ambalangoda",
    product: "Handmade coir mats",
    location: "Ambalangoda Coastal Zone",
    // buyPath: "/buy/ambalangoda-coir",
    description:
      "This coastal zone supports traditional coir mat weavers with raw material access, branding, and tourism-linked sales. It preserves heritage crafts and promotes fair trade.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0411077!3d6.2370214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae141cf559d74a9%3A0x753122db62df6017!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const ClothPage = () => {
  const [selectedProject, setSelectedProject] = useState(clothProject[0]);
  const scrollTargetRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

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
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">ClothRelated Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#CB8589] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              {/* <th className="px-4 py-2 border">Buy Product</th> */}
            </tr>
          </thead>
          <tbody>
            {clothProject.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F7CAC9] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                {/* <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#CB8589]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Betel Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#896C6C] mb-2">
            {selectedProject.name}
          </h2>

          <p className="text-sm text-gray-700 mb-4">
            {selectedProject.description}
          </p>

          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
            {selectedProject.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
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
export default ClothPage;
