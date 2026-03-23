import "./App.css";
import {
  FaGithub, FaLinkedin, FaRobot, FaFlask, FaCode, FaChartLine,
  FaBolt, FaSearchPlus, FaDatabase, FaPlug, FaServer, FaEye,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { SiKaggle } from "react-icons/si";
import {
  SiPython, SiTensorflow, SiScikitlearn, SiLangchain, SiDocker,
  SiReact, SiHtml5, SiCss, SiJavascript, SiMysql, SiPhp, SiSqlite,
  SiFastapi, SiGit, SiGithub, SiCplusplus,
} from "react-icons/si";
import { useRef, useEffect, useState } from "react";

/* ─── TRANSLATIONS ─── */
const T = {
  EN: {
    nav: { home:"Home", tech:"Tech Stack", projects:"Projects", ai:"AI & Systems", certs:"Certificates", contact:"Contact" },
    hero: {
      sub: "Software Engineering Student | AI & Web",
      desc: "I craft intelligent digital solutions at the intersection of AI and real-world impact. Driven by a passion for healthcare technologies and modern web systems, I transform complex problems into scalable, user-centered innovations.",
    },
    techTitle: "TECH STACK & AI EXPERTISE",
    techIntro: "Tools and technologies I use across AI, backend, web, and DevOps—aligned with my projects, coursework, and continuous learning.",
    projectsTitle: "PROJECTS", viewDetails: "View Details →", viewDemo: "🚀 View Demo", close: "Close",
    rdTitle: "INTELLIGENT SYSTEMS & AI ENGINEERING",
    rdIntro: "Designing intelligent systems, autonomous technologies, and AI-driven engineering solutions for real-world applications.",
    certsTitle: "CERTIFICATES",
    certsIntro: "Selected credentials and programs. Tap for issuer details and what each experience added.",
    issuedBy: "Issued by",
    contactTitle: "CONTACT",
    contactIntro: "Open to internships, collaborations, and interesting engineering challenges.",
    university: "Istanbul Health and Technology University",
    projects: [
      { title:"AI Check-Up System", desc:"AI-powered clinical decision support system for early diagnosis and personalized patient analysis.", detail:"Analyzes patient symptoms and medical data to generate personalized check-up recommendations.", impact:"Improved early diagnosis accuracy by leveraging AI-driven patient analysis." },
      { title:"Navicane", desc:"Smart navigation assistant enabling visually impaired individuals to move safely using real-time AI guidance.", detail:"Assistive navigation system with real-time obstacle detection.", impact:"Enhanced navigation safety for visually impaired users through real-time obstacle detection." },
      { title:"Disaster Relief Platform", desc:"Smart platform designed to coordinate emergency aid and optimize resource distribution during critical situations.", detail:"Platform for managing aid requests and donations.", impact:"Optimized aid distribution and reduced response delays in emergency scenarios." },
      { title:"AI-Assisted Configuration Orchestrator", desc:"AI-driven automation system that simplifies complex configurations through intelligent and adaptive workflows.", detail:"Automates system configurations using natural language.", impact:"Reduced manual configuration time by automating microservice setup using AI." },
      { title:"Sorting Algorithm Energy Analysis", desc:"Analytical framework exploring performance efficiency and energy consumption of sorting algorithms in modern systems.", detail:"Analyzes sorting algorithms based on time and energy usage.", impact:"Identified energy-efficient algorithms by analyzing performance and computational cost." },
    ],
    rd: [
      { title:"Autonomous & Intelligent Systems", desc:"Designing AI-driven systems capable of real-time perception, decision-making, and adaptive behavior in dynamic environments." },
      { title:"AI & Decision Systems", desc:"Developing data-driven and AI-based decision support systems for complex and mission-critical applications." },
      { title:"Embedded & Real-Time Systems", desc:"Exploring embedded systems, real-time processing, and hardware-integrated AI solutions for high-performance environments." },
    ],
    certs: [
      { short:"Basic Rocketry e-Book", institution:"T.C. Presidency of Defense Industries — Defense Industries Academy", takeaway:"I completed the Basic Rocketry e-Book training within the Career Development Module and National Competency Initiative." },
      { short:"AI Awareness Training", institution:"T.C. Presidency of Defense Industries — Defense Industries Academy", takeaway:"Through AI awareness training, I learned fundamental concepts and took an important step toward strengthening my competencies." },
      { short:"Career & Competency Meetings", institution:"Defense Industries Academy — National Competency Initiative", takeaway:"Gained current perspectives on career and competency in the defense industry ecosystem." },
      { short:"GenAI — Technology Series", institution:"Garanti BBVA Genç — New Generation Career School", takeaway:"Completed all modules of the technology-focused training series held on December 17–19." },
      { short:"Technology Series-GenAI", institution:"Garanti BBVA Genç — New Generation Career School", takeaway:"Developed core GenAI competencies and perspective on current applications." },
      { short:"Basic Machine Learning", institution:"Garanti BBVA Genç — New Generation Career School", takeaway:"Consolidated ML fundamentals and built a stronger foundation for data science and AI projects." },
      { short:"Think Tech", institution:"Coderspace", takeaway:"Attended the Think Tech event on December 11–12, 2025, following latest developments in the tech world." },
      { short:"Women in Tech", institution:"Coderspace", takeaway:"Attended Women in Tech: Inspiring Women Stories on March 10–11, 2026, increasing awareness of diversity and inclusion." },
      { short:"CODE GENIUS", institution:"TalentCoders.co — CODE GENIUS", takeaway:"Participated in CODE GENIUS where experts from leading tech companies met students; certificate TC55189FC22." },
    ],
  },
  TR: {
    nav: { home:"Ana Sayfa", tech:"Teknoloji", projects:"Projeler", ai:"YZ & Sistemler", certs:"Sertifikalar", contact:"İletişim" },
    hero: {
      sub: "Yazılım Mühendisliği Öğrencisi | YZ & Web",
      desc: "Yapay zeka ile gerçek dünya etkisinin kesiştiği noktada akıllı dijital çözümler üretiyorum. Sağlık teknolojileri ve modern web sistemlerine duyduğum tutku ile karmaşık sorunları ölçeklenebilir, kullanıcı odaklı yeniliklere dönüştürüyorum.",
    },
    techTitle: "TEKNOLOJİ YIĞINI & YZ UZMANLIKLARI",
    techIntro: "YZ, backend, web ve DevOps alanlarında kullandığım araç ve teknolojiler; projelerimle ve sürekli öğrenme sürecimle örtüşüyor.",
    projectsTitle: "PROJELER", viewDetails: "Detayları Gör →", viewDemo: "🚀 Demoyu Gör", close: "Kapat",
    rdTitle: "AKILLI SİSTEMLER & YZ MÜHENDİSLİĞİ",
    rdIntro: "Gerçek dünya uygulamaları için akıllı sistemler, otonom teknolojiler ve yapay zeka odaklı mühendislik çözümleri tasarlıyorum.",
    certsTitle: "SERTİFİKALAR",
    certsIntro: "Seçilmiş sertifikalar ve programlar. Veren kurum ve her deneyimin katkısı için dokunun.",
    issuedBy: "Veren Kurum",
    contactTitle: "İLETİŞİM",
    contactIntro: "Staj, iş birliği ve ilgi çekici mühendislik projelerine açığım.",
    university: "İstanbul Sağlık ve Teknoloji Üniversitesi",
    projects: [
      { title:"YZ Sağlık Kontrol Sistemi", desc:"Erken tanı ve kişiselleştirilmiş hasta analizi için yapay zeka destekli klinik karar destek sistemi.", detail:"Hasta semptomlarını ve tıbbi verileri analiz ederek kişiselleştirilmiş kontrol önerileri üretir.", impact:"YZ odaklı hasta analizi kullanarak erken tanı doğruluğunu artırdı." },
      { title:"Navicane", desc:"Görme engelli bireylerin gerçek zamanlı YZ rehberliğiyle güvenli hareket etmesini sağlayan akıllı navigasyon asistanı.", detail:"Gerçek zamanlı engel tespitli yardımcı navigasyon sistemi.", impact:"Gerçek zamanlı engel tespiti sayesinde görme engelli kullanıcılar için navigasyon güvenliğini artırdı." },
      { title:"Afet Yardım Platformu", desc:"Kritik durumlarda acil yardımı koordine etmek ve kaynak dağılımını optimize etmek için tasarlanmış akıllı platform.", detail:"Yardım taleplerini ve bağışları yönetmek için platform.", impact:"Acil senaryolarda yardım dağılımını optimize etti ve yanıt gecikmelerini azalttı." },
      { title:"YZ Destekli Yapılandırma Orkestratörü", desc:"Akıllı ve uyarlanabilir iş akışlarıyla karmaşık yapılandırmaları basitleştiren yapay zeka odaklı otomasyon sistemi.", detail:"Doğal dil kullanarak sistem yapılandırmalarını otomatikleştirir.", impact:"YZ kullanarak mikro hizmet kurulumunu otomatikleştirerek manuel yapılandırma süresini azalttı." },
      { title:"Sıralama Algoritması Enerji Analizi", desc:"Modern sistemlerde sıralama algoritmalarının performans verimliliğini ve enerji tüketimini inceleyen analitik çerçeve.", detail:"Sıralama algoritmalarını zaman ve enerji kullanımına göre analiz eder.", impact:"Performans ve hesaplama maliyetini analiz ederek enerji verimli algoritmaları belirledi." },
    ],
    rd: [
      { title:"Otonom & Akıllı Sistemler", desc:"Dinamik ortamlarda gerçek zamanlı algılama, karar verme ve uyarlanabilir davranış yeteneğine sahip YZ odaklı sistemler tasarlıyorum." },
      { title:"YZ & Karar Sistemleri", desc:"Karmaşık ve kritik görev uygulamaları için veri odaklı ve YZ tabanlı karar destek sistemleri geliştiriyorum." },
      { title:"Gömülü & Gerçek Zamanlı Sistemler", desc:"Yüksek performanslı ortamlar için gömülü sistemleri ve donanım entegre YZ çözümlerini araştırıyorum." },
    ],
    certs: [
      { short:"Temel Roketçilik e-Kitabı", institution:"T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı — Savunma Sanayii Akademisi", takeaway:"Kariyer Gelişim Modülü ve Milli Yetkinlik Hamlesi çerçevesindeki Temel Roketçilik e-Kitabı eğitimini tamamladım." },
      { short:"Yapay Zeka Farkındalığı", institution:"T.C. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı — Savunma Sanayii Akademisi", takeaway:"Yapay zekâ farkındalığı eğitimiyle temel kavramları öğrenerek yetkinliklerimi güçlendirdim." },
      { short:"Kariyer & Yetkinlik Buluşmaları", institution:"Savunma Sanayii Akademisi — Milli Yetkinlik Hamlesi", takeaway:"Milli Yetkinlik Hamlesi kapsamındaki Kariyer ve Yetkinlik Buluşmaları'na katılarak savunma sanayii ekosisteminde güncel perspektifler edindim." },
      { short:"GenAI — Teknoloji Serisi", institution:"Garanti BBVA Genç — Yeni Nesil Kariyer Okulu", takeaway:"17–19 Aralık'ta gerçekleşen teknoloji odaklı eğitim serisinin tüm modüllerini tamamladım." },
      { short:"Teknoloji Serisi-GenAI", institution:"Garanti BBVA Genç — Yeni Nesil Kariyer Okulu", takeaway:"GenAI eğitimine katılarak bu alandaki temel yetkinliklerimi geliştirdim." },
      { short:"Temel Makine Öğrenmesi", institution:"Garanti BBVA Genç — Yeni Nesil Kariyer Okulu", takeaway:"Temel Makine Öğrenmesi eğitimiyle ML prensiplerini pekiştirdim." },
      { short:"Think Tech", institution:"Coderspace", takeaway:"11–12 Aralık 2025'te düzenlenen Think Tech etkinliğine katılarak teknoloji dünyasındaki güncel gelişmeleri takip ettim." },
      { short:"Women in Tech", institution:"Coderspace", takeaway:"10–11 Mart 2026 tarihlerinde Women in Tech etkinliğinde ilham verici kadın hikâyelerini dinleyerek çeşitlilik farkındalığımı artırdım." },
      { short:"CODE GENIUS", institution:"TalentCoders.co — CODE GENIUS", takeaway:"CODE GENIUS etkinliğine katılarak kod ve iş birliği odaklı ortamda deneyim kazandım; sertifika: TC55189FC22." },
    ],
  },
  DE: {
    nav: { home:"Startseite", tech:"Tech-Stack", projects:"Projekte", ai:"KI & Systeme", certs:"Zertifikate", contact:"Kontakt" },
    hero: {
      sub: "Software-Engineering-Studentin | KI & Web",
      desc: "Ich entwickle intelligente digitale Lösungen an der Schnittstelle von KI und realem Nutzen. Angetrieben von einer Leidenschaft für Gesundheitstechnologien und moderne Websysteme verwandle ich komplexe Probleme in skalierbare Innovationen.",
    },
    techTitle: "TECH-STACK & KI-EXPERTISE",
    techIntro: "Werkzeuge und Technologien, die ich in KI, Backend, Web und DevOps einsetze – abgestimmt auf meine Projekte und kontinuierliches Lernen.",
    projectsTitle: "PROJEKTE", viewDetails: "Details ansehen →", viewDemo: "🚀 Demo ansehen", close: "Schließen",
    rdTitle: "INTELLIGENTE SYSTEME & KI-ENGINEERING",
    rdIntro: "Entwicklung intelligenter Systeme, autonomer Technologien und KI-gesteuerter Ingenieurlösungen für reale Anwendungen.",
    certsTitle: "ZERTIFIKATE",
    certsIntro: "Ausgewählte Abschlüsse und Programme. Tippen für Aussteller und Mehrwert.",
    issuedBy: "Ausgestellt von",
    contactTitle: "KONTAKT",
    contactIntro: "Offen für Praktika, Kooperationen und interessante Engineering-Herausforderungen.",
    university: "Istanbul Gesundheits- und Technologieuniversität",
    projects: [
      { title:"KI-Gesundheits-Check-System", desc:"KI-gestütztes klinisches Entscheidungsunterstützungssystem für Frühdiagnose und personalisierte Patientenanalyse.", detail:"Analysiert Patientensymptome und medizinische Daten.", impact:"Verbesserte Frühdiagnosegenauigkeit durch KI-gesteuerte Analyse." },
      { title:"Navicane", desc:"Intelligenter Navigationsassistent für sehbehinderte Personen mit Echtzeit-KI-Führung.", detail:"Assistives Navigationssystem mit Echtzeit-Hinderniserkennung.", impact:"Verbesserte Navigationssicherheit für Sehbehinderte." },
      { title:"Katastrophenhilfe-Plattform", desc:"Intelligente Plattform zur Koordinierung von Nothilfe und Ressourcenverteilung.", detail:"Plattform zur Verwaltung von Hilfeanfragen und Spenden.", impact:"Optimierte Hilfsverteilung in Notfallszenarien." },
      { title:"KI-Konfigurations-Orchestrator", desc:"KI-gesteuertes Automatisierungssystem für komplexe Konfigurationen.", detail:"Automatisiert Systemkonfigurationen via natürlicher Sprache.", impact:"Reduzierte manuelle Konfigurationszeit durch KI." },
      { title:"Energieanalyse von Sortieralgorithmen", desc:"Analytisches Framework zur Untersuchung von Effizienz und Energieverbrauch.", detail:"Analysiert Sortieralgorithmen nach Zeit- und Energieverbrauch.", impact:"Identifizierte energieeffiziente Algorithmen." },
    ],
    rd: [
      { title:"Autonome & intelligente Systeme", desc:"KI-gesteuerte Systeme mit Echtzeit-Wahrnehmung und adaptivem Verhalten." },
      { title:"KI & Entscheidungssysteme", desc:"Datengesteuerte Entscheidungsunterstützungssysteme für kritische Anwendungen." },
      { title:"Eingebettete & Echtzeitsysteme", desc:"Eingebettete Systeme und hardware-integrierte KI-Lösungen für Hochleistungsumgebungen." },
    ],
    certs: [
      { short:"Grundlagen der Raketentechnik", institution:"Türkisches Präsidium für Verteidigungsindustrie — Akademie", takeaway:"Absolvierte das e-Book-Training Grundlagen der Raketentechnik." },
      { short:"KI-Bewusstseinsschulung", institution:"Türkisches Präsidium für Verteidigungsindustrie — Akademie", takeaway:"Grundlegende KI-Konzepte erlernt und Kompetenzen gestärkt." },
      { short:"Karriere & Kompetenz-Treffen", institution:"Verteidigungsindustrie-Akademie — Nationale Kompetenzinitiative", takeaway:"Aktuelle Perspektiven im Ökosystem der Verteidigungsindustrie gewonnen." },
      { short:"GenAI — Technologie-Serie", institution:"Garanti BBVA Genç — Neue Generation Karriereschule", takeaway:"Alle Module der Trainingsreihe vom 17.–19. Dezember abgeschlossen." },
      { short:"Technologie-Serie-GenAI", institution:"Garanti BBVA Genç — Neue Generation Karriereschule", takeaway:"GenAI-Kernkompetenzen und aktuelle Anwendungsperspektiven entwickelt." },
      { short:"Grundlagen des maschinellen Lernens", institution:"Garanti BBVA Genç — Neue Generation Karriereschule", takeaway:"ML-Grundprinzipien gefestigt und KI-Projektfundament gestärkt." },
      { short:"Think Tech", institution:"Coderspace", takeaway:"Think-Tech-Event am 11.–12. Dezember 2025 besucht." },
      { short:"Women in Tech", institution:"Coderspace", takeaway:"Women in Tech Event am 10.–11. März 2026 besucht." },
      { short:"CODE GENIUS", institution:"TalentCoders.co — CODE GENIUS", takeaway:"CODE GENIUS besucht; Zertifikat TC55189FC22." },
    ],
  },
};

const PROJ_ICONS  = [<FaFlask size={26}/>, <FaRobot size={26}/>, <FaCode size={26}/>, <FaBolt size={26}/>, <FaChartLine size={26}/>];
const PROJ_TECHS  = [
  ["Python","TensorFlow","React","SQLite","Backend API"],
  ["AI","Navigation","Assistive","Computer Vision"],
  ["PHP","MySQL","Web Platform","Backend","Database"],
  ["Python","Docker","LLM","Microservices","API"],
  ["Python","Algorithm Analysis","Data Analysis","Performance"],
];
const PROJ_TAGS   = [
  ["AI","ML","Healthcare"],["AI","Accessibility","Healthcare"],
  ["Web","Backend","Crisis Mgmt"],["AI","Automation","DevOps"],["Algorithms","Research","Energy"],
];
const PROJ_GH = [
  "https://github.com/leylaerdemir/ai-checkup-system/blob/main/README.md",
  "https://github.com/leylaerdemir/NaviCane/blob/main/README.md",
  "https://github.com/leylaerdemir/disaster-relief-management-system/blob/main/README.md",
  "https://github.com/leylaerdemir/ai-config-microservices/blob/main/README.md",
  "https://github.com/leylaerdemir/sorting-algorithm-energy-analysis/blob/main/README.md",
];
const RD_ICONS = ["🧠","🤖","🧪"];
const CERT_IMGS = [
  "/certificates/Temel Roketcilik e-Kitabi.jpg",
  "/certificates/Yapay Zeka Farkindaligi Egitimi.jpg",
  "/certificates/milliyetkinlikhamlesi.jpg",
  "/certificates/Garanti_teknolojiSerisi.jpg",
  "/certificates/Garanti_GenAi.jpg",
  "/certificates/Garanti_temelMakine.jpg",
  "/certificates/thinkTech.jpg",
  "/certificates/womenInTech.jpeg",
  "/certificates/CodeGenius.jpg",
];
const TECH_STACK = [
  {n:"Python",c:"AI / Backend",I:SiPython},{n:"TensorFlow",c:"ML / Deep Learning",I:SiTensorflow},
  {n:"Scikit-learn",c:"ML / Classical",I:SiScikitlearn},{n:"LangChain",c:"LLM / Orchestration",I:SiLangchain},
  {n:"LLM / GenAI",c:"AI Applications",I:FaRobot},{n:"OpenCV",c:"Computer Vision",I:FaEye},
  {n:"SQL",c:"Data & Databases",I:FaDatabase},{n:"FastAPI",c:"Backend / API",I:SiFastapi},
  {n:"REST API",c:"Integration",I:FaPlug},{n:"SQLite",c:"Database",I:SiSqlite},
  {n:"MySQL",c:"Database",I:SiMysql},{n:"PHP",c:"Web / Backend",I:SiPhp},
  {n:"Docker",c:"DevOps",I:SiDocker},{n:"Microservices",c:"Architecture",I:FaServer},
  {n:"Git",c:"Version control",I:SiGit},{n:"GitHub",c:"Collaboration",I:SiGithub},
  {n:"JavaScript",c:"Frontend",I:SiJavascript},{n:"React",c:"Frontend",I:SiReact},
  {n:"HTML",c:"Frontend",I:SiHtml5},{n:"CSS",c:"Frontend",I:SiCss},
  {n:"C++",c:"Performance",I:SiCplusplus},
];

export default function App() {
  const refs = {
    home: useRef(null), tech: useRef(null), projects: useRef(null),
    rd: useRef(null), certs: useRef(null), contact: useRef(null),
  };
  const [visible,   setVisible]   = useState(false);
  const [selProj,   setSelProj]   = useState(null);
  const [selCert,   setSelCert]   = useState(null);
  const [hovCert,   setHovCert]   = useState(null);
  const [lang,      setLang]      = useState("EN");
  const [menuOpen,  setMenuOpen]  = useState(false);

  const t = T[lang];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    const el = refs.projects.current;
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); obs.disconnect(); };
  }, []);

  useEffect(() => {
    const fn = () => setMenuOpen(false);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (ref) => { ref.current?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  const navItems = [
    { label: t.nav.home,     ref: refs.home },
    { label: t.nav.tech,     ref: refs.tech },
    { label: t.nav.projects, ref: refs.projects },
    { label: t.nav.ai,       ref: refs.rd },
    { label: t.nav.certs,    ref: refs.certs },
    { label: t.nav.contact,  ref: refs.contact },
  ];

  const projects = t.projects.map((p, i) => ({
    ...p, icon: PROJ_ICONS[i], technologies: PROJ_TECHS[i], tags: PROJ_TAGS[i], github: PROJ_GH[i],
  }));
  const rdItems  = t.rd.map((r, i) => ({ ...r, icon: RD_ICONS[i] }));
  const certs    = t.certs.map((c, i) => ({ ...c, image: CERT_IMGS[i] }));

  return (
    <div style={{ background:"#030712", color:"white", minHeight:"100vh", overflowX:"hidden" }}>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-menu">
          {navItems.map(({ label, ref }) => (
            <a key={label} className="nav-link" onClick={() => go(ref)}>{label}</a>
          ))}
        </div>
       {/* Desktop sağ */}
        <div className="nav-right">
          <a href="https://www.kaggle.com/leylaerdemir" target="_blank" rel="noreferrer" className="icon-box"><SiKaggle size={16}/></a>
          <a href="https://github.com/leylaerdemir" target="_blank" rel="noreferrer" className="icon-box"><FaGithub size={16}/></a>
          <a href="https://www.linkedin.com/in/leyla-erdemir-a37082394/" target="_blank" rel="noreferrer" className="icon-box"><FaLinkedin size={16}/></a>
          <div className="lang-container">
            {["EN","TR","DE"].map(l => (
              <button key={l} className={`lang-btn${lang===l?" active":""}`} onClick={() => setLang(l)}>{l}</button>
            ))}
          </div>
        </div>

        {/* Mobile sol: hamburger + ikonlar */}
        <div className="mobile-nav-left">
          <button className="hamburger" style={{display:"flex"}} onClick={() => setMenuOpen(o => !o)} aria-label="menu">
            {menuOpen ? <IoClose size={22} color="#d1d5db"/> : <GiHamburgerMenu size={20} color="#d1d5db"/>}
          </button>
          <a href="https://www.kaggle.com/leylaerdemir" target="_blank" rel="noreferrer" className="icon-box"><SiKaggle size={15}/></a>
          <a href="https://github.com/leylaerdemir" target="_blank" rel="noreferrer" className="icon-box"><FaGithub size={15}/></a>
          <a href="https://www.linkedin.com/in/leyla-erdemir-a37082394/" target="_blank" rel="noreferrer" className="icon-box"><FaLinkedin size={15}/></a>
        </div>

        {/* Mobile sağ: dil seçici */}
        <div className="mobile-nav-right">
          <div className="lang-container">
            {["EN","TR","DE"].map(l => (
              <button key={l} className={`lang-btn${lang===l?" active":""}`} onClick={() => setLang(l)}>{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={`mobile-menu${menuOpen?" open":""}`}>
        {navItems.map(({ label, ref }) => (
          <a key={label} onClick={() => go(ref)}>{label}</a>
        ))}
      </div>

      {/* ── HERO ── */}
      <div ref={refs.home} style={{ height:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ textAlign:"center", maxWidth:"680px", padding:"0 20px" }}>
          <img src="/profile.jpg" alt="profile" style={{ width:"160px", height:"160px", objectFit:"cover", borderRadius:"50%", margin:"0 auto", border:"4px solid #22d3ee", boxShadow:"0 0 25px rgba(34,211,238,0.35)", display:"block" }}/>
          <h1 className="hero-title">Leyla Erdemir</h1>
          <p className="hero-subtitle">{t.hero.sub}</p>
          <p className="hero-desc">{t.hero.desc}</p>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div ref={refs.tech} style={{ paddingTop:"60px", paddingBottom:"40px", textAlign:"center", maxWidth:"1100px", margin:"0 auto", padding:"60px 20px 40px" }}>
        <h2 className="section-title">{t.techTitle}</h2>
        <p style={{ color:"#9ca3af", fontSize:"14px", lineHeight:"1.65", maxWidth:"680px", margin:"0 auto 36px" }}>{t.techIntro}</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:"14px" }}>
          {TECH_STACK.map(({ n, c, I }) => (
            <div key={n} style={{ background:"#0b1a2a", borderRadius:"14px", border:"1px solid #1f2937", padding:"16px 10px", display:"flex", flexDirection:"column", alignItems:"center", gap:"8px" }}>
              <I size={30} color="#22d3ee"/>
              <span style={{ fontSize:"13px", fontWeight:"700", color:"#e5e7eb", textAlign:"center" }}>{n}</span>
              <span style={{ fontSize:"10px", color:"#64748b", textAlign:"center" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div ref={refs.projects} style={{ paddingTop:"40px", textAlign:"center" }}>
        <h2 className="section-title">{t.projectsTitle}</h2>
        <div style={{ maxWidth:"1060px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"24px", padding:"0 16px", opacity: visible?1:0, transform: visible?"translateY(0)":"translateY(40px)", transition:"all 0.8s ease" }}>
          <div className="cards-row">
            {projects.slice(0,3).map((p, i) => <Card key={i} p={p} onOpen={setSelProj} label={t.viewDetails}/>)}
          </div>
          <div className="cards-row">
            {projects.slice(3,5).map((p, i) => <Card key={i+3} p={p} onOpen={setSelProj} label={t.viewDetails}/>)}
          </div>

          {/* R&D */}
          <div ref={refs.rd} style={{ paddingTop:"60px", textAlign:"center" }}>
            <h2 className="section-title">{t.rdTitle}</h2>
            <p style={{ color:"#9ca3af", marginBottom:"32px", fontSize:"14px", padding:"0 16px" }}>{t.rdIntro}</p>
            <div className="cards-row">
              {rdItems.map((item, i) => (
                <div key={i} style={S.card}>
                  <div style={S.cardBody}>
                    <div style={{ marginBottom:"10px", fontSize:"26px" }}>{item.icon}</div>
                    <h3 style={S.cardTitle}>{item.title}</h3>
                    <p style={S.cardText}>{item.desc}</p>
                  </div>
                  <div style={{ ...S.btn, visibility:"hidden" }}>–</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CERTIFICATES ── */}
      <div ref={refs.certs} style={{ paddingTop:"80px", paddingBottom:"60px", textAlign:"center", maxWidth:"1100px", margin:"0 auto", padding:"80px 20px 60px" }}>
        <h2 className="section-title">{t.certsTitle}</h2>
        <p style={{ color:"#9ca3af", fontSize:"14px", lineHeight:"1.6", maxWidth:"600px", margin:"0 auto 32px" }}>{t.certsIntro}</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))", gap:"14px" }}>
          {certs.map((cert, i) => (
            <button key={i} type="button"
              style={{ position:"relative", aspectRatio:"1", borderRadius:"12px", overflow:"hidden", border:"1px solid #1f2937", padding:0, cursor:"pointer", background:"#0b1a2a", fontFamily:"inherit" }}
              onClick={() => setSelCert(cert)}
              onMouseEnter={(e) => { setHovCert(i); e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 0 28px rgba(34,211,238,0.45)"; e.currentTarget.style.borderColor="rgba(34,211,238,0.5)"; }}
              onMouseLeave={(e) => { setHovCert(null); e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.borderColor="#1f2937"; }}
            >
              <img src={cert.image} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              <div style={{ position:"absolute", left:0, right:0, bottom:0, padding:"22px 8px 8px", background:"linear-gradient(to top, rgba(3,7,18,0.92) 0%, transparent 100%)", pointerEvents:"none" }}>
                <span style={{ color:"#f3f4f6", fontSize:"11px", fontWeight:"600", display:"block", textAlign:"center" }}>{cert.short}</span>
              </div>
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(3,7,18,0.4)", opacity: hovCert===i?1:0, transition:"opacity 0.2s", pointerEvents:"none" }}>
                <FaSearchPlus size={28} color="#22d3ee"/>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div ref={refs.contact} style={{ height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"40px 20px" }}>
        <h2 className="section-title">{t.contactTitle}</h2>
        <p style={{ color:"#9ca3af", fontSize:"16px", marginBottom:"20px" }}>{t.contactIntro}</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"8px", marginBottom:"24px" }}>
          {[
            { href:"mailto:dogaleyla9@hotmail.com",       label:"dogaleyla9@hotmail.com" },
            { href:"mailto:leyla.erdemir@istun.edu.tr",   label:"leyla.erdemir@istun.edu.tr" },
          ].map(({ href, label }) => (
            <a key={label} href={href} style={{ color:"#9ca3af", textDecoration:"none", fontSize:"16px", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", transition:"color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color="#22d3ee"}
              onMouseLeave={e => e.currentTarget.style.color="#9ca3af"}>
              ✉️ {label}
            </a>
          ))}
          <p style={{ color:"#9ca3af", fontSize:"15px", marginTop:"4px" }}>🎓 {t.university}</p>
        </div>
        <div className="contact-buttons-wrap">
          {[
            { label:"GitHub",   href:"https://github.com/leylaerdemir",                         icon:<FaGithub size={17}/> },
            { label:"Kaggle",   href:"https://www.kaggle.com/leylaerdemir",                     icon:<SiKaggle size={17}/> },
            { label:"LinkedIn", href:"https://www.linkedin.com/in/leyla-erdemir-a37082394/",    icon:<FaLinkedin size={17}/> },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-btn">{icon}{label}</a>
          ))}
        </div>
      </div>

      {/* ── PROJECT MODAL ── */}
      {selProj && (
        <div style={S.overlay} onClick={() => setSelProj(null)}>
          <div style={S.modal} onClick={e => e.stopPropagation()}>
            <h2 style={{ fontSize:"22px", fontWeight:"700", marginBottom:"12px" }}>{selProj.title}</h2>
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", marginBottom:"14px" }}>
              {selProj.technologies?.map((tech, i) => (
                <span key={i} style={{ padding:"5px 12px", border:"1px solid #22d3ee", borderRadius:"999px", fontSize:"12px", color:"#22d3ee" }}>{tech}</span>
              ))}
            </div>
            <p style={{ color:"#9ca3af", lineHeight:"1.6", fontSize:"14px" }}>{selProj.detail}</p>
            <p style={{ color:"#22d3ee", marginTop:"10px", fontWeight:"500", fontSize:"14px" }}>{selProj.impact}</p>
            <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", marginTop:"14px" }}>
              {selProj.tags?.map((tag, i) => (
                <span key={i} style={{ background:"rgba(34,211,238,0.1)", color:"#22d3ee", padding:"5px 10px", borderRadius:"999px", fontSize:"12px" }}>#{tag}</span>
              ))}
            </div>
            <div style={{ display:"flex", gap:"12px", marginTop:"20px", flexWrap:"wrap" }}>
              <button style={{ padding:"10px 20px", borderRadius:"12px", border:"none", background:"linear-gradient(135deg,#22d3ee,#06b6d4)", color:"#030712", fontWeight:"600", fontSize:"13px", cursor:"pointer" }}
                onClick={() => window.open(selProj.github,"_blank")}>{t.viewDemo}</button>
              <button style={{ background:"transparent", border:"1px solid #22d3ee", padding:"10px 20px", borderRadius:"12px", color:"#22d3ee", cursor:"pointer", fontSize:"13px", fontWeight:"600" }}
                onClick={() => setSelProj(null)}>{t.close}</button>
            </div>
          </div>
        </div>
      )}

      {/* ── CERT MODAL ── */}
      {selCert && (
        <div style={S.overlay} onClick={() => setSelCert(null)}>
          <div style={{ ...S.modal, maxWidth:"460px" }} onClick={e => e.stopPropagation()}>
            <div style={{ width:"100%", marginBottom:"16px", borderRadius:"10px", border:"1px solid #1f2937", background:"#030712", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
              <img src={selCert.image} alt="" style={{ maxWidth:"100%", maxHeight:"55vh", objectFit:"contain", display:"block", borderRadius:"8px" }}/>
            </div>
            <p style={{ fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:"#22d3ee", fontWeight:"600", margin:0 }}>{t.issuedBy}</p>
            <h2 style={{ margin:"6px 0 12px", fontSize:"17px", fontWeight:"700", lineHeight:"1.3", color:"#f9fafb" }}>{selCert.institution}</h2>
            <p style={{ color:"#9ca3af", fontSize:"13px", lineHeight:"1.65" }}>{selCert.takeaway}</p>
            <button style={{ background:"transparent", border:"1px solid #22d3ee", padding:"10px 20px", borderRadius:"12px", color:"#22d3ee", cursor:"pointer", fontSize:"13px", fontWeight:"600", marginTop:"18px", width:"100%" }}
              onClick={() => setSelCert(null)}>{t.close}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ p, onOpen, label }) {
  return (
    <div style={S.card} onClick={() => onOpen(p)}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 0 22px rgba(34,211,238,0.18)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
      <div style={S.cardBody}>
        <div style={{ color:"#22d3ee", marginBottom:"10px", height:"36px", display:"flex", alignItems:"center", justifyContent:"center" }}>{p.icon}</div>
        <h3 style={S.cardTitle}>{p.title}</h3>
        <p style={S.cardText}>{p.desc}</p>
      </div>
      <div style={S.btn} onClick={e => { e.stopPropagation(); onOpen(p); }}>{label}</div>
    </div>
  );
}

const S = {
  card: { background:"#0b1a2a", borderRadius:"18px", padding:"26px 20px", width:"300px", minHeight:"320px", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", transition:"all 0.3s ease", cursor:"pointer" },
  cardBody: { display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, width:"100%" },
  cardTitle: { fontSize:"19px", fontWeight:"700", color:"#e5e7eb", textAlign:"center", margin:"8px 0", lineHeight:"1.3", minHeight:"52px", display:"flex", alignItems:"center", justifyContent:"center" },
  cardText: { fontSize:"13px", color:"#9ca3af", textAlign:"center", lineHeight:"1.6", marginTop:"8px" },
  btn: { marginTop:"16px", color:"#22d3ee", cursor:"pointer", fontSize:"13px" },
  overlay: { position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"rgba(0,0,0,0.75)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2000, padding:"16px" },
  modal: { background:"#0a0f1c", padding:"28px", borderRadius:"18px", border:"1px solid #1f2937", width:"100%", maxWidth:"500px", maxHeight:"90vh", overflowY:"auto", boxShadow:"0 0 40px rgba(34,211,238,0.2)" },
};
