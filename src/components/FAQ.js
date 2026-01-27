import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage(); // 'en', 'si', 'ta'

  const faqs = [
    {
      question: {
        en: "Who are the target beneficiaries?",
        si: "ඉලක්කගත ප්‍රතිලාභක් කවුරුන්ට?",
        ta: "இலக்கு பயனாளர்கள் யார்?",
      },
      answer: {
        en: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Micro, Small and Medium Enterprises in Grama Niladhari Divisions</li>
            <li>The entire community including the poor, marginalized and disadvantaged groups in Grama Niladhari Divisions</li>
          </ul>
        ),
        si: (
          <ul className="list-disc pl-6 space-y-2">
            <li>ග්‍රාම නිලධාරී වසමට කුළුප හා මඩා පරිමාණ වාසස්ථාන</li>
            <li>ග්‍රාම නිලධාරී වසමට දිදිය, ප්‍රාදේශීය හා දිස්ත්‍රික්ක මට්ටමේ පත් සීටිය කස්ථානය අදාළ ප්‍රජාව</li>
          </ul>
        ),
        ta: (
          <ul className="list-disc pl-6 space-y-2">
            <li>கிராம நிலதாரி பிரிவுகளில் சிறு, நடுத்தர மற்றும் மைக்ரோ நிறுவனங்கள்</li>
            <li>கிராம நிலதாரி பிரிவுகளில் உள்ள ஏழைகள், புறக்கணிக்கப்பட்டவர்கள் மற்றும் பின்தங்கிய குழுக்களை உள்ளடக்கிய முழு சமூகமும்</li>
          </ul>
        ),
      },
    },
    {
      question: {
        en: "What is the methodology being implemented?",
        si: "ක්‍රියාත්මක ක්‍රමවේදය කුමක්ද?",
        ta: "செயல்படுத்தப்படும் முறை என்ன?",
      },
      answer: {
        en: (
          <div className="space-y-3">
            <p>
              The Rural Development Bureau is the central institution for implementing the Rural Development Program. The process of project selection, prioritization, preparation of proposals, evaluation, implementation, and monitoring is carried out by committees at Grama Niladhari Division, Divisional, and District levels.
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Grama Niladhari Division Level - Community Development Council</li>
              <li>Divisional Level - Divisional Coordination Committee</li>
              <li>District Level - District Coordination Committee</li>
            </ol>
          </div>
        ),
        si: (
          <div className="space-y-3">
            <p>
              ග්‍රාමීය සංවර්ධන ව්‍යාපෘති ක්‍රියාත්මක කිරීමේ මධ්‍යස්ථානය ග්‍රාමීය සංවර්ධන කාර්යංශය වේ. ව්‍යාපෘති තෝරා ගැනීම, ප්‍රමුඛතාව, යෝජනා සකස් කිරීම, අගය කිරීම, ක්‍රියාත්මක කිරීම සහ අධීක්ෂණය ග්‍රාම නිලධාරී වසම, ප්‍රාදේශීය සහ දිස්ත්‍රික් මට්ටමේ කමිටු මගින් සිදු කෙරේ.
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>ග්‍රාම නිලධාරී වසම මට්ටම - ප්‍රාථමික සංවර්ධන සභාව</li>
              <li>ප්‍රාදේශීය මට්ටම - ප්‍රාදේශීය සංවර්ධන කමිටුව</li>
              <li>දිස්ත්‍රික් මට්ටම - දිස්ත්‍රික් සංවර්ධන කමිටුව</li>
            </ol>
          </div>
        ),
        ta: (
          <div className="space-y-3">
            <p>
              கிராமிய அபிவிருத்தி திட்டத்தை செயல்படுத்தும் மைய நிறுவனம் கிராமிய அபிவிருத்தி பணியகம் ஆகும். திட்டத் தேர்வு, முன்னுரிமை, திட்ட முன்மொழிவுகள் தயாரித்தல், மதிப்பீடு, செயல்படுத்தல் மற்றும் கண்காணிப்பு ஆகியவை கிராம நிலதாரி பிரிவு, பிரிவு மற்றும் மாவட்ட மட்டங்களில் உள்ள குழுக்களால் மேற்கொள்ளப்படுகிறது.
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>கிராம நிலதாரி பிரிவு நிலை - சமூக அபிவிருத்தி சபை</li>
              <li>பிரிவு நிலை - பிரிவு ஒருங்கிணைப்பு குழு</li>
              <li>மாவட்ட நிலை - மாவட்ட ஒருங்கிணைப்பு குழு</li>
            </ol>
          </div>
        ),
      },
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFF8F6] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-black-800">
        {language === "en" && "Frequently Asked Questions"}
        {language === "si" && "නිතර අසන පැන"}
        {language === "ta" && "அடிக்கடி கேட்கப்படும் கேள்விகள்"}
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-[#FDF1E7] to-lime-500 text-black font-semibold text-lg hover:opacity-90"
            >
              {faq.question[language]}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 animate-fadeIn">
                {faq.answer[language]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
