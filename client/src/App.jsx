import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;



// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "next-themes";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Toaster } from "@/components/ui/toaster";
// import WelcomeScreen from "@/components/WelcomeScreen";
// import { Analytics } from "@vercel/analytics/react"; 

// function App() {
//   const [welcomeComplete, setWelcomeComplete] = useState(false);

//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       <Toaster />
//       {!welcomeComplete ? (
//         <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
//       ) : (
//         <BrowserRouter>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//           <Analytics />
//         </BrowserRouter>
//       )}
//     </ThemeProvider>
//   );
// }

// export default App;

