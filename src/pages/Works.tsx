import React from 'react';
import { projects } from './index';
import { Github, Globe, ArrowRight } from 'lucide-react';

export const Works: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <h1 className="brutal-title text-6xl mb-6">WORKS_</h1>
        <p className="text-2xl max-w-2xl">
          A collection of digital experiments and production-ready solutions.
          Each project pushes the boundaries of what's possible in web development.
        </p>
      </div>

      <div className="grid gap-12">
        {projects.map((project) => (
          <div key={project.id} className="brutal-container p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h2 className="brutal-title text-4xl mb-4">{project.title}</h2>
                <p className="text-xl mb-6">{project.fullDesc}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">CORE_FEATURES</h3>
                  <ul className="grid gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight size={16} className="text-[var(--accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">TECH_STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="brutal-tech px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
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

              <div className="order-1 md:order-2">
                <div className="brutal-container p-2 h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};