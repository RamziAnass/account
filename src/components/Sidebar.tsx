import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, Menu } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: '#home', label: 'Acceuil' },
    { href: '#about', label: 'Description' },
    { href: '#services', label: 'Compétences' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <button
        className="fixed right-4 top-4 z-50 rounded-lg bg-white p-2 shadow-lg dark:bg-black dark:border dark:border-gray-800 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-[280px] border-r border-transparent bg-white px-6 py-8 shadow-lg transition-transform dark:border-gray-800 dark:bg-black lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHOZ5G1MO3LLg/profile-displayphoto-shrink_200_200/B4DZSJ.l5gHUAk-/0/1737481675630?e=1744243200&v=beta&t=bNq0CH2G7SNDxCE4XPoTM7taRcx4_wkETNBtQVHQf3Q"
            alt="Profile"
            className="h-32 w-32 rounded-full object-cover ring-2 ring-primary-500 dark:ring-primary-400"
          />
          <h1 className="mt-4 text-2xl font-bold">Ramzi Anass</h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Chargé de Veille et études<br />
            CI Analyst<br />
            Data Analyst<br />
            Analyst Veilleur
          </p>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <br />
        
        <div className="mt-auto">
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:RamziiAnase@gmail.com"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:hover:bg-gray-900"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;