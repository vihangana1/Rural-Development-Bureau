import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";

// Import images (only 3 images now)
import image1 from "../../../assets/services/agriculture/bulath/id01/image1.jpg";
import image2 from "../../../assets/services/agriculture/bulath/id01/image2.jpg";
import image3 from "../../../assets/services/agriculture/bulath/id01/image3.jpg";

const bulathProjects = [
  {//rechecked id  1
    id: 1,
    name: "RidiEla Organic Betel Project",
    district: "Ampara",
    office: "Dehiaththakndiya",
    product: "Betel Leaf",
    location: "RidiEla",
    images: [image1, image2, image3], // Only 3 images
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d81.0371839!3d7.671939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4b33d4694cd31%3A0xc42f5c92598e53a1!2sDehiattakandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/ridiela-betel",
    description:
      "Under the Rural Development Programme- 2025, the total allocation of Rs 4,182,000.00 has been released for implementation of Betel Cultivation for Commercial Purpose in Ridee Ela under the Dehiattakandiya Divisional Secretary Division in Ampara District. There are 40 beneficiaries benefiting to raise their economic level through this project."
  },

  // {
  //   id: 2,
  //   name: "Pussella & Rangwala Betel Cluster",
  //   district: "Kegalle",
  //   office: "Kegalle",
  //   product: "Betel Leaf",
  //   location: "51 A Pussella, 51 A Rangwala",
  //   images: [image1, image2], // 2 images only
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d81.0371839!3d7.671939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4b33d4694cd31%3A0xc42f5c92598e53a1!2sDehiattakandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/pussella-betel",
  //   description:
  //     "This cluster focuses on enhancing the quality and marketability of betel leaves through modern agricultural techniques.",
  // },
];

const BulathPage = () => {
  const [selectedProject, setSelectedProject] = useState(bulathProjects[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject.images.length) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">
        Betel Leaf Related Products
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#896C6C] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              {/* <th className="px-4 py-2 border">Buy</th> */}
            </tr>
          </thead>

          <tbody>
            {bulathProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#BCA88D] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">
                  {item.location} </td>
                {/* </td>
                <td className="px-4 py-2 border">
                  <Link
                    to={item.buyPath}
                    className="text-blue-600 underline hover:text-[#896C6C]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    clickHere
                  </Link>
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

export default BulathPage;
