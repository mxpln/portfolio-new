import React from 'react';
import { Beaker, ArrowRight } from 'lucide-react';

export const Laboratory: React.FC = () => {
  const experiments = [
    {
      title: 'QUANTUM_INTERFACE',
      description: 'Experimental UI patterns using quantum computing principles',
      status: 'IN_PROGRESS'
    },
    {
      title: 'NEURAL_TYPOGRAPHY',
      description: 'AI-driven dynamic typography system',
      status: 'CONCEPT'
    },
    {
      title: 'HOLOGRAPHIC_UI',
      description: '3D interface prototypes for AR applications',
      status: 'PLANNING'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <h1 className="brutal-title text-6xl mb-6">LABORATORY_</h1>
        <p className="text-2xl max-w-2xl">
          Welcome to the experimental zone. Here we push the boundaries of digital
          interaction and test new technological concepts.
        </p>
      </div>

      <div className="grid gap-8">
        {experiments.map((exp, index) => (
          <div key={index} className="brutal-container p-8">
            <div className="flex items-start justify-between mb-4">
              <h2 className="brutal-title text-3xl flex items-center gap-3">
                <Beaker className="text-[var(--accent)]" />
                {exp.title}
              </h2>
              <span className="brutal-tech px-3 py-1">{exp.status}</span>
            </div>
            <p className="text-xl mb-6">{exp.description}</p>
            <button className="brutal-button flex items-center gap-2">
              VIEW_EXPERIMENT
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};