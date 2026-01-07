import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const roadProjects = [
  {
    id: 1,
    name: "dothal_oya_name",
    district: "kegalle",
    office: "aranayake",
    service: "transport_facilities",
    location: "salava_west",
    amount: "4,979,338.85",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58G%20Ganthuna%20Medagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "ankanda_bridge_name",
    district: "matale",
    office: "matale",
    service: "bridge_dev",
    location: "lankanda",
    amount: "7,869,658.52",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.927755064948!2d80.6245928!3d7.584379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae351efbd5916b7%3A0x5fcebc86a621fe65!2sAnkanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "bawlana_sarvodaya_name",
    district: "kandy",
    office: "pathahewaheta",
    service: "transport_facilities",
    location: "bawlana",
    amount: "2,001,422.88",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "bawlana_bus_road_name",
    district: "kandy",
    office: "pathahewaheta",
    service: "road_dev",
    location: "bawlana",
    amount: "3,845,336.16",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "kalulella_road_name",
    district: "kandy",
    office: "pathahewaheta",
    service: "road_dev",
    location: "bawlana",
    amount: "1,209,212.64",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "lihinipitiya_main_road_name",
    district: "matale",
    office: "naula",
    service: "road_dev",
    location: "lihinipitiya",
    amount: "27,564,629.77",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 7,
    name: "lihinipitiya_canal_name",
    district: "matale",
    office: "naula",
    service: "canal_dev",
    location: "lihinipitiya",
    amount: "1,499,062.50",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 8,
    name: "bandarakanda_road_name",
    district: "rathnapura",
    office: "kolonna",
    service: "transport_facilities",
    location: "morawadiya",
    amount: "19,898,090.17",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 9,
    name: "kosgahahena_road_name",
    district: "rathnapura",
    office: "kolonna",
    service: "transport_facilities",
    location: "morawadiya",
    amount: "11,583,382.29",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 10,
    name: "kumara_house_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "1,438,034.98",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 11,
    name: "ella_community_hall_name",
    district: "galle",
    office: "yakkalamulla",
    service: "concrete_paving",
    location: "ella_upper",
    amount: "2,137,392.13",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 12,
    name: "kajuvetiya_side_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "1,921,811.90",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 13,
    name: "deniyamulla_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "1,409,758.34",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 14,
    name: "dehigahahena_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "2,071,334.08",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 15,
    name: "preschool_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "1,409,155.80",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 16,
    name: "gepalawatta_culvert_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "949,565.99",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 17,
    name: "enasal_wattha_road_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "2,059,955.77",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 18,
    name: "shirani_house_culvert_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "1,443,083.67",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 19,
    name: "punchi_dehigahahena_name",
    district: "galle",
    office: "yakkalamulla",
    service: "transport_facilities",
    location: "ella_upper",
    amount: "2,688,003.38",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 20,
    name: "pitikumbura_road_name",
    district: "matara",
    office: "puhulwella",
    service: "transport_facilities",
    location: "walakanda_south",
    amount: "2,485,208.17",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 21,
    name: "pindeniya_road_name",
    district: "matara",
    office: "puhulwella",
    service: "transport_facilities",
    location: "walakanda_south",
    amount: "2,845,863.64",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  }
];

const RoadDevelopmentPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(roadProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#5D4037] mb-6">
        {t("roadDevelopmentPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#954C2E] text-white">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("project")}</th> {/* This maps to item.name */}
              <th className="px-4 py-2 border">{t("service")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
            </tr>
          </thead>
          <tbody>
            {roadProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF3E0] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border ">{t(item.name)}</td> {/* FIXED: changed project to name */}
                <td className="px-4 py-2 border">{t(item.service)}</td>
                <td className="px-4 py-2 border text-blue-600 underline text-sm leading-relaxed">
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
        <div className="w-full lg:w-1/2 h-[450px] rounded-md overflow-hidden shadow-lg border-2 border-[#954C2E]">
          <iframe
            title="Road Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[450px] bg-[#FAF3EB] p-8 rounded-md shadow-md border-l-4 border-[#954C2E] overflow-y-auto">
          <h2 className="text-2xl font-bold text-[#5D4037] mb-6">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-4 text-lg text-gray-800">
            <p><span className="font-bold text-[#954C2E]">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-bold text-[#954C2E]">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-bold text-[#954C2E]">{t("project")}:</span> {t(selectedProject.name)}</p>
            <p><span className="font-bold text-[#954C2E]">{t("service")}:</span> {t(selectedProject.service)}</p>
            <p><span className="font-bold text-[#954C2E]">{t("amountLabel")}:</span> LKR {selectedProject.amount}</p>
            <p><span className="font-bold text-[#954C2E]">{t("location")}:</span> {t(selectedProject.location)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadDevelopmentPage;