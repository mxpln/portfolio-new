import React from 'react';
import { Code, Server, Cpu } from 'lucide-react';

export const Stack: React.FC = () => {
  const stack = {
    frontend: [
      { name: 'React', level: 'EXPERT', desc: 'Component architecture & state management' },
      { name: 'TypeScript', level: 'EXPERT', desc: 'Type-safe development' },
      { name: 'TailwindCSS', level: 'EXPERT', desc: 'Utility-first styling' }
    ],
    backend: [
      { name: 'Node.js', level: 'EXPERT', desc: 'Server-side JavaScript runtime' },
      { name: 'PostgreSQL', level: 'ADVANCED', desc: 'Relational database' },
      { name: 'GraphQL', level: 'ADVANCED', desc: 'API query language' }
    ],
    devops: [
      { name: 'Docker', level: 'ADVANCED', desc: 'Containerization' },
      { name: 'AWS', level: 'ADVANCED', desc: 'Cloud infrastructure' },
      { name: 'CI/CD', level: 'ADVANCED', desc: 'Automated deployment' }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <h1 className="brutal-title text-6xl mb-6">TECH_STACK</h1>
        <p className="text-2xl max-w-2xl">
          A curated collection of battle-tested technologies that power
          my digital creations.
        </p>
      </div>

      <div className="grid gap-8">
        <section className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6 flex items-center gap-3">
            <Code size={24} className="text-[var(--accent)]" />
            FRONTEND_LAYER
          </h2>
          <div className="grid gap-4">
            {stack.frontend.map((tech, index) => (
              <div key={index} className="brutal-container p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <span className="brutal-tech px-3 py-1">{tech.level}</span>
                </div>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6 flex items-center gap-3">
            <Server size={24} className="text-[var(--accent)]" />
            BACKEND_LAYER
          </h2>
          <div className="grid gap-4">
            {stack.backend.map((tech, index) => (
              <div key={index} className="brutal-container p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <span className="brutal-tech px-3 py-1">{tech.level}</span>
                </div>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6 flex items-center gap-3">
            <Cpu size={24} className="text-[var(--accent)]" />
            DEVOPS_LAYER
          </h2>
          <div className="grid gap-4">
            {stack.devops.map((tech, index) => (
              <div key={index} className="brutal-container p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <span className="brutal-tech px-3 py-1">{tech.level}</span>
                </div>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};