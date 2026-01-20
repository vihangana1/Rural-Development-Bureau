import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

// Data updated with translation keys for multi-language support
const fruitProjects = [
  {
    id: 1,
    name: "mahanuwara_banana",
    project: "amban_bananaProject",
    district: "mahanuwara",
    office: "harispaththuwa",
    product: "amban_banana",
    location: "bulathgolla",
    amount: "1 356 587,50",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.5827771!3d7.2997305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369ab2e00ec53%3A0xcd9ff735bc4aa846!2sBulathgolla%2C%20Halloluwa!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "mahanuwara_durian",
    project: "durianProject",
    district: "mahanuwara",
    office: "poojapitiya",
    product: "durian",
    location: "pahala_higulwala",
    amount: " 1 178 955,00 ",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.991334342757!2d80.544683!3d7.3999839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae343ddd3e9ddb5%3A0xe659dcbd49322ecc!2sPahala%20Hingulwala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "nuwara_eliya_orange",
    project: "vine_orangesProject",
    district: "nuwara_eliya",
    office: "kotmale_east",
    product: "vine_oranges",
    location: "niyamgamdora",
    amount: " 922 500,00 ",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sNiyamgamdora%20470!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk"
  },
  {
    id: 4,
    name: "nuwara_eliya_jamanarang",
    project: "jamanarangProject",
    district: "nuwara_eliya",
    office: "kotmale_east",
    product: "jamanarang_drinks",
    location: "weralalapathana",
    amount: "  653 437,50  ", 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sNiyamgamdora%20470!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk", 
  },
  {
    id: 5,
    name: "ampara_orange",
    project: "vine_orangesProject",
    district: "ampara",
    office: "uhana",
    product: "vine_oranges",  
    location: "bandaradoowa",
    amount: " 2 050 000,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.314248420939!2d81.4604659!3d7.4268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae520c1595dddbf%3A0x25c2ef2f88d9dec!2sBandaradoowa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "kurunegala_nuts",
    project: "nutsProject",
    district: "kurunegala",
    office: "ibbagamuwa",
    product: "nuts",
    location: "omaragolla",
    amount: " 3 159 870,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.314248420939!2d80.3594859!3d7.5088175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae315c5f4e8ecb5%3A0x8e5f6c4e4f4e4f4e!2sOmaragolla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 7,
    name: "mulathivu_jams",
    project: "jams_cordialsProject",
    district: "mulathivu",
    office: "mantai_east",
    product: "jams_cordials",
    location: "ampalapuram",
    amount: " 10 000 000,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.9713535!3d16.5738373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef83f9204c7d%3A0x5f9453f5c41b161e!2sAmalapuram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1695980000000!5m2!1sen!2sin",
  },
  {
    id: 8,
    name: "mulathivu_banana",
    project: "kavendish_bananaProject",
    district: "mulathivu",
    office: "puthukudirippu",
    product: "kavendish_banana",
    location: "theravil",
    amount: "9 993 750,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6457424!3d9.3448853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeb7380d057633%3A0x2377b0bdd76e59e8!2sThevipuram!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 9,
    name: "kalutara_fruit",
    project: "mixed_fruitsProject",
    district: "kalutara",
    office: "dhodangoda",
    product: "mixed_fruits",
    location: "thudugala",
    amount: "  520 187,50 " ,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63382.43734804846!2d80.0458547!3d6.5709814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2348720fa08e9%3A0x4c084cd733f9a119!2sThudugala%20East!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk"
  },
  {
    id: 10,
    name: "polonnaruwa_pineapple",
    project: "pineapple_delumProject",
    district: "polonnaruwa",
    office: "madirigiriya",
    product: "pineapple_delum",
    location: "vijayapura",
    amount: " 2 157 625,00 ",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8894955!3d6.9298653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b9ed12a471%3A0xdfa3bfe9081df24!2s108%20-%20Vijayapura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 11,
    name: "polonnaruwa_apple",
    project: "apple_pera_mangoProject",
    district: "polonnaruwa",
    office: "madirigiriya",
    product: "apple_pera_mango",
    location: "ihalagama",
    amount: " 4 110 250,00 ",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.9516002!3d8.143382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb65eaeea2c9ad%3A0xc1b1d51f3a30a57c!2sMedirigiriya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const FruitPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(fruitProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">
        {t("fruitPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#D97D55] text-white">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("project")}</th>
              <th className="px-4 py-2 border">{t("product")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
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
                {/* Every cell now uses t() to translate the key into the current language */}
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border">{t(item.project)}</td>
                <td className="px-4 py-2 border">{t(item.product)}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{t(item.location)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#896C6C] mb-4">
            {t(selectedProject.name)}
          </h2>

          <div className="space-y-2 text-lg text-gray-700 mb-4">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("project")}:</span> {t(selectedProject.name)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("Amount(Rs)")}:</span> {selectedProject.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitPage;