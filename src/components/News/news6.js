import React from "react";
import { useLanguage } from "../../contexts/LanguageContext"; // fixed path
import news6Image from "../../assets/news/news6.jpeg";   // fixed path

const News6 = () => {
  const { language } = useLanguage(); // 'en', 'si', 'ta'

  const headline = {
    en: "Praja Shakthi - Western Province Summit to Educate Community Development Council Representatives",
    si: "ප්‍රජා ශක්ති - ප්‍රජා සංවර්ධන සභා නියෝජිතයන් දැනුවත් කිරීමේ බස්නාහිර පළාත් සමුළුව",
    ta: "பிரஜா சக்தி - சமூக அபிவிருத்தி சபை பிரதிநிதிகளை கல்வி செய்யும் மேற்கு மாகாண மாநாடு",
  };

  const content = {
    en: `The national movement to eradicate poverty, "Praja Shakthi" program, has established Community Development Councils in 14,007 Grama Niladhari Divisions. A nationwide awareness program for chairpersons and secretaries representing these councils is being jointly implemented by the Ministry of Rural Development, Social Security and Community Empowerment, together with the National Secretariat of Praja Shakthi.

Accordingly, the inaugural program was held on 13.01.2026 at the premises of the Presidential Secretariat, with the participation of about 5,000 chairpersons and secretaries representing Community Development Councils in Colombo, Kalutara, and Gampaha districts of the Western Province.

The event was attended by Members of Parliament, Secretary of the Ministry of Rural Development, Social Security and Community Empowerment Mr. Sampath Mantrinayake, Senior Additional Secretary to the President Mr. Kapila Janaka Bandara, Chairpersons of District Coordination Committees of the Western Province, all District Secretaries of the Western Province, Directors of Planning, Divisional Secretaries, and many others.`,
    
    si: `දිළිඳුකම තුරන් කිරීමේ ජාතික ව්‍යාපාරය "ප්‍රජා ශක්ති" වැඩසටහන පිළිබඳව 14,007ක් වන ග්‍රාම සේවා වසම් තුළ පිහිටුවා ඇති ප්‍රජා සංවර්ධන සභාවන් නියෝජනය කරන සභාපතිවරු හා ලේකම්වරු දැනුවත් කිරීමේ දීපව්‍යාප්ත වැඩසටහනක් ග්‍රාමීය සංවර්ධන, සමාජ ආරක්ෂණ හා ප්‍රජා සවිබලගැන්වීම් අමාත්‍යාංශය හා ප්‍රජා ශක්ති ජාතික මහ ලේකම් කාර්යාලය එකාබද්ධව ක්‍රියාත්මක කර තිබෙනවා.

ඒ අනූව එහි සමාරම්භක වැඩසටහන කොළඹ, කළුතර සහ ගම්පහ දිස්ත්‍රික්ක නියෝජනය කරමින්, බස්නාහිර පළාතේ ප්‍රජා සංවර්ධන සභාවන්හි 5000ක පමණ ලේකම්වරු සහ සභාපතිවරුන්ගේ සහභාගිත්වයෙන් 13.01.2026 දින අරලියගහ මන්දිර පරිශ්‍රයේදී පැවැත්වුනා.

මෙම අවස්ථාවට පාර්ලිමේන්තු මන්ත්‍රිවරුන්, ග්‍රාමීය සංවර්ධන, සමාජ ආරක්ෂණ හා ප්‍රජා සවිබලගැන්වීම් අමාත්‍යාංශ ලේකම් සම්පත් මන්ත්‍රිනායක මහතා, ජනාධිපති ජ්‍යේෂ්ඨ අතිරේක ලේකම් කපිල ජනක බණ්ඩාර මහතා, බස්නාහිර පළාත් දිස්ත්‍රික් සම්බන්ධීකරණ කමිටු සභාපතිවරු, සියළුම දිස්ත්‍රික් ලේකම්වරු, ක්‍රමසම්පාදන අධ්‍යක්ෂවරු, ප්‍රාදේශීය ලේකම්වරු ඇතුළු විශාල පිරිසක් එක්ව සිටියා.`,
    
    ta: `வறுமையை ஒழிக்கும் தேசிய இயக்கமான "பிரஜா சக்தி" திட்டத்தின் கீழ் 14,007 கிராம நிலதாரி பிரிவுகளில் சமூக அபிவிருத்தி சபைகள் நிறுவப்பட்டுள்ளன. இச்சபைகளை பிரதிநிதித்துவப்படுத்தும் தலைவர்கள் மற்றும் செயலாளர்களுக்கான தேசிய அளவிலான விழிப்புணர்வு திட்டம், கிராமிய அபிவிருத்தி, சமூக பாதுகாப்பு மற்றும் சமூக வலுப்படுத்தல் அமைச்சகம் மற்றும் பிரஜா சக்தி தேசிய செயலாளர் அலுவலகம் இணைந்து செயல்படுத்துகின்றன.

இதன்படி, தொடக்க நிகழ்ச்சி 13.01.2026 அன்று ஜனாதிபதி செயலக வளாகத்தில் நடைபெற்றது. மேற்கு மாகாணத்தின் கொழும்பு, கலுத்துறை மற்றும் கம்பஹா மாவட்டங்களை பிரதிநிதித்துவப்படுத்தும் சுமார் 5,000 தலைவர்கள் மற்றும் செயலாளர்கள் இதில் பங்கேற்றனர்.

இந்த நிகழ்வில் பாராளுமன்ற உறுப்பினர்கள், கிராமிய அபிவிருத்தி, சமூக பாதுகாப்பு மற்றும் சமூக வலுப்படுத்தல் அமைச்சின் செயலாளர் திரு சம்பத் மந்திரிநாயக்க, ஜனாதிபதியின் மூத்த கூடுதல் செயலாளர் திரு கபிலா ஜனக பண்டாரா, மேற்கு மாகாண மாவட்ட ஒருங்கிணைப்பு குழுத் தலைவர்கள், அனைத்து மாவட்ட செயலாளர்கள், திட்ட இயக்குநர்கள், பிரிவு செயலாளர்கள் மற்றும் பலர் பங்கேற்றனர்.`,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 bg-[#FFF8F6] rounded-lg shadow-md">
      {/* Headline */}
      <h1 className="text-3xl font-bold mb-6 text-Black leading-snug">
        {headline[language]}
      </h1>

      {/* Image */}
      <div className="mb-6">
        <img
          src={news6Image}
          alt={headline[language]}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Content */}
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {content[language]}
      </p>
    </div>
  );
};

export default News6;
