"use client";
import { useState } from "react";
import { ExternalLink, Github, Mail, Linkedin, Youtube, Menu, X, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experiences = [
    {
      role: "Java Developer Intern",
      company: "K7CODELABS",
      period: "Dec 2025 – Present · 4 mos",
      location: "Hybrid",
      skills: ["Core Java", "Git", "Java Spring","Java SpringBoot","JPA" ,"Hibernate", "microservices", "REST APIs", "SQL", "databases"],
      color: "blue",
    },
    {
      role: "Intern",
      company: "MICROSAGE PRIVATE LIMITED",
      period: "Apr 2025 – Oct 2025 · 7 mos",
      location: "Pune District, Maharashtra · On-site",
      skills: ["React Native", "Databases"],
      color: "purple",
    },
    {
      role: "Founderoffice Intern",
      company: "Khana Anywhere - DigiMess",
      period: "Mar 2025 – Jun 2025 · 4 mos",
      location: "Aurangabad, Maharashtra · Remote",
      points: [
        "Collaborated directly with Founder & CEO on business operations",
        "Monitored and analyzed sales and customer data",
        "Contributed to Summer Special Aamras Thali campaign",
      ],
      color: "orange",
    },
    {
      role: "Intern",
      company: "Vinz Global",
      period: "Oct 2023 – Jun 2024 · 9 mos",
      location: "Pune District, Maharashtra · Remote",
      points: [
        "Built CV fraud detection system with a team of five",
        "Conducted research on Indian colleges for search platform",
        "Used Java, Spring Boot, and ReactJS for development",
      ],
      skills: ["CSS", "React.js", "Python","Reasearch"],
      color: "green",
    },
    {
      role: "Team Lead",
      company: "Ecell Pescoe",
      period: "Sep 2023 – Apr 2024 · 8 mos",
      location: "Aurangabad, Maharashtra · Hybrid",
      points: [
        "Led 18 members in National Entrepreneurship Challenge by IIT Bombay",
        "Achieved All-India Rank 31",
        "Managed task progress, communication across the team",
      ],
      skills: ["Management", "Leadership", "+7 skills"],
      color: "red",
    },
  ];

  const skills: Record<string, string[]> = {
    Languages: ["Java", "SQL", "JavaScript", "HTML/CSS"],
    Frameworks: ["Spring Boot", "Spring Security", "Spring Data JPA", "React Native"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "Tools & DevOps": ["Git", "Docker", "Maven", "Jenkins"],
    Other: ["REST APIs", "Microservices", "Design Patterns", "Agile"],
  };

  const colorMap: Record<string, string> = {
    blue: "border-blue-500 bg-blue-500/10 text-blue-400",
    purple: "border-purple-500 bg-purple-500/10 text-purple-400",
    orange: "border-orange-500 bg-orange-500/10 text-orange-400",
    green: "border-green-500 bg-green-500/10 text-green-400",
    red: "border-red-500 bg-red-500/10 text-red-400",
  };

  const dotMap: Record<string, string> = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Nav */}
      <nav className="fixed w-full top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">Sayali <span className="text-blue-400">Pathak</span></div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {["about","experience","skills","content","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-white capitalize transition">{s}</a>
            ))}
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4 text-sm text-gray-400">
            {["about","experience","skills","content","contact"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMobileMenuOpen(false)} className="hover:text-white capitalize">{s}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs px-3 py-1 rounded-full mb-6">
              Available for opportunities
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Hi, I am <br/><span className="text-blue-400">Sayali Pathak</span>
            </h1>
            <p className="text-lg text-gray-400 mb-3 font-medium">Java Developer · Content Creator · Team Lead</p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Building scalable backend systems with Java & Spring Boot. Ranked 31st All-India at IIT Bombay Entrepreneurship Challenge. Creator of Marathi Kavita content with 2.6k+ views.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition text-sm">Get In Touch</a>
              <a href="#experience" className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition text-sm text-gray-300">View Experience</a>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://www.linkedin.com/in/sayali-pathak-145b79201/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition"><Linkedin size={20}/></a>
              <a href="https://github.com/sayali765" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition"><Github size={20}/></a>
              <a href="https://youtube.com/@offline5756" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition"><Youtube size={20}/></a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 rounded-2xl overflow-hidden border-2 border-gray-700">
                <img
                  src="/mine.JPG"
                  alt="Sayali Pathak"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full bg-gray-800 flex items-center justify-center text-6xl">👩‍💻</div>`;
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-sm">
                <span className="text-green-400 font-bold">31st</span> <span className="text-gray-400">All-India Rank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["Team Lead", "Led 18 members at IIT Bombay National Entrepreneurship Challenge. Achieved All-India Rank 31."],
            ["Java Developer", "Interning at K7CODELABS. Built real-world systems at Vinz Global using Java, Spring Boot & ReactJS."],
            ["Content Creator", "Marathi Kavita YouTube channel with 2,600+ views. Passionate about poetry, writing, drawing & reading."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`border-l-4 ${colorMap[exp.color].split(" ")[0]} bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-4`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[exp.color]}`}>
                  <span className="text-lg font-bold">{exp.company[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full w-fit ${colorMap[exp.color]}`}>{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12}/>{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/>{exp.location}</span>
                  </div>
                  {exp.points && (
                    <ul className="space-y-1 mb-3">
                      {exp.points.map((p, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${dotMap[exp.color]}`}></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-blue-400 font-bold mb-4 text-sm uppercase tracking-wider">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>{skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="content" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Content & Passion</h2>
          <p className="text-gray-500 mb-12 text-sm">Where technology meets Marathi culture</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-red-500/30 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <Youtube className="text-red-500" size={28}/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">मराठी कविता & Quotes</h3>
                  <p className="text-gray-500 text-sm">YouTube · @offline5756</p>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-5 flex items-center justify-between">
                <span className="text-gray-400 text-sm">Total Views</span>
                <span className="text-red-400 font-bold text-lg">2,600+</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Sharing the beauty of Marathi poetry, heartfelt quotes, and rich Marathi culture through creative video content.
              </p>
              <a href="https://youtube.com/@offline5756" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-sm transition">
                Watch Channel <ExternalLink size={14}/>
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Beyond Code</h3>
              <div className="space-y-5">
                {[
                  ["✍️", "Kavita Writing", "Original Marathi poems and quotes with emotion and depth"],
                  ["🎨", "Drawing", "Art and visual creativity alongside UI design thinking"],
                  ["📚", "Reading", "Marathi literature, tech books, and leadership principles"],
                  ["🌱", "Always Learning", "Java ecosystem, new frameworks, and industry trends"],
                ].map(([emoji, title, desc]) => (
                  <div key={title} className="flex gap-4 items-start">
                    <span className="text-xl mt-0.5">{emoji}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
          <p className="text-gray-500 mb-10 text-sm">Open to internships, collaborations and opportunities!</p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <a href="https://www.linkedin.com/in/sayali-pathak-145b79201/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-xl p-5 flex flex-col items-center gap-2 transition">
              <Linkedin size={24} className="text-blue-400"/>
              <span className="text-xs text-gray-400">LinkedIn</span>
            </a>
            <a href="https://github.com/sayali765" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-white rounded-xl p-5 flex flex-col items-center gap-2 transition">
              <Github size={24} className="text-white"/>
              <span className="text-xs text-gray-400">GitHub</span>
            </a>
            <a href="https://youtube.com/channel/UCWxhCnBhV75o8KZ6_4bFEzw?si=TcWV-4Wpag8K8jya" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-red-500 rounded-xl p-5 flex flex-col items-center gap-2 transition">
              <Youtube size={24} className="text-red-400"/>
              <span className="text-xs text-gray-400">YouTube</span>
            </a>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none text-sm"/>
              <input type="email" placeholder="Your email" className="px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none text-sm"/>
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none text-sm"/>
            <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none resize-none text-sm"></textarea>
            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition text-sm">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-6 border-t border-gray-800 text-center text-gray-600 text-xs">
        © 2024 Sayali Pathak · Java Developer · Marathi Kavita Creator · Built with Next.js & Tailwind · Deployed on Vercel
      </footer>

    </div>
  );
}