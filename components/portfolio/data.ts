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
  
  export const skills = [
    // Skill yang sudah ada dan relevan
    { name: "Python", category: "Programming Language", icon: "🐍", color: "from-blue-500 to-yellow-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    { name: "JavaScript", category: "Programming Language", icon: "🟨", color: "from-yellow-400 to-orange-500", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
    { name: "React", category: "Frontend Framework", icon: "⚛️", color: "from-cyan-400 to-blue-500", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/20" },
    { name: "Next.js", category: "Full-stack Framework", icon: "▲", color: "from-gray-700 to-gray-900", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/20" },
    { name: "Tailwind CSS", category: "CSS Framework", icon: "🎨", color: "from-teal-400 to-cyan-500", bgColor: "bg-teal-500/10", borderColor: "border-teal-500/20" },
    
    // DITAMBAHKAN: Berdasarkan CV Anda
    { name: "SQL", category: "Database Language", icon: "🗃️", color: "from-sky-400 to-cyan-600", bgColor: "bg-sky-500/10", borderColor: "border-sky-500/20" },
    { name: "PHP", category: "Programming Language", icon: "🐘", color: "from-indigo-400 to-purple-500", bgColor: "bg-indigo-500/10", borderColor: "border-indigo-500/20" },
    { name: "Laravel", category: "PHP Framework", icon: "🔥", color: "from-red-500 to-orange-500", bgColor: "bg-red-500/10", borderColor: "border-red-500/20" },
    { name: "Django", category: "Python Framework", icon: "🎸", color: "from-green-600 to-teal-700", bgColor: "bg-green-600/10", borderColor: "border-green-600/20" },
    { name: "C++", category: "Programming Language", icon: "👾", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-600/10", borderColor: "border-blue-600/20" },
    { name: "R", category: "Data Analysis", icon: "📊", color: "from-gray-400 to-blue-400", bgColor: "bg-gray-400/10", borderColor: "border-gray-400/20" },
    { name: "Scikit-learn", category: "ML Library", icon: "🤖", color: "from-orange-400 to-yellow-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
  ];
  
  export const workExperience = [
    { 
      company: "PT Bank Syariah Indonesia TBK", 
      position: "IT Support", 
      duration: "Jul 2024 - Aug 2024", 
      location: "Bekasi, Indonesia",
      logo: "/bsi.svg?height=60&width=60",
      description: "Provided technical support and developed an automation solution to improve operational efficiency in a banking environment.", 
      achievements: [
          "Designed and implemented an automated collection reminder system.",
          "Improved billing efficiency and on-time payment rates.",
          "Analyzed and resolved various technical IT issues for staff."
      ] 
    },
    { 
      company: "PT Aesthetica Tria Utama", 
      position: "IT Support",
      duration: "Jun 2019 - Jun 2022", 
      location: "Cibubur, Indonesia",
      logo: "/aesthetica.svg?height=60&width=60", 
      description: "Executed a data-driven content strategy to drive brand engagement and improve web visibility through SEO optimization.", 
      achievements: [
          "Executed KPI-driven content strategy.",
          "Drove brand engagement and audience growth.",
          "Applied SEO optimization to improve web visibility."
      ] 
    },
    { 
      company: "PT Nutrifood Indonesia", 
      position: "Data Entry - Intern", 
      duration: "Jan 2019 - Mar 2019", 
      location: "Cikarang, Indonesia",
      logo: "/nutrifood.svg?height=60&width=60", 
      description: "Increased data processing efficiency and accuracy by automating workflows and performing rigorous data quality checks.", 
      achievements: [
          "Automated data entry with iMacros and R scripts.",
          "Increased data accuracy and efficiency.",
          "Ensured integrity of employee data with quality checks."
      ]
    },
  ];
  
  export const projects = [
    { 
      id: 1, 
      title: "Liver Disease Detection Expert System",
      description: "Developed a web-based expert system to detect liver disease using the Naive Bayes classification method.", // Anda bisa kembangkan deskripsi ini
      image: "/project-liver-disease.png", // Ganti dengan gambar proyek Anda
      technologies: ["PHP", "Naive Bayes", "JavaScript"], 
      github: "https://github.com/msultanalhakim/...", // Ganti dengan link repo Anda
      live: "#", 
      featured: true 
    },
    { 
      id: 2, 
      title: "Tixxo Web App - Ticket Management",
      description: "A full-stack ticket management platform for events, built using the TALL stack (Tailwind, Alpine.js, Laravel, Livewire).", // Anda bisa kembangkan deskripsi ini
      image: "/project-tixxo.png", 
      technologies: ["Laravel", "React", "Tailwind"], 
      github: "https://github.com/msultanalhakim/...", 
      live: "#", 
      featured: true 
    },
    { 
      id: 3, 
      title: "Matrix Operations Web App",
      description: "An interactive web application for performing various matrix operations, built with modern frontend technologies.", // Anda bisa kembangkan deskripsi ini
      image: "/project-matrix.png", 
      technologies: ["Next.js", "Tailwind", "TypeScript"], 
      github: "https://github.com/msultanalhakim/...", 
      live: "#", 
      featured: false
    },
    { 
      id: 4, 
      title: "Web Epicentrum Unpad 2024",
      description: "Developed the official website for the Web Epicentrum event at Unpad University in 2024.", // Anda bisa kembangkan deskripsi ini
      image: "/project-epicentrum.png", 
      technologies: ["PHP", "Tailwind", "JavaScript"], 
      github: "#", // Jika tidak ada, bisa dikosongkan
      live: "#", 
      featured: false
    },
  ];
  
  export const achievements: AchievementType[] = [
    { 
      title: "Bronze Medal, ICT & Multimedia",
      subtitle: "Indonesia Inventors Day (International)", 
      image: "/achievement-iid.png", // Ganti dengan gambar penghargaan
      description: "Awarded a bronze medal for innovation in the ICT & Multimedia category at an international-level event.", 
      type: "award", 
      year: "2024" 
    },
    { 
      title: "1st Place, Web Design",
      subtitle: "Electro Invention Race (National)", 
      image: "/achievement-eir.png", 
      description: "Achieved first place in the national web design competition, demonstrating superior design and technical skills.", 
      type: "award", 
      year: "2021"
    },
    { 
      title: "Djarum Beasiswa Plus Awardee",
      subtitle: "Djarum Foundation", 
      image: "/achievement-djarum.png", 
      description: "Selected as an awardee for the prestigious Djarum Beasiswa Plus, recognizing academic excellence and soft skills.",
      type: "award", // Anda bisa menambahkan tipe baru jika perlu
      year: "2024/2025" 
    },
      { 
      title: "2nd Place, Fast Typing",
      subtitle: "Olimpiade TIK Nasional", 
      image: "/achievement-olimpiade-tik.png", 
      description: "Secured second place in a national fast-typing competition, showcasing exceptional speed and accuracy.",
      type: "award", 
      year: "2019" 
    },
  ];