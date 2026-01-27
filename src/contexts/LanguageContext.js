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
    FAQ: "FAQ",
    
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
    minister: " Minister",
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
    projectsDescription: "Projects approved by our Bureau for the development of agriculture, industry, fisheries, animal husbandry and infrastructure to empower rural communities and improve their livelihoods in the year 2025.",
    
    downloadTitle: "Download circulers, Guidelines and Formats",
    relatedOrganizations: "Related Organizations",
    
    // Officers Names
    deputyMinisterName: "Hon. Mr. W.Piyathissa",
    ministerName: "Hon. Dr. Upali Pannilage",
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
    directorGeneral: "Additional Secretary (Rural Development)",
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
    "news6.date": "13th Jan 2026",
    "news6.title": "Praja Shakthi - Western Province Summit to Educate Community Development Council Representatives",

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
    prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "Praja Shakthi Training of Trainers - Matara and Monaragala  district Program.",
    southProgramIntro: "The Matara and Monaragala  district Program for Training of Prajashakthi Trainers, jointly organized by the Rural Development Bureau and the Presidential Secretariat, was successfully held on December 16th and 17th at the Ranminithenna Tele Cinema Village.",

    //news6 page
    PrajaShakthiWesternProvince:"Praja Shakthi - Western Province Summit to Educate Community Development Council Representatives",

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


    // gallary

    "gallery" : "Gallery",
    "galleryTitle": "Gallery", "eventsSection": "Events", "meetingsSection": "Meetings", "eventImage": "Event Image", "meetingImage": "Meeting Image", "imageCaption": "Image",
//service page

//Agryculture
//fruit page
fruitPageTitle: "Fruit Related Product", 
no: "No", 
// district: "District", 
divisionalOffice: "Divisional Secretary Office", 
project: "Project", 
// product: "Product", 
location: "Location", 
"Amount(Rs)": "Approved Allocation (Rs.) ",


    "amban_bananaProject": "Amban Banana Project",
    "durianProject": "Duriyan Project",
    "vine_orangesProject": "Vine Orange Project",
    "jamanarangProject": "jamanarang Project",
    "nutsProject": "Nuts Project",
    "jams_cordialsProject": "Jams and Cordials Project",
    "kavendish_bananaProject": "Kavendish Banana Project",
    "mixed_fruitsProject": "Fruit Project",
    "pineapple_delumProject": "Pinapple and Delum Project",
    "apple_pera_mangoProject": "Apple, Pera, Tompesi Mango Project",

    "mahanuwara_banana": " Mahanuwara Amban Banana Project",
    "mahanuwara_durian": "Mahanuwara Duuriyan Project",
    "nuwara_eliya_orange": "Nuwara Eliya Vine Orange Project",
    "nuwara_eliya_jamanarang": "Nuwara Eliya jamanarang Project",
    "ampara_orange": "Ampara Vine Orange Project",
    "kurunegala_nuts": "Kurunegala Nuts Project",
    "mulathivu_jams": "Mulathivu Jams and Cordials Project",
    "mulathivu_banana": "Mulathivu Kavendish Banana Project",
    "kalutara_fruit": "Kalutara Fruit Project",
    "polonnaruwa_pineapple": "Plonnaruwa Pinapple and Delum Project",
    "polonnaruwa_apple": "Plonnaruwa Apple, Pera, Tompesi Mango Project",

  
    "mahanuwara": "Mahanuwara",
    "nuwara_eliya": "Nuwara Eliya",
    "ampara": "Ampara",
    "kurunegala": "Kurunegala",
    "mulathivu": "Mulathivu",
    "kalutara": "Kalutara",
    "polonnaruwa": "Polonnaruwa",
 
    "harispaththuwa": "Harispaththuwa",
    "poojapitiya": "Poojapitiya",
    "kotmale_east": "Kotmale East",
    "uhana": "Uhana",
    "ibbagamuwa": "Ibbagamuwa",
    "mantai_east": "Mantai East",
    "puthukudirippu": "Puthukudirippu",
    "dhodangoda": "Dhodangoda",
    "madirigiriya": "Madirigiriya",


    "amban_banana": "Amban Banana",
    "durian": "Duuriyan",
    "vine_oranges": "Vine oranges",
    "jamanarang_drinks": "Jamanarang drinks",
    "nuts": "Nuts",
    "jams_cordials": "Jams, cordials and orange-based products",
    "kavendish_banana": "Kavendish Banana",
    "mixed_fruits": "Durian, rambutan, pineapple, Vine Orange, banana",
    "pineapple_delum": "Pinapple and Delum",
    "apple_pera_mango": "Apple Pera, Tompesi Mango",

    "bulathgolla": "Bulathgolla",
    "pahala_higulwala": "507-Pahala Higulwala",
    "niyamgamdora": "Niyamgamdora 470",
    "weralalapathana": "461/D Weralalapathana",
    "bandaradoowa": "Bandaradoowa",
    "omaragolla": "415 Omaragolla",
    "ampalapuram": "Ampalapuram",
    "theravil": "Theravil Thevipuram",
    "thudugala": "Thudugala East, Nehinnewa, Wadugama",
    "vijayapura": "108 Vijayapura",
    "ihalagama": "109 Ihalagama",
  


    //Bulath Page

    "betelPageTitle": "Betel Leaf Related Products",

    "ampara_organicBetel": "RidiEla  Betel Project",
    "kegalle_betelCluster": "Kegalle Betel Cluster",
    "galigamuwa_betelCluster": "Galigamuwa Betel Cluster",
    "puttalama_betelCluster": "Abakele Betel Cluster (Puttalam)",
    "hambanthota_betelCluster": "Abakele Betel Cluster (Hambantota)",
    "organicBetelProject": " Betel Project",
    "betelCluster": "Betel Cluster",

    
    "kegalle": "Kegalle",
    "puttalama": "Puttalama",
    "hambanthota": "Hambanthota",

    "dehiaththakandiya": "Dehiaththakandiya",
    "galigamuwa": "Galigamuwa",
    "arachchikattuwa": "Arachchikattuwa",
    "veeraketiya": "Veeraketiya",

    "betel_leaf": "Betel Leaf",

    "ridiela": "RidiEla",
    "pussella": "51 A Pussella, 51 A Rangwala",
    "papoluwa": "70 A, Papoluwa",
    "abakele": "Abakele, Ihala Aththanganaya",
    "degampotha": "Degampotha, Abakolawewa North",



    //cineman page

    "cinnamonPageTitle": "Cinnamon Related Products",

   

    
    "galle": "Galle",
    
    "monaragala": "Monaragala",
    "sewanagala": "Sewanagala",
    "tangalla": "Tangalla",
    "balapitiya": "Balapitiya",
    "niyagama": "Niyagama",
    "yakkalamulla": "Yakkalamulla",
    "wallawita": "Wallawita",
    "madulla": "Madulla",

    "cinnamonProject": "Cinnamon Project",
    "tangalla_Cinamon": "Tangalla Cinnamon Project",
    "balapitiya_Cinamon": "Balapitiya Cinnamon Project",
    "niyagama_Cinamon": "Niyagama Cinnamon Project",
    "yakkalamulla_Cinamon": "Yakkalamulla Cinnamon Project",
    "wallawita_Cinamon": "Wallawita Cinnamon Project",
    "monaragala_Cinamon": "Monaragala Cinnamon Project",
    "madulla_Cinamon": "Madulla Cinnamon Project",
    "mayyokkawatte_Cinamon": "Mayyokkawatte Cinnamon Project",
    "sewanagala_Cinamon": "Sewanagala Cinnamon Project",

    "vallodaya": "Vallodaya, Ratna East, Rekava West",
    "kattakaduwa": "Kattakaduwa South, Kattakaduwa North, Kadiragoda",
    "pelagus": "Pelagus Province, Pathiraja Place, Coconut Palm Province",
    "horangalla": "Horangalla Thalawa, Horangalla West",
    "ella_upper": "182 C Ella Upper",
    "pareigama": "782 Pareigama North, Kuda Matugama",
    "batugammana": "130 Batugammana",
    "tharela": "113D - Tharela",
    "illukkanda": "113C - Illukkanda",
    "watawanagara": "116C - Watawanagara",
    "mayyokkawatte": "Mayyokkawatte",
    "kiri_wewa": "Kiri Wewa, Indikolapelessa",
    "habarugala": "Habarugala, Mahagama",

    //coconut page 
    "coconutPageTitle": "Coconut Related Products",

    "coconutHuskProject": "Coconut Husk Based Product Project",
    "coconutOilProject": "Coconut Oil Production Project",
    "uhana_coconut": "Uhana Coconut Husk Based Product",
    "udubaddawa_coconut": "Udubaddawa Coconut Husk Based Product",
    "kobeigane_coconut": "Kobeigane Coconut Husk Based Product",
    "puttur_coconut": "Puttur East Coconut Oil Product",


    "jaffna": "Jaffna",

    "broom_rugs": "Broom, Rugs",
    "coconut_husk": "Coconut Husk",
    "coconut_oil": "Coconut Oil",

    "udubaddawa": "Udubaddawa",
    "kobeigane": "Kobeigane",
    "valikamam_east": "Valikamam East (Kopai)",

    "uhanapura": "Uhanapura",
    "udadeniya": "Udadeniya",
    "kobeigane_cluster": "Pubbiliya, Baddegama, Mawathagama, Walaswewa",
    "puttur_east": "Puttur East J/278",



    //flowwer page

    "flowerPageTitle": "Flower and Ornamental Plants",

    "flowerProject": "Ornamental flower cultivation project",
    "pannala_flowers": "Pannala Ornamental flower cultivation project",
    "idda_flower": "Idda Flower ",

    "flowers": "Ornamental flower",


    "pannala": "Pannala",
    "kalpitiya": "Kalpitiya",

    "pannala_cluster": "1557 - Batapotha Ela, 1563 - Weththewa, 1582 - Kotuwela",
    "mampuriya": "Mampuriya",

//Kithul page

    "kithulPageTitle": "Kithul Related Products",

    "kithulDevelopment": "Kithul Development Project",
    "matugama_kithul": "Matugama Kithul Development Project",
    "kotmale_kithul": "Kotmale West Kithul Development Project",

    "kithul_mix": "Kithul Hakuru, Honey, Kithul Flour",
    "kithul_value_added": "Kithul-related Value-added Products",

    "matugama": "Mathugama",
    "kotmale_west": "Kotmale West",

    "matugama_kithul_loc": "795 B Sandasirigama, 794 Horawala, 793 B Madawala",
    "madakubura": "Madakubura 468",

//mushroom page

  "mushroomPageTitle": "Mushroom Related Products",
 
    "mushroomProduction": "Mushroom Production Zone",
    "uhana_mushroom": "Uhana Mushroom Production Zone",
    "ukuwela_mushroom": "Ukuwela Mushroom Production Zone",
    "aranayake_mushroom": "Aranayake Mushroom Production Zone",
    "wellawaya_mushroom": "Wellawaya Mushroom Production Zone",
    "ella_mushroom": "Ella Mushroom Production Zone",
    "madirigiriya_mushroom": "Madirigiriya Mushroom Production Zone",
 
    "mushroom": "Mushroom",
  
    "ukuwela": "Ukuwela",
    "aranayake": "Aranayake",
    "wellawaya": "Wellawaya",
    "ella": "Ella",

    "ukuwela_loc": "Owilla Thenna, Thibbatuwawa",
    "pahinibeddara": "45C Pahinibeddara, Gavilipitiya Village",
    "kotikambokka": "Kotikambokka",
    "ella_mushroom_loc": "Millagama, Idamegama, Udu Kumbalwela",
    "veheragala": "124 Veheragala",
 
//palm page
    "palmPageTitle": "Palm Related Products",
    "palmBasedProject": "Palm Based Project",
    "jaffna_palm": "Jaffna Palm Based Project",

    "palm_kernels": "Palm kernels and palm-based products",

    "uduvil": "Valikamam South (Uduvil)",

    "jaffna_palm_loc": "Elalai South, Munnakam Town South",

    //seed page
    "seedPageTitle": "Seed Related Products",

    "seedProject": "Seed Production Project",
    "badulla_seed_name": "Badulla Potato Seed Project",
    "polonnaruwa_seed_name": "Polonnaruwa Seed Paddy Project",

    "potato_seeds": "Potato Seeds",
    "seed_paddy": "Seed Paddy",

    "badulla_seed_cluster": "Hali Ela, Bandarawela, Haputale, Haldummulla, Passara",
    "higurangoda": "Higurangoda",

    "badulla_seed_loc": "Nayabeddawatte, Poonagalawatte, Dambetennawatte, Thangamalewatte, Udaweriyawatte, Gonamotawatte, Kanawerellawatte, Wewalewatte, Nawalawatte, Diyanagalawatte",
    "rajaelagama": "37 Rajaelagama",

    //spices page

      "spicesPageTitle": "Spices and Related Products",
   
        "spiceVillageProject": "Black Pepper Village Development Project",
        "udawatte_spice": "Udawatte Black Pepper Village",
        "higuranketha_pepper": "Higuranketha Black Pepper Project",
    
        "black_pepper": "Black Pepper",
    
        "higuranketha": "Higuranketha",
    
        "udawatte_cluster": "Udawatte East, Udawatte West, 488/A Hakuruthal",
      
        //tea page
          "teaPageTitle": "Tea Related Products",

            "teaPromotion": "Tea Cultivation Promotion Project",
            "teaDevelopment": "Tea Cultivation Promotion Project",
            "teaCooperative": "TTea Cultivation Promotion Projectt",
            "kottawa_tea": "Kottawa Tea Promotion Zone",
            "neluwa_tea": "Neluwa Tea Development Area",
            "ella_upper_tea": "Ella Upper Tea Cooperative",

            "tea": "Tea",

            "neluwa": "Neluwa",

            "kottawa_cluster": "Kottawa, Kottawa East, Kottawa West",
            "neluwa_cluster": "Happitiya, Pannimulla, Panagoda",
            "ella_upper_loc": "182 C Ella Upper, Magedara East",

            //vegetable page 

              "vegetablePageTitle": "Vegetable Related Products",
 
                "onion_cultivation": "Onion Cultivation Project",
                "greenhouse_improvement": "Greenhouse Cultivation Improvement Project",
                "pallankoddai_onion": "Pallankoddai Onion Cluster",
                "ketawala_vegetable": "Ketawala Vegetable Zone",
                "atampitiya_vegetable": "Atampitiya Vegetable Cooperative",
  
                "onion": "Onion",
                "veg_flower": "Vegetables and Flowers",
   
                "nanattan": "Nanattan",
                "hali_ela": "Hali Ela",
     
                "pallankoddai": "Pallankoddai",
                "ketawala": "Ketawala",
                "atampitiya": "Atampitiya",

                "mannar": "Mannar",
            //bee honey page

        
              "beeHoneyPageTitle": "Bee Honey Related Products",
          
                "beeKeeping": "Bee Keeping Project",
                "bogahawela_honey": "Bogahawela Bee Honey Cluster",
                "mawelakanda_honey": "Mawelakanda Bee Honey Cooperative",
             
                "bee_honey": "Bee Honey",
                      
                "bogahawela": "468 D Bogahawela",
                "mawelakanda": "456 C Mawelakanda",
         //daily milk page
         
         
          "dairyPageTitle": "Dairy Product Related Projects",
          
            "goatControl": "Goat Control Project",
            "dairyCowControl": "Dairy Cow Control Project",
            "dairyManagement": "Dairy Cattle Management Project",
            "dairyImprovement": "Dairy Cattle Management Improvement Project",
            "cattleRanch": "Cattle Ranch Development Project",
            "milkCenterReno": "Milk Collection Center Renovation Project",
            "dairyDev": "Dairy Cattle Management and Development Project",
            "grassCultivation": "Quality Grass Cultivation Project",
            "irakkamam_goat": "Irakkamam Goat Control Project",
            "akkarapaththu_dairy": "Akkarapaththu Dairy Cow Control Project",
            "navindaveli_dairy": "Navindaveli Dairy Project",
            "palinda_nuwara_goat": "Palinda Nuwara Goat Control Project",
            "madadumbara_dairy": "Madadumbara Dairy Cow Control Project",
            "udahenthenna_goat": "Udahenthenna Goat Control Project",
            "labuhena_cattle": "Labuhena Cattle Ranch Development Project",
            "garubevilagama_dairy": "Garubevilagama Dairy Development Project",
            "weligepola_dairy": "Weligepola Dairy Development Project",
            "kambuwatana_dairy": "Kambuwatana Dairy Development Project",
            "kurundewa_dairy": "Kurundewa Dairy Development Project",
            "thalawa_dairy": "Thalawa Dairy Development Project",
            "panduwasnuwara_dairy": "Panduwasnuwara East Dairy Development Project",
            "polgahawela_dairy": "Polgahawela Dairy Development Project",
            "weerambugedara_dairy": "Weerambugedara Dairy Development Project",
            "divulwewa_dairy": "Divulwewa Dairy Development Project",
            "karuwalagaswewa_dairy": "Karuwalagaswewa Dairy Development Project",
            "padhikudiruppu_reno": "Padhikudiruppu Milk Collection Center Renovation",
            "buttala_dairy": "Buttala Dairy Development Project",
            "welimada_dairy": "Welimada Dairy Development Project",
            "bibiligamuwa_dairy": "Bibiligamuwa Dairy Development Project",
            "niyamgamdora_dairy": "Niyamgamdora Dairy Development Project",
         
            "goat_milk": "Goat Milk",
            "fresh_milk": "Fresh Milk",
            "milk_mix": "Fresh Milk, Yogurt, Ghee, Butter",
            "goat_milk_meat": "Goat Milk & Meat",
          
            "irakkamam_loc": "Varippattanchenai / Irakkamam 01-09",
            "akkarapaththu_loc": "Pallikudiyiruppu / Akkarapattu Urban Divisions",
            "salamwakeni": "Salamwakeni - 05",
            "walakada": "Walakada, Peladha",
            "kandekubura": "802-Kandekubura",
            "udahenthenna_loc": "Udahenthenna, Athgala North, Ulapane",
            "labuhena_loc": "Labuhena, Poramadulla, Bambaragama",
            "garubevilagama": "Garubevilagama",
            "galpaya_loc": "Galpaya, Bambaragala, Wadawalalanda",
            "kambuwatana": "Kambuwatana",
            "kurundewa": "Kurundewa",
            "thalawa": "Thalawa",
            "bodhimulla": "Bodhimulla",
            "panaliya_loc": "Panaliya, Sunilagama, Wellawa",
            "godavita": "854 - Godavita",
            "divulwewa": "Divulwewa",
            "pahariya": "Pahariya",
            "padhikudiruppu": "Padhikudiruppu",
            "mari_arawa": "Mari Arawa",
            "katakaella": "58A Katakaella",
            "bibiligamuwa": "50J Bibiligamuwa",
            "mahindagama": "282 Mahindagama",

            "maha_nuwara": "Maha Nuwara",
            "rathnapura": "Rathnapura",
            "badulla": "Badulla",
            "vavuniya": "Vavuniya",
            "puththalama": "Puththalam",
            "irakkamam": "Irakkamam",
    "akkarapaththu": "Akkarapaththu",
    "navindaveli": "Navindaveli",
    "palinda_nuwara": "Palinda Nuwara",
    "madadumbara": "Madadumbara",
    "gaga_ihala": "Gaga Ihala Korale",
    "haguranketha": "Haguranketha",
    "rathnapura_office": "Ratnapura",
    "weligepola": "Weligepola",
    "polpithigama": "Polpithigama",
    "galgamuwa": "Galgamuwa",
    "panduwasnuwara_east": "Panduwasnuwara East",
    "polgahawela": "Polgahawela",
    "weerambugedara": "Weerambugedara",
    "anamaduwa": "Anamaduwa",
    "karuwalagaswewa": "Karuwalagaswewa",
    "vavuniya_north": "Vavuniya North",
    "buttala": "Buttala",
    "welimada": "Welimada",
    "welikanda": "Welikanda",

        //eggs page 
       
          "eggPageTitle": "Egg Related Product Projects",
      
            "chicken_village": "Chicken production village project for egg and chick production",
            "egg_cluster": "Egg production cluster development",
            "poultry_zone": "Poultry zone for egg and chick production",
            "egg_coop": "Egg production cooperative development",
            "kandangamuwa_egg": "Kandangamuwa Eggs and chicks",
            "undugoda_egg": "Undugoda Egg Cluster",
            "yakkaduwa_egg": "Yakkaduwa Poultry Zone",
            "kosgulana_egg": "Kosgulana Egg Cooperative",
    
            "eggs_chicks": "Eggs and chicks",

        
            "gampaha": "Gampaha",
  
            "meerigama": "Meerigama",
            "kegalle_off": "Kegalle",
            "ja_ela": "Ja-Ela",
            "palindanuwara": "Palindanuwara",
         
            "kandangamuwa_loc": "Kandangamuwa, Kindawala, Imbulanwala",
            "undugoda_loc": "56 B Undugoda, 56 D Moradana",
            "yakkaduwa": "Yakkaduwa",
            "kosgulana_loc": "Kosgulana, Walakada, Dhiganna",
          
      //ornamental fish page 
        "ornamentalFishPageTitle": "Fisheries & Ornamental Fish Related Projects",
          "dryfish_livelihood": "Dry Fish Production and Livelihood Improvement Project",
          "ornamental_farming": "Ornamental Fish Farming Project",
          "fishing_wharf": "Project to construct a fishing wharf for sales and maintenance",
          "ornamental_food": "Ornamental fish food production project",
          "freshwater_gear": "Freshwater fishing community gear procurement project",
          "lake_dev": "Lake Development Project for Fishing Activities",
          "kareithiw_dryfish": "Kareithiw Dry Fish Project",
          "mamunuwa_ornamental": "Mamunuwa Ornamental Fish Breeding Center",
          "thalpitiya_wharf": "Thalpitiya Fishing Wharf",
          "katuhena_feed": "Katuhena Fish Feed Unit",
          "kandegama_hub": "Kandegama Fishing Industry Hub",
          "alawakumbura_coop": "Alawakumbura Fishing Cooperative",
     
          "dry_fish": "Dry Fish",
          "ornamental_breeding": "Ornamental Fish Breeding & Training",
          "fishery_industry": "Fishery Industry",
          "ornamental_food_prod": "Ornamental Fish Food",
          "fishing_industry": "Freshwater Fishing Industry",
      
          "kareithiw": "Kareithiw",
          "variyapola": "Variyapola",
          "panadura": "Panadura",
          "madurawala": "Madurawala",
          "dibulagala": "Dimbulagala",
       
          "kareithiw_loc": "Kareithiw-09",
          "mamunuwa": "Mamunuwa",
          "thalpitiya_loc": "South Thalpitiya / Palliyamankada",
          "katuhena_loc": "Katuhena / Upper Karannagoda",
          "kandegama": "240 Kandegama",
          "alawakumbura": "239 - Alawakumbura",
        
          //umbalakada page
 
            "driedFishPageTitle": "Umbalakada & Dried Fish Related Product Projects",
          
              "community_fisheries": "Community-based fisheries project centered on Kalugaloya Lake",
              "theppam_desc": "Theppam project for fishermen working in the lagoon",
              "uhana_lake_fisheries": "Uhana Community-based fisheries project",
              "kareithiw_dryfish_full": "Kareithiw Dry Fish Production and Livelihood Improvement",
              "theppam_project": "Lagoon Fisherman Theppam Project",
           
              "fish_dried_fish": "Fish and Dried Fish",
           
              "bandaraduuwa": "Bandaraduuwa",
              "karukupane": "Karukupane",

            //clay page

              "clayPageTitle": "Clay Related Product Projects",
        
                "kella_clay_dev": "Kella Clay Production Village Development Project",
                "clay_village_title": "Clay Production Village Development Project",
                "weerasekarapura_ornamental": "Weerasekarapura Clay-Based Ornamental Products Production Project",
                "clay_ornamental_title": "Clay-Based Ornamental Products Production Project",
                "clay_pot_initiative": "Clay Pot Initiative",
                "weherayaya_initiative": "Weherayaya Clay Pot Initiative"
            ,
                "pots_clay_pots": "Pots, clay pots",
                "clay_product": "Clay Product",
                "milk_pot_clay_pot": "Milk Pot, Clay Pot",
             
                "kolonna": "Kolonna",
                "biyagama": "Biyagama",
                "wellavaya": "Wellawaya",
           
                "kella_loc": "Kella, Abagahayaya",
                "biyagama_south": "28c Biyagama South",
                "weherayaya": "Weherayaya",
        //cloth page

          "clothPageTitle": "Clothing & Textile Related Projects",
  
            "garment_manufacturing": "Small-scale garment manufacturing project",
            "nugaduwa_batik": "Nugaduwa Batik Production Project",
            "nikaweratiya_coir_zone": "Nikaweratiya Coir Industry Zone",
            "akmeemana_batik": "Akmeemana Batik Cluster",
        
            "uniforms_garments": "School uniforms, children's clothing, embroidery and ari products",
            "batik_clothing": "Batik clothing",
        
            "addalaichenai": "Addalaichenai",
            "akmeemana": "Akmeemana",
      
            "addalaichenai_17": "Addalaichenai 17",
            "nugaduuwa": "Nugaduuwa",

            //iron and gold page
              "ironGoldPageTitle": "Iron & Gold Related Product Projects",
   
                "malagala_iron": "Malagala Ironworks Cluster",
                "iron_cluster_desc": "Industrial development cluster for metal and iron manufacturing"
         ,
                "iron_goods": "Iron products (Grills, Gates, Garden benches)"
 ,
                "colombo": "Colombo"
             ,
                "padukka": "Padukka"
            ,
                "malagala_loc": "Malagala, Udumulla"
          ,
          //sweets page
  
            "sweetFoodsPageTitle": "Sweet & Traditional Foods Related Projects",
     
              "sweets_village": "Sweets Village Development Project",
              "karadagama_sweets": "Karadagama Sweet Foods Cooperative"
          ,
              "sweets": "Traditional Sweets & Snacks"
        ,
              "badalkumbura": "Badalkumbura"
        ,
              "karadagama": "Karadagama"
           ,
           //wooden page

            "woodenPageTitle": "Wooden Furniture & Carpentry Projects",
     
              "wooden_furniture_cluster": "Wooden Furniture Industry Cluster Development",
              "moratuwa_furniture": "Moratuwa Wooden Furniture Cluster"
        ,
              "wooden_furniture": "Wooden Furniture (Household & Office)"
       ,
              "moratuwa": "Moratuwa",
         
              "moratuwa_cluster_loc": "Koralawella (East, North, West, South), Katukurunda (North, South), Egoda Uyana (North, Central, South)"
            ,
            //road developmet oag
      
            
              "roadDevelopmentPageTitle": "Rural Road Infrastructure Development",
            
              "service": "Project Type",
              "amountLabel": "Estimated Cost",
            
                "matale": "Matale",
                "kandy": "Kandy",
                "matara": "Matara"
        ,
            
                "pathahewaheta": "Pathahewaheta",
                "naula": "Naula",
                "puhulwella": "Kirinda Puhulwella"
         ,
                "salava_west": "Salava West",
                "ankanda": "Ankanda",
                "bawlana": "Bawlana",
                "lihinipitiya": "Lihinipitiya",
                "morawadiya": "Morawadiya",
                "walakanda_south": "Walakanda South"
          ,
                "transport_facilities": "Transport Facilities",
                "road_dev": "Road Development",
                "bridge_dev": "Bridge Renovation",
                "canal_dev": "Canal Development",
                "concrete_paving": "Concrete Paving",
                "dothal_oya_name": "Dothal Oya Gate to Fifty Acres Road Project",
                "ankanda_bridge_name": "Ankanda Diggala Bridge Renovation",
                "bawlana_sarvodaya_name": "Sarvodaya Road Development",
                "bawlana_bus_road_name": "Bawlana Bus Stop to Delthota Road",
                "kalulella_road_name": "Kalulella Road Development",
                "lihinipitiya_main_road_name": "Lihinipitiya Main Road Development",
                "lihinipitiya_canal_name": "Lihinipitiya Main Canal Development",
                "bandarakanda_road_name": "Bandarakanda-Tungdola Road Development",
                "kosgahahena_road_name": "Kosgahahena Road Development",
                "kumara_house_road_name": "Tiger Land Road (Concrete)",
                "ella_community_hall_name": "Ella to Community Hall via Polpitiya",
                "kajuvetiya_side_road_name": "Ella Ihala Kajuvetiya Side Road",
                "deniyamulla_road_name": "Deniyamulla Road Development",
                "dehigahahena_road_name": "Dehigahahena to Mrs. Latha's Garden",
                "preschool_road_name": "Ella Upper Pre-School Road",
                "gepalawatta_culvert_name": "Gepalawatta Road Culvert",
                "enasal_wattha_road_name": "Enasal Wattha Road (Concrete)",
                "shirani_house_culvert_name": "Dola Ihala Road Box Culverts",
                "punchi_dehigahahena_name": "Ella Ihala Punchi Dehigaha Hena Road",
                "pitikumbura_road_name": "Pitikumbura Road Development",
                "pindeniya_road_name": "Pindeniya Road Development",
                //sanitary page
                
                  "sanitaryPageTitle": "Sanitary & Water Supply Projects",
                 
                    "drinking_water": "Drinking Water Facilities",
                    "sanitary_facilities": "Sanitary Facilities",
                
                    "batticaloa": "Batticaloa",
            
                  
                    "koralaipattu_south": "Koralaipattu South",
                 
                    "murutthanai": "Murutthanai",
                    "ganthuna_medagama": "58G Ganthuna Medagama"
        ,
                    "murutthanai_water_name": "Minuminuttaveli & Akuranai Community Water Supply Scheme",
                    "murutthanai_water_short": "Murutthanai Water Scheme",
                    "murutthanai_toilet_name": "Murutthanai Community Toilet Construction Project",
                    "murutthanai_toilet_short": "Toilet Construction Project",
                    "aranayake_toilet_name": "Toilet Facilities for Low-Income Families - Aranayake",
                    "aranayake_toilet_short": "Low-Income Sanitary Project"
                  ,
        //tuarism page
      
          "tourismPageTitle": "Tourism Infrastructure Projects",
      
            "food_beverage": "Food & Beverage Services",
            "tourism_industry": "Tourism Industry Development",
            "tourism_promotion": "Tourism Promotion",
           "hambantota": "Hambantota", 
           "angunakolapelessa": "Angunakolapelessa", 
         
            "alkaduwa": "Alkaduwa Waththa",
            "angunakolapelessa_lake": "Angunakolapelessa Lake Side",
            "maduragama": "68 C Maduragama"
         ,
            "sembuwatta_name": "Renovation of Sembuwatta Tea Factory Ground Floor as a Restaurant",
            "sembuwatta_short": "Tea Factory Restaurant Renovation",
            "angunakolapelessa_name": "Multipurpose Development Project along the Angunakolapelessa Lake",
            "angunakolapelessa_short": "Lake-Side Multipurpose Project",
            "ella_promotion_name": "Project to Provide Food and Beverages to Tourists and Promote Outlets",
            "ella_promotion_short": "Tourist Outlet Promotion",
         
            
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
    FAQ: "නිතර අසන පැන",
    
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
    animalHusbandry: "සත්ව පාලනය",
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
    minister: " අමාත්‍ය",
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
    projectsDescription: "2025 වර්ෂයේ ග්‍රාමීය ප්‍රජාවන් සවිබල ගැන්වීම සහ ඔවුන්ගේ ජීවනෝපායන් වැඩිදියුණු කිරීම සඳහා කෘෂිකර්මය, කර්මාන්ත, ධීවර කටයුතු, සත්ව පාලනය සහ යටිතල පහසුකම් සංවර්ධනයට අප කාර්යංශය විසින් අනුමත කල ව්‍යාපෘති.",
    
    downloadTitle: "චක්‍රලේඛ, මාර්ගෝපදේශ සහ ආකෘති බාගන්න",
    relatedOrganizations: "අදාළ ආයතන",

    deputyMinister: "නියෝජ්‍ය අමාත්‍ය",
    
    // Officers Names
    deputyMinisterName: " ගරු වසන්ත පියතිස්ස මහතා",
    ministerName: "ගරු වෛද්‍ය උපාලි පන්නිලගේ මහතා",
    secretaryName: "සම්පත් මන්ත්‍රීනායක මහතා",
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
    
    latestCirculars: "නවතම චක්‍රලේඛ",
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
    "news6.date": "2026 ජනවාරි  13",
    "news6.title": "ප්‍රජා ශක්ති - ප්‍රජා සංවර්ධන සභා නියෝජිතයන් දැනුවත් කිරීමේ බස්නාහිර පළාත් සමුළුව",
    






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
    prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "ප්‍රජා ශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ මාතර සහ මොණරාගල දිස්ත්‍රික්කයන්හි වැඩසටහන.",
    southProgramIntro: "ග්‍රාම සංවර්ධන කාර්යාංශය සහ ජනාධිපති ලේකම් කාර්යාලය එක්ව සංවිධානය කරන ලද ප්‍රජාශක්ති පුහුණුකරුවන් පුහුණු කිරීමේ මාතර සහ මොණරාගල දිස්ත්‍රික්කයන්හි වැඩසටහන දෙසැම්බර් 16 සහ 17 යන දෙදින රන්මිණිතැන්න ටෙලි සිනමා ගම්මානයේදී සාර්ථකව පැවැත්විණි.",

    //news6 page
    PrajaShakthiWesternProvince:"ප්‍රජා ශක්ති - ප්‍රජා සංවර්ධන සභා නියෝජිතයන් දැනුවත් කිරීමේ බස්නාහිර පළාත් සමුළුව",

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

//Gallary Page
    "galleryTitle": "ගැලරිය", "eventsSection": "සිදුවීම්", "meetingsSection": "රැස්වීම්", "eventImage": "සිදුවීමේ පින්තූරය", "meetingImage": "රැස්වීමේ පින්තූරය", "imageCaption": "පින්තූරය",
    "gallery": "ගැලරිය",

    //service
    //agriculture
    //fruitpage
    fruitPageTitle: "පළතුරු සම්බන්ධිත ව්‍යාපෘති",
    no: "අංකය", 
    // district: "දිස්ත්‍රික්කය", 
    divisionalOffice: "ප්‍රාදේශීය ලේකම් කාර්යාලය", 
    project: "ව්‍යාපෘතිය", 
    // product: "නිෂ්පාදනය", 
    location: "ස්ථානය", 
    "Amount(Rs)": "අනුමත ප්‍රතිපාදන (රු.)",


    
    "mahanuwara_banana": "මහනුවර අඹන් කෙසෙල් ව්‍යාපෘතිය",
    "mahanuwara_durian": "මහනුවර දූරියන් ව්‍යාපෘතිය",
    "nuwara_eliya_orange": "නුබරඑළිය වැල් දොඩම් ව්‍යාපෘතිය",
    "nuwara_eliya_jamanarang": "නුබරඑළිය ජමනාරං ව්‍යාපෘතිය",
    "ampara_orange": "අම්පාර වැල් දොඩම් ව්‍යාපෘතිය",
    "kurunegala_nuts": "කුරුණෑගල ගෙඩි වර්ග ව්‍යාපෘතිය",
    "mulathivu_jams": "මුලතිව් ජෑම් සහ බීම වර්ග ව්‍යාපෘතිය",
    "mulathivu_banana": "මුලතිව් කැවෙන්ඩිෂ් කෙසෙල් ව්‍යාපෘතිය",
    "kalutara_fruit": "කළුතර පළතුරු ව්‍යාපෘතිය",
    "polonnaruwa_pineapple": "පොළොන්නරුව අන්නාසි සහ දෙළුම් ව්‍යාපෘතිය",
    "polonnaruwa_apple": "පොළොන්නරුව ඇපල්, පේර සහ අඹ ව්‍යාපෘතිය",

    "amban_bananaProject": "අඹන් කෙසෙල් ව්‍යාපෘතිය",
    "durianProject": "දූරියන් ව්‍යාපෘතිය",
    "vine_orangesProject": "වැල් දොඩම් ව්‍යාපෘතිය",
    "jamanarangProject": "ජමනාරං ව්‍යාපෘතිය",
    "nutsProject": "ගෙඩි වර්ග ව්‍යාපෘතිය",
    "jams_cordialsProject": "ජෑම් සහ බීම වර්ග ව්‍යාපෘතිය",
    "kavendish_bananaProject": "කැවෙන්ඩිෂ් කෙසෙල් ව්‍යාපෘතිය",
    "mixed_fruitsProject": "පළතුරු ව්‍යාපෘතිය",
    "pineapple_delumProject": "අන්නාසි සහ දෙළුම් ව්‍යාපෘතිය",
    "apple_pera_mangoProject": "ඇපල් පේර සහ ටොම්පේසි අඹ ව්‍යාපෘතිය",
  
    "mahanuwara": "මහනුවර",
    "nuwara_eliya": "නුවරඑළිය",
    "ampara": "අම්පාර",
    "kurunegala": "කුරුණෑගල",
    "mulathivu": "මුලතිව්",
    "kalutara": "කළුතර",
    "polonnaruwa": "පොළොන්නරුව",


    "harispaththuwa": "හාරිස්පත්තුව",
    "poojapitiya": "පූජාපිටිය",
    "kotmale_east": "කොත්මලේ නැගෙනහිර",
    "uhana": "උහන",
    "ibbagamuwa": "ඉබ්බාගමුව",
    "mantai_east": "මාන්තෙයි නැගෙනහිර",
    "puthukudirippu": "පුදුකුඩුඉරිප්පු",
    "dhodangoda": "දොඩංගොඩ",
    "madirigiriya": "මැදිරිගිරිය",


    "amban_banana": "අඹන් කෙසෙල්",
    "durian": "දූරියන්",
    "vine_oranges": "වැල් දොඩම්",
    "jamanarang_drinks": "ජමනාරං බීම",
    "nuts": "ගෙඩි වර්ග (Nuts)",
    "jams_cordials": "ජෑම්, බීම සහ දොඩම් ආශ්‍රිත නිෂ්පාදන",
    "kavendish_banana": "කැවෙන්ඩිෂ් කෙසෙල්",
    "mixed_fruits": "දූරියන්, රඹුටන්, අන්නාසි, වැල් දොඩම්, කෙසෙල්",
    "pineapple_delum": "අන්නාසි සහ දෙළුම්",
    "apple_pera_mango": " ඇපල්  පේර, ටොම්ජේසී අඹ",

    "bulathgolla": "බුලත්ගොල්ල",
    "pahala_higulwala": "507-පහළ හිඟුල්වල",
    "niyamgamdora": "නියම්ගම්දොර 470",
    "weralalapathana": "461/ඩී වැරැල්ලපතන",
    "bandaradoowa": "බණ්ඩාරදූව",
    "omaragolla": "415 ඕමාරගොල්ල",
    "ampalapuram": "අම්පාලපුරම්",
    "theravil": "තෙරාවිල් තේවිපුරම්",
    "thudugala": "තුඩුගල නැගෙනහිර, නෙහින්නෙව, වඩුගම",
    "vijayapura": "108 විජයපුර",
    "ihalagama": "109 ඉහළගම",



    //bulath Page 

    "betelPageTitle": "බුලත් පත්‍ර ආශ්‍රිත නිෂ්පාදන",

    "ampara_organicBetel": "රිදීඇල බුලත් වගා ව්‍යාපෘතිය",
    "kegalle_betelCluster": "කෑගල්ල බුලත් වගා ව්‍යාපෘතිය",
    "galigamuwa_betelCluster": "ගලිගමුව බුලත් වගා ව්‍යාපෘතිය",
    "puttalama_betelCluster": "අබකැලේ බුලත් වගා ව්‍යාපෘතිය (පුත්තලම)",
    "hambanthota_betelCluster": "අබකැලේ බුලත් වගා ව්‍යාපෘතිය (හම්බන්තොට)",
    "organicBetelProject": "බුලත් වගා ව්‍යාපෘතිය",
    "betelCluster": "බුලත් වගා ව්‍යාපෘතිය",

    "kegalle": "කෑගල්ල",
    "puttalama": "පුත්තලම",
    "hambanthota": "හම්බන්තොට",

    "dehiaththakandiya": "දෙහිඅත්තකණ්ඩිය",
    "galigamuwa": "ගලිගමුව",
    "arachchikattuwa": "ආරච්චිකට්ටුව",
    "veeraketiya": "වීරකැටිය",

    "betel_leaf": "බුලත් කොළ",

    "ridiela": "රිදීඇල",
    "pussella": "51 A පූස්සැල්ල, 51 A රංවල",
    "papoluwa": "70 A, පැපොළුව",
    "abakele": "අබකැලේ, ඉහළ අත්තංගානය",
    "degampotha": "දෙගම්පොත, උතුරු අබකොළවැව",

    //cineman page

    "cinnamonPageTitle": "කුරුඳු ආශ්‍රිත නිෂ්පාදන",

    "cinnamonProject": "කුරුඳු ව්‍යාපෘතිය",
    "tangalla_Cinamon": "තංගල්ල කුරුඳු ව්‍යාපෘතිය",
    "balapitiya_Cinamon": "බලපිටිය කුරුඳු ව්‍යාපෘතිය",
    "niyagama_Cinamon": "නියාගම කුරුඳු ව්‍යාපෘතිය",
    "yakkalamulla_Cinamon": "යක්කලමුල්ල කුරුඳු ව්‍යාපෘතිය",
    "wallawita_Cinamon": "වල්ලාවිට කුරුඳු ව්‍යාපෘතිය",
    "monaragala_Cinamon": "මොණරාගල කුරුඳු ව්‍යාපෘතිය",
    "madulla_Cinamon": "මාදුල්ල කුරුඳු ව්‍යාපෘතිය",
    "mayyokkawatte_Cinamon": "මයියොක්කාවත්ත කුරුඳු ව්‍යාපෘතිය",
    "sewanagala_Cinamon": "සෙවනගල කුරුඳු ව්‍යාපෘතිය",

    "cinnamon": "කුරුඳු",

    "galle": "ගාල්ල",
    "monaragala": "මොණරාගල",

    "tangalla": "තංගල්ල",
    "balapitiya": "බලපිටිය",
    "niyagama": "නියාගම",
    "yakkalamulla": "යක්කලමුල්ල",
    "walallawita": "වල්ලාවිට",
    "madulla": "මාදුල්ල",
    "sewanagala": "සෙවනගල",

    "vallodaya": "වල්ලෝදය, රත්නා නැගෙනහිර, රෙකව බටහිර",
    "kattakaduwa": "කට්ටකඩුව දකුණ, කට්ටකඩුව උතුර, කදිරගොඩ",
    "pelagus": "පෑලගස් පළාත, පතිරාජ පෙදෙස",
    "horangalla": "හොරංගල්ල තලාව, හොරංගල්ල බටහිර",
    "ella_upper": "182 සී ඇල්ල ඉහළ",
    "pareigama": "782 පරෙයිගම උතුර, කුඩා මතුගම",
    "batugammana": "130 බටුගම්මන",
    "tharela": "113ඩී - තැරෑල",
    "illukkanda": "113සී - ඉලුක්කන්ද",
    "watawanagara": "116සී - වටවානගර",
    "mayyokkawatte": "මයියොක්කාවත්ත",
    "kiri_wewa": "කිරි වැව, ඉඳිකොළපෑලැස්ස",
    "habarugala": "හබරුගල, මහගම",


    //coconut page
    "coconutPageTitle": "පොල් ආශ්‍රිත නිෂ්පාදන",

    "coconutHuskProject": "පොල් ලෙලි ආශ්‍රිත නිෂ්පාදන ව්‍යාපෘතිය",
    "coconutOilProject": "පොල් තෙල් නිෂ්පාදන ව්‍යාපෘතිය",
    "uhana_coconut": "උහන පොල් ලෙලි ආශ්‍රිත නිෂ්පාදන",
    "udubaddawa_coconut": "උඩුබද්දව පොල් ලෙලි ආශ්‍රිත නිෂ්පාදන",
    "kobeigane_coconut": "කොබෙයිගනේ පොල් ලෙලි ආශ්‍රිත නිෂ්පාදන",
    "puttur_coconut": "පුත්තූර් නැගෙනහිර පොල් තෙල් නිෂ්පාදනය",

    "broom_rugs": "කොසු, පාපිසි",
    "coconut_husk": "පොල් ලෙලි",
    "coconut_oil": "පොල් තෙල්",

    "jaffna": "යාපනය",

    "udubaddawa": "උඩුබද්දව",
    "kobeigane": "කොබෙයිගනේ",
    "valikamam_east": "වලිකාමම් නැගෙනහිර (කෝපායි)",

    "uhanapura": "උහනපුර",
    "udadeniya": "උඩදෙණිය",
    "kobeigane_cluster": "පුබ්බිලිය, බැද්දේගම, මාවතගම, වලස්වැව",
    "puttur_east": "පුත්තූර් නැගෙනහිර J/278",



    //flower page

    "flowerPageTitle": "විසිතුරු මල් වගා ව්‍යාපෘතිය",
    "flowerProject": "විසිතුරු මල් වගා ව්‍යාපෘතිය",
    "pannala_flowers": "පන්නල විසිතුරු මල් වගා ව්‍යාපෘතිය",
    "idda_flower": "ඉද්ද මල් ",

    "flowers": "විසිතුරු මල්  වර්ග",

    "pannala": "පන්නල",
    "kalpitiya": "කල්පිටිය",

    "pannala_cluster": "1557 - බටපොත ඇල, 1563 - වෙත්තෑව, 1582 - කොටුවෙල",
    "mampuriya": "මාම්පුරිය",

    //kithul page

    "kithulPageTitle": "කිතුල් ආශ්‍රිත නිෂ්පාදන",

    "kithulDevelopment": "කිතුල් සංවර්ධන ව්‍යාපෘතිය",
    "matugama_kithul": "මතුගම කිතුල් සංවර්ධන ව්‍යාපෘතිය",
    "kotmale_kithul": "කොත්මලේ බටහිර කිතුල් සංවර්ධන ව්‍යාපෘතිය",

    "kithul_mix": "කිතුල් හකුරු, පැණි, කිතුල් පිටි",
    "kithul_value_added": "කිතුල් ආශ්‍රිත අගය එකතු කළ නිෂ්පාදන",

    "matugama": "මතුගම",
    "kotmale_west": "කොත්මලේ බටහිර",

    "matugama_kithul_loc": "795 බී සඳසිරිගම, 794 හොරවල, 793 බී මඩවල",
    "madakubura": "මඩකුඹුර 468",

//mushroom page

"mushroomPageTitle": "බිම්මල් ආශ්‍රිත නිෂ්පාදන",
  
    "mushroomProduction": "බිම්මල් නිෂ්පාදන කලාපය",
    "uhana_mushroom": "උහන බිම්මල් නිෂ්පාදන කලාපය",
    "ukuwela_mushroom": "උකුවෙල බිම්මල් නිෂ්පාදන කලාපය",
    "aranayake_mushroom": "අරණායක බිම්මල් නිෂ්පාදන කලාපය",
    "wellawaya_mushroom": "වැල්ලවාය බිම්මල් නිෂ්පාදන කලාපය",
    "ella_mushroom": "ඇල්ල බිම්මල් නිෂ්පාදන කලාපය",
    "madirigiriya_mushroom": "මැදිරිගිරිය බිම්මල් නිෂ්පාදන කලාපය",
 
    "mushroom": "බිම්මල්",
  
    "matale": "මාතලේ",
    "badulla": "බදුල්ල",
 
    "ukuwela": "උකුවෙල",
    "aranayake": "අරණායක",
    "wellawaya": "වැල්ලවාය",
    "ella": "ඇල්ල",
 
    "ukuwela_loc": "ඕවිල්ලතැන්න, තිබ්බටුවාව",
    "pahinibeddara": "45සී පහිනිබැද්දර, ගවිලිපිටිය ගම්මානය",
    "kotikambokka": "කොටිකාම්බොක්ක",
    "ella_mushroom_loc": "මිල්ලගම, ඉඩමේගම, උඩු කුඹල්වෙල",
    "veheragala": "124 වෙහෙරගල",
  //pulm page

  "palmPageTitle": "තල් ආශ්‍රිත නිෂ්පාදන",

  "palmBasedProject": "තල් ආශ්‍රිත ව්‍යාපෘතිය",
    "jaffna_palm": "යාපනය තල් ආශ්‍රිත ව්‍යාපෘතිය",

    "palm_kernels": "තල් මද සහ තල් ආශ්‍රිත නිෂ්පාදන",

    "uduvil": "වලිකාමම් දකුණ (උඩුවිල්)",

    "jaffna_palm_loc": "එලාලෙයි දකුණ, මුන්නක්කම් නගරය දකුණ",

    //seed page

    "seedPageTitle": "බීජ ආශ්‍රිත නිෂ්පාදන",

    "seedProject": "බීජ නිෂ්පාදන ව්‍යාපෘතිය",
    "badulla_seed_name": "බදුල්ල අර්තාපල් බීජ ව්‍යාපෘතිය",
    "polonnaruwa_seed_name": "පොළොන්නරුව බීජ වී ව්‍යාපෘතිය",

    "potato_seeds": "අර්තාපල් බීජ",
    "seed_paddy": "බීජ වී",

    "badulla_seed_cluster": "හාලි ඇල, බණ්ඩාරවෙල, හපුතලේ, හල්දුම්මුල්ල, පස්සර",
    "higurangoda": "හිඟුරක්ගොඩ",

    "badulla_seed_loc": "නයබැද්දවත්ත, පූනගලවත්ත, දඹේතැන්නවත්ත, තංගමලේ වත්ත, උඩවේරියවත්ත, ගෝනමෝටාවත්ත, කනවැරැල්ලවත්ත, වේවැල්වත්ත, නාවලවත්ත, දියණගලවත්ත",
    "rajaelagama": "37 රජඇළගම",

    //spices page
 
      "spicesPageTitle": "කුළුබඩු ආශ්‍රිත නිෂ්පාදන",
    
        "spiceVillageProject": "ගම්මිරිස් වගා ව්‍යාපෘතිය",
        "udawatte_spice": "උඩවත්ත ගම්මිරිස් ව්‍යාපෘතිය",
        "higuranketha_pepper": "හඟුරන්කෙත ගම්මිරිස් ව්‍යාපෘතිය",
   
        "black_pepper": "ගම්මිරිස්",

        "higuranketha": "හඟුරන්කෙත",
    
        "udawatte_cluster": "උඩවත්ත නැගෙනහිර, උඩවත්ත බටහිර, 488/A හකුරුතල්",

        //tea page

          "teaPageTitle": "තේ ආශ්‍රිත නිෂ්පාදන",

            "teaPromotion": "තේ වගා ප්‍රවර්ධන ව්‍යාපෘතිය",
            "teaDevelopment": "තේ වගා ප්‍රවර්ධන ව්‍යාපෘතිය",
            "teaCooperative": "තේ වගා ප්‍රවර්ධන ව්‍යාපෘතිය",
            "kottawa_tea": "කොට්ටව තේ ප්‍රවර්ධන කලාපය",
            "neluwa_tea": "නෙළුව තේ සංවර්ධන ප්‍රදේශය",
            "ella_upper_tea": "ඇල්ල ඉහළ තේ සමුපකාරය",

            "tea": "තේ",
      
            "neluwa": "නෙළුව",
         
            "kottawa_cluster": "කොට්ටව, කොට්ටව නැගෙනහිර, කොට්ටව බටහිර",
            "neluwa_cluster": "හප්පිටිය, පන්නිමුල්ල, පනාගොඩ",
            "ella_upper_loc": "182 C ඇල්ල ඉහළ, මාගෙදර නැගෙනහිර",

            //vegetable page

              "vegetablePageTitle": "එළවළු ආශ්‍රිත නිෂ්පාදන",

                "onion_cultivation": "ලූණු වගා කිරීමේ ව්‍යාපෘතිය",
                "greenhouse_improvement": "හරිතාගාර වගා වැඩිදියුණු කිරීමේ ව්‍යාපෘතිය",
                "pallankoddai_onion": "පල්ලන්කොඩ්ඩායි ලූණු ",
                "ketawala_vegetable": "කැටවල එළවළු කලාපය",
                "atampitiya_vegetable": "ඇටම්පිටිය එළවළු සමුපකාරය",
         
                "onion": "ලූණු",
                "veg_flower": "එළවළු සහ මල්",

                "nanattan": "නානට්ටාන්",
                "hali_ela": "හාලි ඇළ",
      
                "pallankoddai": "පල්ලන්කොඩ්ඩායි",
                "ketawala": "කැටවල",
                "atampitiya": "ඇටම්පිටිය",

                "mannar": "මන්නාරම",
            //bee honey page

              "beeHoneyPageTitle": "මී පැණි ආශ්‍රිත නිෂ්පාදන",
 
                "beeKeeping": "මී මැසි පාලන ව්‍යාපෘතිය",
                "bogahawela_honey": "බෝගහවෙල මී පැණි ව්‍යාපෘතිය",
                "mawelakanda_honey": "මාවෙලකන්ද මී පැණි ව්‍යාපෘතිය",
        
                "bee_honey": "මී පැණි",
         
                "bogahawela": "468 ඩී බෝගහවෙල",
                "mawelakanda": "456 සී මාවෙලකන්ද",

            //dairy milk page 
         
          
              "dairyPageTitle": "කිරි නිෂ්පාදන ආශ්‍රිත ව්‍යාපෘති",

              "maha_nuwara": "මහනුවර",
              "rathnapura": "රත්නපුර",
              "puththalama": "පුත්තලම",
              "vavuniya": "වවුනියාව",

              
           
                "goatControl": "එළු පාලන ව්‍යාපෘතිය",
                "dairyCowControl": "කිරි ගව පාලන ව්‍යාපෘතිය",
                "dairyManagement": "කිරි ගව කළමනාකරණ ව්‍යාපෘතිය",
                "dairyImprovement": "කිරි ගව කළමනාකරණ වැඩිදියුණු කිරීමේ ව්‍යාපෘතිය",
                "cattleRanch": "ගව පාලන මධ්‍යස්ථාන සංවර්ධන ව්‍යාපෘතිය",
                "milkCenterReno": "කිරි එකතු කිරීමේ මධ්‍යස්ථාන ප්‍රතිසංස්කරණ ව්‍යාපෘතිය",
                "dairyDev": "කිරි ගව කළමනාකරණ සහ සංවර්ධන ව්‍යාපෘතිය",
                "grassCultivation": "ගුණාත්මක තණකොළ වගා කිරීමේ ව්‍යාපෘතිය",
                "irakkamam_goat": "ඉරක්කාමම් එළු පාලන ව්‍යාපෘතිය",
                "akkarapaththu_dairy": "අක්කරපත්තුව කිරි ගව පාලන ව්‍යාපෘතිය",
                "navindaveli_dairy": "නාවින්දවෙලි කිරි ව්‍යාපෘතිය",
                "palinda_nuwara_goat": "පාලින්දනුවර එළු පාලන ව්‍යාපෘතිය",
                "madadumbara_dairy": "මැදදුම්බර කිරි ගව පාලන ව්‍යාපෘතිය",
                "udahenthenna_goat": "උඩහේන්තැන්න එළු පාලන ව්‍යාපෘතිය",
                "labuhena_cattle": "ලබුහේන ගව පාලන මධ්‍යස්ථාන සංවර්ධන ව්‍යාපෘතිය",
                "garubevilagama_dairy": "ගරුබෙවිලගම කිරි සංවර්ධන ව්‍යාපෘතිය",
                "weligepola_dairy": "වැලිගෙපොල කිරි සංවර්ධන ව්‍යාපෘතිය",
                "kambuwatana_dairy": "කඹුවටන කිරි සංවර්ධන ව්‍යාපෘතිය",
                "kurundewa_dairy": "කුරුන්දෑව කිරි සංවර්ධන ව්‍යාපෘතිය",
                "thalawa_dairy": "තලාව කිරි සංවර්ධන ව්‍යාපෘතිය",
                "panduwasnuwara_dairy": "පඬුවස්නුවර නැගෙනහිර කිරි සංවර්ධන ව්‍යාපෘතිය",
                "polgahawela_dairy": "පොල්ගහවෙල කිරි සංවර්ධන ව්‍යාපෘතිය",
                "weerambugedara_dairy": "වීරඹුගෙදර කිරි සංවර්ධන ව්‍යාපෘතිය",
                "divulwewa_dairy": "දිවුල්වැව කිරි සංවර්ධන ව්‍යාපෘතිය",
                "karuwalagaswewa_dairy": "කරුවලගස්වැව කිරි සංවර්ධන ව්‍යාපෘතිය",
                "padhikudiruppu_reno": "පදිකුඩිරිප්පු කිරි එකතු කිරීමේ මධ්‍යස්ථානය ප්‍රතිසංස්කරණය",
                "buttala_dairy": "බුත්තල කිරි සංවර්ධන ව්‍යාපෘතිය",
                "welimada_dairy": "වැලිමඩ කිරි සංවර්ධන ව්‍යාපෘතිය",
                "bibiligamuwa_dairy": "බිබිලිගමුව කිරි සංවර්ධන ව්‍යාපෘතිය",
                "niyamgamdora_dairy": "නියම්ගම්දොර කිරි සංවර්ධන ව්‍යාපෘතිය",

                "irakkamam": "ඉරක්කාමම්",
    "akkarapaththu": "අක්කරපත්තුව",
    "navindaveli": "නාවින්දවෙලි",
    "palinda_nuwara": "පාලින්දනුවර",
    "madadumbara": "මැදදුම්බර",
    "gaga_ihala": "ගඟ ඉහළ කෝරළේ",
    "haguranketha": "හඟුරන්කෙත",
    "rathnapura_office": "රත්නපුර",
    "weligepola": "වැලිගෙපොළ",
    "polpithigama": "පොල්පිතිගම",
    "galgamuwa": "ගල්ගමුව",
    "panduwasnuwara_east": "පඬුවස්නුවර නැගෙනහිර",
    "polgahawela": "පොල්ගහවෙල",
    "weerambugedara": "වීරඹුගෙදර",
    "anamaduwa": "ආණමඩුව",
    "karuwalagaswewa": "කරුවලගස්වැව",
    "vavuniya_north": "වව්නියාව උතුර",
    "buttala": "බුත්තල",
    "welimada": "වැලිමඩ",
    "welikanda": "වැලි කන්ද",

                "irakkamam_loc": "වාරිපත්තංචේනෙයි / ඉරක්කාමම්",
    "akkarapaththu_loc": "පල්ලිකුඩියිරිප්පු / නාගරික කොට්ඨාස",
    "salamwakeni": "සලාම්වකේනි - 05",
    "walakada": "වලාකඩ, පෙලාද",
    "kandekubura": "802-කන්දේකුඹුර",
    "udahenthenna_loc": "උඩහේන්තැන්න / අත්ගාල",
    "labuhena_loc": "ලබුහේන, පොරමඩුල්ල",
    "garubevilagama": "ගරුබෙවිලගම",
    "galpaya_loc": "ගල්පාය, බඹරගල",
    "kambuwatana": "කඹුවටන",
    "kurundewa": "කුරුන්දෑව",
    "thalawa": "තලාව",
    "bodhimulla": "බෝධිමුල්ල",
    "panaliya_loc": "පනලිය, සුනිලාගම",
    "godavita": "854 - ගොඩවිට",
    "divulwewa": "දිවුල්වැව",
    "pahariya": "පහාරිය",
    "padhikudiruppu": "පදිකුඩිරිප්පු",
    "mari_arawa": "මාරි අරාව",
    "katakaella": "58A කටකැලේ",
    "bibiligamuwa": "50J බිබිලිගමුව",
    "mahindagama": "282 මහින්දාගම",
             
                "goat_milk": "එළු කිරි",
                "fresh_milk": "දියර කිරි",
                "milk_mix": "දියර කිරි, යෝගට්, ගිතෙල්, බටර්",
                "goat_milk_meat": "එළු කිරි සහ මස්",
              
      //eggs page
      
        "eggPageTitle": "බිත්තර ආශ්‍රිත නිෂ්පාදන ව්‍යාපෘති",
          "chicken_village": "බිත්තර හා පැටවුන් නිෂ්පාදනය සඳහා කුකුළු නිෂ්පාදන ගම්මාන ව්‍යාපෘතිය",
          "egg_cluster": "බිත්තර නිෂ්පාදන ව්‍යාපෘති  සංවර්ධනය",
          "poultry_zone": "බිත්තර හා පැටවුන් නිෂ්පාදනය සඳහා කුකුළු කලාපය",
          "egg_coop": "බිත්තර නිෂ්පාදන සමුපකාර සංවර්ධනය",
          "kandangamuwa_egg": "කඳන්ගමුව බිත්තර හා පැටවුන්",
          "undugoda_egg": "උඳුගොඩ බිත්තර ව්‍යාපෘති",
          "yakkaduwa_egg": "යක්කඩුව කුකුළු කලාපය",
          "kosgulana_egg": "කොස්ගුලාන බිත්තර සමුපකාරය",
    
          "eggs_chicks": "බිත්තර හා පැටවුන්",
  
          "meerigama": "මීරිගම",
          "kegalle_off": "කෑගල්ල",
          "ja_ela": "ජා-ඇළ",
          "palindanuwara": "පාලින්දනුවර",
   
          "kandangamuwa_loc": "කඳන්ගමුව, කින්දවල, ඉඹුලන්වල",
          "undugoda_loc": "56 B උඳුගොඩ, 56 D මොරදාන",
          "yakkaduwa": "යක්කඩුව",
          "kosgulana_loc": "කොස්ගුලාන, වලාකඩ, දිගන්න",
       
//ornamental fish page

  "ornamentalFishPageTitle": "ධීවර හා විසිතුරු මසුන් ආශ්‍රිත ව්‍යාපෘති",
    "dryfish_livelihood": "කරවල නිෂ්පාදන හා ජීවනෝපාය සංවර්ධන ව්‍යාපෘතිය",
    "ornamental_farming": "විසිතුරු මසුන් ඇති කිරීමේ ව්‍යාපෘතිය",
    "fishing_wharf": "මසුන් අලෙවිය හා ධීවර කටයුතු නඩත්තුව සඳහා තොටුපළක් ඉදිකිරීමේ ව්‍යාපෘතිය",
    "ornamental_food": "විසිතුරු මසුන් ආහාර නිෂ්පාදන ව්‍යාපෘතිය",
    "freshwater_gear": "මිරිදිය ධීවර ප්‍රජාව සඳහා අවශ්‍ය උපකරණ ලබාදීමේ ව්‍යාපෘතිය",
    "lake_dev": "ධීවර කටයුතු සඳහා වැව් සංවර්ධනය කිරීමේ ව්‍යාපෘතිය",
    "kareithiw_dryfish": "කාරෙයිතිව් කරවල ව්‍යාපෘතිය",
    "mamunuwa_ornamental": "මමුනුව විසිතුරු මසුන් ඇති කිරීමේ ව්‍යාපෘතිය",
    "thalpitiya_wharf": "තල්පිටිය ධීවර තොටුපළ ව්‍යාපෘතිය",
    "katuhena_feed": "කටුහේන මත්ස්‍ය ආහාර නිෂ්පාදන ඒකකය",
    "kandegama_hub": "කන්දේගම ධීවර කර්මාන්ත මධ්‍යස්ථානය",
    "alawakumbura_coop": "අලවකුඹුර ධීවර සමුපකාරය",

    "dry_fish": "කරවල",
    "ornamental_breeding": "විසිතුරු මසුන් බෝ කිරීම සහ පුහුණු මධ්‍යස්ථානය",
    "fishery_industry": "ධීවර කර්මාන්තය",
    "ornamental_food_prod": "විසිතුරු මසුන් ආහාර",
    "fishing_industry": "ධීවර කර්මාන්තය",
 
    "kareithiw": "කාරෙයිතිව්",
    "variyapola": "වාරියපොළ",
    "panadura": "පානදුර",
    "madurawala": "මදුරාවල",
    "dibulagala": "දිඹුලාගල",

    "kareithiw_loc": "කාරෙයිතිව්-09",
    "mamunuwa": "මමුනුව",
    "thalpitiya_loc": "දකුණු තල්පිටිය / පල්ලියමංකඩ",
    "katuhena_loc": "කටුහේන / ඉහළ කරන්නාගොඩ",
    "kandegama": "240 කන්දේගම",
    "alawakumbura": "239 - අලවකුඹුර",

    //umbalakada page

      "driedFishPageTitle": "උම්බලකඩ සහ කරවල ආශ්‍රිත නිෂ්පාදන ව්‍යාපෘති",
     
        "community_fisheries": "කලුගලඔය වැව කේන්ද්‍ර කරගත් ප්‍රජා මූලික ධීවර ව්‍යාපෘතිය",
        "theppam_desc": "කලපුවේ වැඩ කරන ධීවරයන් සඳහා තෙප්පම් ව්‍යාපෘතිය",
        "uhana_lake_fisheries": "උහන ප්‍රජා මූලික ධීවර ව්‍යාපෘතිය",
        "kareithiw_dryfish_full": "කාරෙයිතිව් කරවල නිෂ්පාදන හා ජීවනෝපාය සංවර්ධන ව්‍යාපෘතිය",
        "theppam_project": "කලපු ධීවර තෙප්පම් ව්‍යාපෘතිය",
    
        "fish_dried_fish": "මළු සහ කරවල",
     
        "bandaraduuwa": "බණ්ඩාරදූව",
        "karukupane": "කරුකුපනේ",
      
        //clay page
          "clayPageTitle": "මැටි ආශ්‍රිත නිෂ්පාදන ව්‍යාපෘති",
          
            "kella_clay_dev": "කැල්ල මැටි නිෂ්පාදන ගම්මානය සංවර්ධනය කිරීමේ ව්‍යාපෘතිය",
            "clay_village_title": "මැටි නිෂ්පාදන ගම්මානය සංවර්ධන ව්‍යාපෘතිය",
            "weerasekarapura_ornamental": "වීරසේකරපුර මැටි ආශ්‍රිත විසිතුරු භාණ්ඩ නිෂ්පාදන ව්‍යාපෘතිය",
            "clay_ornamental_title": "මැටි ආශ්‍රිත විසිතුරු භාණ්ඩ නිෂ්පාදන ව්‍යාපෘතිය",
            "clay_pot_initiative": "මැටි බඳුන් ව්‍යාපෘතිය",
            "weherayaya_initiative": "වෙහෙරයාය මැටි බඳුන් ව්‍යාපෘතිය"
        ,
            "pots_clay_pots": "මුට්ටි, මැටි බඳුන්",
            "clay_product": "මැටි නිෂ්පාදන",
            "milk_pot_clay_pot": "කිරි මුට්ටි, මැටි බඳුන්"
         ,
            "kolonna": "කොලොන්න",
            "biyagama": "බියගම",
            "wellavaya": "වැල්ලවාය"
         ,
            "kella_loc": "කැල්ල, අඹගහයාය",
            "biyagama_south": "28c බියගම දකුණ",
            "weherayaya": "වෙහෙරයාය",
      
          "gampaha": "ගම්පහ",

          //cxloth page
   
            "clothPageTitle": "ඇඟලුම් සහ රෙදිපිළි ආශ්‍රිත ව්‍යාපෘති",
       
              "garment_manufacturing": "සුළු පරිමාණ ඇඟලුම් නිෂ්පාදන ව්‍යාපෘතිය",
              "nugaduwa_batik": "නුගදූව බතික් නිෂ්පාදන ව්‍යාපෘතිය",
              "nikaweratiya_coir_zone": "නිකවැරටිය කොහු කර්මාන්ත කලාපය",
              "akmeemana_batik": "අක්මීමන බතික් ව්‍යාපෘතිය",
   
              "uniforms_garments": "පාසල් නිල ඇඳුම්, ළමා ඇඳුම්, එම්බ්‍රොයිඩර් සහ ආරි නිෂ්පාදන ඇඟලුම්",
              "batik_clothing": "බතික් ඇඳුම්",
       
              "addalaichenai": "අඩ්ඩාලච්චේන",
              "akmeemana": "අක්මීමන",
        
              "addalaichenai_17": "අඩ්ඩාලච්චේන 17",
              "nugaduuwa": "නුගදූව",

      //iron and gold page 

        "ironGoldPageTitle": "යකඩ සහ රන් ආශ්‍රිත නිෂ්පාදන ව්‍යාපෘති",
    
          "malagala_iron": "මාලගල යකඩ කර්මාන්ත ",
          "iron_cluster_desc": "ලෝහ සහ යකඩ නිෂ්පාදනය සඳහා වන කාර්මික සංවර්ධන කර්මාන්ත"
  ,
          "iron_goods": "යකඩ ආශ්‍රිත නිෂ්පාදන (ග්‍රිල්, ගේට්ටු, උද්‍යාන බංකු)"
,
          "colombo": "කොළඹ"
 ,
          "padukka": "පාදුක්ක",
 
          "malagala_loc": "මාලගල, උඩුමුල්ල",
    //sweets page

      "sweetFoodsPageTitle": "පැණිරස හා සාම්ප්‍රදායික ආහාර ආශ්‍රිත ව්‍යාපෘති",
   
        "sweets_village": "පැණිරස ආහාර නිෂ්පාදන ගම්මාන ව්‍යාපෘතිය",
        "karadagama_sweets": "කරදගම පැණිරස ආහාර සමුපකාරය"
 ,
        "sweets": "සාම්ප්‍රදායික පැණිරස ආහාර සහ කෙටි ආහාර",

        "badalkumbura": "බඩල්කුඹුර",
     
        "karadagama": "කරදගම",
   //wooden page 

    "woodenPageTitle": "ලී ගෘහභාණ්ඩ සහ වඩු කර්මාන්ත ව්‍යාපෘති",
  
      "wooden_furniture_cluster": "ලී ගෘහභාණ්ඩ කර්මාන්ත සංවර්ධනය කිරීම",
      "moratuwa_furniture": "මොරටුව ලී ගෘහභාණ්ඩ කර්මාන්ත "
 ,
      "wooden_furniture": "ලී ගෘහභාණ්ඩ (නිවාස සහ කාර්යාල)"
   ,
      "moratuwa": "මොරටුව"
 ,
      "moratuwa_cluster_loc": "කොරලවැල්ල (නැගෙනහිර, උතුර, බටහිර, දකුණ), කටුකුරුන්ද (උතුර, දකුණ), එගොඩ උයන (උතුර, මධ්‍යම, දකුණ)"
    ,
    //road fdevelopment page
 
      "roadDevelopmentPageTitle": "ග්‍රාමීය මාර්ග යටිතල පහසුකම් සංවර්ධනය",
      "amountLabel": "ඇස්තමේන්තුගත පිරිවැය",
     
    
        "kandy": "මහනුවර",
        "matara": "මාතර"
   ,
      
        "pathahewaheta": "පාතහේවාහැට",
        "naula": "නාඋල",
        "puhulwella": "කිරිඳි පුහුල්වැල්ල"
   ,
        "salava_west": "සාලාව බටහිර",
        "ankanda": "අංකන්ද",
        "bawlana": "බව්ලන",
        "lihinipitiya": "ලිහිණිපිටිය",
        "morawadiya": "මොරවැඩිය",
        "walakanda_south": "වල්කන්ද දකුණ"
,
        "transport_facilities": "ප්‍රවාහන පහසුකම්",
        "road_dev": "මාර්ග සංවර්ධනය",
        "bridge_dev": "පාලම් ප්‍රතිසංස්කරණය",
        "canal_dev": "ඇල මාර්ග සංවර්ධනය",
        "concrete_paving": "කොන්ක්‍රීට් ඇතිරීම",
        "dothal_oya_name": "දෝතල් ඔය ගේට්ටුවේ සිට අක්කර පනහ දක්වා මාර්ග සංවර්ධනය",
        "ankanda_bridge_name": "අංකන්ද දිග්ගල පාලම ප්‍රතිසංස්කරණය",
        "bawlana_sarvodaya_name": "සර්වෝදය මාර්ගය සංවර්ධනය",
        "bawlana_bus_road_name": "බව්ලන බස් නැවතුමේ සිට දෙල්තොට දක්වා මාර්ගය",
        "kalulella_road_name": "කලුලැල්ල මාර්ගය සංවර්ධනය",
        "lihinipitiya_main_road_name": "ලිහිණිපිටිය ප්‍රධාන මාර්ගය සංවර්ධනය",
        "lihinipitiya_canal_name": "ලිහිණිපිටිය ප්‍රධාන ඇල සංවර්ධනය",
        "bandarakanda_road_name": "බණ්ඩාරකන්ද-තුංගදොළ මාර්ගය සංවර්ධනය",
        "kosgahahena_road_name": "කොස්ගහහේන මාර්ගය සංවර්ධනය",
        "kumara_house_road_name": "ටයිගර් ලෑන්ඩ් මාර්ගය (කොන්ක්‍රීට්)",
        "ella_community_hall_name": "ඇල්ල සිට ප්‍රජා ශාලාව දක්වා මාර්ගය",
        "kajuvetiya_side_road_name": "ඇල්ල ඉහළ කජුවෙටිය අතුරු මාර්ගය",
        "deniyamulla_road_name": "දෙණියමුල්ල මාර්ගය සංවර්ධනය",
        "dehigahahena_road_name": "දෙහිගහහේන සිට ලතා මහත්මියගේ වත්ත දක්වා මාර්ගය",
        "preschool_road_name": "ඇල්ල ඉහළ පෙරපාසල් මාර්ගය",
        "gepalawatta_culvert_name": "ගෙපලවත්ත මාර්ගයේ බෝක්කුව",
        "enasal_wattha_road_name": "එනසාල් වත්ත මාර්ගය (කොන්ක්‍රීට්)",
        "shirani_house_culvert_name": "දොළ ඉහළ මාර්ගයේ පෙට්ටි බෝක්කු",
        "punchi_dehigahahena_name": "ඇල්ල ඉහළ පුංචි දෙහිගහ හේන මාර්ගය",
        "pitikumbura_road_name": "පිටිකුඹුර මාර්ගය සංවර්ධනය",
        "pindeniya_road_name": "පිණ්ඩෙනිය මාර්ගය සංවර්ධනය",

        "service": "සේවාව",

        //samnitary facilities
        
          "sanitaryPageTitle": "සනීපාරක්ෂක හා ජල සම්පාදන ව්‍යාපෘති",
      
            "drinking_water": "පානීය ජල පහසුකම්",
            "sanitary_facilities": "සනීපාරක්ෂක පහසුකම්"
      ,
            "batticaloa": "මඩකලපුව",
      
            "koralaipattu_south": "කෝරලෙයිපත්තුව දකුණ",

            "murutthanai": "මුරුත්තනෛ",
            "ganthuna_medagama": "58G ගන්තූන මේදගම"
      ,
            "murutthanai_water_name": "මිනුමිනුත්තවේලි සහ අකුරනෛයි ප්‍රජා ජල සම්පාදන යෝජනා ක්‍රමය ",
            "murutthanai_water_short": "මුරුත්තනෛ ජල යෝජනා ක්‍රමය",
            "murutthanai_toilet_name": "මුරුත්තනෛ ප්‍රජා වැසිකිළි ඉදිකිරීමේ ව්‍යාපෘතිය",
            "murutthanai_toilet_short": "වැසිකිළි ඉදිකිරීමේ ව්‍යාපෘතිය",
            "aranayake_toilet_name": "අඩු ආදායම්ලාභී පවුල් සඳහා වැසිකිළි පහසුකම් සැපයීම - අරණායක",
            "aranayake_toilet_short": "අඩු ආදායම්ලාභී සනීපාරක්ෂක ව්‍යාපෘතිය"
          ,

          //tuarism page
       
            "tourismPageTitle": "සංචාරක යටිතල පහසුකම් ව්‍යාපෘති",
            
              "food_beverage": "ආහාර පාන සේවා සැපයීම",
              "tourism_industry": "සංචාරක කර්මාන්ත සංවර්ධනය",
              "tourism_promotion": "සංචාරක ප්‍රවර්ධනය",
           "hambantota": "හම්බන්තොට",
            "angunakolapelessa": "අඟුණකොළපැලැස්ස",
          
              "alkaduwa": "අල්කඩුව වත්ත",
              "angunakolapelessa_lake": "අඟුණකොළපැලැස්ස වැව අසල",
              "maduragama": "68 C මදුරගම",
           
              "sembuwatta_name": "සෙම්බුවත්ත තේ කර්මාන්ත ශාලාවේ බිම් මහල අවන්හලක් ලෙස ප්‍රතිසංස්කරණය කිරීම",
              "sembuwatta_short": "තේ කර්මාන්තශාලා අවන්හල් ව්‍යාපෘතිය",
              "angunakolapelessa_name": "අඟුණකොළපැලැස්ස වැව ආශ්‍රිත බහුකාර්ය සංවර්ධන ව්‍යාපෘතිය",
              "angunakolapelessa_short": "වැව ආශ්‍රිත බහුකාර්ය ව්‍යාපෘතිය",
              "ella_promotion_name": "සංචාරකයින් සඳහා ආහාර පාන සැපයීම සහ අලෙවිසැල් ප්‍රවර්ධනය කිරීමේ ව්‍යාපෘතිය",
              "ella_promotion_short": "සංචාරක අලෙවිසැල් ප්‍රවර්ධනය",
           
      
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
    FAQ:"அடிக்கடி கேட்கப்படும் கேள்விகள்",
    
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
    animalHusbandry: "கால்நடை பராமரிப்பு",
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
    minister: " அமைச்சர்",
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
    projectsDescription: "2025 ஆம் ஆண்டில் கிராமப்புற சமூகங்களை மேம்படுத்துவதற்கும் அவர்களின் வாழ்வாதாரத்தை மேம்படுத்துவதற்கும் விவசாயம், தொழில், மீன்பிடி, கால்நடை வளர்ப்பு மற்றும் உள்கட்டமைப்பு மேம்பாட்டிற்காக எங்கள் பணியகத்தால் அங்கீகரிக்கப்பட்ட திட்டங்கள்.",
    
    downloadTitle: "சுற்றறிக்கைகள், வழிகாட்டுதல்கள் மற்றும் வடிவங்களை பதிவிறக்கவும்",
    relatedOrganizations: "தொடர்புடைய நிறுவனங்கள்",
    deputyMinister: " துணை அமைச்சர்",
    
    // Officers Names
    deputyMinisterName: "கௌரவ  வசந்த பியதிஸ்ஸ",
    ministerName: "கௌரவ  டாக்டர். உபாலி பன்னிலகே",
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
"news6.date": "2026 ஜனவரி 12",
"news6.title": "பிரஜா சக்தி - சமூக அபிவிருத்தி சபை பிரதிநிதிகளை கல்வி செய்யும் மேற்கு மாகாண மாநாடு",


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
  prajashakthiTrainingofTrainersSouthAndCentralProvinceProgram: "பிரஜாஷக்தி பயிற்சியாளர்கள் பயிற்சி – மாத்தறை மற்றும் மொனராகலை மாவட்டம்",
  southProgramIntro: "கிராம அபிவிருத்தி பணியகம் மற்றும் ஜனாதிபதி செயலகம் இணைந்து ஏற்பாடு செய்த பிரஜாசக்தி பயிற்சியாளர்களுக்கான மாத்தறை மற்றும் மொனராகலை மாவட்டம் பயிற்சி நிகழ்ச்சித்திட்டம் டிசம்பர் 16 மற்றும் 17 ஆகிய தேதிகளில் ரன்மினிதென்ன டெலி சினிமா கிராமத்தில் வெற்றிகரமாக நடைபெற்றது.",
  
  //news6 page
  PrajaShakthiWesternProvince: "பிரஜா சக்தி - சமூக அபிவிருத்தி சபை பிரதிநிதிகளை கல்வி செய்யும் மேற்கு மாகாண மாநாடு",
  
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


    //Gallary Page
    "gallery" :  "காட்சியகம்",
    "galleryTitle": "காட்சியகம்", "eventsSection": "நிகழ்வுகள்", "meetingsSection": "மாநாடுகள்", "eventImage": "நிகழ்வு படம்", "meetingImage": "மாநாடு படம்", "imageCaption": "படம்",



    //services page
//agriculture page


//////////fruit page
fruitPageTitle: "பழம் தொடர்பான திட்டங்கள்", 
no: "எண்", 
// district: "மாவட்டம்",
 divisionalOffice: "தொகுதி செயலாளர் அலுவலகம்", 
 project: "திட்டம்", 
//  product: "பொருள்", 
 location: "இடம்", 
 "Amount(Rs)": "அங்கீகரிக்கப்பட்ட ஏற்பாடுகள் (ரூ.)",

 //projects
 "amban_bananaProject": "அம்பன் வாழைத் திட்டம்",
    "durianProject": "துரியன் திட்டம்",
    "vine_orangesProject": "கொடி தோடம் திட்டம்",
    "jamanarangProject": "ஜமனாரங் திட்டம்",
    "nutsProject": "கொட்டை வகைகள் திட்டம்",
    "jams_cordialsProject": "ஜாம் மற்றும் பானங்கள் திட்டம்",
    "kavendish_bananaProject": "கேவன்டிஷ் வாழைத் திட்டம்",
    "mixed_fruitsProject": "பழங்கள் திட்டம்",
    "pineapple_delumProject": "அன்னாசி மற்றும் மாதுளை திட்டம்",
    "apple_pera_mangoProject": "ஆப்பிள் கொய்யா, மாம்பழத் திட்டம்",

//prject name
    "mahanuwara_banana": "மகாநுவர அம்பன் வாழைத் திட்டம்",
    "mahanuwara_durian": "மகாநுவர துரியன் திட்டம்",
    "nuwara_eliya_orange": "நுவரெலியா கொடி தோடம் திட்டம்",
    "nuwara_eliya_jamanarang": "நுவரெலியா ஜமனாரங் திட்டம்",
    "ampara_orange": "அம்பாறை கொடி தோடம் திட்டம்",
    "kurunegala_nuts": "குருநாகல் கொட்டை வகைகள் திட்டம்",
    "mulathivu_jams": "முல்லைத்தீவு ஜாம் மற்றும் பானங்கள் திட்டம்",
    "mulathivu_banana": "முல்லைத்தீவு கேவன்டிஷ் வாழைத் திட்டம்",
    "kalutara_fruit": "களுத்துறை பழங்கள் திட்டம்",
    "polonnaruwa_pineapple": "பொலன்னறுவை அன்னாசி மற்றும் மாதுளை திட்டம்",
    "polonnaruwa_apple": "பொலன்னறுவை ஆப்பிள், கொய்யா, மாம்பழத் திட்டம்",

//districts
    "mahanuwara": "மகாநுவர",
    "nuwara_eliya": "நுவரெலியா",
    "ampara": "அம்பாறை",
    "kurunegala": "குருநாகல்",
    "mulathivu": "முல்லைத்தீவு",
    "kalutara": "களுத்துறை",
    "polonnaruwa": "பொலன்னறுவை",


    //offices
    "harispaththuwa": "ஹாரிஸ்பத்துவ",
    "poojapitiya": "பூஜாபிட்டிய",
    "kotmale_east": "கொத்மலை கிழக்கு",
    "uhana": "உஹன",
    "ibbagamuwa": "இப்பாகமுவ",
    "mantai_east": "மாந்தை கிழக்கு",
    "puthukudirippu": "புதுக்குடியிருப்பு",
    "dhodangoda": "கொடங்கொடை",
    "madirigiriya": "மெதிரிகிரிய",

    //products
    "amban_banana": "அம்பன் வாழை",
    "durian": "துரியன்",
    "vine_oranges": "கொடி தோடம்",
    "jamanarang_drinks": "ஜமனாரங் பானங்கள்",
    "nuts": "கொட்டை வகைகள்",
    "jams_cordials": "ஜாம், பானங்கள் மற்றும் தோடம் சார்ந்த தயாரிப்புகள்",
    "kavendish_banana": "கேவன்டிஷ் வாழை",
    "mixed_fruits": "துரியன், ரம்புட்டான், அன்னாசி, கொடி தோடம், வாழை",
    "pineapple_delum": "அன்னாசி மற்றும் மாதுளை",
    "apple_pera_mango": "ஆப்பிள் கொய்யா, மாம்பழம்",

    //locations
    "bulathgolla": "புலத்கொல்ல",
    "pahala_higulwala": "507-பஹல ஹிகுல்வல",
    "niyamgamdora": "நியம்கம்தொர 470",
    "weralalapathana": "461/D வெரலலபதன",
    "bandaradoowa": "பண்டாரதூவ",
    "omaragolla": "415 ஒமரகொல்ல",
    "ampalapuram": "அம்பாலபுரம்",
    "theravil": "தேராவில் தேவிபுரம்",
    "thudugala": "துடுகல கிழக்கு, நெஹின்னேவ, வடுகம",
    "vijayapura": "108 விஜயபுர",
    "ihalagama": "109 இஹலகம",

    //bulath page
    "betelPageTitle": "வெற்றிலை தொடர்பான தயாரிப்புகள்",

    "ampara_organicBetel": "ரிதிஎல  வெற்றிலை திட்டம்",
    "kegalle_betelCluster": "கேகாலை வெற்றிலை கொத்து திட்டம்",
    "galigamuwa_betelCluster": "கலிகமுவ வெற்றிலை கொத்து திட்டம்",
    "puttalama_betelCluster": "அபகலெ வெற்றிலை கொத்து திட்டம் (புத்தளம்)",
    "hambanthota_betelCluster": "அபகலெ வெற்றிலை கொத்து திட்டம் (அம்பாந்தோட்டை)",
    "organicBetelProject": " வெற்றிலை திட்டம்",
    "betelCluster": "வெற்றிலை கொத்து திட்டம்",

    "kegalle": "கேகாலை",
    "puttalama": "புத்தளம்",
    "hambanthota": "அம்பாந்தோட்டை",

    "dehiaththakandiya": "தெகிஅத்தகண்டிய",
    "galigamuwa": "கலிகமுவ",
    "arachchikattuwa": "ஆரச்சிக்கட்டுவ",
    "veeraketiya": "வீரக்கெட்டிய",

    "betel_leaf": "வெற்றிலை",

    "ridiela": "ரிதிஎல",
    "pussella": "51 A புஸ்ஸல்ல, 51 A ரங்வல",
    "papoluwa": "70 A, பப்பொலுவ",
    "abakele": "அபகலெ, இஹல அத்தங்கானய",
    "degampotha": "தெகம்பொத்த, வடக்கு அபகொலவெவ",

    //cineman page

    "cinnamonPageTitle": "இலவங்கப்பட்டை தொடர்பான தயாரிப்புகள்",

    "cinnamonProject": "இலவங்கப்பட்டை திட்டம்",
    "tangalla_Cinamon": "தங்கல்ல இலவங்கப்பட்டை திட்டம்",
    "balapitiya_Cinamon": "பலப்பிட்டிய இலவங்கப்பட்டை திட்டம்",
    "niyagama_Cinamon": "நியாகம இலவங்கப்பட்டை திட்டம்",
    "yakkalamulla_Cinamon": "யக்கலமுல்ல இலவங்கப்பட்டை திட்டம்",
    "wallawita_Cinamon": "வல்லாவிட்ட இலவங்கப்பட்டை திட்டம்",
    "monaragala_Cinamon": "மொனராகலை இலவங்கப்பட்டை திட்டம்",
    "madulla_Cinamon": "மாதுள்ளை இலவங்கப்பட்டை திட்டம்",
    "mayyokkawatte_Cinamon": "மய்யொக்காவத்த இலவங்கப்பட்டை திட்டம்",
    "sewanagala_Cinamon": "செவனகல இலவங்கப்பட்டை திட்டம்",

     "cinnamon": "இலவங்கப்பட்டை", 
    "galle": "காலி",
    "monaragala": "மொனராகலை",

    "tangalla": "தங்கல்ல",
    "balapitiya": "பலப்பிட்டிய",
    "niyagama": "நியாகம",
    "yakkalamulla": "யக்கலமுல்ல",
    "walallawita": "வல்லாவிட்ட",
  
    "madulla": "மாதுள்ளை",
    "sewanagala": "செவனகல",

    "vallodaya": "வல்லோதய, ரத்ன கிழக்கு, ரெகவ மேற்கு",
    "kattakaduwa": "கட்டக்கடுவ தெற்கு, கட்டக்கடுவ வடக்கு",
    "pelagus": "பேலகஸ் மாகாணம், பத்திராஜ இடம்",
    "horangalla": "ஹோரங்கல்ல தலாவ, ஹோரங்கல்ல மேற்கு",
    "ella_upper": "182 சி எல்ல மேல்",
    "pareigama": "782 பரேயிகம வடக்கு, குடா மத்துகம",
    "batugammana": "130 படுகம்மன",
    "tharela": "113டி - தரல",
    "illukkanda": "113சி - இல்லுக்கந்த",
    "watawanagara": "116சி - வட்டவானகற",
    "mayyokkawatte": "மய்யொக்காவத்த",
    "kiri_wewa": "கிரி வெவ, இந்திகொலபெலஸ்ஸ",
    "habarugala": "ஹபரூகல, மஹகம",


    //cocnut page
    "coconutPageTitle": "தேங்காய் தொடர்பான தயாரிப்புகள்",

    "coconutHuskProject": "தேங்காய் மட்டை சார்ந்த தயாரிப்பு திட்டம்",
    "coconutOilProject": "தேங்காய் எண்ணெய் உற்பத்தி திட்டம்",
    "uhana_coconut": "உஹன தேங்காய் மட்டை சார்ந்த தயாரிப்பு",
    "udubaddawa_coconut": "உடுபத்தாவ தேங்காய் மட்டை சார்ந்த தயாரிப்பு",
    "kobeigane_coconut": "கொபெய்கனே தேங்காய் மட்டை சார்ந்த தயாரிப்பு",
    "puttur_coconut": "புத்தூர் கிழக்கு தேங்காய் எண்ணெய் தயாரிப்பு",

    "broom_rugs": "துடைப்பம், தரைவிரிப்புகள்",
    "coconut_husk": "தேங்காய் மட்டை",
    "coconut_oil": "தேங்காய் எண்ணெய்",

    "jaffna": "யாழ்ப்பாணம்",

    "udubaddawa": "உடுபத்தாவ",
    "kobeigane": "கொபெய்கனே",
    "valikamam_east": "வலிகாமம் கிழக்கு (கோப்பாய்)",

    "uhanapura": "உஹனபுர",
    "udadeniya": "உடதெனிய",
    "kobeigane_cluster": "புப்பிலிய, பெத்தேகம, மாவத்தகம, வலஸ்வெவ",
    "puttur_east": "புத்தூர் கிழக்கு J/278",



    // flower page

    "flowerPageTitle": "அலங்கார மலர் சாகுபடி திட்டம்",

    "flowerProject": "அலங்கார மலர் சாகுபடி திட்டம்",
    "pannala_flowers": "பன்னால அலங்கார மலர் சாகுபடி திட்டம்",
    "idda_flower": "இத்தா மலர் ",

    "flowers": "மலர்கள்",

    "pannala": "பன்னல",
    "kalpitiya": "கல்பிட்டி",

    "pannala_cluster": "1557 - படபொத எல, 1563 - வெத்தேவ",
    "mampuriya": "மாம்புரிய",

    //kiy=thul page

    "kithulPageTitle": "கித்துள் தொடர்பான தயாரிப்புகள்",

    "kithulDevelopment": "கித்துள் அபிவிருத்தி திட்டம்",
    "matugama_kithul": "மத்துகம கித்துள் அபிவிருத்தி திட்டம்",
    "kotmale_kithul": "கொத்மலை மேற்கு கித்துள் அபிவிருத்தி திட்டம்",

    "kithul_mix": "கித்துள் சர்க்கரை, தேன், கித்துள் மா",
    "kithul_value_added": "கித்துள் தொடர்பான பெறுமதி சேர்க்கப்பட்ட தயாரிப்புகள்",
    "matugama": "மத்துகம",
    "kotmale_west": "கொத்மலை மேற்கு",

    "matugama_kithul_loc": "795 பி சந்தசிறிகம, 794 ஹோரவல, 793 பி மடவல",
    "madakubura": "மடக்கும்புர 468",


    //mushroom page 

  
      "mushroomPageTitle": "காளான் தொடர்பான தயாரிப்புகள்",
      
        "mushroomProduction": "காளான் உற்பத்தி மண்டலம்",
        "uhana_mushroom": "உஹன காளான் உற்பத்தி மண்டலம்",
        "ukuwela_mushroom": "உகுவெல காளான் உற்பத்தி மண்டலம்",
        "aranayake_mushroom": "அரநாயக்க காளான் உற்பத்தி மண்டலம்",
        "wellawaya_mushroom": "வெல்லவாய காளான் உற்பத்தி மண்டலம்",
        "ella_mushroom": "எல்ல காளான் உற்பத்தி மண்டலம்",
        "madirigiriya_mushroom": "மெதிரிகிரிய காளான் உற்பத்தி மண்டலம்",
      
        "mushroom": "காளான்",
      
        "matale": "மாத்தளை",
        "badulla": "பதுளை",
    
        "ukuwela": "உகுவெல",
        "aranayake": "அரநாயக்க",
        "wellawaya": "வெல்லவாய",
        "ella": "எல்ல",
     
        "ukuwela_loc": "ஓவில்லதென்ன, திப்பந்துவாவ",
        "pahinibeddara": "45சி பஹினிபெத்தர, காவிலிபிட்டிய கிராமம்",
        "kotikambokka": "கொடிக்கம்பொக்க",
        "ella_mushroom_loc": "மில்லகம, இதமேகம, உடு கும்பல்வெல",
        "veheragala": "124 வெஹரகல",
     
//palm page

"palmPageTitle": "பனை தொடர்பான தயாரிப்புகள்",
"palmBasedProject": "பனை சார்ந்த திட்டம்",
"jaffna_palm": "யாழ்ப்பாண பனை சார்ந்த திட்டம்",

"palm_kernels": "பனை விதைகள் மற்றும் பனை சார்ந்த தயாரிப்புகள்",

"uduvil": "வலிகாமம் தெற்கு (உடுவில்)",

"jaffna_palm_loc": "ஏழாலை தெற்கு, புன்னாகம் நகர தெற்கு",

//seed page

"seedPageTitle": "விதை தொடர்பான தயாரிப்புகள்",

"seedProject": "விதை உற்பத்தி திட்டம்",
    "badulla_seed_name": "பதுளை உருளைக்கிழங்கு விதை திட்டம்",
    "polonnaruwa_seed_name": "பொலன்னறுவை விதை நெல் திட்டம்",

    "potato_seeds": "உருளைக்கிழங்கு விதைகள்",
    "seed_paddy": "விதை நெல்",

   "badulla_seed_cluster": "ஹாலி எல, பண்டாரவளை, ஹப்புத்தளை, ஹல்துமுல்லை, பஸ்ஸறை",
    "higurangoda": "ஹிங்குராக்கொடை",

  "badulla_seed_loc": "நயபெத்தவத்தை, பூனகலவத்தை, தம்பேதென்னவத்தை, தங்கமலைவத்தை, உடவேரியவத்தை, கோனமோட்டாவத்தை, கனவெரல்லவத்தை, வேவலவத்தை, நாவலவத்தை, தியனகலவத்தை",
    "rajaelagama": "37 ரஜஎலகம",

    //spices page
   "spicesPageTitle": "வாசனைத் திரவியங்கள் மற்றும் தொடர்பான தயாரிப்புகள்",

        "spiceVillageProject": "மிளகு சாகுபடி திட்டம்",
        "udawatte_spice": "உடவத்த மிளகுத் திட்டம்",
        "higuranketha_pepper": "ஹங்குரன்கெத்த மிளகுத் திட்டம்",

        "black_pepper": "கருமிளகு",
  
        "higuranketha": "ஹங்குரன்கெத்த",
  
        "udawatte_cluster": "உடவத்த கிழக்கு, உடவத்த மேற்கு, 488/A ஹகுருத்தல்",
   
        //tea page

          "teaPageTitle": "தேயிலை தொடர்பான தயாரிப்புகள்",
     
            "teaPromotion": "தேயிலை சாகுபடி ஊக்குவிப்பு திட்டம்",
            "teaDevelopment": "தேயிலை சாகுபடி ஊக்குவிப்பு திட்டம்",
            "teaCooperative": "தேயிலை சாகுபடி ஊக்குவிப்பு திட்டம்",
            "kottawa_tea": "கொட்டாவ தேயிலை ஊக்குவிப்பு மண்டலம்",
            "neluwa_tea": "நெலுவ தேயிலை அபிவிருத்தி பகுதி",
            "ella_upper_tea": "எல்ல மேல் தேயிலை கூட்டுறவு",
          
            "tea": "தேயிலை",
        
            "neluwa": "நெலுவ",
      
            "kottawa_cluster": "கொட்டாவ, கொட்டாவ கிழக்கு, கொட்டாவ மேற்கு",
            "neluwa_cluster": "ஹப்பிட்டிய, பன்னிமுல்ல, பனாகொட",
            "ella_upper_loc": "182 C எல்ல மேல், மாகெதர கிழக்கு",
          
            //vegetable page 

              "vegetablePageTitle": "காய்கறி தொடர்பான தயாரிப்புகள்",
        
                "onion_cultivation": "வெங்காயச் செய்கைத் திட்டம்",
                "greenhouse_improvement": "பசுமை இல்லச் செய்கை மேம்பாட்டுத் திட்டம்",
                "pallankoddai_onion": "பள்ளங்கொடை வெங்காயக் கொத்து",
                "ketawala_vegetable": "கெட்டவல காய்கறி வலயம",
                "atampitiya_vegetable": "அட்டம்பிட்டிய காய்கறி கூட்டுறவு",
        
                "onion": "வெங்காயம்",
                "veg_flower": "காய்கறிகள் மற்றும் மலர்கள்",
       
                "nanattan": "நானாட்டான்",
                "hali_ela": "ஹாலி எல",
        
                "pallankoddai": "பள்ளங்கொடை",
                "ketawala": "கெட்டவல",
                "atampitiya": "அட்டம்பிட்டிய",

                mannar: "மன்னார்",

        //bee honey page
          "beeHoneyPageTitle": "தேன் தொடர்பான தயாரிப்புகள்",
            "beeKeeping": "தேனீ வளர்ப்பு திட்டம்",
            "bogahawela_honey": "போகஹவெல தேன் கொத்து",
            "mawelakanda_honey": "மாவேலகந்த தேன் கூட்டுறவு",
    
            "bee_honey": "தேன்",
        
            "bogahawela": "468 D போகஹவெல",
            "mawelakanda": "456 C மாவேலகந்த",
         
      //dairy mil kpage
   
        "dairyPageTitle": "பால் உற்பத்தி தொடர்பான திட்டங்கள்",

    "maha_nuwara": "கண்டி",
       
          "goatControl": "ஆடு வளர்ப்பு திட்டம்",
          "dairyCowControl": "கறவை மாடு வளர்ப்பு திட்டம்",
          "dairyManagement": "கறவை மாடு முகாமைத்துவ திட்டம்",
          "dairyImprovement": "கறவை மாடு முகாமைத்துவ மேம்பாட்டு திட்டம்",
          "cattleRanch": "கால்நடை பண்ணை மேம்பாட்டு திட்டம்",
          "milkCenterReno": "பால் சேகரிப்பு நிலைய புனரமைப்பு திட்டம்",
          "dairyDev": "கறவை மாடு முகாமைத்துவம் மற்றும் அபிவிருத்தி திட்டம்",
          "grassCultivation": "தரமான புல் செய்கை திட்டம்",
          "irakkamam_goat": "இறக்காமம் ஆடு வளர்ப்பு திட்டம்",
          "akkarapaththu_dairy": "அக்கரைப்பற்று கறவை மாடு வளர்ப்பு திட்டம்",
          "navindaveli_dairy": "நாவிதன்வெளி பால் திட்டம்",
          "palinda_nuwara_goat": "பாலிந்த நுவர ஆடு வளர்ப்பு திட்டம்",
          "madadumbara_dairy": "மததும்பர கறவை மாடு வளர்ப்பு திட்டம்",
          "udahenthenna_goat": "உடஹேந்தன்ன ஆடு வளர்ப்பு திட்டம்",
          "labuhena_cattle": "லபுஹேன கால்நடை பண்ணை மேம்பாட்டு திட்டம்",
          "garubevilagama_dairy": "கருபெவிலகம பால் அபிவிருத்தி திட்டம்",
          "weligepola_dairy": "வெலிகெபொல பால் அபிவிருத்தி திட்டம்",
          "kambuwatana_dairy": "கம்புவட்டன பால் அபிவிருத்தி திட்டம்",
          "kurundewa_dairy": "குருந்தேவ பால் அபிவிருத்தி திட்டம்",
          "thalawa_dairy": "தலாவ பால் அபிவிருத்தி திட்டம்",
          "panduwasnuwara_dairy": "பண்டுவஸ்நுவர கிழக்கு பால் அபிவிருத்தி திட்டம்",
          "polgahawela_dairy": "பொல்கஹவெல பால் அபிவிருத்தி திட்டம்",
          "weerambugedara_dairy": "வீரம்புக்கெதர பால் அபிவிருத்தி திட்டம்",
          "divulwewa_dairy": "திவுல்வெவ பால் அபிவிருத்தி திட்டம்",
          "karuwalagaswewa_dairy": "கருவலகஸ்வெவ பால் அபிவிருத்தி திட்டம்",
          "padhikudiruppu_reno": "பதிகுடியிருப்பு பால் சேகரிப்பு நிலைய புனரமைப்பு",
          "buttala_dairy": "புத்தல பால் அபிவிருத்தி திட்டம்",
          "welimada_dairy": "வெலிமடை பால் அபிவிருத்தி திட்டம்",
          "bibiligamuwa_dairy": "பிபிலிகமுவ பால் அபிவிருத்தி திட்டம்",
          "niyamgamdora_dairy": "நியம்கம்தொர பால் அபிவிருத்தி திட்டம்",
      
          "goat_milk": "ஆட்டுப் பால்",
          "fresh_milk": "பசும்பால்",
          "milk_mix": "பசும்பால், தயிர், நெய், வெண்ணெய்",
          "goat_milk_meat": "ஆட்டுப் பால் மற்றும் இறைச்சி",

          "irakkamam": "இறக்காமம்",
    "akkarapaththu": "அக்கரைப்பற்று",
    "navindaveli": "நாவிதன்வெளி",
    "palinda_nuwara": "பாலிந்த நுவர",
    "madadumbara": "மததும்பர",
    "gaga_ihala": "கங்க இஹல கோரலே",
    "haguranketha": "ஹங்குரன்கெத்த",
    "rathnapura_office": "இரத்தினபுரி",
    "weligepola": "வெலிகெபொல",
    "polpithigama": "பொல்பிகிதம",
    "galgamuwa": "கல்கமுவ",
    "panduwasnuwara_east": "பண்டுவஸ்நுவர கிழக்கு",
    "polgahawela": "பொல்கஹவெல",
    "weerambugedara": "வீரம்புக்கெதர",
    "anamaduwa": "ஆனைமடு",
    "karuwalagaswewa": "கருவலகஸ்வெவ",
    "vavuniya_north": "வவுனியா வடக்கு",
    "buttala": "புத்தல",
    "welimada": "வெலிமடை",
    "welikanda": "வெலிகந்த",

          "irakkamam_loc": "வாரிப்பத்தாஞ்சேனை / இறக்காமம்",
    "akkarapaththu_loc": "பள்ளிக் குடியிருப்பு / நகரப் பிரிவுகள்",
    "salamwakeni": "ஸலாம்வக்கேனி - 05",
    "walakada": "வலகடை, பெலாத",
    "kandekubura": "802-கந்தேகும்புர",
    "udahenthenna_loc": "உடஹேந்தன்ன / அத்கல",
    "labuhena_loc": "லபுஹேன, பொரமதுல்ல",
    "garubevilagama": "கருபெவிலகம",
    "galpaya_loc": "கல்பாய, பம்பரலக",
    "kambuwatana": "கம்புவட்டன",
    "kurundewa": "குருந்தேவ",
    "thalawa": "தலாவ",
    "bodhimulla": "போதிமுல்ல",
    "panaliya_loc": "பனாலிய, சுனிலாகம",
    "godavita": "854 - கொடவிட்ட",
    "divulwewa": "திவுல்வெவ",
    "pahariya": "பஹாரிய",
    "padhikudiruppu": "பதிகுடியிருப்பு",
    "mari_arawa": "மாரி அராவ",
    "katakaella": "58A கடகெல்ல",
    "bibiligamuwa": "50J பிபிலிகமுவ",
    "mahindagama": "282 மஹிந்தாகம",

    "rathnapura": "இரத்தினபுரி",
    "puththalama": "புத்தளம்",
    "vavuniya": "வவுனியா",

    //eggs page
  
      "eggPageTitle": "முட்டை தொடர்பான தயாரிப்பு திட்டங்கள்",
        "chicken_village": "முட்டை மற்றும் குஞ்சு உற்பத்திக்கான கோழி உற்பத்தி கிராம திட்டம்",
        "egg_cluster": "முட்டை உற்பத்தி கிளஸ்டர் அபிவிருத்தி",
        "poultry_zone": "முட்டை மற்றும் குஞ்சு உற்பத்திக்கான கோழி வளர்ப்பு மண்டலம்",
        "egg_coop": "முட்டை உற்பத்தி கூட்டுறவு அபிவிருத்தி",
        "kandangamuwa_egg": "கந்தங்கமுவ முட்டை மற்றும் குஞ்சுகள்",
        "undugoda_egg": "உந்துகொட முட்டை கிளஸ்டர்",
        "yakkaduwa_egg": "யக்கடுவ கோழி வளர்ப்பு மண்டலம்",
        "kosgulana_egg": "கொஸ்குலான முட்டை கூட்டுறவு",

        "eggs_chicks": "முட்டைகள் மற்றும் குஞ்சுகள்",

        "meerigama": "மீரிகம",
        "kegalle_off": "கேகாலை",
        "ja_ela": "ஜா-எல",
        "palindanuwara": "பாலிந்த நுவர",

        "kandangamuwa_loc": "கந்தங்கமுவ, கிந்தவல, இம்புலன்வல",
        "undugoda_loc": "56 B உந்துகொட, 56 D மொரதான",
        "yakkaduwa": "யக்கடுவ",
        "kosgulana_loc": "கொஸ்குலான, வலகடை, திகன்ன",
  
        //ornament fish

          "ornamentalFishPageTitle": "மீன்பிடி மற்றும் அலங்கார மீன் தொடர்பான திட்டங்கள்",
            "dryfish_livelihood": "கருவாடு உற்பத்தி மற்றும் வாழ்வாதார மேம்பாட்டுத் திட்டம்",
            "ornamental_farming": "அலங்கார மீன் வளர்ப்பு திட்டம்",
            "fishing_wharf": "மீன் விற்பனை மற்றும் மீன்பிடி நடவடிக்கைகளுக்காக இறங்குதுறை அமைக்கும் திட்டம்",
            "ornamental_food": "அலங்கார மீன் உணவு உற்பத்தி திட்டம்",
            "freshwater_gear": "நன்னீர் மீன்பிடி சமூகத்திற்கான உபகரணங்கள் வழங்கும் திட்டம்",
            "lake_dev": "மீன்பிடி நடவடிக்கைகளுக்காக ஏரி அபிவிருத்தி திட்டம்",
            "kareithiw_dryfish": "காரைதீவு கருவாடு உற்பத்தி திட்டம்",
            "mamunuwa_ornamental": "மமுனுவ அலங்கார மீன் வளர்ப்பு திட்டம்",
            "thalpitiya_wharf": "தல்பிட்டிய மீன்பிடி இறங்குதுறை திட்டம்",
            "katuhena_feed": "கட்டுஹேன மீன் தீவன உற்பத்தி நிலையம்",
            "kandegama_hub": "கந்தேகம மீன்பிடி தொழில் மையம்",
            "alawakumbura_coop": "அலவக்கும்புர மீன்பிடி கூட்டுறவுச் சங்கம்",
       
            "ornamental_breeding": "அலங்கார மீன் இனப்பெருக்கம் மற்றும் பயிற்சி நிலையம்",
            "fishery_industry": "மீன்பிடித் தொழில்",
            "ornamental_food_prod": "அலங்கார மீன் உணவு",
            "fishing_industry": "மீன்பிடித் தொழில்",
    
            "kareithiw": "காரைதீவு",
            "variyapola": "வாரியப்பொல",
            "panadura": "பாணந்துறை",
            "madurawala": "மதுராவல",
            "dibulagala": "திம்புலாகலை",
       
            "kareithiw_loc": "காரைதீவு-09",
            "mamunuwa": "மமுனுவ",
            "thalpitiya_loc": "தெற்கு தல்பிட்டிய / பள்ளியமங்கடை",
            "katuhena_loc": "கட்டுஹேன / மேல் கரன்னகொட",
            "kandegama": "240 கந்தேகம",
            "alawakumbura": "239 - அலவக்கும்புர",

            //umbalakada and dry fish page
        
              "driedFishPageTitle": "உம்பலகடை மற்றும் கருவாடு தொடர்பான தயாரிப்பு திட்டங்கள்",
           
                "community_fisheries": "கலுகலோயா ஏரியை மையமாகக் கொண்ட சமூக அடிப்படையிலான மீன்பிடித் திட்டம்",
                "theppam_desc": "காயலில் பணிபுரியும் மீனவர்களுக்கான தெப்பம் திட்டம்",
                "uhana_lake_fisheries": "உகண சமூக அடிப்படையிலான மீன்பிடித் திட்டம்",
                "kareithiw_dryfish_full": "காரைதீவு கருவாடு உற்பத்தி மற்றும் வாழ்வாதார மேம்பாட்டுத் திட்டம்",
                "theppam_project": "காயல் மீனவர் தெப்பம் திட்டம்",
           
                "fish_dried_fish": "மீன் மற்றும் கருவாடு",
              
                "bandaraduuwa": "பண்டாரதுவ",
                "karukupane": "கருக்குபனை",

                "dry_fish": "கருவாடு",

        //clay page
   
          "clayPageTitle": "களிமண் சார்ந்த தயாரிப்பு திட்டங்கள்",
    
            "kella_clay_dev": "கெல்ல களிமண் உற்பத்தி கிராம அபிவிருத்தி திட்டம்",
            "clay_village_title": "களிமண் உற்பத்தி கிராம அபிவிருத்தி திட்டம்",
            "weerasekarapura_ornamental": "வீரசேகரபுர களிமண் சார்ந்த அலங்காரப் பொருட்கள் உற்பத்தித் திட்டம்",
            "clay_ornamental_title": "களிமண் சார்ந்த அலங்காரப் பொருட்கள் உற்பத்தித் திட்டம்",
            "clay_pot_initiative": "மட்பாண்ட முயற்சி",
            "weherayaya_initiative": "வெஹெரயாய மட்பாண்ட முயற்சி",
      
            "pots_clay_pots": "பானைகள், மட்பாண்டங்கள்",
            "clay_product": "களிமண் தயாரிப்பு",
            "milk_pot_clay_pot": "பால் பானை, மட்பாண்டம்",
         
            "kolonna": "கொலொன்ன",
            "biyagama": "பியகம",
            "wellavaya": "வெல்லவாய",
         
            "kella_loc": "கெல்ல, அம்பகஹயாய",
            "biyagama_south": "28c பியகம தெற்கு",
            "weherayaya": "வெஹெரயாய",
          
            "gampaha": "கம்பஹா",
             
            //cloth page
    
              "clothPageTitle": "ஆடை மற்றும் ஜவுளி தொடர்பான திட்டங்கள்",
         
                "garment_manufacturing": "சிறிய அளவிலான ஆடை உற்பத்தித் திட்டம்",
                "nugaduwa_batik": "நுகதுவ பத்திக் உற்பத்தித் திட்டம்",
                "nikaweratiya_coir_zone": "நிகவரெட்டிய தேங்காய் நார் கைத்தொழில் வலயம்",
                "akmeemana_batik": "அக்மீமன பத்திக் கிளஸ்டர்"
              ,
                "uniforms_garments": "பள்ளி சீருடைகள், சிறுவர் உடைகள், எம்பிராய்டரி மற்றும் ஆரி தயாரிப்புகள்",
                "batik_clothing": "பத்திக் ஆடைகள்"
            ,
                "addalaichenai": "அட்டளைச்சேனை",
                "akmeemana": "அக்மீமன",
          
                "addalaichenai_17": "அட்டளைச்சேனை 17",
                "nugaduuwa": "நுகதுவ",
         //iron and gols page 

          "ironGoldPageTitle": "இரும்பு மற்றும் தங்கம் தொடர்பான தயாரிப்பு திட்டங்கள்",
    
            "malagala_iron": "மலகல இரும்பு வேலைப்பாடுகள் கிளஸ்டர்",
            "iron_cluster_desc": "உலோகம் மற்றும் இரும்பு உற்பத்திக்கான தொழில்துறை மேம்பாட்டு கிளஸ்டர்"
         ,
            "iron_goods": "இரும்பு தயாரிப்புகள் (கிரில்ஸ், கேட்டுகள், பூங்கா இருக்கைகள்)",
    
            "colombo": "கொழும்பு",
 
            "padukka": "பாதுக்கை",
     
            "malagala_loc": "மலகல, உடுமுல்ல",
     //sweet page

              "sweetFoodsPageTitle": "இனிப்பு மற்றும் பாரம்பரிய உணவு தொடர்பான திட்டங்கள்",
            
                "sweets_village": "இனிப்பு உற்பத்தி கிராம அபிவிருத்தி திட்டம்",
                "karadagama_sweets": "கறதகம இனிப்பு உணவு கூட்டுறவுச் சங்கம்"
        ,
                "sweets": "பாரம்பரிய இனிப்புகள் மற்றும் தின்பண்டங்கள்",
        
                "badalkumbura": "பதல்கும்புர",
          
                "karadagama": "கறதகம",
       //wooden project

        "woodenPageTitle": "மரத்தளபாடங்கள் மற்றும் தச்சுத் தொழில் திட்டங்கள்",
   
          "wooden_furniture_cluster": "மரத்தளபாடத் தொழில் கிளஸ்டர் அபிவிருத்தி",
          "moratuwa_furniture": "மொரட்டுவ மரத்தளபாடங்கள் கிளஸ்டர்"
,
          "wooden_furniture": "மரத்தளபாடங்கள் (வீடு மற்றும் அலுவலகம்)"
    ,
          "moratuwa": "மொரட்டுவ",
  
          "moratuwa_cluster_loc": "கோරලவெல்ல (கிழக்கு, வடக்கு, மேற்கு, தெற்கு), கட்டுக்குருந்த (வடக்கு, தெற்கு), எகொட உயன (வடக்கு, மத்திய, தெற்கு)"
        ,
        //road development page
     
          "roadDevelopmentPageTitle": "கிராமப்புற வீதி உட்கட்டமைப்பு மேம்பாடு",
         
          "amountLabel": "மதிப்பிடப்பட்ட செலவு",
         
            "kandy": "கண்டி",
            "matara": "மாத்தறை"
        ,
            "pathahewaheta": "பாதஹேவாஹெட்ட",
            "naula": "நாவுல",
            "puhulwella": "கிரிந்த புஹுல்வெல்ல"
       ,
            "salava_west": "சாலாவ மேற்கு",
            "ankanda": "அங்கந்த",
            "bawlana": "பவ்லன",
            "lihinipitiya": "லிகினிபிட்டிய",
            "morawadiya": "மொரவெடிய",
            "walakanda_south": "வல்கந்த தெற்கு",
      
            "transport_facilities": "போக்குவரத்து வசதிகள்",
            "road_dev": "வீதி அபிவிருத்தி",
            "bridge_dev": "பாலம் புனரமைப்பு",
            "canal_dev": "கால்வாய் அபிவிருத்தி",
            "concrete_paving": "கொன்கிரீட் வீதி",
            "dothal_oya_name": "தோதல் ஓயா வாயில் முதல் ஐம்பது ஏக்கர் வீதி திட்டம்",
            "ankanda_bridge_name": "அங்கந்த திக்கல பாலம் புனரமைப்பு",
            "bawlana_sarvodaya_name": "சர்வோதய வீதி அபிவிருத்தி",
            "bawlana_bus_road_name": "பவ்லன பஸ் நிறுத்தம் முதல் தெல்தோட்டை வீதி",
            "kalulella_road_name": "கலுலெல்ல வீதி அபிவிருத்தி",
            "lihinipitiya_main_road_name": "லிகினிபிட்டிய பிரதான வீதி அபிவிருத்தி",
            "lihinipitiya_canal_name": "லிகினிபிட்டிய பிரதான கால்வாய் அபிவிருத்தி",
            "bandarakanda_road_name": "பண்டாரகந்த-துங்கதோல வீதி அபிவிருத்தி",
            "kosgahahena_road_name": "கொஸ்கஹஹேன வீதி அபிவிருத்தி",
            "kumara_house_road_name": "டைகர் லேண்ட் வீதி (கொன்கிரீட்)",
            "ella_community_hall_name": "எல்ல முதல் சமூக மண்டபம் வரையிலான வீதி",
            "kajuvetiya_side_road_name": "எல்ல இஹல கஜுவெட்டிய பக்க வீதி",
            "deniyamulla_road_name": "தெனியமுல்ல வீதி அபிவிருத்தி",
            "dehigahahena_road_name": "தெஹிகஹஹேன முதல் தோட்டம் வரையிலான வீதி",
            "preschool_road_name": "எல்ல மேல் பாலர் பாடசாலை வீதி",
            "gepalawatta_culvert_name": "கெப்பலவத்த வீதி மதகு",
            "enasal_wattha_road_name": "ஏலக்காய் தோட்ட வீதி (கொன்கிரீட்)",
            "shirani_house_culvert_name": "தொல இஹல வீதி பெட்டி மதகுகள்",
            "punchi_dehigahahena_name": "எல்ல இஹல புஞ்சி தெஹிகஹ ஹேன வீதி",
            "pitikumbura_road_name": "பிட்டிகும்பர வீதி அபிவிருத்தி",
            "pindeniya_road_name": "பிந்தெனிய வீதி அபிவிருத்தி",

            "service": "சேவை",

    //sanitary facilities....
 
      "sanitaryPageTitle": "சுகாதார மற்றும் நீர் வழங்கல் திட்டங்கள்",
   
   
        "drinking_water": "குடிநீர் வசதிகள்",
        "sanitary_facilities": "சுகாதார வசதிகள்"
    ,
        "batticaloa": "மட்டக்களப்பு",
   
        "koralaipattu_south": "கோரளைப்பற்று தெற்கு",
     
        "murutthanai": "முருத்தனை",
        "ganthuna_medagama": "58G கந்துன மேதகம"
     ,
        "murutthanai_water_name": "மின்மினுட்டவேளி மற்றும் அக்குறானை சமூக நீர் வழங்கல் திட்டம்",
        "murutthanai_water_short": "முருத்தனை நீர் வழங்கல் திட்டம்",
        "murutthanai_toilet_name": "முருத்தனை கழிப்பறை நிர்மாணத் திட்டம்",
        "murutthanai_toilet_short": "கழிப்பறை நிர்மாணத் திட்டம்",
        "aranayake_toilet_name": "குறைந்த வருமானம் பெறும் குடும்பங்களுக்கான கழிப்பறை வசதிகள் - அரநாயக்க",
        "aranayake_toilet_short": "குறைந்த வருமான சுகாதாரத் திட்டம்"
      ,
      //tuarism page
      
        "tourismPageTitle": "சுற்றுலா உட்கட்டமைப்பு திட்டங்கள்",
        
          "food_beverage": "உணவு மற்றும் பானங்கள் வழங்குதல்",
          "tourism_industry": "சுற்றுலாத்துறை அபிவிருத்தி",
          "tourism_promotion": "சுற்றுலா ஊக்குவிப்பு",
        "hambantota": "அம்பாந்தோட்டை",
     "angunakolapelessa": "அங்குணகொலபெலஸ்ஸ",
    
          "alkaduwa": "அல்கடுவ வத்தை",
          "angunakolapelessa_lake": "அங்குணகொலபெலஸ்ஸ ஏரிக்கரை",
          "maduragama": "68 C மதுரகம"
       ,
          "sembuwatta_name": "செம்புவத்தை தேயிலை தொழிற்சாலையின் தரைதளத்தை உணவகமாக புனரமைத்தல்",
          "sembuwatta_short": "தேயிலை தொழிற்சாலை உணவக புனரமைப்பு",
          "angunakolapelessa_name": "அங்குணகொலபெலஸ்ஸ ஏரியை ஒட்டிய பலநோக்கு அபிவிருத்தி திட்டம்",
          "angunakolapelessa_short": "ஏரிக்கரை பலநோக்கு திட்டம்",
          "ella_promotion_name": "சுற்றுலாப் பயணிகளுக்கு உணவு மற்றும் பானங்களை வழங்குதல் மற்றும் விற்பனை நிலையங்களை மேம்படுத்துதல்",
          "ella_promotion_short": "சுற்றுலா விற்பனை நிலைய மேம்பாடு",
        
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
  // Load saved language from localStorage, or default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || "en";
  });

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("preferredLanguage", lang); // ✅ Save choice
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};