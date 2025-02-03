import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="brutal-container p-8 mb-12">
        <h1 className="brutal-title text-6xl mb-6">CONTACT_</h1>
        <p className="text-2xl max-w-2xl">
          Initialize communication protocols. Ready to discuss your next digital venture?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="brutal-container p-8">
          <h2 className="brutal-title text-3xl mb-6">MESSAGE_FORM</h2>
          <form className="grid gap-6">
            <div>
              <label className="block text-lg mb-2" htmlFor="name">NAME_</label>
              <input
                type="text"
                id="name"
                className="brutal-input w-full"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-lg mb-2" htmlFor="email">EMAIL_</label>
              <input
                type="email"
                id="email"
                className="brutal-input w-full"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-lg mb-2" htmlFor="message">MESSAGE_</label>
              <textarea
                id="message"
                rows={6}
                className="brutal-input w-full"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="brutal-button flex items-center gap-2">
              <Send size={20} />
              SEND_MESSAGE
            </button>
          </form>
        </div>

        <div>
          <div className="brutal-container p-8 mb-8">
            <h2 className="brutal-title text-3xl mb-6">CONNECT_</h2>
            <div className="grid gap-4">
              <a 
                href="mailto:contact@example.com"
                className="brutal-button flex items-center gap-3"
              >
                <Mail size={20} />
                contact@example.com
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button flex items-center gap-3"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button flex items-center gap-3"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="brutal-container p-8">
            <h2 className="brutal-title text-3xl mb-6">LOCATION_</h2>
            <p className="text-xl mb-4">Based in:</p>
            <div className="brutal-tech p-4 inline-block">
              SILICON VALLEY, CA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};