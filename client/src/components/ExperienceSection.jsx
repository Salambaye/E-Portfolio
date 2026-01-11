
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Expériences</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Briefcase className="text-indigo-400" />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-indigo-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0 font-mono text-sm">{exp.period}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1 text-lg">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;