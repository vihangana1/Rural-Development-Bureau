import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const dairyProjects = [
  {
    id: 1,
    name: "irakkamam_goat",
    project: "goatControl",
    district: "ampara",
    office: "irakkamam",
    product: "goat_milk",
    amount: "9 993 750,00",
    location: "irakkamam_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.7214514!3d7.232003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sVarippattanchenai%2001%2C02%2C03%20%2F%20Irakkamam%2001%2C02%2C03%2C04%2C05%2C06%2C07%2C08%2C09!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "sakkarapaththu_dairy",
    project: "dairyCowControl",
    district: "ampara",
    office: "akkarapaththu",
    product: "fresh_milk",
    amount: "8 456 250,00",
    location: "akkarapaththu_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sPallikudiyiruppu%2001%20and%2002%2C%20Urban%20Division%2003%2C04%2C05%2C%20Pattiyadipitty%2C%20Isanganiseemai%2C%20Akkarapattu%2002%2C11%2C18%20and%2020%2C%20Alim%20Nagar!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "navindaveli_dairy",
    project: "dairyManagement",
    district: "ampara",
    office: "navindaveli",
    product: "milk_mix",
    amount: "2 649 625,00",
    location: "salamwakeni",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sSalamwakeni%20-%2005!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "palinda_nuwara_goat",
    project: "goatControl",
    district: "kalutara",
    office: "palinda_nuwara",
    product: "goat_milk",
    amount: "1 981 940,00",
    location: "walakada",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2511092!3d6.5986099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c891bdffea0f%3A0x1629136852c0eb13!2sWalakada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "madadumbara_dairy",
    project: "dairyCowControl",
    district: "maha_nuwara",
    office: "madadumbara",
    product: "fresh_milk",
    amount: "856 131,25",
    location: "kandekubura",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.84781234527!2d80.640724!3d7.2988922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMahanuwara%2C%20Madadumbara%2C%20802%2C%20Kandekubura!5e0!3m2!1sen!2slk!4v1695470000000",
  },
  {
    id: 6,
    name: "udahenthenna_goat",
    project: "goatControl",
    district: "maha_nuwara",
    office: "gaga_ihala",
    product: "goat_milk_meat",
    amount: "2 255 000,00",
    location: "udahenthenna_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.951248420939!2d80.5264952!3d7.4099973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3415bb51230eb%3A0xb726b29dfcb059d8!2sUdahena!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 7,
    name: "labuhena_cattle",
    project: "cattleRanch",
    district: "nuwara_eliya",
    office: "haguranketha",
    product: "fresh_milk",
    amount: "6 303 750,00",
    location: "labuhena_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6308567!3d7.1396014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sLabuhena%2C%20Poramadulla%2C%20Hapugasdeniya%2C%20Akiriya%2C%20499%20E%20Bambaragama%20East%2C%20Madumana%2C%20Daraoya%2C%20Rookwood%2C%20Kitulpe%2C%20Bowala%2C%20Diggalpottha%2C%20Kosgahadebala%2C%20Mulooya%2C%20Kirimetiya%2C%20Karamidula%2C%20Hopewatte!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 8,
    name: "garubevilagama_dairy",
    project: "dairyCowControl",
    district: "rathnapura",
    office: "rathnapura",
    product: "fresh_milk",
    amount: "4 202 500,00",
    location: "garubevilagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.5702794!3d6.68104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x2a78afff5d7ac533!2sGurubevilagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 9,
    name: "weligepola_dairy",
    project: "dairyCowControl",
    district: "rathnapura",
    office: "weligepola",
    product: "fresh_milk",
    amount: "4 202 500,00",
    location: "galpaya_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.4260671!3d6.6810122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sGalpaya%2C%20Bambaragala%2C%20Mutthettupala%2C%20Pusthota%2C%20Wadawalalanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 10,
    name: "kambuwatana_dairy",
    project: "dairyImprovement",
    district: "kurunegala",
    office: "polpithigama",
    product: "fresh_milk",
    amount: "4 597 125,00",
    location: "kambuwatana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3223302!3d7.9295373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc6d1f15193a5%3A0xee10ae7438c856d2!2sKambuwatawana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 11,
    name: "kurundewa_dairy",
    project: "dairyImprovement",
    district: "kurunegala",
    office: "galgamuwa",
    product: "fresh_milk",
    amount: "3 690 000,00",
    location: "kurundewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2605848!3d7.9581104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc33415f2f665%3A0x6f9dff9d1237813c!2sKurundewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 12,
    name: "thalawa_dairy",
    project: "dairyManagement",
    district: "kurunegala",
    office: "polpithigama",
    product: "fresh_milk",
    amount: "3 910 375,00",
    location: "thalawa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2944933!3d8.1900096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcedf9d85c96bd%3A0xb53d8bf926490bff!2sThalawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 13,
    name: "panduwasnuwara_dairy",
    project: "dairyManagement",
    district: "kurunegala",
    office: "panduwasnuwara_east",
    product: "fresh_milk",
    amount: "3 419 400,00",
    location: "bodhimulla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 14,
    name: "polgahawela_dairy",
    project: "dairyManagement",
    district: "kurunegala",
    office: "polgahawela",
    product: "fresh_milk",
    amount: "3 731 000,00",
    location: "panaliya_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3251648!3d7.3313319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3162850bac313%3A0x9e467abb2a9a97a1!2sPanaliya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 15,
    name: "weerambugedara_dairy",
    project: "dairyManagement",
    district: "kurunegala",
    office: "weerambugedara",
    product: "fresh_milk",
    amount: "1 197 037,94",
    location: "godavita",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3251648!3d7.3313319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3162850bac313%3A0x9e467abb2a9a97a1!2sPanaliya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 16,
    name: "divulwewa_dairy",
    project: "dairyManagement",
    district: "puththalama",
    office: "anamaduwa",
    product: "fresh_milk",
    amount: "3 085 250,00",
    location: "divulwewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3831212!3d8.2568378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf3be773ec0c9%3A0x67e8025f85df3d0d!2sDivulwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 17,
    name: "karuwalagaswewa_dairy",
    project: "dairyManagement",
    district: "puththalama",
    office: "karuwalagaswewa",
    product: "fresh_milk",
    amount: "2 470 250,00",
    location: "pahariya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3831212!3d8.2568378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf3be773ec0c9%3A0x67e8025f85df3d0d!2sDivulwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 18,
    name: "padhikudiruppu_reno",
    project: "milkCenterReno",
    district: "vavuniya",
    office: "vavuniya_north",
    product: "fresh_milk",
    amount: "1 334 178,21",
    location: "padhikudiruppu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0863254!3d9.6213955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sPadhikudiruppu!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 19,
    name: "buttala_dairy",
    project: "dairyManagement",
    district: "monaragala",
    office: "buttala",
    product: "fresh_milk",
    amount: "2 101 250,00",
    location: "mari_arawa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0708344!3d6.8245873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae44156822e8b51%3A0x895350e882e646cf!2sButtala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 20,
    name: "welimada_dairy",
    project: "dairyDev",
    district: "badulla",
    office: "welimada",
    product: "fresh_milk",
    amount: "1 313 537,50",
    location: "katakaella",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8964416!3d6.8942342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47be640e7a3f3%3A0xf86a0d5993aefe9d!2sWelimada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 21,
    name: "bibiligamuwa_dairy",
    project: "dairyDev",
    district: "badulla",
    office: "welimada",
    product: "fresh_milk",
    amount: "1 030 125,00",
    location: "bibiligamuwa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8355739!3d6.8624185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s50J%20-%20Bibiligamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 22,
    name: "niyamgamdora_dairy",
    project: "grassCultivation",
    district: "polonnaruwa",
    office: "welikanda",
    product: "fresh_milk",
    amount: "5 125 000,00",
    location: "mahindagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8355739!3d6.8624185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s50J%20-%20Bibiligamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  }
];

const DairyProductPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(dairyProjects[0]);
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
        {t("dairyPageTitle")}
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
            {dairyProjects.map((item, index) => (
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
            title="Dairy Project Map"
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
          <div className="space-y-2 text-lg text-gray-800">
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

export default DairyProductPage;