import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for managing dark mode state
const DarkModeContext = createContext();

// Create a custom hook to access the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark mode provider component
export const DarkModeProvider = ({ children }) => {
  // Retrieve dark mode preference from local storage, default to false if not set
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Update local storage with new dark mode preference
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
