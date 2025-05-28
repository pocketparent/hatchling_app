/**
 * Hatchling App Theme Provider
 * 
 * Provides theme context to the entire application
 * Allows for theme switching and consistent styling
 */

import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import theme from '../theme';

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const deviceColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState('light'); // Default to light theme
  
  // Get the current theme based on color scheme
  const currentTheme = {
    ...theme,
    // Add any color scheme specific overrides here
    // This will be expanded when dark mode is fully implemented
  };
  
  // Function to toggle theme
  const toggleTheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
