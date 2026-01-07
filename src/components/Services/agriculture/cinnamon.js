import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const cinnamonProjects = [
  {
    id: 1,
    name: "tangalla_Cinamon",
    project: "cinnamonProject",
    district: "hambanthota",
    office: "tangalla",
    product: "cinnamon",
    amount: "1 107 000,00",
    location: "vallodaya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8419812!3d6.0518134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b4f505fdb4bd%3A0x20e8faf158755ceb!2sRekawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "tangalla_Cinamon",
    project: "cinnamonProject",
    district: "hambanthota",
    office: "tangalla",
    product: "cinnamon",
    amount: "1 153 125,00",
    location: "kattakaduwa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.857394!3d6.1221185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKattakaduwa%20South%2C%20Kattakaduwa%20North%2C%20Kadiragoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "balapitiya_Cinamon",
    project: "cinnamonProject",
    district: "galle",
    office: "balapitiya",
    product: "cinnamon",
    amount: "1 209 910,00",
    location: "pelagus",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.056486!3d6.3310189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22b0049308181%3A0x222835ad6783e1f2!2sPathiraja%20place%2C%20Uragasmanhandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "niyagama_Cinamon",
    project: "cinnamonProject",
    district: "galle",
    office: "niyagama",
    product: "cinnamon",
    amount: "811 800,00",
    location: "horangalla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.274145!3d6.1942041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17b4352a2374b%3A0x40f0d6f914c91b8f!2sHorangalla(Akulavila)!5e0!3m2!1sen!2slk!4v1695980000000!5m",
  },
  {
    id: 5,
    name: "projects.yakkalamulla_Cinamon",
    project: "cinnamonProject",
    district: "galle",
    office: "yakkalamulla",
    product: "cinnamon",
    amount: "314 675,00",
    location: "ella_upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "wallawita_Cinamon",
    project: "cinnamonProject",
    district: "kalutara",
    office: "walallawita",
    product: "cinnamon",
    amount: "581 687,50",
    location: "pareigama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1159281!3d6.414038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d375122dcfc9%3A0xecab5deda422532!2s782%20ප්‍රෙයිගම%20උතුර%20ග්‍රා.නි%20කාර්යාලය!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 7,
    name: "monaragala_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "monaragala",
    product: "cinnamon",
    amount: "1 486 250,00",
    location: "batugammana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 8,
    name: "madulla_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "madulla",
    product: "cinnamon",
    amount: "1 832 700,00",
    location: "tharela",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae457a5a253fbc1%3A0x2a368ff45e659730!2sMadulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 10,
    name: "madulla_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "madulla",
    product: "cinnamon",
    amount: "877 810,00",
    location: "illukkanda",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s113C%20-%20Illukkanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 11,
    name: "monaragala_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "monaragala",
    product: "cinnamon",
    amount: "3 204 150,00",
    location: "watawanagara",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 12,
    name: "mayyokkawatte_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "monaragala",
    product: "cinnamon",
    amount: "1 574 400,00",
    location: "mayyokkawatte",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sMayyokkawatte!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 13,
    name: "sewanagala_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "sewanagala",
    product: "cinnamon",
    amount: "1 640 000,00",
    location: "kiri_wewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9240953!3d6.3571134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4025b01077ac1%3A0xf136f7cf297d5ec3!2sIndikolapelessa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 14,
    name: "sewanagala_Cinamon",
    project: "cinnamonProject",
    district: "monaragala",
    office: "sewanagala",
    product: "cinnamon",
    amount: "1 312 000,00",
    location: "habarugala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9105413!3d6.315373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9c57761e3e9%3A0xb8312bd72c31d4d4!2sMahagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const CinnamonPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(cinnamonProjects[0]);
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
        {t("cinnamonPageTitle")}
      </h1>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#A76545] text-white">
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
            {cinnamonProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#EFD9D1] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
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

      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Cinnamon Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#F5EAE5] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#A76545] mb-4">
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

export default CinnamonPage;