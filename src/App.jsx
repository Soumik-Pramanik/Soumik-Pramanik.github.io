import { useState, useEffect } from 'react';

// Portfolio Data
const DATA = {
  name: "Soumik Pramanik",
  shortName: "SP",
  role: "AI Engineer • Data & Agent Systems",
  description: "I design autonomous multi-agent systems, productionize data workflows, and ship decision-ready analytics. Recently building SQL agents, LangGraph pipelines, and Streamlit/Agno apps with robust MLOps.",
  location: "Tokyo, Japan",
  status: "Open to opportunities",

  highlights: [
    "Built an autonomous multi-AI agent system coordinating Editor, SQLAgent, and AnalysisAgent with shared session state.",
    "Created a SQL Agent over onx_focus.db using LangGraph + Agno; auto-generates queries and structured results via Pydantic.",
    "Shipped a Streamlit chatbot with memory, SQL generation, data viz, and analysis panels; integrated team session state.",
    "Implemented MLOps: containerized services with Docker, scheduled ETL/ELT with Airflow, monitored pipelines."
  ],

  skills: {
    "Languages": ["Python", "SQL", "JavaScript"],
    "AI/ML": ["LangGraph", "LangChain", "Agno", "OpenAI", "Pydantic"],
    "Data": ["Pandas", "NumPy", "Streamlit", "Data Pipelines"],
    "MLOps": ["Docker", "Airflow", "CI/CD", "Monitoring"],
    "Databases": ["PostgreSQL", "MySQL", "SQLite"],
    "Tools": ["Git", "Linux", "REST APIs"]
  },

  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Rakuten",
      period: "Feb 2025 - Present",
      location: "Tokyo, Japan",
      logo: "/rakuten-logo.png",
      description: "Lead the design and development of an autonomous multi-agent AI system with a retrieval-augmented generation pipeline, automated end-to-end data analysis workflows, and integrated dynamic visualization modules with details analysis.",
      achievements: [
        "Designed autonomous multi-agent AI system with RAG pipeline",
        "Automated end-to-end data analysis workflows",
        "Integrated dynamic visualization modules with detailed analysis"
      ]
    },
    {
      role: "Data Scientist",
      company: "Rakuten",
      period: "Jan 2024 - Feb 2025",
      location: "Tokyo, Japan",
      logo: "/rakuten-logo.png",
      description: "Designed query summary framework for Rakuten Music Autocomplete Search Suggestion, implemented data collection pipelines, and built analytics dashboards. Maintained data pipelines with ETL processes for business intelligence.",
      achievements: [
        "Designed query summary framework to collect and analyze key statistics per query for Rakuten Music Autocomplete Search Suggestion",
        "Designed and implemented data collection pipelines to extract essential features from server data and synchronize to storage",
        "Implemented scoring-based ranking system to prioritize clear codes by impact on traffic and KPIs, enabling rapid identification of critical failure causes",
        "Implemented Docker-based MLOps infrastructure",
        "Scheduled ETL/ELT workflows with Airflow",
        "Built monitoring systems for data pipelines"
      ]
    },
    {
      role: "Assistant Professor",
      company: "Techno India University",
      period: "Jul 2023 - Dec 2023",
      location: "Greater Kolkata Area",
      logo: "/techno-logo.jpeg",
      description: "Computer Science & Engineering (Artificial Intelligence & Machine Learning) Department",
      achievements: [
        "Taught AI and Machine Learning courses like Database Management Systems, Image Processing, and Machine Learning",
        "Mentored students in research projects on computer vision and deep learning",
        "Contributed to curriculum development with CO/PO mapping."
      ]
    }
  ],

  publications: [
    {
      title: "Fish92: A Novel Dataset for Indigenous Fish Classification",
      authors: "Soumik Pramanik, Shrihari A, Prithwijit Guha",
      venue: "9th International conference on Computer vision & Image processing (CVIP), IIITDM Kancheepuram, India, 2024",
      publisher: "Cham: Springer Nature Switzerland, 2025",
      date: "Dec 2024",
      doi: "doi.org/10.1007/978-3-031-93694-4_19",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-93694-4_19",
      // abstract: "The identification of indigenous fish species is vital in aquatic research, fishery management, and environmental monitoring. Fish classification has important practical significance for both the aquaculture industry and ordinary people. Nevertheless, current deep learning techniques for automatic fish classification lack robust feature extraction capabilities affecting the model performance. This is due to complex textual features, similarity of shapes among fish species, skewness in the fish dataset towards majority classes and limited number of available instances while data collection. To tackle this issue effectively, a model capable of operating in resource-constrained environments while maintaining high accuracy is essential. To this end, this paper makes the following contributions. First, a new dataset is proposed with 92 classes. The proposed Fish92 dataset consists of ~3500 edible fish instances targeted over Northeast part of India. Second, an in-depth analysis and evaluation of Fish92 dataset characteristics. Six pre-trained state-of-the-art CNN models were used for the dataset evaluation. These models were heavily biased due to class imbalance in the dataset. Hence, four existing debiasing techniques were employed on Fish92 dataset to have a clear insight into the features.",
      highlights: ["Fish92 Dataset", "Feature Extraction", "Classification Models", "Debiasing Techniques"]
    }
  ],

  education: [
    {
      degree: "MTech in Robotics and Artificial Intelligence",
      school: "IIT Guwahati",
      logo: "/iitg-logo.png",
      gpa: "8.60/10.0",
      coursework: ["Image Processing", "Machine Learning", "Database Management Systems"]
    },
    {
      degree: "BTech in Computer Science",
      school: "Govt. College of Engineering and Leather Technology",
      logo: "/gcelt-logo.png",
      gpa: "8.45/10.0",
      coursework: ["Operating Systems", "Computer Networks"]
    }
  ],

  projects: [
    {
      title: "Multi-Agent SQL System",
      description: "Autonomous system with Editor, SQLAgent, and AnalysisAgent coordinating via shared session state for intelligent data workflows.",
      tags: ["LangGraph", "Python", "Multi-Agent", "SQL"],
      link: "#"
    },
    {
      title: "SQL Agent with Agno",
      description: "Natural language to SQL agent over onx_focus.db using LangGraph + Agno with Pydantic-structured outputs.",
      tags: ["Agno", "LangGraph", "Pydantic", "SQL"],
      link: "#"
    },
    {
      title: "Streamlit Analytics Platform",
      description: "Production chatbot with memory, SQL generation, data visualization, and analysis panels with team session state.",
      tags: ["Streamlit", "Python", "Data Viz", "Analytics"],
      link: "#"
    },
    {
      title: "MLOps Infrastructure",
      description: "Containerized services with Docker, Airflow-scheduled ETL/ELT pipelines, and comprehensive monitoring.",
      tags: ["Docker", "Airflow", "MLOps", "Monitoring"],
      link: "#"
    }
  ]
};

// Custom Hook for Dark Mode
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}

// Reusable Components
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 gradient-text">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

function Chip({ children, hover = true }) {
  return (
    // <span className={`inline-block px-3 py-1 rounded-full text-sm border-2 border-blue-500/30 bg-blue-500/10 text-blue-400 dark:text-blue-300 ${hover ? 'hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300' : ''}`}>
    //   {children}
    // </span>
    // <span className={`inline-block px-3 py-1 rounded-full text-sm border-2 border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 ${hover ? 'hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:border-blue-600 dark:hover:border-blue-500/50 transition-all duration-300' : ''}`}>
    //   {children}
    // </span>
    <span className={`inline-block px-3 py-1 rounded-full text-sm border-2 border-cyan-700 bg-cyan-50 text-cyan-900 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 ${hover ? 'hover:bg-cyan-100 dark:hover:bg-blue-500/20 hover:border-cyan-700 dark:hover:border-blue-500/50 transition-all duration-300' : ''}`}>
      {children}
    </span>
  );
}

function Card({ children, hover = true }) {
  return (
    <div className={`p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 shadow-lg ${hover ? 'hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300' : ''}`}>
      {children}
    </div>
  );
}

function IconSun() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

// Main App Component
function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform">
            Soumik Pramanik
          </a>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-blue-500 transition-colors">Publications</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </nav> */}
          <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-blue-500 transition-colors">Publications</a>
            <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="pt-24">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <Section id="home">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Main Info */}
            <div className="space-y-6 animate-fadeIn">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {DATA.name}
              </h1> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text">
                {DATA.name}
              </h1>
              {/* <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {DATA.role}
              </p> */}
              <p className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium">
                {DATA.role}
              </p>
              {/* <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {DATA.description}
              </p> */}
              <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
                {DATA.description}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                {/* <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>{DATA.status}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span>📍</span>
                  <span>{DATA.location}</span>
                </div> */}
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>{DATA.status}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <span>📍</span>
                  <span>{DATA.location}</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-4 animate-slideInRight">
              <Card>
                <h3 className="text-xl font-bold mb-4 gradient-text">Highlights</h3>
                <ul className="space-y-3">
                  {/* {DATA.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))} */}
                  {DATA.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-900 dark:text-white">
                      <span className="text-blue-500 dark:text-cyan-300 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" title="About">
          <div className="space-y-6">
            {/* Introduction */}
            <Card hover={false}>
              {/* <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I craft high-leverage data & AI systems with a focus on reliability and developer ergonomics.
                My work transforms complex structured data and visual inputs into robust, real-time AI systems
                that enable intelligent decision-making, automation, and scalable products. Recent focus: SQL agents,
                autonomous coordination, and elegant visualization for fast decision-making.
              </p> */}
              <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
                I craft high-leverage data & AI systems with a focus on reliability and developer ergonomics.
                My work transforms complex structured data and visual inputs into robust, real-time AI systems
                that enable intelligent decision-making, automation, and scalable products. Recent focus: SQL agents,
                autonomous coordination, and elegant visualization for fast decision-making.
              </p>
            </Card>

            {/* Technical Expertise Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-lg font-bold mb-3 gradient-text">AI & Agent Systems</h3>
                {/* <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm"> */}
                <ul className="space-y-2 text-gray-900 dark:text-white text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Multi-agent orchestration with LangGraph</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>SQL agents & RAG pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Applied ML & computer vision</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-3 gradient-text">Data Engineering</h3>
                {/* <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm"> */}
                <ul className="space-y-2 text-gray-900 dark:text-white text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Scalable ETL/ELT pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Production-scale deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Real-time analytics platforms</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-bold mb-3 gradient-text">Research & Impact</h3>
                {/* <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm"> */}
                <ul className="space-y-2 text-gray-900 dark:text-white text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>First author, Springer Nature publication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Novel image dataset & classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Performance profiling & optimization</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {DATA.experience.map((exp, idx) => (
              <Card key={idx}>
                <div className="flex gap-4 mb-4">
                  {/* Company Logo */}
                  {exp.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{exp.role}</h3>
                      {/* <p className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</p> */}
                      <p className="text-lg text-gray-900 dark:text-white">{exp.company}</p>
                      {exp.location && (
                        /* <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.location}</p> */
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{exp.location}</p>
                      )}
                    </div>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span> */}
                    <span className="text-sm text-gray-700 dark:text-gray-300 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                </div>
                {/* <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p> */}
                <p className="text-gray-900 dark:text-white mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {/* {exp.achievements.map((achievement, aidx) => (
                    <div key={aidx} className="flex gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-blue-500">→</span>
                      <span>{achievement}</span>
                    </div>
                  ))} */}
                  {exp.achievements.map((achievement, aidx) => (
                    <div key={aidx} className="flex gap-2 text-gray-900 dark:text-white">
                      <span className="text-blue-500 dark:text-cyan-300">→</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications">
          <div className="space-y-6">
            {DATA.publications.map((pub, idx) => (
              <Card key={idx}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-bold gradient-text mb-2 md:mb-0">{pub.title}</h3>
                  {/* <span className="text-sm text-gray-500 dark:text-gray-400">{pub.date}</span> */}
                  <span className="text-sm text-gray-700 dark:text-gray-300">{pub.date}</span>
                </div>
                {/* <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Authors: </span>{pub.authors}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{pub.venue}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{pub.publisher}</p> */}
                <p className="text-gray-900 dark:text-white mb-2">
                  <span className="font-semibold">Authors: </span>{pub.authors}
                </p>
                <p className="text-sm text-gray-900 dark:text-white mb-1">{pub.venue}</p>
                <p className="text-sm text-gray-900 dark:text-white mb-3">{pub.publisher}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 transition-colors mb-4 inline-block"
                >
                  {pub.doi} →
                </a>

                {/* Abstract */}
                {pub.abstract && (
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    {/* <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Abstract</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                      {pub.abstract}
                    </p> */}
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Abstract</p>
                    <p className="text-sm text-gray-900 dark:text-white leading-relaxed text-justify">
                      {pub.abstract}
                    </p>
                  </div>
                )}

                <div>
                  {/* <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Highlights:</p> */}
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.highlights.map((highlight, hidx) => (
                      <Chip key={hidx}>{highlight}</Chip>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-6">
            {DATA.education.map((edu, idx) => (
              <Card key={idx}>
                <div className="flex gap-4 mb-4">
                  {/* School Logo */}
                  {edu.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
                      {/* <p className="text-lg text-gray-600 dark:text-gray-300">{edu.school}</p> */}
                      <p className="text-lg text-gray-900 dark:text-white">{edu.school}</p>
                    </div>
                    {/* <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <span className="font-semibold">GPA: </span>{edu.gpa}
                    </div> */}
                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 md:mt-0">
                      <span className="font-semibold">GPA: </span>{edu.gpa}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Coursework:</p> */}
                  <p className="text-sm text-gray-900 dark:text-white mb-2">Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cidx) => (
                      <Chip key={cidx} hover={false}>{course}</Chip>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.projects.map((project, idx) => (
              <Card key={idx}>
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                {/* <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p> */}
                <p className="text-gray-900 dark:text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tidx) => (
                    <Chip key={tidx}>{tag}</Chip>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  View Project →
                </a>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(DATA.skills).map(([category, items]) => (
              <Card key={category} hover={false}>
                <h3 className="text-lg font-bold mb-4 gradient-text">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <Chip key={idx}>{skill}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact">
          <Card>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Work Together</h3>
              {/* <p className="text-gray-600 dark:text-gray-300 mb-8">
                Interested in collaborating on AI/ML projects, data engineering, or building autonomous systems? Let's connect!
              </p> */}
              <p className="text-gray-900 dark:text-white mb-6">
                Interested in collaborating on AI/ML projects, data engineering, or building autonomous systems? Let's connect!
              </p>
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <a href="mailto:soumikpramanik28@gmail.com" className="hover:text-blue-500 transition-colors">
                    soumikpramanik28@gmail.com
                  </a>
                  <span>•</span>
                  <a href="mailto:soumikpramanik007@gmail.com" className="hover:text-blue-500 transition-colors">
                    soumikpramanik007@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                {/* <a
                  href="mailto:your.email@example.com"
                  className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Email Me
                </a> */}
                <a
                  href="mailto:soumikpramanik28@gmail.com"
                  className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Email Me
                </a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </a> */}
                <a
                  href="https://www.linkedin.com/in/soumik-pramanik-a7a36520a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </a>
                {/* <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </a> */}
                <a
                  href="https://github.com/Soumik-Pramanik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </Section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200/50 dark:border-gray-700/50">
          {/* <div className="max-w-5xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2026 {DATA.name}. All rights reserved.</p>
          </div> */}
          <div className="max-w-5xl mx-auto text-center text-gray-900 dark:text-white">
            <p>&copy; 2026 {DATA.name}. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
