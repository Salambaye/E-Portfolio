// import { Code } from 'lucide-react';

// const AboutSection = () => {
//   const skills = [
//     { label: 'Développement Full Stack Junior', value: 95 },
//     { label: 'Automatisation VBA/EDI', value: 90 },
//     { label: 'API REST & Bases de données', value: 85 },
//     { label: 'Méthodes Agiles', value: 80 }
//   ];

//   return (
//     <section id="about" className="py-20 px-4 bg-slate-900">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de moi</h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full" />
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Diplômée d’un <span className="text-indigo-400 font-semibold">Master 2</span> en Développement Web et Mobile à l’ESTIAM, 
//               je suis intéressée par les domaines du <span className="text-blue-400 font-semibold">développement full stack</span>, 
//               de l’ <span className="text-blue-400 font-semibold">automatisation</span> et de la <span className="text-blue-400 font-semibold">data</span>. 
              
//             </p>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Curieuse, rigoureuse et autonome, j’aime analyser des problématiques concrètes et concevoir des solutions techniques fiables et efficaces.
//               {/* Expérience dans l'automatisation de traitements de données, la conception de macros avancées et la gestion de flux EDI. 
//               Compétences techniques solides en développement web et mobile avec un intérêt marqué pour l'analyse et l'optimisation de processus. */}
//             </p>
//             <div className="pt-4">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-medium">
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 Disponible en CDI dès maintenant
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
//             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//               <Code className="text-indigo-400" />
//               Compétences clés
//             </h3>
//             <div className="space-y-4">
//               {skills.map((skill) => (
//                 <div key={skill.label}>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-300">{skill.label}</span>
//                     <span className="text-indigo-400 font-semibold">{skill.value}%</span>
//                   </div>
//                   <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000"
//                       style={{ width: `${skill.value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { Code, Download } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { label: 'Développement Full Stack', value: 95 },
    { label: 'Automatisation VBA/EDI', value: 90 },
    { label: 'API REST & Bases de données', value: 85 },
    { label: 'Méthodes Agiles', value: 80 }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de moi</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
            Diplômée d’un <span className="text-indigo-400 font-semibold">Master 2</span> en Développement Web et Mobile à l’ESTIAM, 
            je suis intéressée par les domaines du <span className="text-blue-400 font-semibold">développement full stack</span>, 
            de l’ <span className="text-blue-400 font-semibold">automatisation</span> et de la <span className="text-blue-400 font-semibold">data</span>. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            Curieuse, rigoureuse et autonome, j’aime analyser des problématiques concrètes et concevoir des solutions techniques fiables et efficaces.
            {/* Expérience dans l'automatisation de traitements de données, la conception de macros avancées et la gestion de flux EDI. 
             Compétences techniques solides en développement web et mobile avec un intérêt marqué pour l'analyse et l'optimisation de processus. */}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Disponible en CDI dès janvier 2026
              </div>
              <a 
                href="/CV_Salamata-Nourou_MBAYE.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/50"
              >
                <Download size={18} />
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-indigo-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Code className="text-indigo-400" />
              Compétences clés
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.label}</span>
                    <span className="text-indigo-400 font-semibold">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// import React, { useState, useEffect } from 'react';
// import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export const AboutSection = () => {
//   const [activeTab, setActiveTab] = useState('personal');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [counter, setCounter] = useState(0);

//   const achievements = [
//     { number: "15+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, suffix: "" },
//     { number: "1", label: "Years Exp", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
//     { number: "99", label: "Success", icon: <Target className="h-5 w-5" />, suffix: "%" },
//     { number: "10", label: "Clients", icon: <User className="h-5 w-5" />, suffix: "+" }
//   ];

//   const techStack = [
//     { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind"] },
//     { category: "Backend", items: ["Node.js", "Express", "Java", "Python"] },
//     { category: "Cloud", items: ["AWS", "Docker", "Vercel", "MongoDB"] }
//   ];

//   const features = ["Full-stack expertise", "Clean, maintainable code", "Performance optimization", "Agile methodology", "24/7 support", "Timely delivery"];

//   const socialLinks = [
//     { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/sahilmd01" },
//     { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/codewithkinu" },
//     { icon: <Twitter className="h-5 w-5" />, href: "#" },
//     { icon: <Mail className="h-5 w-5" />, href: "mailto:sahilmd.dev@gmail.com" }
//   ];

//   const tabContent = {
//     personal: "Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.",
//     professional: "With 1+ years in full-stack development, I've delivered 15+ successful projects using modern technologies. I specialize in scalable architecture and performance optimization.",
//     approach: "I believe in clean code, thorough testing, and user-centered design. My process emphasizes collaboration, agile methodologies, and continuous improvement."
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Programmatic download function
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/Sahil-resume.pdf'; // Must be in public folder
//     link.download = 'Sahil-resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
//       {/* Background Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
//         <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
//         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
//         <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
//         <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div>
//       </div>

//       <div className="container mx-auto max-w-7xl relative">
//         {/* Header */}
//         <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
//           <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
//             <div className="relative">
//               <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
//               <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
//             </div>
//             <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
//           </div>
//           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
//             <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Transforming</span>
//             <span className="block text-primary animate-pulse">Ideas Into Reality</span>
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold">performance</span>, and <span className="text-primary font-semibold">elegance</span>
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
//           {/* Left Column */}
//           <div className="xl:col-span-2 space-y-8">
//             {/* About Card */}
//             <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
//               {/* Decorative Circles */}
//               <div className="absolute inset-0 opacity-5">
//                 <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
//                 <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
//               </div>

//               <div className="relative">
//                 <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
//                   {/* Profile Image */}
//                   <div className="relative flex-shrink-0">
//                     <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
//                       <img src="/profile-logo.png" alt="MD Sahil" className="w-full h-full object-cover" />
//                       <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
//                         <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Achievements */}
//                   <div className="flex-1 text-center md:text-left">
//                     <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">MD Sahil</h2>
//                     <p className="text-primary text-base sm:text-lg font-semibold mb-3 sm:mb-4">Full Stack Developer</p>
//                     <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
//                       {achievements.map((achievement, index) => (
//                         <div key={index} className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === index ? 'bg-primary/10 border-primary/50' : ''}`}>
//                           <div className="flex items-center gap-2 justify-center md:justify-start">
//                             {achievement.icon}
//                             <div>
//                               <div className="font-bold text-sm sm:text-lg">{achievement.number}{achievement.suffix}</div>
//                               <div className="text-[10px] sm:text-xs text-muted-foreground">{achievement.label}</div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tabs */}
//                 <div className="flex flex-col sm:flex-row border-b border-border mb-4 sm:mb-6">
//                   {['personal', 'professional', 'approach'].map(tab => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
//                     >
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Tab Content */}
//                 <div className="min-h-[100px] sm:min-h-[120px]">
//                   <AnimatePresence mode="sync">
//                     <motion.p
//                       key={activeTab}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
//                     >
//                       {tabContent[activeTab]}
//                     </motion.p>
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>

//             {/* Tech Stack */}
//             <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
//               <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//                 <Code className="h-4 sm:h-6 w-4 sm:w-6 text-primary" />Tech Stack Overview
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
//                 {techStack.map((stack, index) => (
//                   <div key={index} className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:scale-105 group">
//                     <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                       <div className="p-1 sm:p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300"><Code className="h-3 sm:h-4 w-3 sm:w-4" /></div>
//                       <h4 className="font-semibold text-sm sm:text-lg">{stack.category}</h4>
//                     </div>
//                     <div className="space-y-1 sm:space-y-2">
//                       {stack.items.map((item, itemIndex) => (
//                         <div key={itemIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
//                           <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />{item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6 sm:space-y-8">
//             {/* Work Together */}
//             <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
//               <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Let's Work Together</h3>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
//                 <a href="#contact" className="flex-1 block w-full p-3 sm:p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg group">
//                   <div className="flex items-center justify-center gap-2 sm:gap-3"><User className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-300" />Start a Project</div>
//                 </a>

//                 {/* Download Button */}
//                 <button
//                   onClick={handleDownload}
//                   className="flex-1 block w-full p-3 sm:p-4 border border-border rounded-xl text-center font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group"
//                 >
//                   <div className="flex items-center justify-center gap-2 sm:gap-3">
//                     <Download className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
//                     Download Resume
//                   </div>
//                 </button>
//               </div>

//               {/* Social Links */}
//               <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/50 rounded-xl border border-border">
//                 <h4 className="font-semibold mb-2 text-center text-sm sm:text-base">Quick Connect</h4>
//                 <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
//                   {socialLinks.map((social, index) => (
//                     <a key={index} href={social.href} className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">{social.icon}</a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Why Choose Me */}
//             <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
//               <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2"><Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />Why Choose Me</h3>
//               <div className="space-y-2 sm:space-y-3">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">
//                     <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /><span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="relative">
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
//                     <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping" />
//                   </div>
//                   <span className="font-semibold text-xs sm:text-sm">Available</span>
//                 </div>
//                 <span className="text-xs sm:text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
//                   For new projects
//                 </span>
//               </div>
//               <div className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-1 sm:p-2">
//                 ⚡ Response time: Under 24 hours
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Styles */}
//       <style>
//         {`
//           @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
//           .animate-float { animation: float 3s ease-in-out infinite; }
//           .animation-delay-2000 { animation-delay: 2s; }
//         `}
//       </style>
//     </section>
//   );
// };
