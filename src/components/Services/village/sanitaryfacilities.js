import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const sanitaryProjects = [
  {
    id: 1,
    name: "murutthanai_water_name",
    project: "murutthanai_water_short",
    district: "batticaloa",
    office: "koralaipattu_south",
    product: "drinking_water",
    location: "murutthanai",
    amount: "25,669,857.83",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.000000000000!2d81.5!3d7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMDAuMCJOIDgxwrAzMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "murutthanai_toilet_name",
    project: "murutthanai_toilet_short",
    district: "batticaloa",
    office: "koralaipattu_south",
    product: "sanitary_facilities",
    location: "murutthanai",
    amount: "7,130,652.31",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.000000000000!2d81.5!3d7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMDAuMCJOIDgxwrAzMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "aranayake_toilet_name",
    project: "aranayake_toilet_short",
    district: "kegalle",
    office: "aranayake",
    product: "sanitary_facilities",
    location: "ganthuna_medagama",
    amount: "2,458,200.00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d80.4!3d7.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDYnMDAuMCJOIDgwwrAyNCc0MC4wIkU!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk",
  }
];

const SanitaryFacilitiesPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(sanitaryProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#34495E] mb-6">
        {t("sanitaryPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#2C3E50] text-white">
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
            {sanitaryProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#F4F6F7] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border">{t(item.project)}</td>
                <td className="px-4 py-2 border">{t(item.product)}</td>
                <td className="px-4 py-2 border text-blue-600 underline">
                  {t(item.location)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Split Layout Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg border-2 border-[#BDC3C7]">
          <iframe
            title="Iron & Gold Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[350px] bg-[#FBFCFC] p-6 rounded-md shadow-md border-l-4 border-[#F1C40F] overflow-y-auto">
          <h2 className="text-xl font-bold text-[#2C3E50] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-3 text-lg text-gray-800">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("Amount(Rs)")}:</span> {selectedProject.amount}</p>
            <p><span className="font-semibold">{t("location")}:</span> {t(selectedProject.location)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanitaryFacilitiesPage;