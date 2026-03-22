import { FaGithub, FaLinkedin, FaRobot, FaFlask, FaCode, FaChartLine, FaBolt, FaSearchPlus, FaDatabase, FaPlug, FaServer, FaEye } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiLangchain,
  SiDocker,
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiSqlite,
  SiFastapi,
  SiGit,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { useRef, useEffect, useState } from "react";

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations = {
  EN: {
    nav: {
      home: "Home",
      techStack: "Tech Stack",
      projects: "Projects",
      aiSystems: "AI & Systems",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      subtitle: "Software Engineering Student | AI & Web",
      desc: "I craft intelligent digital solutions at the intersection of AI and real-world impact. Driven by a passion for healthcare technologies and modern web systems, I transform complex problems into scalable, user-centered innovations.",
    },
    techSection: {
      title: "TECH STACK & AI EXPERTISE",
      intro:
        "Tools and technologies I use across AI, backend, web, and DevOps—aligned with my projects, coursework, and continuous learning. Each card highlights where that skill fits in my stack.",
    },
    projects: {
      title: "PROJECTS",
      viewDetails: "View Details →",
      viewDemo: "🚀 View Demo",
      close: "Close",
    },
    rdSection: {
      title: "INTELLIGENT SYSTEMS & AI ENGINEERING",
      intro:
        "Designing intelligent systems, autonomous technologies, and AI-driven engineering solutions for real-world applications.",
    },
    certificates: {
      title: "CERTIFICATES",
      intro:
        "Selected credentials and programs. Hover to preview; click for issuer details and what each experience added.",
      issuedBy: "Issued by",
    },
    contact: {
      title: "CONTACT",
      intro: "Open to internships, collaborations, and interesting engineering challenges.",
      university: "Istanbul Health and Technology University",
    },
    projectData: [
      {
        title: "AI Check-Up System",
        desc: "AI-powered clinical decision support system for early diagnosis and personalized patient analysis.",
        detail: "Analyzes patient symptoms and medical data to generate personalized check-up recommendations.",
        impact: "Improved early diagnosis accuracy by leveraging AI-driven patient analysis.",
      },
      {
        title: "Navicane",
        desc: "Smart navigation assistant enabling visually impaired individuals to move safely using real-time AI guidance.",
        detail: "Assistive navigation system with real-time obstacle detection.",
        impact: "Enhanced navigation safety for visually impaired users through real-time obstacle detection.",
      },
      {
        title: "Disaster Relief Platform",
        desc: "Smart platform designed to coordinate emergency aid and optimize resource distribution during critical situations.",
        detail: "Platform for managing aid requests and donations.",
        impact: "Optimized aid distribution and reduced response delays in emergency scenarios.",
      },
      {
        title: "AI-Assisted Configuration Orchestrator",
        desc: "AI-driven automation system that simplifies complex configurations through intelligent and adaptive workflows.",
        detail: "Automates system configurations using natural language.",
        impact: "Reduced manual configuration time by automating microservice setup using AI.",
      },
      {
        title: "Sorting Algorithm Energy Analysis",
        desc: "Analytical framework exploring performance efficiency and energy consumption of sorting algorithms in modern systems.",
        detail: "Analyzes sorting algorithms based on time and energy usage.",
        impact: "Identified energy-efficient algorithms by analyzing performance and computational cost.",
      },
    ],
    rdData: [
      {
        title: "Autonomous & Intelligent Systems",
        desc: "Designing AI-driven systems capable of real-time perception, decision-making, and adaptive behavior in dynamic environments.",
      },
      {
        title: "AI & Decision Systems",
        desc: "Developing data-driven and AI-based decision support systems for complex and mission-critical applications.",
      },
      {
        title: "Embedded & Real-Time Systems",
        desc: "Exploring embedded systems, real-time processing, and hardware-integrated AI solutions for high-performance environments.",
      },
    ],
    certData: [
      {
        shortTitle: "Temel Roketçilik e-Kitabı",
        institution: "T.C. Presidency of Defense Industries — Defense Industries Academy",
        takeaway:
          "I completed the Basic Rocketry e-Book training within the Career Development Module and National Competency Initiative, which contributed to improving my knowledge and skills in the defense industry.",
      },
      {
        shortTitle: "AI Awareness Training",
        institution: "T.C. Presidency of Defense Industries — Defense Industries Academy",
        takeaway:
          "Through AI awareness training, I learned fundamental concepts and took an important step toward strengthening both my personal and professional competencies.",
      },
      {
        shortTitle: "Career & Competency Meetings",
        institution: "Defense Industries Academy — National Competency Initiative",
        takeaway:
          "By participating in the Career and Competency Meetings organized within the National Competency Initiative, I gained current perspectives focused on career and competency in the defense industry ecosystem.",
      },
      {
        shortTitle: "GenAI — Technology Series",
        institution: "Garanti BBVA Genç — New Generation Career School",
        takeaway:
          "I completed all modules of the technology-focused training series held on December 17–19, enhancing my knowledge in modern career competencies and technology.",
      },
      {
        shortTitle: "Technology Series-GenAI",
        institution: "Garanti BBVA Genç — New Generation Career School",
        takeaway:
          "By attending the GenAI (Generative AI) training in the Technology Series, I developed my core competencies in this field and my perspective on current applications.",
      },
      {
        shortTitle: "Basic Machine Learning",
        institution: "Garanti BBVA Genç — New Generation Career School",
        takeaway:
          "With the Basic Machine Learning training in the Technology Series, I consolidated the fundamental principles of ML and built a stronger foundation for my data science and AI projects.",
      },
      {
        shortTitle: "Think Tech",
        institution: "Coderspace",
        takeaway:
          "By attending the Think Tech event held on December 11–12, 2025, I had the opportunity to follow the latest developments in the technology world and become part of the ecosystem.",
      },
      {
        shortTitle: "Women in Tech",
        institution: "Coderspace",
        takeaway:
          "At the Women in Tech: Inspiring Women Stories event organized by Coderspace on March 10–11, 2026, I listened to inspiring stories of women in technology and increased my awareness of diversity and inclusion in the industry.",
      },
      {
        shortTitle: "CODE GENIUS",
        institution: "TalentCoders.co — CODE GENIUS",
        takeaway:
          "I participated in the CODE GENIUS event where experts from leading technology companies in the industry met with students, gaining experience in a code and collaboration-focused environment; verified by participation certificate (TC55189FC22).",
      },
    ],
  },
  TR: {
    nav: {
      home: "Ana Sayfa",
      techStack: "Teknoloji",
      projects: "Projeler",
      aiSystems: "YZ & Sistemler",
      certificates: "Sertifikalar",
      contact: "İletişim",
    },
    hero: {
      subtitle: "Yazılım Mühendisliği Öğrencisi | YZ & Web",
      desc: "Yapay zeka ile gerçek dünya etkisinin kesiştiği noktada akıllı dijital çözümler üretiyorum. Sağlık teknolojileri ve modern web sistemlerine duyduğum tutku ile karmaşık sorunları ölçeklenebilir, kullanıcı odaklı yeniliklere dönüştürüyorum.",
    },
    techSection: {
      title: "TEKNOLOJİ YIĞINI & YZ UZMANLIKLARI",
      intro:
        "YZ, backend, web ve DevOps alanlarında kullandığım araç ve teknolojiler; projelerimle, derslerimle ve sürekli öğrenme sürecimle örtüşüyor. Her kart, o becerinin yığınımda nereye oturduğunu gösteriyor.",
    },
    projects: {
      title: "PROJELER",
      viewDetails: "Detayları Gör →",
      viewDemo: "🚀 Demoyu Gör",
      close: "Kapat",
    },
    rdSection: {
      title: "AKILLI SİSTEMLER & YZ MÜHENDİSLİĞİ",
      intro:
        "Gerçek dünya uygulamaları için akıllı sistemler, otonom teknolojiler ve yapay zeka odaklı mühendislik çözümleri tasarlıyorum.",
    },
    certificates: {
      title: "SERTİFİKALAR",
      intro:
        "Seçilmiş sertifikalar ve programlar. Önizlemek için üzerine gelin; veren kurum ve her deneyimin katkısı için tıklayın.",
      issuedBy: "Veren Kurum",
    },
    contact: {
      title: "İLETİŞİM",
      intro: "Staj, iş birliği ve ilgi çekici mühendislik projelerine açığım.",
      university: "İstanbul Sağlık ve Teknoloji Üniversitesi",
    },
    projectData: [
      {
        title: "YZ Sağlık Kontrol Sistemi",
        desc: "Erken tanı ve kişiselleştirilmiş hasta analizi için yapay zeka destekli klinik karar destek sistemi.",
        detail: "Hasta semptomlarını ve tıbbi verileri analiz ederek kişiselleştirilmiş kontrol önerileri üretir.",
        impact: "YZ odaklı hasta analizi kullanarak erken tanı doğruluğunu artırdı.",
      },
      {
        title: "Navicane",
        desc: "Görme engelli bireylerin gerçek zamanlı YZ rehberliğiyle güvenli hareket etmesini sağlayan akıllı navigasyon asistanı.",
        detail: "Gerçek zamanlı engel tespitli yardımcı navigasyon sistemi.",
        impact: "Gerçek zamanlı engel tespiti sayesinde görme engelli kullanıcılar için navigasyon güvenliğini artırdı.",
      },
      {
        title: "Afet Yardım Platformu",
        desc: "Kritik durumlarda acil yardımı koordine etmek ve kaynak dağılımını optimize etmek için tasarlanmış akıllı platform.",
        detail: "Yardım taleplerini ve bağışları yönetmek için platform.",
        impact: "Acil senaryolarda yardım dağılımını optimize etti ve yanıt gecikmelerini azalttı.",
      },
      {
        title: "YZ Destekli Yapılandırma Orkestratörü",
        desc: "Akıllı ve uyarlanabilir iş akışlarıyla karmaşık yapılandırmaları basitleştiren yapay zeka odaklı otomasyon sistemi.",
        detail: "Doğal dil kullanarak sistem yapılandırmalarını otomatikleştirir.",
        impact: "YZ kullanarak mikro hizmet kurulumunu otomatikleştirerek manuel yapılandırma süresini azalttı.",
      },
      {
        title: "Sıralama Algoritması Enerji Analizi",
        desc: "Modern sistemlerde sıralama algoritmalarının performans verimliliğini ve enerji tüketimini inceleyen analitik çerçeve.",
        detail: "Sıralama algoritmalarını zaman ve enerji kullanımına göre analiz eder.",
        impact: "Performans ve hesaplama maliyetini analiz ederek enerji verimli algoritmaları belirledi.",
      },
    ],
    rdData: [
      {
        title: "Otonom & Akıllı Sistemler",
        desc: "Dinamik ortamlarda gerçek zamanlı algılama, karar verme ve uyarlanabilir davranış yeteneğine sahip YZ odaklı sistemler tasarlıyorum.",
      },
      {
        title: "YZ & Karar Sistemleri",
        desc: "Karmaşık ve kritik görev uygulamaları için veri odaklı ve YZ tabanlı karar destek sistemleri geliştiriyorum.",
      },
      {
        title: "Gömülü & Gerçek Zamanlı Sistemler",
        desc: "Yüksek performanslı ortamlar için gömülü sistemleri, gerçek zamanlı işlemeyi ve donanım entegre YZ çözümlerini araştırıyorum.",
      },
    ],
    certData: [
      {
        shortTitle: "Temel Roketçilik e-Kitabı",
        institution: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı — Savunma Sanayii Akademisi",
        takeaway:
          "Kariyer Gelişim Modülü ve Milli Yetkinlik Hamlesi çerçevesindeki Temel Roketçilik e-Kitabı eğitimini tamamladım; savunma sanayii odaklı içerikle ilgili alandaki bilgi ve becerilerimi geliştirmeme katkı sağladı.",
      },
      {
        shortTitle: "Yapay Zeka Farkındalığı",
        institution: "T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı — Savunma Sanayii Akademisi",
        takeaway:
          "Yapay zekâ farkındalığı eğitimiyle temel kavramları öğrenerek hem kişisel hem profesyonel yetkinliklerimi güçlendirme yolunda önemli bir adım attım.",
      },
      {
        shortTitle: "Kariyer & Yetkinlik Buluşmaları",
        institution: "Savunma Sanayii Akademisi — Milli Yetkinlik Hamlesi",
        takeaway:
          "Milli Yetkinlik Hamlesi kapsamında düzenlenen Kariyer ve Yetkinlik Buluşmaları'na katılarak savunma sanayii ekosisteminde kariyer ve yetkinlik odaklı güncel perspektifler edindim.",
      },
      {
        shortTitle: "GenAI — Teknoloji Serisi",
        institution: "Garanti BBVA Genç — Yeni Nesil Kariyer Okulu",
        takeaway:
          "17–19 Aralık'ta gerçekleşen teknoloji odaklı eğitim serisinin tüm modüllerini tamamlayarak modern kariyer yetkinlikleri ve teknoloji alanında bilgi birikimimi artırdım.",
      },
      {
        shortTitle: "Teknoloji Serisi-GenAI",
        institution: "Garanti BBVA Genç — Yeni Nesil Kariyer Okulu",
        takeaway:
          "Teknoloji Serisi kapsamındaki GenAI (Üretken Yapay Zeka) eğitimine katılarak bu alandaki temel yetkinliklerimi ve güncel uygulamalara dair bakış açımı geliştirdim.",
      },
      {
        shortTitle: "Temel Makine Öğrenmesi",
        institution: "Garanti BBVA Genç — Yeni Nesil Kariyer Okulu",
        takeaway:
          "Teknoloji Serisi kapsamındaki Temel Makine Öğrenmesi eğitimiyle ML'in temel prensiplerini pekiştirip veri bilimi ve yapay zekâ projelerime daha sağlam bir temel kazandım.",
      },
      {
        shortTitle: "Think Tech",
        institution: "Coderspace",
        takeaway:
          "11–12 Aralık 2025'te düzenlenen Think Tech etkinliğine katılarak teknoloji dünyasındaki güncel gelişmeleri takip etme ve ekosisteme dahil olma fırsatı buldum.",
      },
      {
        shortTitle: "Women in Tech",
        institution: "Coderspace",
        takeaway:
          "10–11 Mart 2026 tarihlerinde Coderspace'in düzenlediği Women in Tech: Inspiring Women Stories etkinliğinde teknoloji alanında ilham verici kadın hikâyelerini dinleyerek sektörde çeşitlilik ve kapsayıcılık üzerine farkındalığımı artırdım.",
      },
      {
        shortTitle: "CODE GENIUS",
        institution: "TalentCoders.co — CODE GENIUS",
        takeaway:
          "Sektörün önde gelen teknoloji firmalarından uzmanların öğrencilerle buluştuğu CODE GENIUS etkinliğine katılarak kod ve iş birliği odaklı bir ortamda deneyim kazandım; katılım sertifikası (TC55189FC22) ile doğrulanır.",
      },
    ],
  },
  DE: {
    nav: {
      home: "Startseite",
      techStack: "Tech-Stack",
      projects: "Projekte",
      aiSystems: "KI & Systeme",
      certificates: "Zertifikate",
      contact: "Kontakt",
    },
    hero: {
      subtitle: "Software-Engineering-Studentin | KI & Web",
      desc: "Ich entwickle intelligente digitale Lösungen an der Schnittstelle von KI und realem Nutzen. Angetrieben von einer Leidenschaft für Gesundheitstechnologien und moderne Websysteme verwandle ich komplexe Probleme in skalierbare, nutzerzentrierte Innovationen.",
    },
    techSection: {
      title: "TECH-STACK & KI-EXPERTISE",
      intro:
        "Werkzeuge und Technologien, die ich in KI, Backend, Web und DevOps einsetze – abgestimmt auf meine Projekte, mein Studium und kontinuierliches Lernen. Jede Karte zeigt, wo diese Fähigkeit in meinem Stack angesiedelt ist.",
    },
    projects: {
      title: "PROJEKTE",
      viewDetails: "Details ansehen →",
      viewDemo: "🚀 Demo ansehen",
      close: "Schließen",
    },
    rdSection: {
      title: "INTELLIGENTE SYSTEME & KI-ENGINEERING",
      intro:
        "Entwicklung intelligenter Systeme, autonomer Technologien und KI-gesteuerter Ingenieurlösungen für reale Anwendungen.",
    },
    certificates: {
      title: "ZERTIFIKATE",
      intro:
        "Ausgewählte Abschlüsse und Programme. Zum Vorschauen hovern; zum Anzeigen von Aussteller und Mehrwert klicken.",
      issuedBy: "Ausgestellt von",
    },
    contact: {
      title: "KONTAKT",
      intro: "Offen für Praktika, Kooperationen und interessante Engineering-Herausforderungen.",
      university: "Istanbul Gesundheits- und Technologieuniversität",
    },
    projectData: [
      {
        title: "KI-Gesundheits-Check-System",
        desc: "KI-gestütztes klinisches Entscheidungsunterstützungssystem für Frühdiagnose und personalisierte Patientenanalyse.",
        detail: "Analysiert Patientensymptome und medizinische Daten zur Erstellung personalisierter Check-up-Empfehlungen.",
        impact: "Verbesserte Frühdiagnosegenauigkeit durch KI-gesteuerte Patientenanalyse.",
      },
      {
        title: "Navicane",
        desc: "Intelligenter Navigationsassistent, der sehbehinderten Personen ermöglicht, sich mit Echtzeit-KI-Führung sicher zu bewegen.",
        detail: "Assistives Navigationssystem mit Echtzeit-Hinderniserkennung.",
        impact: "Verbesserte Navigationssicherheit für Sehbehinderte durch Echtzeit-Hinderniserkennung.",
      },
      {
        title: "Katastrophenhilfe-Plattform",
        desc: "Intelligente Plattform zur Koordinierung von Nothilfe und Optimierung der Ressourcenverteilung in kritischen Situationen.",
        detail: "Plattform zur Verwaltung von Hilfeanfragen und Spenden.",
        impact: "Optimierte Hilfsverteilung und reduzierte Reaktionsverzögerungen in Notfallszenarien.",
      },
      {
        title: "KI-gestützter Konfigurations-Orchestrator",
        desc: "KI-gesteuertes Automatisierungssystem, das komplexe Konfigurationen durch intelligente und adaptive Workflows vereinfacht.",
        detail: "Automatisiert Systemkonfigurationen mithilfe natürlicher Sprache.",
        impact: "Reduzierte manuelle Konfigurationszeit durch KI-gestützte Microservice-Einrichtung.",
      },
      {
        title: "Energieanalyse von Sortieralgorithmen",
        desc: "Analytisches Framework zur Untersuchung der Leistungseffizienz und des Energieverbrauchs von Sortieralgorithmen in modernen Systemen.",
        detail: "Analysiert Sortieralgorithmen nach Zeit- und Energieverbrauch.",
        impact: "Identifizierte energieeffiziente Algorithmen durch Analyse von Leistung und Rechenkosten.",
      },
    ],
    rdData: [
      {
        title: "Autonome & intelligente Systeme",
        desc: "Entwicklung KI-gesteuerter Systeme mit Echtzeit-Wahrnehmung, Entscheidungsfindung und adaptivem Verhalten in dynamischen Umgebungen.",
      },
      {
        title: "KI & Entscheidungssysteme",
        desc: "Entwicklung datengesteuerter und KI-basierter Entscheidungsunterstützungssysteme für komplexe und geschäftskritische Anwendungen.",
      },
      {
        title: "Eingebettete & Echtzeitsysteme",
        desc: "Erforschung eingebetteter Systeme, Echtzeitverarbeitung und hardware-integrierter KI-Lösungen für Hochleistungsumgebungen.",
      },
    ],
    certData: [
      {
        shortTitle: "Grundlagen der Raketentechnik",
        institution: "Türkisches Präsidium für die Verteidigungsindustrie — Akademie",
        takeaway:
          "Ich absolvierte das e-Book-Training Grundlagen der Raketentechnik im Rahmen des Karriereentwicklungsmoduls und der nationalen Kompetenzinitiative.",
      },
      {
        shortTitle: "KI-Bewusstseinsschulung",
        institution: "Türkisches Präsidium für die Verteidigungsindustrie — Akademie",
        takeaway:
          "Durch die KI-Bewusstseinsschulung erlernte ich grundlegende Konzepte und stärkte sowohl meine persönlichen als auch professionellen Kompetenzen.",
      },
      {
        shortTitle: "Karriere & Kompetenz-Treffen",
        institution: "Verteidigungsindustrie-Akademie — Nationale Kompetenzinitiative",
        takeaway:
          "Durch die Teilnahme an den Karriere- und Kompetenz-Treffen der nationalen Kompetenzinitiative gewann ich aktuelle Perspektiven im Ökosystem der Verteidigungsindustrie.",
      },
      {
        shortTitle: "GenAI — Technologie-Serie",
        institution: "Garanti BBVA Genç — Neue Generation Karriereschule",
        takeaway:
          "Ich absolvierte alle Module der technologieorientierten Trainingsreihe vom 17.–19. Dezember und erweiterte mein Wissen in modernen Karrierekompetenzen und Technologie.",
      },
      {
        shortTitle: "Technologie-Serie-GenAI",
        institution: "Garanti BBVA Genç — Neue Generation Karriereschule",
        takeaway:
          "Durch die Teilnahme am GenAI-Training der Technologie-Serie entwickelte ich meine Kernkompetenzen in diesem Bereich und meine Perspektive auf aktuelle Anwendungen.",
      },
      {
        shortTitle: "Grundlagen des maschinellen Lernens",
        institution: "Garanti BBVA Genç — Neue Generation Karriereschule",
        takeaway:
          "Mit dem Training Grundlagen des maschinellen Lernens festigte ich die Grundprinzipien von ML und schuf ein solides Fundament für meine Data-Science- und KI-Projekte.",
      },
      {
        shortTitle: "Think Tech",
        institution: "Coderspace",
        takeaway:
          "Durch die Teilnahme am Think-Tech-Event am 11.–12. Dezember 2025 hatte ich die Möglichkeit, aktuelle Entwicklungen in der Technologiewelt zu verfolgen.",
      },
      {
        shortTitle: "Women in Tech",
        institution: "Coderspace",
        takeaway:
          "Beim von Coderspace organisierten Event Women in Tech: Inspiring Women Stories am 10.–11. März 2026 hörte ich inspirierende Geschichten von Frauen in der Technologie.",
      },
      {
        shortTitle: "CODE GENIUS",
        institution: "TalentCoders.co — CODE GENIUS",
        takeaway:
          "Ich nahm am CODE GENIUS-Event teil, bei dem Experten führender Technologieunternehmen Studenten trafen, und sammelte Erfahrungen in einem code- und kollaborationsorientierten Umfeld; bestätigt durch Teilnahmezertifikat (TC55189FC22).",
      },
    ],
  },
};

function App() {
  const homeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const rdRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [hoveredCertIndex, setHoveredCertIndex] = useState(null);
  const [lang, setLang] = useState("EN");

  const t = translations[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    const el = projectsRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const projectIcons = [
    <FaFlask size={28} />,
    <FaRobot size={28} />,
    <FaCode size={28} />,
    <FaBolt size={28} />,
    <FaChartLine size={28} />,
  ];

  const projectTechnologies = [
    ["Python", "TensorFlow", "React", "SQLite", "Backend API logic"],
    ["AI", "Navigation", "Assistive", "Computer Vision"],
    ["PHP", "MySQL", "Web Platform", "Backend Development", "Database Management"],
    ["Python", "Docker", "LLM", "Microservices", "API Integration"],
    ["Python", "Algorithm Analysis", "Data Analysis", "Performance Evaluation"],
  ];

  const projectTags = [
    ["AI", "ML", "Healthcare"],
    ["AI", "Accessibility", "Healthcare"],
    ["Web", "Backend", "Crisis Management", "Platform"],
    ["AI", "Automation", "DevOps", "LLM"],
    ["Algorithms", "Research", "Performance", "Energy"],
  ];

  const projectGithubs = [
    "https://github.com/leylaerdemir/ai-checkup-system/blob/main/README.md",
    "https://github.com/leylaerdemir/NaviCane/blob/main/README.md",
    "https://github.com/leylaerdemir/disaster-relief-management-system/blob/main/README.md",
    "https://github.com/leylaerdemir/ai-config-microservices/blob/main/README.md",
    "https://github.com/leylaerdemir/sorting-algorithm-energy-analysis/blob/main/README.md",
  ];

  const projectData = t.projectData.map((p, i) => ({
    ...p,
    icon: projectIcons[i],
    technologies: projectTechnologies[i],
    tags: projectTags[i],
    github: projectGithubs[i],
  }));

  const rdIcons = ["🧠", "🤖", "🧪"];
  const rdData = t.rdData.map((r, i) => ({ ...r, icon: rdIcons[i] }));

  const certImages = [
    "/certificates/Temel Roketçilik e-Kitabı.jpg",
    "/certificates/Yapay Zekâ Farkındalığı Eğitimi.jpg",
    "/certificates/milliyetkinlikhamlesi.jpg",
    "/certificates/Garanti_teknolojiSerisi.jpg",
    "/certificates/Garanti_GenAi.jpg",
    "/certificates/Garanti_temelMakine.jpg",
    "/certificates/thinkTech.jpg",
    "/certificates/womenInTech.jpeg",
    "/certificates/CodeGenius.jpg",
  ];

  const certificateData = t.certData.map((c, i) => ({ ...c, image: certImages[i] }));

  const techStackData = [
    { name: "Python", category: "AI / Backend", Icon: SiPython },
    { name: "TensorFlow", category: "ML / Deep Learning", Icon: SiTensorflow },
    { name: "Scikit-learn", category: "ML / Classical", Icon: SiScikitlearn },
    { name: "LangChain", category: "LLM / Orchestration", Icon: SiLangchain },
    { name: "LLM / GenAI", category: "AI Applications", Icon: FaRobot },
    { name: "OpenCV", category: "Computer Vision", Icon: FaEye },
    { name: "SQL", category: "Data & Databases", Icon: FaDatabase },
    { name: "FastAPI", category: "Backend / API", Icon: SiFastapi },
    { name: "REST API", category: "Integration", Icon: FaPlug },
    { name: "SQLite", category: "Database", Icon: SiSqlite },
    { name: "MySQL", category: "Database", Icon: SiMysql },
    { name: "PHP", category: "Web / Backend", Icon: SiPhp },
    { name: "Docker", category: "DevOps", Icon: SiDocker },
    { name: "Microservices", category: "Architecture", Icon: FaServer },
    { name: "Git", category: "Version control", Icon: SiGit },
    { name: "GitHub", category: "Collaboration", Icon: SiGithub },
    { name: "JavaScript", category: "Frontend", Icon: SiJavascript },
    { name: "React", category: "Frontend", Icon: SiReact },
    { name: "HTML", category: "Frontend", Icon: SiHtml5 },
    { name: "CSS", category: "Frontend", Icon: SiCss },
    { name: "C++", category: "Languages / Performance", Icon: SiCplusplus },
  ];

  const navLinkStyle = (base) => ({
    ...base,
    color: "#d1d5db",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });

  const handleNavHover = (e, enter) => {
    e.target.style.color = enter ? "#22d3ee" : "#d1d5db";
    e.target.style.textShadow = enter ? "0 0 8px #22d3ee" : "none";
  };

  return (
    <div style={styles.page}>
      {/* ── NAV ── */}
      <nav style={styles.nav}>
        <div style={styles.menu}>
          {[
            { label: t.nav.home, ref: homeRef },
            { label: t.nav.techStack, ref: techStackRef },
            { label: t.nav.projects, ref: projectsRef },
            { label: t.nav.aiSystems, ref: rdRef },
            { label: t.nav.certificates, ref: certificatesRef },
            { label: t.nav.contact, ref: contactRef },
          ].map(({ label, ref }) => (
            <a
              key={label}
              onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
              style={navLinkStyle(styles.link)}
              onMouseEnter={(e) => handleNavHover(e, true)}
              onMouseLeave={(e) => handleNavHover(e, false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={styles.right}>
          <a href="https://www.kaggle.com/leylaerdemir" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <div style={styles.iconBox}><SiKaggle size={18} /></div>
          </a>
          <a href="https://github.com/leylaerdemir" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <div style={styles.iconBox}><FaGithub size={18} /></div>
          </a>
          <a href="https://www.linkedin.com/in/leyla-erdemir-a37082394/" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <div style={styles.iconBox}><FaLinkedin size={18} /></div>
          </a>

          {/* ── LANGUAGE SWITCHER ── */}
          <div style={styles.langContainer}>
            {["EN", "TR", "DE"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={lang === l ? styles.activeLang : styles.lang}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div ref={homeRef} style={styles.hero}>
        <div style={styles.centerBox}>
          <img src="/profile.jpg" alt="profile" style={styles.image} />
          <h1 style={styles.title}>Leyla Erdemir</h1>
          <p style={styles.subtitle}>{t.hero.subtitle}</p>
          <p style={styles.desc}>{t.hero.desc}</p>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div ref={techStackRef} style={styles.techSection}>
        <h2 style={styles.techSectionTitle}>{t.techSection.title}</h2>
        <p style={styles.techSectionIntro}>{t.techSection.intro}</p>
        <div style={styles.techGrid}>
          {techStackData.map(({ name, category, Icon }) => (
            <div key={name} style={styles.techCard}>
              <div style={styles.techIconWrap}><Icon size={34} color="#22d3ee" /></div>
              <span style={styles.techName}>{name}</span>
              <span style={styles.techCategory}>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div ref={projectsRef} style={styles.projectsSection}>
        <h2 style={styles.projectsTitle}>{t.projects.title}</h2>

        <div
          style={{
            ...styles.projects,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div style={styles.row}>
            {projectData.slice(0, 3).map((project, index) => (
              <div
                key={index}
                style={styles.card}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(34,211,238,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
                }}
              >
                <div style={styles.cardBody}>
                  <div style={styles.icon}>{project.icon}</div>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={styles.cardText}>{project.desc}</p>
                </div>
                <div style={styles.button} onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                  {t.projects.viewDetails}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.rowCenter}>
            {projectData.slice(3, 5).map((project, index) => (
              <div
                key={index + 3}
                style={styles.card}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(34,211,238,0.2)";
                  const h3 = e.currentTarget.querySelector("h3");
                  if (h3) h3.style.color = "#22d3ee";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
                  const h3 = e.currentTarget.querySelector("h3");
                  if (h3) h3.style.color = "#e5e7eb";
                }}
              >
                <div style={styles.cardBody}>
                  <div style={styles.icon}>{project.icon}</div>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={styles.cardText}>{project.desc}</p>
                </div>
                <div style={styles.button} onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                  {t.projects.viewDetails}
                </div>
              </div>
            ))}
          </div>

          {/* ── R&D ── */}
          <div ref={rdRef} style={styles.rdSection}>
            <h2 style={styles.projectsTitle}>{t.rdSection.title}</h2>
            <p style={{ color: "#9ca3af", marginBottom: "40px" }}>{t.rdSection.intro}</p>
            <div style={styles.rowCenter}>
              {rdData.map((item, index) => (
                <div key={index} style={styles.card}>
                  <div style={styles.cardBody}>
                    <div style={styles.iconEmoji}>{item.icon}</div>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardText}>{item.desc}</p>
                  </div>
                  <div style={{ ...styles.button, visibility: "hidden" }} aria-hidden>
                    {t.projects.viewDetails}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CERTIFICATES ── */}
      <div ref={certificatesRef} style={styles.certSection}>
        <h2 style={styles.projectsTitle}>{t.certificates.title}</h2>
        <p style={styles.certIntro}>{t.certificates.intro}</p>
        <div style={styles.certGrid}>
          {certificateData.map((cert, index) => (
            <button
              type="button"
              key={index}
              style={styles.certTile}
              onClick={() => setSelectedCertificate(cert)}
              onMouseEnter={(e) => {
                setHoveredCertIndex(index);
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(34,211,238,0.5)";
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.55)";
              }}
              onMouseLeave={(e) => {
                setHoveredCertIndex(null);
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.35)";
                e.currentTarget.style.borderColor = "#1f2937";
              }}
              onFocus={(e) => {
                setHoveredCertIndex(index);
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(34,211,238,0.5)";
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.55)";
              }}
              onBlur={(e) => {
                setHoveredCertIndex(null);
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.35)";
                e.currentTarget.style.borderColor = "#1f2937";
              }}
            >
              <img src={cert.image} alt="" style={styles.certImage} />
              <div style={styles.certBottomFade}>
                <span style={styles.certShortTitle}>{cert.shortTitle}</span>
              </div>
              <div style={{ ...styles.certHoverLayer, opacity: hoveredCertIndex === index ? 1 : 0 }}>
                <FaSearchPlus size={32} color="#22d3ee" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div ref={contactRef} style={styles.contactSection}>
        <h2 style={styles.projectsTitle}>{t.contact.title}</h2>
        <p style={styles.contactIntro}>{t.contact.intro}</p>
        <div style={styles.contactInfo}>
          <div style={styles.infoRow}>
            <a href="mailto:dogaleyla9@hotmail.com" style={styles.mailLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}>
              <span>✉️</span> dogaleyla9@hotmail.com
            </a>
          </div>
          <div style={styles.infoRow}>
            <a href="mailto:leyla.erdemir@istun.edu.tr" style={styles.mailLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}>
              <span>✉️</span> leyla.erdemir@istun.edu.tr
            </a>
          </div>
          <div style={styles.infoRow}>
            <span>🎓</span>
            <span>{t.contact.university}</span>
          </div>
        </div>
        <div style={styles.contactButtons}>
          {[
            { label: "GitHub", href: "https://github.com/leylaerdemir", icon: <FaGithub size={18} /> },
            { label: "Kaggle", href: "https://www.kaggle.com/leylaerdemir", icon: <SiKaggle size={18} /> },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/leyla-erdemir-a37082394/", icon: <FaLinkedin size={18} /> },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={styles.contactBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#22d3ee";
                e.currentTarget.style.color = "#030712";
                e.currentTarget.style.boxShadow = "0 0 25px #22d3ee";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0b1a2a";
                e.currentTarget.style.color = "#e5e7eb";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px", pointerEvents: "none" }}>
                {icon}
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── PROJECT MODAL ── */}
      {selectedProject && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalImage}></div>
            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
            <div style={styles.techContainer}>
              {selectedProject.technologies?.map((tech, i) => (
                <span
                  key={i}
                  style={styles.techTag}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#22d3ee";
                    e.target.style.color = "#030712";
                    e.target.style.boxShadow = "0 0 10px #22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#22d3ee";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p style={styles.modalText}>{selectedProject.detail}</p>
            <p style={{ color: "#22d3ee", marginTop: "10px", fontWeight: "500" }}>{selectedProject.impact}</p>
            <div style={styles.tagContainer}>
              {selectedProject.tags?.map((tag, i) => (
                <span key={i} style={styles.bottomTag}>#{tag}</span>
              ))}
            </div>
            <div style={styles.modalButtons}>
              <button
                style={styles.demoButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 0 25px rgba(34,211,238,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 15px rgba(34,211,238,0.4)";
                }}
                onClick={() => window.open(selectedProject.github, "_blank")}
              >
                {t.projects.viewDemo}
              </button>
              <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                {t.projects.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CERTIFICATE MODAL ── */}
      {selectedCertificate && (
        <div style={styles.modalOverlay} onClick={() => setSelectedCertificate(null)}>
          <div style={styles.certModal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.certModalImageWrap}>
              <img src={selectedCertificate.image} alt="" style={styles.certModalThumb} />
            </div>
            <p style={styles.certModalIssuerLabel}>{t.certificates.issuedBy}</p>
            <h2 style={styles.certModalInstitution}>{selectedCertificate.institution}</h2>
            <p style={styles.certModalTakeaway}>{selectedCertificate.takeaway}</p>
            <button
              type="button"
              style={{ ...styles.closeBtn, marginTop: "22px", width: "100%" }}
              onClick={() => setSelectedCertificate(null)}
            >
              {t.projects.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { background: "#030712", color: "white", minHeight: "100vh" },

  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    borderBottom: "1px solid #1f2937",
    background: "#030712",
    zIndex: 1000,
    boxSizing: "border-box",
  },

  menu: { display: "flex", gap: "30px" },

  link: {
    color: "#d1d5db",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },

  right: { display: "flex", alignItems: "center", gap: "15px" },
  iconLink: { color: "white" },

  iconBox: {
    width: "40px",
    height: "40px",
    border: "1px solid #1f2937",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },

  langContainer: { display: "flex", gap: "4px", marginLeft: "10px" },

  activeLang: {
    background: "#22d3ee",
    color: "#030712",
    padding: "6px 10px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "13px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  lang: {
    color: "#9ca3af",
    padding: "6px 10px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    borderRadius: "8px",
    transition: "all 0.2s ease",
  },

  hero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "80px",
  },

  centerBox: { textAlign: "center", maxWidth: "700px" },

  image: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "0 auto",
    border: "4px solid #22d3ee",
    boxShadow: "0 0 25px rgba(34, 211, 238, 0.35)",
    display: "block",
  },

  title: { fontSize: "56px", marginTop: "24px" },
  subtitle: { color: "#22d3ee", fontSize: "22px" },
  desc: { color: "#9ca3af", marginTop: "10px" },

  projectsSection: { paddingTop: "40px", textAlign: "center" },

  projectsTitle: {
    fontSize: "32px",
    letterSpacing: "4px",
    color: "#22d3ee",
    marginBottom: "40px",
  },

  techSection: {
    paddingTop: "72px",
    paddingBottom: "48px",
    textAlign: "center",
    maxWidth: "1120px",
    margin: "0 auto",
    paddingLeft: "24px",
    paddingRight: "24px",
  },

  techSectionTitle: {
    fontSize: "32px",
    letterSpacing: "4px",
    color: "#22d3ee",
    marginBottom: "20px",
  },

  techSectionIntro: {
    color: "#9ca3af",
    fontSize: "15px",
    lineHeight: "1.65",
    maxWidth: "720px",
    margin: "0 auto 40px",
  },

  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
    gap: "18px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  techCard: {
    background: "#0b1a2a",
    borderRadius: "16px",
    border: "1px solid #1f2937",
    padding: "20px 14px 18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  },

  techIconWrap: {
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  techName: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#e5e7eb",
    textAlign: "center",
    lineHeight: "1.25",
  },

  techCategory: {
    fontSize: "11px",
    color: "#64748b",
    textAlign: "center",
    lineHeight: "1.35",
  },

  contactSection: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 20px",
  },

  contactIntro: {
    fontSize: "18px",
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  infoRow: {
    color: "#9ca3af",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    marginBottom: "0px",
    cursor: "pointer",
  },

  contactInfo: {
    marginTop: "10px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  contactButtons: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  contactBtn: {
    padding: "16px 36px",
    borderRadius: "14px",
    border: "1px solid #1f2937",
    background: "#0b1a2a",
    color: "#e5e7eb",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  mailLink: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "18px",
    justifyContent: "center",
    transition: "0.3s",
  },

  projects: {
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    transition: "all 0.8s ease",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
  },

  rowCenter: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
  },

  cardBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },

  card: {
    background: "#0b1a2a",
    borderRadius: "20px",
    padding: "30px",
    width: "320px",
    minHeight: "360px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#e5e7eb",
    textAlign: "center",
    margin: "10px 0",
    lineHeight: "1.3",
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardText: {
    fontSize: "14px",
    color: "#9ca3af",
    textAlign: "center",
    lineHeight: "1.6",
    minHeight: "90px",
    marginTop: "10px",
  },

  icon: {
    color: "#22d3ee",
    marginBottom: "10px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconEmoji: {
    marginBottom: "10px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    lineHeight: 1,
  },

  button: {
    marginTop: "20px",
    color: "#22d3ee",
    cursor: "pointer",
    fontSize: "14px",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  modal: {
    background: "#0a0f1c",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #1f2937",
    width: "500px",
    maxWidth: "90%",
    boxShadow: "0 0 40px rgba(34,211,238,0.2)",
  },

  modalImage: {
    width: "100%",
    height: "180px",
    background: "#000",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  modalTitle: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  modalText: {
    color: "#9ca3af",
    lineHeight: "1.6",
    marginTop: "15px",
  },

  techContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },

  techTag: {
    padding: "6px 14px",
    border: "1px solid #22d3ee",
    borderRadius: "999px",
    fontSize: "13px",
    color: "#22d3ee",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  tagContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  bottomTag: {
    background: "rgba(34,211,238,0.1)",
    color: "#22d3ee",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "13px",
  },

  modalButtons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },

  demoButton: {
    padding: "12px 22px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
    color: "#030712",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 0 15px rgba(34,211,238,0.4)",
  },

  closeBtn: {
    background: "transparent",
    border: "1px solid #22d3ee",
    padding: "12px 22px",
    borderRadius: "12px",
    color: "#22d3ee",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
    fontWeight: "600",
  },

  rdSection: {
    paddingTop: "80px",
    textAlign: "center",
  },

  certSection: {
    paddingTop: "100px",
    paddingBottom: "80px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "24px",
    paddingRight: "24px",
  },

  certIntro: {
    color: "#9ca3af",
    fontSize: "15px",
    lineHeight: "1.6",
    maxWidth: "640px",
    margin: "0 auto 36px",
  },

  certGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",
    gap: "18px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "left",
  },

  certTile: {
    position: "relative",
    aspectRatio: "1",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid #1f2937",
    padding: 0,
    cursor: "pointer",
    background: "#0b1a2a",
    fontFamily: "inherit",
    color: "inherit",
    WebkitAppearance: "none",
    appearance: "none",
    transform: "scale(1)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
    transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
  },

  certImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  certBottomFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "28px 10px 10px",
    background: "linear-gradient(to top, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.5) 55%, transparent 100%)",
    pointerEvents: "none",
  },

  certShortTitle: {
    color: "#f3f4f6",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "1.25",
    display: "block",
    textAlign: "center",
  },

  certHoverLayer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(3,7,18,0.45)",
    transition: "opacity 0.25s ease",
    pointerEvents: "none",
  },

  certModal: {
    background: "#0a0f1c",
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid #1f2937",
    width: "100%",
    maxWidth: "480px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 0 36px rgba(34,211,238,0.25)",
  },

  certModalImageWrap: {
    width: "100%",
    maxHeight: "min(62vh, 520px)",
    minHeight: "100px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #1f2937",
    background: "#030712",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },

  certModalThumb: {
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    maxHeight: "min(60vh, 500px)",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
    borderRadius: "8px",
  },

  certModalIssuerLabel: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#22d3ee",
    fontWeight: "600",
  },

  certModalInstitution: {
    margin: "6px 0 14px",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "1.3",
    color: "#f9fafb",
  },

  certModalTakeaway: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "14px",
    lineHeight: "1.65",
  },
};

export default App;
