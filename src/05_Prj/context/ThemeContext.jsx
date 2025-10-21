import React, { createContext, useContext, useState } from 'react';

// ThemeContext banayenge
const ThemeContext = createContext();

// ThemeProvider component banayenge jisme theme state aur toggle function rahenge
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
