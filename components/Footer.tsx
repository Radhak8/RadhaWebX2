
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Your Name</h3>
            <p className="text-gray-400 mt-2">Web Developer & Designer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
