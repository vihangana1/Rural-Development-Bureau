import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/agriculture/fruit/id01/image1.jpg";
import image2 from "../../../assets/services/agriculture/fruit/id01/image2.jpg";
const fruitProjects = [
  
  {
    name: "Uhana Vine Orange Production Zone",
    id: 1,//recheacked
    district: "Ampara",
    office: "Uhana",
    product: "Vine oranges",
    location: "Bandaradoowa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.314248420939!2d81.4604659!3d7.4268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae520c1595dddbf%3A0x25c2ef2f88d9dec!2sBandaradoowa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    images: [image1, image2], // Only 3 images
    //buyPath: "/buy/nallur-fruit",
    description:
      "Under the Rural Development Programme -2025, the Passion Fruit Cultivation and Livelihood Enhancement project has been approved for Rs  2,050,000.00 to implement in Bandaradoowa Grama Niladhari Division of Uhana Divisional Secretariat Division in Ampara Distict. Bandaradoowa has a good and suitable climate condition for the passion fruit cultivation. Therefore, farmers can increase their livelihood income through create job opportunities in farming, processing and marketing under this project. ,"  
    },
  // {
  //   id: 2,
  //   district: "Mahanuwara",
  //   office: "Harispaththuwa",
  //   product: "Amban Banana",
  //   location: "Bulathgolla",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.5827771!3d7.2997305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369ab2e00ec53%3A0xcd9ff735bc4aa846!2sBulathgolla%2C%20Halloluwa!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 3,
  //   district: "Mahanuwara",
  //   office: "Poojapitiya",
  //   product: "Duuriyan",
  //   location: "507-Pahala Higulwala",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.991334342757!2d80.544683!3d7.3999839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae343ddd3e9ddb5%3A0xe659dcbd49322ecc!2sPahala%20Hingulwala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 4,
  //   district: "Nuwara Eliya",
  //   office: "Kotmale West",
  //   product: "Vine oranges",
  //   location: "465 H Dombagasthala",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s465%20H%20Dombagasthala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",  
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  
  // {
  //   id: 5,
  //   district: "Nuwara Eliya",
  //   office: "Kotmale East",
  //   product: "Jamanarang",
  //   location: "461/D Weralalapathana",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sNiyamgamdora%20470!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",  
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 6,
  //   district: "Mulathivu",
  //   office: "Mantai East",
  //   product: "Jams, cordials and orange-based products",
  //   location: "Ampalapuram",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.9713535!3d16.5738373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef83f9204c7d%3A0x5f9453f5c41b161e!2sAmalapuram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1695980000000!5m2!1sen!2sin",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 7,
  //   district: "Mulathivu",
  //   office: "Puthukudirippu",
  //   product: "Kavendish Banana",
  //   location: "Theravil Thevipuram",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6457424!3d9.3448853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeb7380d057633%3A0x2377b0bdd76e59e8!2sThevipuram!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 8,
  //   district: "Plonnaruwa",
  //   office: "Madirigiriya",
  //   product: "Pinapple and Delum",
  //   location: "108 Vijayapura",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8894955!3d6.9298653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b9ed12a471%3A0xdfa3bfe9081df24!2s108%20-%20Vijayapura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },
  // {
  //   id: 9,
  //   district: "Plonnaruwa",
  //   office: "Madirigiriya",
  //   product: "Apple,Pera,Tompesi Mango",
  //   location: "109 Ihalagama",
  //   mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.9516002!3d8.143382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb65eaeea2c9ad%3A0xc1b1d51f3a30a57c!2sMedirigiriya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  //   // buyPath: "/buy/nallur-fruit",
  //   description:
  //     "This hub connects Jaffna fruit growers to national and international buyers. It includes cold storage, grading, and branding support for tropical fruits.",  },


  

];

const FruitPage = () => {
  const [selectedProject, setSelectedProject] = useState(fruitProjects[0]);
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
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Fruit Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#D97D55] text-white">
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
            {fruitProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F9CB99] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#D97D55]"
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

export default FruitPage;