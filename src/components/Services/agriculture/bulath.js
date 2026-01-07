import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const bulathProjects = [
  {
    id: 1,
    name: "ampara_organicBetel", // Full name for details
    project: "organicBetelProject", // Small name for table
    district: "ampara",
    office: "dehiaththakandiya",
    product: "betel_leaf",
    amount: "4 182 000,00",
    location: "ridiela",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d81.0371839!3d7.671939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4b33d4694cd31%3A0xc42f5c92598e53a1!2sDehiattakandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "kegalle_betelCluster",
    project: "betelCluster",
    district: "kegalle",
    office: "kegalle",
    product: "betel_leaf",
    amount: "2 787 590,00",
    location: "pussella",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d81.0371839!3d7.671939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4b33d4694cd31%3A0xc42f5c92598e53a1!2sDehiattakandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "galigamuwa_betelCluster",
    project: "betelCluster",
    district: "kegalle",
    office: "galigamuwa",
    product: "betel_leaf",
    amount: "4 095 797,50",
    location: "papoluwa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63386.31424842094!2d80.2338!3d7.2462958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31a01c30563e9%3A0x669fc9d3bfa17ca6!2sPalapoluwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk"
  },
  {
    id: 4,
    name: "puttalama_betelCluster",
    project: "betelCluster",
    district: "puttalama",
    office: "arachchikattuwa",
    product: "betel_leaf",
    amount: "2 232 450,00" ,
    location: "abakele",
    mapEmbed: "https://www.google.com/maps/place/Abakele/@7.706288,79.8970846,17z/data=!3m1!4b1!4m6!3m5!1s0x3afd330c7716a403:0x112a26ba8fbe4ef5!8m2!3d7.706288!4d79.8996595!16s%2Fg%2F11vc34pxh3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },  
  {
    id: 5,
    name: "hambanthota_betelCluster",
    project: "betelCluster",
    district: "hambanthota",
    office: "veeraketiya",
    product: "betel_leaf",
    amount: "414 100,00" ,
    location: "degampotha",
    mapEmbed: "https://www.google.com/maps/place/Degampotha/@6.1907618,80.7650618,14.15z/data=!4m6!3m5!1s0x3ae152f753861b7f:0x59ac569c31238836!8m2!3d6.1863691!4d80.7740912!16s%2Fg%2F11nn3h98mv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },  
];

const BulathPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(bulathProjects[0]);
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
        {t("betelPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#896C6C] text-white">
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
            {bulathProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#BCA88D] cursor-pointer transition-colors"
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
            title="Betel Project Map"
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

          <div className="space-y-2 text-lg text-gray-700">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("project")}:</span> {t(selectedProject.project)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("Amount(Rs)")}:</span> {selectedProject.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulathPage;