import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const eggProjects = [
  {
    id: 1,
    name: "kandangamuwa_egg",
    project: "chicken_village",
    district: "gampaha",
    office: "meerigama",
    product: "eggs_chicks",
    location: "kandangamuwa_loc",
    amount: "2 305 235,25",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1275146!3d7.2844224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31e528ebe35ff%3A0x531bee31213627ab!2sKandangamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "undugoda_egg",
    project: "egg_cluster",
    district: "kegalle",
    office: "kegalle_off",
    product: "egg",
    location: "undugoda_loc",
    amount: "3 370 823,20",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s56%20B%20Undugoda%2C%2056%20D%20Moradana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "yakkaduwa_egg",
    project: "poultry_zone",
    district: "gampaha",
    office: "ja_ela",
    product: "eggs_chicks",
    location: "yakkaduwa",
    amount: "1 415 909,37",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9108278!3d7.0904906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0a6b1e2c117%3A0xbd9d1046bbd74c38!2sYakkaduwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "kosgulana_egg",
    project: "egg_coop",
    district: "kalutara",
    office: "palindanuwara",
    product: "products.egg",
    location: "kosgulana_loc",
    amount: "2 252 060,30",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2501363!3d6.6114202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c87dfb94365f%3A0xa25198460f723bdb!2sKosgulana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const EggPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(eggProjects[0]);
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
        {t("eggPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
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
            {eggProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer transition-colors"
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

      {/* Details Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg border">
          <iframe
            title="Egg Project Map"
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
          <div className="space-y-2 text-md text-gray-800">
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

export default EggPage;