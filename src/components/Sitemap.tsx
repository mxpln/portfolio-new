import React from 'react';
import { routes } from '../pages';
import { ArrowUpRight } from 'lucide-react';

export const Sitemap: React.FC = () => {
  return (
    <div className="brutal-container p-8">
      <h2 className="brutal-title text-4xl mb-8">SYSTEM_MAP</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {routes.map((route) => (
          <a
            key={route.path}
            href={route.path}
            className="group brutal-container p-6 hover:cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="brutal-title text-2xl">{route.name}</h3>
              <ArrowUpRight 
                size={24}
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
            <p className="text-[var(--text-secondary)]">{route.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};