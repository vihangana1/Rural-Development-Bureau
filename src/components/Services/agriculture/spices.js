import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const spicesData = [
  {
    id: 1,
    name: "udawatte_spice",
    project: "spiceVillageProject",
    district: "nuwara_eliya",
    office: "higuranketha",
    product: "black_pepper",
    amount: "307 500,00",
    location: "udawatte_cluster",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d79.9463209!3d9.7519306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sValikamam%20West%20(Kopai)!5e0!3m2!1sen!2slk!4v1690000000004!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "higuranketha_pepper",
    project: "spiceVillageProject",
    district: "nuwara_eliya",
    office: "higuranketha",
    product: "black_pepper",
    amount: "307 500,00",
    location: "udawatte_cluster",
    mapEmbed: "https://www.google.com/maps?q=7.1795857,80.8059414&z=15&output=embed",
  }
];

const SpicesPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(spicesData[0]);
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
        {t("spicesPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#DC3C22] text-white">
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
            {spicesData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFEDE8] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
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

      {/* Details Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Spice Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#DC3C22] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("project")}:</span> {t(selectedProject.project)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("Amount(Rs)")}:</span> {selectedProject.amount}</p>
            <p><span className="font-semibold">{t("location")}:</span> {t(selectedProject.location)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpicesPage;