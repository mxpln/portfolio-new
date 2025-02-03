import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Folder, File, Github, Mail, Linkedin } from 'lucide-react';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, title = 'terminal' }) => {
  return (
    <div className="terminal rounded-md mb-6">
      <div className="flex items-center gap-2 mb-2 text-sm opacity-70">
        <TerminalIcon size={14} />
        <span>root@cyberdeck:~/{title}</span>
      </div>
      {children}
    </div>
  );
};

export { Terminal }