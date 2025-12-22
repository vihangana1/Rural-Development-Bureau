import React, { createContext, useState, useContext } from 'react';

// --- 1. Translation Data ---
// All text for English (en), Sinhala (si), and Tamil (ta) is stored here.
const translations = {
  en: {
    // Header Navigation
    home: "Home",
    aboutUs: "About Us",
    services: "Projects",
    product: "Product",
    download: "Download",
    news: "News",
    contactUs: "Contact Us",
    
    // About Us sub-items
    introduction: "Introduction",
    overview: "Overview",
    officerDetails: "Officer Details",
    
    // Download sub-items
    circulars: "Circulars",
    guidelines: "Guidelines",
    formats: "Formats",
    
    // Service Categories
    agriculture: "Agriculture",
    industries: "Industries",
    fisheries: "Fisheries",
    animalHusbandry: "Animal Husbandry",
    infrastructure: "Infrastructure",
    
    // Agriculture Products
    coconutRelatedProduct: "Coconut Related Product",
    kithulRelatedProduct: "Kithul Related Product",
    palmRelatedProduct: "Palm Related Product",
    spicesRelatedProduct: "Spices and Related Product",
    flowersOrnamentalPlants: "Flowers and Ornamental Plants",
    seedProduct: "Seed Product",
    fruitRelatedProduct: "Fruit Related Product",
    vegetableValueAddition: "Vegetable Value Addition",
    mushroomProduct: "Mushroom Product",
    teaProduct: "Tea Product",
    bulathProduct: "Bulath Product",
    cinnamonProduct: "Cinnamon Product",
    otherProduct: "Other Product",
    
    // Industries Products
    clothRelatedProduct: "Cloth Related Product",
    footwear: "Footwear",
    caneRelatedProduct: "Cane Related Product",
    clayRelatedProduct: "Clay Related Product",
    woodenItems: "Wooden Items",
    poojaItems: "Pooja Items",
    sweetOrganicFoods: "Sweet & Organic Foods",
    coconutHuskProduct: "Coconut Husk Product",
    handCraftProduct: "Hand Craft Product",
    ironGoldProduct: "Iron & Gold Product",
    
    // Fisheries Products
    umbalakadaDriedFish: "Umbalakada & Dried Fish",
    ornamentalFish: "Ornamental Fish",
    
    // Animal Husbandry Products
    dairyProduct: "Dairy Product",
    egg: "Egg",
    meats: "Meats",
    beeHoney: "Bee Honey",
    
    // Infrastructure Services
    roadDevelopments: "Road Developments",
    sanitaryFacilities: "Sanitary Facilities",
    tourismIndustry: "Tourism Industry",
    otherServices: "Other Services",
    
    // Home Page
    // homevision: "A perfect life through a sustainable economy",
    ruralDevProgramme: '" A perfect life through a sustainable economy "',
    gramaShakthiProgramme: "Grama Shakthi Programme",
    prajaShakthiProgramme: "Praja Shakthi Programme",
    sawbagyaProgramme: "Sawbagya Programme",
    
    aboutMinistry: "About Rural Development Bureau",
    president: "President",
    minister: "Minister",
    secretary: "Secretary",
    deputyMinister: "Deputy Minister",
    
    aboutIntro: "Our leadership and guiding principles for national development.",
    // vision: "Our Vision",
    // mission: "Our Mission",
    readMore: "Read More",


    productionVillages: "576 Production Villages Based on Rural Resources",
    saubagyaDescription: "The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the \"Vision of Prosperity and Splendour\" National Policy Framework.",
    
    officerDetail: "OFFICER DETAIL",
    projects: "Projects",
    exploreSectors: "Explore 5 Key Sectors Driving Rural Development",
    projectsDescription: "The  Production Village Program empowers  villages by organizing services into Agriculture, Industries, Fisheries, Animal Husbandry, and Infrastructure. Click a category to discover its sub-items and explore the products that uplift rural livelihoods.",
    
    downloadTitle: "Download circulers, Guidelines and Formats",
    relatedOrganizations: "Related Organizations",
    
    // Officers Names
    deputyMinisterName: "Mr. Wasantha Piyathissa",
    ministerName: "Mr. Upali Pannilage",
    secretaryName: "Mr. S. Manthrinayake",
    directorGeneralName: "Mr. H.M.M.U.B. Herath",

    
    // Organizations
    ruralDevResearchInstitute: "Rural Development and Research Institute",
    ministryPublicAdmin: "Ministry of Public Administration",
    ministryHomeAffairs: "Ministry of Home Affairs",
    ministryFinance: "Ministry of Finance",
    exportDevBoard: "Export Development Board",
    ministryOfRuralDevelopment: "Ministry of Rural Development, Social Security and Community Empowerment",
    nationalSecretariat: "National Secretariat for Community Empowerment",
    samurdi: "Department of Samurdhi Development",


    
    // About Us Page
    aboutUsTitle: "About Us",
    introductionText: "In accordance with the Cabinet Decision No. Amap/25/0150/820/004 dated 10th February 2025, the Rural Development Bureau has been established under the Ministry of Rural Development, Social Security and Community Empowerment as the central institution for the implementation of the Integrated Rural Development Programme.",
   // introductionText2: "The aim is to establish 1000 villages as \"Saubhagya Production Villages\" throughout the country (500 villages in the first phase and another 500 in the second phase), involving low-income earners including Samurdhi recipients as well as more potential family units who directly contribute to the production process.",
    vision: "Vision",
    visionText: "A perfect life through a sustainable economy.",
    mission: "Mission",
    missionText: "To contribute to the optimal fulfillment of human needs through active community participation and strategic resource management through an integrated approach that encompasses the entire community.",
    officersDetails: "Officer's Details",
    directorGeneral: "Director General",
    director: "Director",
    deputyDirector: "Deputy Director",
    assistantDirector: "Assistant Director",
    office: "Office",
    mobile: "Mobile",
    
    // Contact Us Page
    contactUsTitle: "Contact Us",
    contactIntro: "If you have any query, suggestion or complaint, please reach out to us and we will get back to you soon.",
    fillForm: "Fill the Form Below to Contact Us",
    firstName: "First Name",
    lastName: "Last Name",
    district: "District",
    email: "Email",
    contactNumber: "Contact Number",
    commentMessage: "Comment or Message",
    submit: "Submit",
    meetUs: "Meet Us",
    
    // Download Page
    latestCirculars: "Latest Circulars",
    latestGuidelines: "Latest Guidelines",
    latestFormats: "Latest Formats",
    viewAll: "View All",
    //downloadTitle: "Download Section",
   // saubagyaDescription: "Access the latest circulars, guidelines, and formats for public administration.",

    
    documentDownloads: "Document Downloads",
    circularsTitle: "📑 Circulars",
    guidelinesTitle: "📘 Guidelines",
    formatsTitle: "📂 Formats",
    downloadBtn: "Download",
    circular: "Circular",
    guideline: "Guideline",
    format: "Format",
    
    // News Page
    newsTitle: "News",
    dehydratedProduct: "Dehydrated Product",
    prajashakthiTrainingofTrainersNorthWesternProvinceProgram: "Praja Shakthi Training of Trainers - North Western Province Program",
    prajashakthiTrainingofTrainersNorthCentralProvinceProgram: "Praja Shakthi Training of Trainers - North Central Province Program",
    //prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "Praja Shakthi Training of Trainers - South and Central Province Program",
    

    "featuredNews.title": "Featured News",
    "featuredNews.readMoreNews": "Read More News →",
    "featuredNews.readMore": "Read More →",
    "featuredNews.imageAlt": "News image",

    "news1.date": "18th Nov 2025",
    "news1.title": "Praja Shakthi Training of Trainers - North Western Province Program.",
    "news2.date": "10th Nov 2025",
    "news2.title": "Praja Shakthi Training of Trainers - North Center Province Program.",
    "news3.date": "28th Oct 2025",
    "news3.title": "Praja Shakthi Training of Trainers - Eastern Province Program.",
    "news4.date": "18th Oct 2025",
    "news4.title": "Praja Shakthi Training of Trainers - North Province Program.",
    "news5.date": "16th Dec 2025",
    "news5.title": "Praja Shakthi Training of Trainers - South and Central Province Program.",


    //news1 page 
    northWesternProgramIntro: "The North Western Provincial Program for Training Community Empowerment Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on November 18th and 19th at the Wariyapola North Western Training Center.",
    northWesternProgramAlt: "Community Empowerment Training Program",

    //news2 page
    northCentralProgramIntro: "The North Central Province Program for Training of Community Empowerment Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on November 10th and 11th at the National Freshwater Fisheries and Aquaculture Training Center.",
    northCentralProgramAlt: "Community Empowerment Training Program",

    //news3 page
    prajashakthiTrainingofTrainersEasternProvinceProgram: "Praja Shakthi Training of Trainers - Eastern Province Program.",
    easternProgramIntro: "The Eastern Provincial Program for Training Community Empowerment Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on October 25th and 2th at the  TrincomaleeManagement Development And Training Institute .",

    //news4 page
    prajashakthiTrainingofTrainersNorthProvinceProgram: "Praja Shakthi Training of Trainers - North Province Program.",
    northProgramIntro: "The Northern Provincial Program for Training Community Empowerment Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on October 18th and 19st at the Kilinochchi Management Development And Training Institute.",

    //news5 page
    prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "Praja Shakthi Training of Trainers - South and Central Province Program.",
    southProgramIntro: "The Southern and Central Provinces Program for Training of Prajashakthi Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on December 16th and 17th at the Ranminithenna Tele Cinema Village.",


    // Products Page
    productsTitle: "Products",
    productsDescription: "We have a vast range of quality products made by our own producers in the Saubagya Production Villages. These locally based value-added products are crafted with care and meet global standards in the production value chain.",
    handCraft: "Hand Craft",
    dehydratedProductItem: "Dehydrated Product",
    coconutRelatedProductItem: "Coconut Related Product",
    clayRelatedProductItem: "Clay Related Product",
    dairyProductItem: "Dairy Product",
    showMore: "SHOW MORE",


    //new service home page

    "ourServices": "Our Events",
    "services.AganukolapelessaLake-relatedmultipurposeproject": "Aganukolapelessa Lake-related multipurpose project",
    "services.Dikwella-ropeGrindingProject": "Providing rope grinding machines to beneficiaries in the Pathagama South Division, Dikwella, Matara on 20.11.2025 to promote the traditional coir industry.",
    "services.VavuniyaDistrictSmall-scaleGarmentManufacturingProject": "Completion and handover of the small-scale garment manufacturing project implemented in the Asikulam Grama Niladhari Division of the Vavuniya Divisional Secretariat Division of the Vavuniya District - 2025.10.30",
    

//RTI section
    "rti.title": "Right to Information Officers",
    "rti.designatedOfficer": "Designated Officer",
    "rti.secretaryTitle": "Director Genaral",
    "rti.addressLine1": "Rural Development Bureau,",
    "rti.addressLine2": "9th Floor, Sethsiripaya Stage II,",
    "rti.phone": "Tel:",
    "rti.email": "Email:",
    "rti.informationOfficer": "Information Officer",
    //"rti.assistantTitle": "Director - Champika D. darmasena",
    "rti.officerName": "Director - Champika D. darmasena",





    // Footer
    quickLinks: "Quick Links",
    importantLinks: "Important Links",
    contactInfo: "Contact Information",
    address: "Address",
    addressText: "9th Floor, Sethsiripaya Stage II, Battaramulla, Sri Lanka",
   // phone: "Phone",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",
    developedBy: "Developed by",
  },
  
  si: {
    // Header Navigation
    home: "මුල් පිටුව",
    aboutUs: "අප ගැන",
    services: "සේවාවන්",
    product: "නිෂ්පාදන",
    download: "බාගත කිරීම්",
    news: "ප්‍රවෘත්ති",
    contactUs: "අප අමතන්න",
    
    // About Us sub-items
    introduction: "හැඳින්වීම",
    overview: "දළ විශ්ලේෂණය",
    officerDetails: "නිලධාරී විස්තර",
    
    // Download sub-items
    circulars: "චක්‍රලේඛ",
    guidelines: "මාර්ගෝපදේශ",
    formats: "ආකෘති",
    
    // Service Categories
    agriculture: "කෘෂිකර්මාන්තය",
    industries: "කර්මාන්ත",
    fisheries: "ධීවර කර්මාන්තය",
    animalHusbandry: "පශු සම්පත් සංවර්ධනය",
    infrastructure: "යටිතල පහසුකම්",
    
    // Agriculture Products
    coconutRelatedProduct: "පොල් ආශ්‍රිත නිෂ්පාදන",
    kithulRelatedProduct: "කිතුල් ආශ්‍රිත නිෂ්පාදන",
    palmRelatedProduct: "තල ආශ්‍රිත නිෂ්පාදන",
    spicesRelatedProduct: "කුළුබඩු සහ ආශ්‍රිත නිෂ්පාදන",
    flowersOrnamentalPlants: "මල් සහ විසිතුරු ශාක",
    seedProduct: "බීජ නිෂ්පාදන",
    fruitRelatedProduct: "පළතුරු ආශ්‍රිත නිෂ්පාදන",
    vegetableValueAddition: "එළවළු වටිනාකම් එකතු කිරීම",
    mushroomProduct: "හතු නිෂ්පාදන",
    teaProduct: "තේ නිෂ්පාදන",
    bulathProduct: "බුලත් නිෂ්පාදන",
    cinnamonProduct: "කුරුඳු නිෂ්පාදන",
    otherProduct: "වෙනත් නිෂ්පාදන",
    
    // Industries Products
    clothRelatedProduct: "රෙදි ආශ්‍රිත නිෂ්පාදන",
    footwear: "පාවහන්",
    caneRelatedProduct: "බට ආශ්‍රිත නිෂ්පාදන",
    clayRelatedProduct: "මැටි ආශ්‍රිත නිෂ්පාදන",
    woodenItems: "ලී භාණ්ඩ",
    poojaItems: "පූජා භාණ්ඩ",
    sweetOrganicFoods: "රසකැවිලි සහ කාබනික ආහාර",
    coconutHuskProduct: "පොල්ගොක් නිෂ්පාදන",
    handCraftProduct: "අත්කම් නිෂ්පාදන",
    ironGoldProduct: "යකඩ සහ රන් නිෂ්පාදන",
    
    // Fisheries Products
    umbalakadaDriedFish: "උම්බලකඩ සහ වියළි මාළු",
    ornamentalFish: "විසිතුරු මත්ස්‍ය",
    
    // Animal Husbandry Products
    dairyProduct: "කිරි නිෂ්පාදන",
    egg: "බිත්තර",
    meats: "මස්",
    beeHoney: "මී පැණි",
    
    // Infrastructure Services
    roadDevelopments: "මාර්ග සංවර්ධන",
    sanitaryFacilities: "සනීපාරක්ෂක පහසුකම්",
    tourismIndustry: "සංචාරක කර්මාන්තය",
    otherServices: "වෙනත් සේවා",
    
    // Home Page language
    // homevision: "තිරසර ආර්ථිකයක් තුළින් පරිපූර්ණ ජීවිතයක්",
    ruralDevProgramme: ' " තිරසර ආර්ථිකයක් තුළින් පරිපූර්ණ ජීවිතයක් "' ,
    gramaShakthiProgramme: "ග්‍රාම ශක්ති වැඩසටහන",
    prajaShakthiProgramme: "ප්‍රජා ශක්ති වැඩසටහන",
    sawbagyaProgramme: "සෞභාග්‍ය වැඩසටහන",
    
    aboutMinistry: "ග්‍රාමීය සංවර්ධන කාර්යංශය පිළිබඳව",
    president: "ජනාධිපති",
    minister: "අමාත්‍ය",
    secretary: "ලේකම්",


    aboutIntro: "ජාතික සංවර්ධනය සඳහා අපගේ නායකත්වය සහ මූලධර්ම.",
    // vision: "අපගේ දැක්ම",
    // mission: "අපගේ මෙහෙවර",
    
    productionVillages: "ග්‍රාමීය සම්පත් මත පදනම් වූ නිෂ්පාදන ගම්මාන 576",
    saubagyaDescription: "ගෘහ පදනම් නිෂ්පාදන ප්‍රවර්ධනය කිරීම, ග්‍රාමීය ප්‍රජාවේ ආදායම් මට්ටම ඉහළ නැංවීම, ග්‍රාමීය ආර්ථිකය උසස් කිරීම සහ 'සමෘද්ධිය හා තේජසේ දැක්ම' ජාතික ප්‍රතිපත්ති රාමුවට සහාය වීම සඳහා සෞභාග්‍ය නිෂ්පාදන ගම්මාන වැඩසටහන ආරම්භ කරන ලදී.",
    
    officerDetail: "නිලධාරී විස්තර",
    readMore: "වැඩි විස්තර",
    
    projects: "ව්‍යාපෘති",
    exploreSectors: "ග්‍රාමීය සංවර්ධනය හමුවන ප්‍රධාන අංශ 5ක් ගවේෂණය කරන්න",
    projectsDescription: "සෞභාග්‍ය නිෂ්පාදන ගම්මාන වැඩසටහන කෘෂිකර්මාන්තය, කර්මාන්ත, ධීවර කර්මාන්තය, පශු සම්පත් සංවර්ධනය සහ යටිතල පහසුකම් වලට සේවා සංවිධානය කරමින් ගම්මාන 576ක් සවිබල ගන්වයි.",
    
    downloadTitle: "චක්‍රලේඛ, මාර්ගෝපදේශ සහ ආකෘති බාගන්න",
    relatedOrganizations: "අදාළ ආයතන",

    deputyMinister: "උප අමාත්‍ය",
    
    // Officers Names
    deputyMinisterName: "වසන්ත පියතිස්ස මහතා",
    ministerName: "උපාලි පන්නිලගේ මහතා",
    secretaryName: "සම්පත් මන්ත්‍රිනායක මහතා",
    directorGeneralName: "එච්. එම්. එම්. යූ. බී. හේරත් මහතා",
    
    // Organizations
    ruralDevResearchInstitute: "ග්‍රාමීය සංවර්ධන හා පර්යේෂණ ආයතනය",
    ministryPublicAdmin: "රාජ්‍ය පරිපාලන අමාත්‍යාංශය",
    ministryHomeAffairs: "ස්වදේශ කටයුතු අමාත්‍යාංශය",
    ministryFinance: "මුදල් අමාත්‍යාංශය",
    exportDevBoard: "අපනයන සංවර්ධන මණ්ඩලය",
    ministryOfRuralDevelopment: "ග්‍රාමීය සංවර්ධන, සමාජ ආරක්ෂණ සහ ප්‍රජා සවිබලගැන්වීම් අමාත්‍යාංශය",
    nationalSecretariat: "ජාතික ප්‍රජා සවිබලගැන්වීම් ලේකම් කාර්යාලය",
    samurdi: "සමෘද්ධි සංවර්ධන දෙපාර්තමේන්තුව",

    
    // About Us Page
    aboutUsTitle: "අප ගැන",
    introductionText: "2025 පෙබරවාරි මස 10 දිනැති හා අමප/25/0150/820/004 අංක දරණ අමාත්‍ය මණ්ඩල තීරණයට අනුව, ඒකාබද්ධ ග්‍රාමීය සංවර්ධන වැඩසටහන ක්‍රියාත්මක කිරීමේ කේන්ද්‍රීය ආයතනය ලෙස ග්‍රාමීය සංවර්ධන, සමාජ ආරක්ෂණ සහ ප්‍රජා සවිබලගැන්වීම් අමාත්‍යාංශය යටතේ ග්‍රාමීය සංවර්ධන කාර්යාංශය පිහිටුවා ඇත.",
    //introductionText2: "රට පුරා ගම්මාන 1000ක් 'සෞභාග්‍ය නිෂ්පාදන ගම්මාන' ලෙස පිහිටුවීම (පළමු අදියරේදී ගම්මාන 500ක් සහ දෙවන අදියරේදී තවත් 500ක්) අරමුණ වන අතර, සමෘද්ධි ප්‍රතිලාභීන් ඇතුළු අඩු ආදායම්ලාභීන් මෙන්ම නිෂ්පාදන ක්‍රියාවලියට සෘජුවම දායක වන වැඩි විභව පවුල් ඒකක ඊට සම්බන්ධ වේ.",
    vision: "දැක්ම",
    visionText: "තිරසර ආර්ථිකයක් තුළින් පරිපූර්ණ ජීවිතයක්.",
    mission: "මෙහෙවර",
    missionText: "සමස්ථ ප්‍රජාව අන්තර්ග්‍රහණය වන ඒකාබද්ධ ප්‍රවේශයක් තුළින් සක්‍රීය ප්‍රජා සහභාගීත්වය හා උපායමාර්ගික සම්පත් කළමණාකරණයෙන් මානව අවශ්‍යතා ප්‍රශස්ථ ලෙස සපුරාලීමට දායකවීම.",
    officersDetails: "නිලධාරී විස්තර",
    directorGeneral: "අධ්‍යක්ෂ ජනරාල්",
    director: "අධ්‍යක්ෂ",
    deputyDirector: "නියෝජ්‍ය අධ්‍යක්ෂ",
    assistantDirector: "සහකාර අධ්‍යක්ෂ",
    office: "කාර්යාලය",
    mobile: "ජංගම",
    
    // Contact Us Page
    contactUsTitle: "අප අමතන්න",
    contactIntro: "ඔබට කිසියම් විමසීමක්, යෝජනාවක් හෝ පැමිණිල්ලක් තිබේ නම්, කරුණාකර අප අමතන්න, අපි ඉක්මනින් ඔබව සම්බන්ධ කර ගන්නෙමු.",
    fillForm: "අප අමතන්න පහත පෝරමය පුරවන්න",
    firstName: "මුල් නම",
    lastName: "වාසගම",
    district: "දිස්ත්‍රික්කය",
    email: "විද්‍යුත් තැපෑල",
    contactNumber: "සම්බන්ධතා අංකය",
    commentMessage: "අදහස් හෝ පණිවිඩය",
    submit: "ඉදිරිපත් කරන්න",
    meetUs: "අප හමුවන්න",
    
    // Download Page
    documentDownloads: "ලේඛන බාගත කිරීම්",
    circularsTitle: "📑 චක්‍රලේඛ",
    guidelinesTitle: "📘 මාර්ගෝපදේශ",
    formatsTitle: "📂 ආකෘති",
    downloadBtn: "බාගන්න",
    circular: "චක්‍රලේඛය",
    guideline: "මාර්ගෝපදේශය",
    format: "ආකෘතිය",
    
    latestCirculars: "නවතම වටුපත්",
    latestGuidelines: "නවතම මාර්ගෝපදේශ",
    latestFormats: "නවතම ආකෘති",
    viewAll: "සියල්ල බලන්න",




    // News Page
    newsTitle: "ප්‍රවෘත්ති",
    dehydratedProduct: "විජලීකරණය කළ නිෂ්පාදන",
    prajashakthiTrainingofTrainersNorthWesternProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ වයඹ පළාත් වැඩසටහන",
    

    "featuredNews.title": "විශේෂ පුවත්",
    "featuredNews.readMoreNews": "තවත් පුවත් කියවන්න →",
    "featuredNews.readMore": "වැඩිදුර කියවන්න →",
    "featuredNews.imageAlt": "පුවත් රූපය",

    "news1.date": "2025 නොවැම්බර් 18",
    "news1.title": "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ වයඹ පළාත් වැඩසටහන.",
    "news2.date": "2025 නොවැම්බර් 14",
    "news2.title": "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු මැද පළාත් වැඩසටහන.",
    "news3.date": "2025 නොවැම්බර් 10",
    "news3.title": "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ නැගෙනහිර පළාත් වැඩසටහන.",
    "news4.date": "2025 නොවැම්බර් 18",
    "news4.title": "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු පළාත් වැඩසටහන.",
    "news5.date": "2025 දෙසැමබර් 16",
    "news5.title": "ප්‍රජාශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ දකුණු සහ මධ්‍යම  පළාත් වැඩසටහන",
    






    //news1 page 
    "northWesternProgramIntro": "ග්‍රාමීය සංවර්ධන කාර්යංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරනු ලැබූ ප්‍රජාශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ වයඹ පළාත් වැඩසටහන නොවැම්බර් මස 18, 19 දෙදින තුළ වාරියපොළ වයඹ පුහුණු මධ්‍යස්ථානයේ දී සාර්ථකව පවත්වන ලදි.",
    "northWesternProgramAlt": "සමාජ බලගැන්වීමේ පුහුණු වැඩසටහන",

    //newa2 page
    prajashakthiTrainingofTrainersNorthCentralProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු මැද පළාත් වැඩසටහන.",
    "northCentralProgramIntro": "ග්‍රාමීය සංවර්ධන කාර්යංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරනු ලැබූ ප්‍රජාශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු මැද පළාත් වැඩසටහන නොවැම්බර් මස 10, 11 දෙදින තුළ ජාතික මිරිදිය දීවර සහ ජලජීවී වගා පුහුනු මධ්‍යස්ථානයේ දී සාර්ථකව පවත්වන ලදි.",
    //"northWesternProgramAlt": "සමාජ බලගැන්වීමේ පුහුණු වැඩසටහන",

    //news3 page
    prajashakthiTrainingofTrainersEasternProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ නැගෙනහිර පළාත් වැඩසටහන.",
    easternProgramIntro: "ග්‍රාම සංවර්ධන කාර්යාංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරන ලද ප්‍රජා සවිබල ගැන්වීමේ පුහුණුකරුවන් පුහුණු කිරීමේ නැගෙනහිර පළාත් වැඩසටහන ඔක්තෝබර් 25 සහ 26 යන දෙදින තුළ ත්‍රිකුණාමලය කළමනාකරණ සංවර්ධන හා පුහුණු ආයතනයේ දී සාර්ථකව පැවැත්විණි.",

    //news4 page
    prajashakthiTrainingofTrainersNorthProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු පළාත් වැඩසටහන.",
    northProgramIntro: "ග්‍රාම සංවර්ධන කාර්යාංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරන ලද ප්‍රජා සවිබල ගැන්වීමේ පුහුණුකරුවන් පුහුණු කිරීමේ උතුරු පළාත් වැඩසටහන ඔක්තෝබර් 18 සහ 19 යන දෙදින තුළ කිලිනොච්චි කළමනාකරණ සංවර්ධන සහ පුහුණු ආයතනයේ දී සාර්ථකව පැවැත්විණි.",


    //news5 page
    prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ දකුණු සහ මධ්‍යම පළාත් වැඩසටහන.",
    southProgramIntro: "ග්‍රාම සංවර්ධන කාර්යාංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරන ලද ප්‍රජාශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ දකුණු සහ මධ්‍යම පළාත් වැඩසටහන දෙසැම්බර් 16 සහ 17 යන දෙදින රන්මිණිතැන්න ටෙලි සිනමා ගම්මානයේදී සාර්ථකව පැවැත්විණි.",

    // Products Page
    productsTitle: "නිෂ්පාදන",
    productsDescription: "සෞභාග්‍ය නිෂ්පාදන ගම්මාන වල අපගේම නිෂ්පාදකයින් විසින් සාදන ලද ගුණාත්මක නිෂ්පාදන පුළුල් පරාසයක් අප සතුව ඇත. මෙම දේශීයව පදනම් වූ වටිනාකම් එකතු කරන ලද නිෂ්පාදන සත්කාරයෙන් නිර්මාණය කර ඇති අතර නිෂ්පාදන වටිනාකම් දාමයේ ගෝලීය ප්‍රමිතීන් සපුරාලයි.",
    handCraft: "අත්කම්",
    dehydratedProductItem: "විජලීකරණය කළ නිෂ්පාදන",
    coconutRelatedProductItem: "පොල් ආශ්‍රිත නිෂ්පාදන",
    clayRelatedProductItem: "මැටි ආශ්‍රිත නිෂ්පාදන",
    dairyProductItem: "කිරි නිෂ්පාදන",
    showMore: "වැඩි විස්තර",


    //new service home page 
    "ourServices": "අපගේ සේවා",
    "services.AganukolapelessaLake-relatedmultipurposeproject": "අගනුකොලපැලැස්ස වැව ආශ්‍රිත බහුකාර්ය ව්‍යාපෘතිය",
    "services.Dikwella-ropeGrindingProject": "සාම්ප්‍රදායික  කොහු කර්මාන්තය නගා සිටුවීම උදෙසා මාතර,දික්වැල්ල පාතගම දකුණ වසමෙහි ප්‍රතිලාභීන් සඳහා 2025.11.20 වන දින ලණු අඹරන මැෂින් ලබාදීම.",
    "services.VavuniyaDistrictSmall-scaleGarmentManufacturingProject": "වව්නියාව දිස්ත්‍රික්කයේ වව්නියාව ප්‍රාදේශීය ලේකම් කොට්ඨාසයේ ආසිකුලම ග්‍රාමනිලධාරි කොට්ඨාසයේ ක්‍රියාත්මක කුඩා පරිමාණ ඇඟලුම් නිෂ්පාදන ව්‍යාපෘතියෙහි වැඩ නිම කොට ප්‍රතිලාභීන් වෙත ලබා දීම - 2025.10.30",
    
// RTI Section
    "rti.title": "තොරතුරු ලබාගැනීමේ නිලධාරීන්",
    "rti.designatedOfficer": "නම් කළ නිලධාරියා",
    "rti.secretaryTitle": "අධ්‍යක්ෂ ජනරාල් ",
    "rti.addressLine1": "ග්‍රාමීය සංවර්ධන කාර්යංශය,",
    "rti.addressLine2": "9 වන මහල, සෙත්සිරිපාය II අදියර, බත්තරමුල්ල.",
    "rti.phone": "දුරකථන:",
    "rti.email": "ඊමේල්:",
    "rti.informationOfficer": "තොරතුරු නිලධාරී",
    "rti.assistantTitle": " ",
    "rti.officerName": "අධ්‍යක්ෂ - චම්පිකා  ඩී ධර්මසේන",


    // Footer
    quickLinks: "ඉක්මන් සබැඳි",
    importantLinks: "වැදගත් සබැඳි",
    contactInfo: "සම්බන්ධතා තොරතුරු",
    address: "ලිපිනය",
    addressText: "9 වන මහල, සෙත්සිරිපාය II අදියර, බත්තරමුල්ල, ශ්‍රී ලංකාව",
  //  phone: "දුරකථන",
    followUs: "අප අනුගමනය කරන්න",
    allRightsReserved: "සියලුම හිමිකම් ඇවිරිණි",
    developedBy: "නිර්මාණය කළේ",
  },
  
  ta: {
    // Header Navigation
    home: "முகப்பு",
    aboutUs: "எங்களை பற்றி",
    services: "சேவைகள்",
    product: "தயாரிப்புகள்",
    download: "பதிவிறக்கம்",
    news: "செய்திகள்",
    contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
    
    // About Us sub-items
    introduction: "அறிமுகம்",
    overview: "கண்ணோட்டம்",
    officerDetails: "அதிகாரி விவரங்கள்",
    
    // Download sub-items
    circulars: "சுற்றறிக்கைகள்",
    guidelines: "வழிகாட்டுதல்கள்",
    formats: "வடிவங்கள்",
    
    // Service Categories
    agriculture: "விவசாயம்",
    industries: "தொழில்துறை",
    fisheries: "மீன்பிடி",
    animalHusbandry: "கால்நடை வளர்ப்பு",
    infrastructure: "உள்கட்டமைப்பு",
    
    // Agriculture Products
    coconutRelatedProduct: "தேங்காய் தொடர்பான தயாரிப்பு",
    kithulRelatedProduct: "கிதுல் தொடர்பான தயாரிப்பு",
    palmRelatedProduct: "பனை தொடர்பான தயாரிப்பு",
    spicesRelatedProduct: "மசாலா மற்றும் தொடர்புடைய தயாரிப்பு",
    flowersOrnamentalPlants: "பூக்கள் மற்றும் அலங்கார தாவரங்கள்",
    seedProduct: "விதை தயாரிப்பு",
    fruitRelatedProduct: "பழ தொடர்பான தயாரிப்பு",
    vegetableValueAddition: "காய்கறி மதிப்பு சேர்த்தல்",
    mushroomProduct: "காளான் தயாரிப்பு",
    teaProduct: "தேயிலை தயாரிப்பு",
    bulathProduct: "புலத் தயாரிப்பு",
    cinnamonProduct: "இலவங்கப்பட்டை தயாரிப்பு",
    otherProduct: "பிற தயாரிப்பு",
    
    // Industries Products
    clothRelatedProduct: "துணி தொடர்பான தயாரிப்பு",
    footwear: "காலணிகள்",
    caneRelatedProduct: "கரும்பு தொடர்பான தயாரிப்பு",
    clayRelatedProduct: "களிமண் தொடர்பான தயாரிப்பு",
    woodenItems: "மர பொருட்கள்",
    poojaItems: "பூஜை பொருட்கள்",
    sweetOrganicFoods: "இனிப்பு & இயற்கை உணவுகள்",
    coconutHuskProduct: "தேங்காய் உமி தயாரிப்பு",
    handCraftProduct: "கைவினை தயாரிப்பு",
    ironGoldProduct: "இரும்பு & தங்க தயாரிப்பு",
    
    // Fisheries Products
    umbalakadaDriedFish: "உம்பலகடா & உலர்ந்த மீன்",
    ornamentalFish: "அலங்கார மீன்",
    
    // Animal Husbandry Products
    dairyProduct: "பால் தயாரிப்பு",
    egg: "முட்டை",
    meats: "இறைச்சி",
    beeHoney: "தேன்",
    
    // Infrastructure Services
    roadDevelopments: "சாலை அபிவிருத்தி",
    sanitaryFacilities: "சுகாதார வசதிகள்",
    tourismIndustry: "சுற்றுலா தொழில்",
    otherServices: "பிற சேவைகள்",
    
    // Home Page
    //homevision: "நிலையான பொருளாதாரம் மூலம் ஒரு சரியான வாழ்க்கை",
    ruralDevProgramme: '"நிலையான பொருளாதாரம் மூலம் ஒரு சரியான வாழ்க்கை"',
    gramaShakthiProgramme: "கிராம சக்தி திட்டம்",
    prajaShakthiProgramme: "பிரஜா சக்தி திட்டம்",
    sawbagyaProgramme: "சௌபாக்ய திட்டம்",
    
    aboutMinistry: "கிராமிய அபிவிருத்தி அமைச்சகம் பற்றி",
    president: "ஜனாதிபதி",
    minister: "அமைச்சர்",
    secretary: "செயலாளர்",
    

    aboutIntro: "தேசிய வளர்ச்சிக்கான எங்கள் தலைமையும் வழிகாட்டும் கொள்கைகளும்.",
    // vision: "எங்கள் பார்வை",
    // mission: "எங்கள் பணி",
    readMore: "மேலும் படிக்க",


    productionVillages: "கிராமிய வளங்களை அடிப்படையாகக் கொண்ட 576 உற்பத்தி கிராமங்கள்",
    saubagyaDescription: "வீட்டு அடிப்படையிலான தயாரிப்புகளை ஊக்குவித்தல், கிராமிய சமூகத்தின் வருமான நிலையை உயர்த்துதல், கிராமிய பொருளாதாரத்தை மேம்படுத்துதல் மற்றும் 'செழிப்பு மற்றும் சிறப்பு பார்வை' தேசிய கொள்கை கட்டமைப்பை ஆதரிக்க சௌபாக்ய உற்பத்தி கிராம திட்டம் தொடங்கப்பட்டது.",
    
    officerDetail: "அதிகாரி விவரங்கள்",
    
    projects: "திட்டங்கள்",
    exploreSectors: "கிராமிய அபிவிருத்தியை இயக்கும் 5 முக்கிய துறைகளை ஆராயுங்கள்",
    projectsDescription: "சௌபாக்ய உற்பத்தி கிராம திட்டம் விவசாயம், தொழில்துறை, மீன்பிடி, கால்நடை வளர்ப்பு மற்றும் உள்கட்டமைப்பு ஆகியவற்றில் சேவைகளை ஒழுங்கமைப்பதன் மூலம் 576 கிராமங்களுக்கு அதிகாரம் அளிக்கிறது.",
    
    downloadTitle: "சுற்றறிக்கைகள், வழிகாட்டுதல்கள் மற்றும் வடிவங்களை பதிவிறக்கவும்",
    relatedOrganizations: "தொடர்புடைய நிறுவனங்கள்",
    deputyMinister: "உப அமைச்சர்",
    
    // Officers Names
    deputyMinisterName: "திரு. வசந்த பியதிஸ்ஸ",
    ministerName: "திரு. உபாலி பன்னிலகே",
    secretaryName: "திரு. சம்பத் மந்திரிநாயக்க",
    directorGeneralName: "திரு. எச்.எம்.எம்.யூ.பி.ஹெரத்",
  
    
    // Organizations
    ruralDevResearchInstitute: "கிராமிய அபிவிருத்தி மற்றும் ஆராய்ச்சி நிறுவனம்",
    ministryPublicAdmin: "பொது நிர்வாக அமைச்சு",
    ministryHomeAffairs: "உள்துறை அமைச்சு",
    ministryFinance: "நிதி அமைச்சு",
    exportDevBoard: "ஏற்றுமதி அபிவிருத்தி வாரியம்",
    ministryOfRuralDevelopment: "கிராமப்புற மேம்பாடு சமூகப் பாதுகாப்பு மற்றும் சமூக அதிகாரமளித்தல்",
    nationalSecretariat: "மாற்றுத்திறனாளிகளுக்கான தேசிய செயலாளர்",
    samurdi: "சமுர்த்தி அபிவிருத்தித் துறை",

    
    

    
    // About Us Page
    aboutUsTitle: "எங்களை பற்றி",
    introductionText: "பிப்ரவரி 10, 2025 தேதியிட்ட அமைச்சரவை முடிவு எண். Amap/25/0150/820/004 இன் படி, ஒருங்கிணைந்த கிராமப்புற மேம்பாட்டுத் திட்டத்தை செயல்படுத்துவதற்கான மைய நிறுவனமாக கிராமப்புற மேம்பாடு, சமூகப் பாதுகாப்பு மற்றும் சமூக அதிகாரமளித்தல் அமைச்சகத்தின் கீழ் கிராமப்புற மேம்பாட்டுப் பணியகம் நிறுவப்பட்டுள்ளதுci.",
    //introductionText2: "நாடு முழுவதும் 1000 கிராமங்களை 'சௌபாக்ய உற்பத்தி கிராமங்கள்' ஆக நிறுவுவது (முதல் கட்டத்தில் 500 கிராமங்கள் மற்றும் இரண்டாவது கட்டத்தில் மேலும் 500) இலக்காகும், சமுர்தி பயனாளர்கள் உட்பட குறைந்த வருமானம் பெறுபவர்கள் மற்றும் உற்பத்தி செயல்முறைக்கு நேரடியாக பங்களிக்கும் அதிக சாத்தியமுள்ள குடும்ப அலகுகள் சம்பந்தப்பட்டுள்ளன.",
    vision: "பார்வை",
    visionText: "நிலையான பொருளாதாரம் மூலம் ஒரு சரியான வாழ்க்கை.",
    mission: "நோக்கம்",
    missionText: "முழு சமூகத்தையும் உள்ளடக்கிய ஒருங்கிணைந்த அணுகுமுறையின் மூலம் செயலில் சமூக பங்கேற்பு மற்றும் மூலோபாய வள மேலாண்மை மூலம் மனித தேவைகளை உகந்த முறையில் பூர்த்தி செய்வதற்கு பங்களிக்க.",
    officersDetails: "அதிகாரி விவரங்கள்",
    directorGeneral: "பணிப்பாளர் நாயகம்",
    director: "பணிப்பாளர்",
    deputyDirector: "துணை பணிப்பாளர்",
    assistantDirector: "உதவி பணிப்பாளர்",
    office: "அலுவலகம்",
    mobile: "கையடக்கம்",
    
    // Contact Us Page
    contactUsTitle: "எங்களை தொடர்பு கொள்ளுங்கள்",
    contactIntro: "உங்களுக்கு ஏதேனும் கேள்வி, பரிந்துரை அல்லது புகார் இருந்தால், தயவுசெய்து எங்களை தொடர்பு கொள்ளுங்கள், நாங்கள் விரைவில் உங்களை தொடர்பு கொள்வோம்.",
    fillForm: "எங்களை தொடர்பு கொள்ள கீழே உள்ள படிவத்தை பூர்த்தி செய்யவும்",
    firstName: "முதல் பெயர்",
    lastName: "கடைசி பெயர்",
    district: "மாவட்டம்",
    email: "மின்னஞ்சல்",
    contactNumber: "தொடர்பு எண்",
    commentMessage: "கருத்து அல்லது செய்தி",
    submit: "சமர்ப்பிக்கவும்",
    meetUs: "எங்களை சந்திக்கவும்",
    
    // Download Page
    documentDownloads: "ஆவண பதிவிறக்கங்கள்",
    circularsTitle: "📑 சுற்றறிக்கைகள்",
    guidelinesTitle: "📘 வழிகாட்டுதல்கள்",
    formatsTitle: "📂 வடிவங்கள்",
    downloadBtn: "பதிவிறக்கவும்",
    circular: "சுற்றறிக்கை",
    guideline: "வழிகாட்டுதல்",
    format: "வடிவம்",




    latestCirculars: "சமீபத்திய சுற்றறிக்கைகள்",
latestGuidelines: "சமீபத்திய வழிகாட்டிகள்",
latestFormats: "சமீபத்திய வடிவங்கள்",
viewAll: "அனைத்தையும் பார்க்க",
    
    // News Page
    newsTitle: "செய்திகள்",
    dehydratedProduct: "நீரிழப்பு தயாரிப்பு",
    

    "featuredNews.title": "சிறப்பு செய்தி",
"featuredNews.readMoreNews": "மேலும் செய்திகள் →",
"featuredNews.readMore": "மேலும் படிக்க →",
"featuredNews.imageAlt": "செய்தி படம்",

"news1.date": "2025 நவம்பர் 18",
"news1.title": "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வடமேற்கு மாகாண திட்டம்.",
"news2.date": "2025 நவம்பர் 14",
"news2.title": "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வடமத்திய மாகாண திட்டம்.",
"news3.date": "2025 நவம்பர் 11",
"news3.title": "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – கிழக்கு மாகாண திட்டம்.",
"news4.date": "2025 நவம்பர் 10",
"news4.title": "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வட மாகாண திட்டம்.",
"news5.date": "2025 டிசம்பர் 16",
"news5.title": "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – மத்திய மாகாண திட்டம்.",


    //news1 page 
  prajashakthiTrainingofTrainersNorthWesternProvinceProgram: "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வடமேற்கு மாகாண திட்டம்",
  northWesternProgramIntro: "வடமேற்கு மாகாண சமூக அதிகாரப்படுத்தல் பயிற்சியாளர்களுக்கான பயிற்சி திட்டம், கிராமப்புற அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலாளர் அலுவலகம் இணைந்து ஏற்பாடு செய்தது, நவம்பர் 18 மற்றும் 19 ஆம் தேதிகளில் வாரியபொல வடமேற்கு பயிற்சி மையத்தில் வெற்றிகரமாக நடைபெற்றது.",
  northWesternProgramAlt: "சமூக அதிகாரப்படுத்தல் பயிற்சி திட்டம்",

  //news2 page
  prajashakthiTrainingofTrainersNorthCentralProvinceProgram:"பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வடமத்திய மாகாண திட்டம்",
  northCentralProgramIntro:"கிராமப்புற அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலகம் இணைந்து ஏற்பாடு செய்த சமூக வலுவூட்டல் பயிற்சியாளர்களுக்கான வடமத்திய மாகாண பயிற்சி நிகழ்ச்சித்திட்டம் நவம்பர் 10 மற்றும் 11 ஆம் தேதிகளில் தேசிய நன்னீர் மீன்பிடி மற்றும் மீன்வளர்ப்பு பயிற்சி மையத்தில் வெற்றிகரமாக நடைபெற்றது.",
  northCentralProgramAlt:"வடமத்திய மாகாண பயிற்சி நிகழ்ச்சித்திட்டம்",

  //news3 page
  prajashakthiTrainingofTrainersEasternProvinceProgram:"பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – கிழக்கு மாகாண திட்டம்",
  easternProgramIntro: "கிராம அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலகம் இணைந்து ஏற்பாடு செய்த கிழக்கு மாகாண சமூக வலுவூட்டல் பயிற்சியாளர்களுக்கான பயிற்சி நிகழ்ச்சித்திட்டம், திருகோணமலை மேலாண்மை மேம்பாடு மற்றும் பயிற்சி நிறுவனத்தில் அக்டோபர் 25 மற்றும் 26 ஆகிய தேதிகளில் வெற்றிகரமாக நடைபெற்றது.",

//news4 page
prajashakthiTrainingofTrainersNorthProvinceProgram:"பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – வட மாகாணம் திட்டம்",
  northProgramIntro: "கிராமப்புற அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலகம் இணைந்து ஏற்பாடு செய்த சமூக வலுவூட்டல் பயிற்சியாளர்களுக்கான வடக்கு மாகாண பயிற்சி நிகழ்ச்சித்திட்டம் அக்டோபர் 18 மற்றும் 19 ஆகிய தேதிகளில் கிளிநொச்சி மேலாண்மை மேம்பாட்டு மற்றும் பயிற்சி நிறுவனத்தில் வெற்றிகரமாக நடைபெற்றது.",

  //news5 page
  prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – மத்திய மாகாண திட்டம்",
  southProgramIntro: "கிராம அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலகம் இணைந்து ஏற்பாடு செய்த பிரஜாசக்தி பயிற்சியாளர்களுக்கான தெற்கு மற்றும் மத்திய மாகாண பயிற்சி நிகழ்ச்சித்திட்டம் டிசம்பர் 16 மற்றும் 17 ஆகிய தேதிகளில் ரன்மினிதென்ன டெலி சினிமா கிராமத்தில் வெற்றிகரமாக நடைபெற்றது.",
    // Products Page
    productsTitle: "தயாரிப்புகள்",
    productsDescription: "சௌபாக்ய உற்பத்தி கிராமங்களில் எங்கள் சொந்த உற்பத்தியாளர்களால் தயாரிக்கப்பட்ட தரமான தயாரிப்புகளின் பரந்த அளவு எங்களிடம் உள்ளது. இந்த உள்நாட்டில் அடிப்படையிலான மதிப்பு கூட்டப்பட்ட தயாரிப்புகள் கவனமாக வடிவமைக்கப்பட்டு உற்பத்தி மதிப்பு சங்கிலியில் உலகளாவிய தரங்களை சந்திக்கின்றன.",
    handCraft: "கைவினை",
    dehydratedProductItem: "நீரிழப்பு தயாரிப்பு",
    coconutRelatedProductItem: "தேங்காய் தொடர்பான தயாரிப்பு",
    clayRelatedProductItem: "களிமண் தொடர்பான தயாரிப்பு",
    dairyProductItem: "பால் தயாரிப்பு",
    showMore: "மேலும் காட்டு",
    

    //new service page home
    "ourServices": "எங்கள் சேவைகள்",
    "services.AganukolapelessaLake-relatedmultipurposeproject": "அகனுகோலபெலெஸ்ஸ ஏரி தொடர்பான பல்நோக்கு திட்டம்",
    "services.Dikwella-ropeGrindingProject": "பாரம்பரிய தென்னை நார்த் தொழிலை மேம்படுத்துவதற்காக 20.11.2025 அன்று மாத்தறை, திக்வெல்ல, பதகம தெற்குப் பிரிவில் பயனாளிகளுக்கு கயிறு அரைக்கும் இயந்திரங்களை வழங்குதல்.",
    "services.VavuniyaDistrictSmall-scaleGarmentManufacturingProject": "வவுனியா மாவட்டத்தின் வவுனியா பிரதேச செயலாளர் பிரிவின் ஆசிகுளம் கிராம அலுவலர் பிரிவில் செயல்படுத்தப்பட்ட சிறிய அளவிலான ஆடை உற்பத்தி திட்டத்தை நிறைவு செய்து கையளித்தல் - 2025.10.30",


    "rti.title": "தகவல் உரிமை அதிகாரிகள்",
    "rti.designatedOfficer": "நியமிக்கப்பட்ட அதிகாரி",
    "rti.secretaryTitle": "பணிப்பாளர் நாயகம் ",
    "rti.addressLine1": "டிஜிட்டல் பொருளாதார அமைச்சு, நிலை 11, அலகு எண்: 1101",
    "rti.addressLine2": "ஒன் கால் பேஸ் டவர், எண் 1 A, கால் பேஸ், கொழும்பு 02.",
    "rti.phone": "தொலைபேசி:",
    "rti.email": "மின்னஞ்சல்:",
    "rti.informationOfficer": "தகவல் அதிகாரி",
    "rti.assistantTitle": "இயக்குனர் - சம்பிகா டி. தர்மசேன",
    "rti.officerName": "திருமதி தினுஜி ரந்திகா கோடிகமுவ",




    // Footer
    quickLinks: "விரைவு இணைப்புகள்",
    importantLinks: "முக்கிய இணைப்புகள்",
    contactInfo: "தொடர்பு தகவல்",
    address: "முகவரி",
    addressText: "9வது மாடி, சேத்சிரிபாய கட்டம் II, பத்தரமுல்ல, இலங்கை",
  //  phone: "தொலைபேசி",
    followUs: "எங்களை பின்தொடருங்கள்",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    developedBy: "உருவாக்கியவர்",
  }
};

// --- 2. Create Language Context ---
// This creates a shared space for language data across your app.
const LanguageContext = createContext();

// --- 3. Custom Hook: useLanguage ---
// A shortcut for components to easily access the context data.
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// --- 4. Language Provider Component ---
// This component wraps your entire app and manages the language state.
export const LanguageProvider = ({ children }) => {
  // Default language is English ('en')
  const [language, setLanguage] = useState('en');

  // The translation function `t`. It takes a key and returns the translated string.
  // If a translation isn't found, it returns the key itself to prevent crashes.
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Function to change the language.
  const changeLanguage = (lang) => {
    // Only changes the language if it exists in our translations object.
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  // Provide the current language, the change function, and the translation function to all children.
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};