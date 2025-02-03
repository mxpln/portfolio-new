import React from 'react';
import { Lightbulb, Shield, Zap, Maximize } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const principles = [
    {
      icon: <Shield size={24} />,
      title: 'BRUTALIST_INTEGRITY',
      description: 'Embracing raw functionality and honest design. No unnecessary decorations, just pure digital craftsmanship.'
    },
    {
      icon: <Zap size={24} />,
      title: 'PERFORMANCE_FIRST',
      description: 'Speed is a feature. Every millisecond counts in creating seamless digital experiences.'
    },
    {
      icon: <Maximize size={24} />,
      title: 'SCALABLE_ARCHITECTURE',
      description: 'Building systems that grow. From concept to enterprise, our solutions evolve with your needs.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'INNOVATIVE_MINDSET',
      description: 'Pushing boundaries while maintaining stability. Innovation drives progress, but never at the cost of reliability.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <h1 className="brutal-title text-6xl mb-6">MANIFESTO_</h1>
        <p className="text-2xl max-w-2xl">
          A declaration of digital principles. This is how we approach the craft
          of software development and digital creation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {principles.map((principle, index) => (
          <div key={index} className="brutal-container p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[var(--accent)]">{principle.icon}</div>
              <h2 className="brutal-title text-2xl">{principle.title}</h2>
            </div>
            <p className="text-xl">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="brutal-container brutal-asymm p-8">
        <h2 className="brutal-title text-4xl mb-6">THE_CODE</h2>
        <div className="prose prose-xl">
          <p className="text-xl mb-6">
            We believe in the power of raw, honest code. Every project is an
            opportunity to push the boundaries of what's possible while maintaining
            the highest standards of quality and performance.
          </p>
          <p className="text-xl mb-6">
            Our approach combines brutalist design principles with modern
            development practices, creating digital experiences that are both
            powerful and meaningful.
          </p>
          <p className="text-xl">
            This is not just about writing code - it's about crafting digital
            solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};