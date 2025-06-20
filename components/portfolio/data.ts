// components/portfolio/data.ts

// Tipe untuk data pencapaian agar bisa digunakan di komponen lain
export type AchievementType = {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    type: "certification" | "award";
    year: string;
  };
  
  export const typewriterTexts = ["AI/ML Engineer", "Data Scientist", "MLOps Engineer"];
  
  export const navigationItems = ["About", "Experience", "Skills", "Projects", "Achievements"];
  
  export const workExperience = [
    { 
      company: "PT Bank Syariah Indonesia TBK", 
      position: "IT Support Intern", 
      duration: "Jul 2024 - Aug 2024", 
      location: "Bekasi, Indonesia",
      logo: "/logo/bsi.svg?height=60&width=60",
      description: "Supported daily IT operations and contributed to the development of a reminder system to notify customers about upcoming bill payments. Assisted staff with system installations, basic troubleshooting, and software configuration to ensure smooth office operations.", 
      achievements: [
          "Developed an Excel Macro to automate billing reminders.",
          "Helped collection staff send follow-ups 2 days faster.",
          "Resolved over 20 IT support requests from branch staff."
      ] 
    },
    { 
      company: "PT Aesthetica Tria Utama", 
      position: "IT Support",
      duration: "Jun 2019 - Jun 2022", 
      location: "Cibubur, Indonesia",
      logo: "/logo/aesthetica.svg?height=60&width=60", 
      description: "Handled basic IT support while assisting the digital marketing team with website updates, promotional designs, and content coordination. Played a supporting role in improving online presence and ensuring consistent visual branding.", 
      achievements: [
          "Maintained and updated website content regularly.",
          "Improved basic SEO structure (titles, meta tags, slugs).",
          "Provided daily IT support for 10+ in-office devices."
      ] 
    },
    { 
      company: "PT Nutrifood Indonesia", 
      position: "Data Entry Intern", 
      duration: "Jan 2019 - Mar 2019", 
      location: "Cikarang, Indonesia",
      logo: "/logo/nutrifood.svg?height=60&width=60", 
      description: "Assisted the HR department with employee data entry and optimization. Helped automate data input workflows using scripting tools, verified data accuracy, and supported internal tools for employee access via local network.", 
      achievements: [
          "Entered 500+ employee records into internal database.",
          "Created iMacros scripts to automate repetitive input.",
          "Performed data validation to ensure accuracy."
      ]
    },
  ];
  
  
  
  export const projects = [
    { 
      id: 1, 
      title: "Liver Disease Detection Expert System",
      description: "Developed a web-based expert system to detect liver disease using the Naive Bayes classification method.", // Anda bisa kembangkan deskripsi ini
      image: "/projects/pedulihati.jpeg", // Ganti dengan gambar proyek Anda
      technologies: ["Django", "Naive Bayes", "React", "Tailwind"], 
      github: "https://github.com/msultanalhakim/naive-bayes", // Ganti dengan link repo Anda
      live: "https://liverdisease.pythonanywhere.com/", 
      featured: true 
    },
    { 
      id: 2, 
      title: "Tixxo Web App - Ticket Management",
      description: "A full-stack ticket management platform for events, built using the TALL stack (Tailwind, Alpine.js, Laravel, Livewire).", // Anda bisa kembangkan deskripsi ini
      image: "/projects/tixxo.png", 
      technologies: ["Laravel", "React", "Tailwind"], 
      github: "https://github.com/ahmad-rian/e-ticketing-tixxo", 
      live: "https://tixxo.my.id/", 
      featured: true 
    },
    { 
      id: 3, 
      title: "Matrix Operations Web App",
      description: "An interactive web application for performing various matrix operations, built with modern frontend technologies.", // Anda bisa kembangkan deskripsi ini
      image: "/projects/matrix-calculator.png", 
      technologies: ["Next.js", "Tailwind", "TypeScript"], 
      github: "https://github.com/msultanalhakim/matrix-operation.git", 
      live: "https://matrix-operation-ekn9.vercel.app/", 
      featured: false
    },
    { 
      id: 4, 
      title: "Web Epicentrum Unpad 2024",
      description: "Developed the official website for the Web Epicentrum event at Unpad University in 2024.", // Anda bisa kembangkan deskripsi ini
      image: "/projects/epicentrum.jpg", 
      technologies: ["PHP", "Tailwind", "JavaScript"], 
      github: "#", // Jika tidak ada, bisa dikosongkan
      live: "", 
      featured: false
    },
  ];
  
  export const achievements: AchievementType[] = [
    { 
      title: "Bronze Medal, ICT & Multimedia",
      subtitle: "Indonesia Inventors Day", 
      image: "/awards/iid.png",
      description: "Awarded a bronze medal for innovation in the ICT & Multimedia category at an international-level event.", 
      type: "award", 
      year: "2024" 
    },
    { 
      title: "Best Project",
      subtitle: "Laboratorium Informatika UNSOED", 
      image: "/awards/bestproject.jpg",
      description: "Achieved first place in the national web design competition, demonstrating superior design and technical skills.", 
      type: "award", 
      year: "2021" 
    },
    { 
      title: "Bronze Medal, ICT & Multimedia",
      subtitle: "Electro Invention Race", 
      image: "/awards/eir.jpg",
      description: "Achieved first place in the national web design competition, demonstrating superior design and technical skills.", 
      type: "award", 
      year: "2021" 
    },
    { 
        title: "2nd Place, Web Technologies",
        subtitle: "Lomba Keterampilan Siswa", 
        image: "/awards/webtechnologies.jpg", 
        description: "Achieved second place in the national web technologies competition, demonstrating superior technologies and technical skills.", 
        type: "award", 
        year: "2019"
      },
    { 
      title: "2nd Place, Fast Typing",
      subtitle: "Olimpiade TIK Nasional", 
      image: "/awards/fasttyping.jpg", 
      description: "Secured second place in a national fast-typing competition, showcasing exceptional speed and accuracy.",
      type: "award", 
      year: "2020" 
    },
    { 
      title: "Best Project",
      subtitle: "Lomba Keterampilan Siswa", 
      image: "/awards/webtechnologies.jpg", 
      description: "Achieved second place in the national web technologies competition, demonstrating superior technologies and technical skills.", 
      type: "award", 
      year: "2019"
    },
    { 
      title: "Character Building",
      subtitle: "Djarum Beasiswa Plus", 
      image: "/awards/cb.jpg",
      description: "",
      type: "certification",
      year: "2025" 
    },
    { 
      title: "Leadership Development",
      subtitle: "Djarum Beasiswa Plus", 
      image: "/awards/ld.jpg",
      description: "",
      type: "certification",
      year: "2025" 
    },
    { 
      title: "Cyber Security Training",
      subtitle: "Mastercard", 
      image: "/awards/comptia.jpg", 
      description: "Comptia Security + and Cybersecurity Analyst (CYSA+)",
      type: "certification",
      year: "2020" 
    },
  ];