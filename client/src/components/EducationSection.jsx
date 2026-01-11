import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Formation</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <GraduationCap className="text-indigo-400" />
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0 font-mono text-sm whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;