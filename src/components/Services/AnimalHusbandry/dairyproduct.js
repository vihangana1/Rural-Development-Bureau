import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/Animal husbandry/dairyproduct/id01/image1.jpg";
import image2 from "../../../assets/services/Animal husbandry/dairyproduct/id01/image2.jpg";
import image3 from "../../../assets/services/Animal husbandry/dairyproduct/id01/image3.jpg";

import image4 from "../../../assets/services/Animal husbandry/dairyproduct/id02/image1.jpg";
import image5 from "../../../assets/services/Animal husbandry/dairyproduct/id02/image2.jpg";

import image6 from "../../../assets/services/Animal husbandry/dairyproduct/id03/image1.jpg";
import image7 from "../../../assets/services/Animal husbandry/dairyproduct/id03/image2.jpg";

import image8 from "../../../assets/services/Animal husbandry/dairyproduct/id04/image1.jpg";
import image9 from "../../../assets/services/Animal husbandry/dairyproduct/id04/image2.jpg";
import image10 from "../../../assets/services/Animal husbandry/dairyproduct/id04/image3.jpg";
import image11 from "../../../assets/services/Animal husbandry/dairyproduct/id04/image4.jpg";

const dairyProjects = [
  {
    id: 1,//rechecked
    name: "Income Generation through Goat Rearing ",
    district: "Ampara",
    office: "irakkamam",
    product: "Goat Milk",
    images: [image1, image2, image3], 
    location: "Varippattanchenai 01,02,03 / Irakkamam 01,02,03,04,05,06,07,08,09",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.7214514!3d7.232003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sVarippattanchenai%2001%2C02%2C03%20%2F%20Irakkamam%2001%2C02%2C03%2C04%2C05%2C06%2C07%2C08%2C09!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    description:
      "Income Generation through Goat Rearing Project has been approved for implementation in the Irakkamam 1,2,3,4,5,6,7,8,9, Varipathanchenai 1,2,3 Grama Niladhari Divisions of Irakkamam Divisional Secretariat Division in Ampara District under the Rural Development Programme- 2025. A sum of Rs 9,993,750.00 has been allocated for this project to raise livelihood income for 100 beneficiaries",  
    },
    {
      id: 2,//recheacked
      name: "Livelihood Support for Diary Farmers through Cattle Farming, Milk Production and Value Addition",
      district: "Ampara ",
      office: "Akkarapaththu",
      product: "Fresh Milk",
      location: "Pallikudiyiruppu 01 and 02, Urban Division 03,04,05, Pattiyadipitty, Isanganiseemai, Akkarapattu 02,11,18 and 20, Alim Nagar",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sPallikudiyiruppu%2001%20and%2002%2C%20Urban%20Division%2003%2C04%2C05%2C%20Pattiyadipitty%2C%20Isanganiseemai%2C%20Akkarapattu%2002%2C11%2C18%20and%2020%2C%20Alim%20Nagar!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
      // buyPath: "/buy/niyamgamdora-dairy",
      images: [image4, image5], 
      description:
        "Livelihood Support for Diary Farmers through Cattle Farming, Milk Production and Value Addition Project has been approved for Allocation of Rs 8,456,250.00 in Town Division 03, 04 and 05, Akkaraipattu- 02, 11, 18 and 20, Paddiyadipitty, Pallikudiruppu - 01 and 02, Issenganicheemai, Alim Nagar  Grama Nilashri Divisions of Akkaraipattu Divisional Secretariat Division in Ampara District under the Rural Development Programme -2025. This project is aimed to promote an alternative livelihood to increase the income of 40 beneficiaries by encouraging dairy farming and milk based products and contributes to reduce poverty in Akkaraipattu Divisional Secretariat Division.", 
    },  
    {
      id: 3,//cheacked
      district: "Ampara ",
      office: "Navindaveli",
      product: "Fresh Milk, yogurt, skimmed milk, ghee, butter",
      location: "Salamwakeni -05",
      images: [image6, image7], 
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sSalamwakeni%20-%2005!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
      // buyPath: "/buy/niyamgamdora-dairy",
      description:
        "Under the Rural Development Programme -2025, the Sustainable Dairy Livelihoods Empowering Communities thought Milk and Value-Added Production is implemented in Chalambaikeny 05 Grama Niladhari Division of  Navithanveli Divisional Secretariat Division in Ampara District. Total Allocation of Rs 2,649,625.00 has been approved for this project. Main object of this project is to enhance rural livelihoods by promoting sustainable dairy farming through the provision of dairy cows, establishing milk collection systems and supporting the production and marketing of value- added dairy products to increase household incomes, improving nutrition and creating local employment opportunities. 15 beneficiaries are selected under this project"
    }, 
    {
      id: 4,//cheacked
      district: "Kalutara",
      office: "Palinda Nuwara",
      product: "Goat Milk",
      location: "Walakada,Peladha",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2511092!3d6.5986099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c891bdffea0f%3A0x1629136852c0eb13!2sWalakada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
      // buyPath: "/buy/niyamgamdora-dairy",
      images: [image8, image9, image10,image11], 
      description:
        "Photographs of the awareness program of the Goat Rearing Project expected to be implemented in the Walakada, pelada  Grama Niladhari Division of the Palindanuwara Divisional Secretariat Division in Kaluthara District.(Allocation - 1,981,940.00)"
    },       
  {
    id: 5,
    district: "Maha Nuwara",
    office: "Madadumbara",
    product: "Fresh Milk",
    location: "802-Kandekubura",
    mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.84781234527!2d80.640724!3d7.2988922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMahanuwara%2C%20Madadumbara%2C%20802%2C%20Kandekubura!5e0!3m2!1sen!2slk!4v1695470000000",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 

    description:
          "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 6,
    district: "Maha Nuwara",
    office: "Gaga Ihala Korale",
    product: "Goat Milk",
    location: "Udahenthenna,Athgala North,Thebiligala,Ulapane North",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.951248420939!2d80.5264952!3d7.4099973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3415bb51230eb%3A0xb726b29dfcb059d8!2sUdahena!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 7,
    district: "Nuwara Eliya ",
    office: "Haguranketha",
    product: "Fresh Milk",
    location: "Labuhena, Poramadulla, Hapugasdeniya, Akiriya, 499 E Bambaragama East, Madumana, Daraoya, Rookwood, Kitulpe, Bowala, Diggalpottha, Kosgahadebala, Mulooya, Kirimetiya, Karamidula, Hopewatte",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6308567!3d7.1396014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sLabuhena%2C%20Poramadulla%2C%20Hapugasdeniya%2C%20Akiriya%2C%20499%20E%20Bambaragama%20East%2C%20Madumana%2C%20Daraoya%2C%20Rookwood%2C%20Kitulpe%2C%20Bowala%2C%20Diggalpottha%2C%20Kosgahadebala%2C%20Mulooya%2C%20Kirimetiya%2C%20Karamidula%2C%20Hopewatte!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 8,
    district: "Maha Nuwara",
    office: "Gaga Ihala Korale",
    product: "Goat Milk",
    location: "Udahenthenna,Athgala North,Thebiligala,Ulapane North",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.951248420939!2d80.5264952!3d7.4099973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3415bb51230eb%3A0xb726b29dfcb059d8!2sUdahena!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 9,
    district: "Maha Nuwara",
    office: "Kotmale West",
    product: "Goat Milk",
    location: "560 D Dambagolla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.314248420939!2d80.5724434!3d7.7560549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcb3c5240a5cc1%3A0x8957f51f3c82b9f7!2s560%20Ananda%20Rajakaruna%20Mawatha%2C%20",   
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  
  {
    id: 10,
    district: "Ampara ",
    office: "Akkarapaththu",
    product: "Fresh Milk",
    location: "Pallikudiyiruppu 01 and 02, Urban Division 03,04,05, Pattiyadipitty, Isanganiseemai, Akkarapattu 02,11,18 and 20, Alim Nagar",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sPallikudiyiruppu%2001%20and%2002%2C%20Urban%20Division%2003%2C04%2C05%2C%20Pattiyadipitty%2C%20Isanganiseemai%2C%20Akkarapattu%2002%2C11%2C18%20and%2020%2C%20Alim%20Nagar!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 9,
    district: "Ampara ",
    office: "Navindaveli",
    product: "Fresh Milk, yogurt, skimmed milk, ghee, butter",
    location: "Salamwakeni -05",
    images: [image1, image2, image3], 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sSalamwakeni%20-%2005!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 9,
    district: "Rathnapura",
    office: "Rathnapura",
    product: "Fresh Milk",
    location: "Garubevilagama",
    images: [image1, image2, image3], 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.5702794!3d6.68104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x2a78afff5d7ac533!2sGurubevilagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 10,
    district: "Rathnapura",
    office: "Weligepola",
    product: "Fresh Milk",
    location: "Galpaya, Bambaragala, Mutthettupala, Pusthota, Wadawalalanda",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.4260671!3d6.6810122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sGalpaya%2C%20Bambaragala%2C%20Mutthettupala%2C%20Pusthota%2C%20Wadawalalanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 11,
    district: "Kurunegala",
    office: "Polpithigama",
    product: "Fresh Milk",
    location: "Kambuwatana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3223302!3d7.9295373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc6d1f15193a5%3A0xee10ae7438c856d2!2sKambuwatawana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 12,
    district: "Kurunegala",
    office: "Galgamuwa",
    product: "Fresh Milk",
    location: "Kurundewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2605848!3d7.9581104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc33415f2f665%3A0x6f9dff9d1237813c!2sKurundewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 13,
    district: "Kurunegala",
    office: "Galgamuwa",
    product: "Fresh Milk",
    location: "Kurundewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2605848!3d7.9581104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc33415f2f665%3A0x6f9dff9d1237813c!2sKurundewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 14,
    district: "Kurunegala",
    office: "Polpiothigama",
    product: "Fresh Milk",
    location: "Thalawa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2944933!3d8.1900096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcedf9d85c96bd%3A0xb53d8bf926490bff!2sThalawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 15,
    district: "Kurunegala",
    office: "Panduwasnuwara East",
    product: "Fresh Milk",
    location: "Bodhimulla",
    images: [image1, image2, image3], 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 16,
    district: "Kurunegala",
    office: "Polgahwela ",
    product: "Fresh Milk",
    location: "Panaliya, Sunilagama, Wellawa",
    images: [image1, image2, image3], 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3251648!3d7.3313319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3162850bac313%3A0x9e467abb2a9a97a1!2sPanaliya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 17,
    district: "Kurunegala",
    office: "Weerambugedara ",
    product: "Fresh Milk",
    location: "854 - Godavita",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3251648!3d7.3313319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3162850bac313%3A0x9e467abb2a9a97a1!2sPanaliya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 18,
    district: "Puththalama",
    office: "Anamaduwa ",
    product: "Fresh Milk",
    location: "Divulwewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3831212!3d8.2568378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf3be773ec0c9%3A0x67e8025f85df3d0d!2sDivulwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 19,
    district: "Puththalama",
    office: "Karuwalagaswewa",
    product: "Fresh Milk",
    location: "Pahariya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3831212!3d8.2568378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf3be773ec0c9%3A0x67e8025f85df3d0d!2sDivulwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 20,
    district: "Vavuniya",
    office: "Vavuniya North",
    product: "Fresh Milk",
    location: "Padhikudiruppu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0863254!3d9.6213955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sPadhikudiruppu!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 21,
    district: "Matara",
    office: "Athuraliya",
    product: "Goat Milk",
    location: "Godapitiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4790387!3d6.1219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae142ee3e74dc1b%3A0x66e19cc3e7b0a4e!2sGodapitiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 22,
    district: "Vavuniya",
    office: "Vavuniya North",
    product: "Fresh Milk",
    location: "Padhikudiruppu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4392314!3d8.7074021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sPadhikudiruppu!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 24,
    district: "Monaragala",
    office: "Buttala",
    product: "Fresh Milk",
    location: "Uda Arawa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0708344!3d6.8245873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae44156822e8b51%3A0x895350e882e646cf!2sButtala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 25,
    district: "Badulla",
    office: "Welimada",
    product: "Fresh Milk",
    location: "58A Katakaella",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8964416!3d6.8942342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47be640e7a3f3%3A0xf86a0d5993aefe9d!2sWelimada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 26,
    district: "Badulla",
    office: "Welimada",
    product: "Fresh Milk",
    location: "50J Bibiligamuwa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8355739!3d6.8624185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s50J%20-%20Bibiligamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 27,
    district: "Polonnaruwa",
    office: "Welikanda",
    product: "Fresh Milk",
    location: "282 Mahindagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8355739!3d6.8624185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s50J%20-%20Bibiligamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 28,
    district: "Polonnaruwa",
    office: "Lankapura",
    product: "Animal feed (dairy cattle management) and Fresh milk",
    location: "137 Sungawila",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d81.0802602!3d8.0723165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s137%20-%20Sungawila!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },
  {
    id: 29,
    district: "Polonnaruwa",
    office: "Thamankaduwa",
    product: "Agryculture",
    location: "202 Monaratenna",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.8391111!3d7.8617909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb4ff5e313ccd1%3A0x1f696111d1d3cd54!2sThamankaduwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    // buyPath: "/buy/niyamgamdora-dairy",
    images: [image1, image2, image3], 
    description:
      "This zone promotes dairy farming in Niyamgamdora with improved feed, veterinary support, and cold chain logistics. It connects producers to hotels and wellness markets.",  },



  
];



const DairyProductPage = () => {
  const [selectedProject, setSelectedProject] = useState(dairyProjects[0]);
  const scrollTargetRef = useRef(null);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Dairy Product Related Projects</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              {/* <th className="px-4 py-2 border">Buy Product</th> */}
            </tr>
          </thead>
          <tbody>
            {dairyProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                {/* <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#F3931D]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Betel Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#896C6C] mb-2">
            {selectedProject.name}
          </h2>

          <p className="text-sm text-gray-700 mb-4">
            {selectedProject.description}
          </p>

          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
            {selectedProject.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyProductPage;