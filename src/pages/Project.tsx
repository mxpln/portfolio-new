import React from 'react';
import { projects } from './index';
import { Github, Globe, ArrowRight, Calendar } from 'lucide-react';

interface ProjectProps {
  id: string;
}

export const Project: React.FC<ProjectProps> = ({ id }) => {
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="brutal-container p-8">
        <h1 className="brutal-title text-4xl">PROJECT_NOT_FOUND</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="brutal-title text-6xl mb-6">{project.title}</h1>
            <p className="text-2xl mb-6">{project.fullDesc}</p>
            
            <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-button flex items-center gap-2"
            >
              <Globe size={20} />
              LIVE_DEMO
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutal-button flex items-center gap-2"
            >
              <Github size={20} />
              SOURCE
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6">TECH_STACK</h2>
          <div className="grid gap-4">
            {project.tech.map((tech, index) => (
              <div key={index} className="brutal-tech px-4 py-2">
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6">CORE_FEATURES</h2>
          <ul className="grid gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <ArrowRight size={20} className="text-[var(--accent)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="brutal-container p-2">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};