/**
 * Hatchling App Color System - Updated to match new mockup
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Clean, purposeful colors
 * - Warm, approachable palette
 * - Focused on content and readability
 */

// Primary colors
const primary = {
  main: '#2A7D7D',      // Teal - main brand color
  light: '#4A9999',     // Light teal for highlights
  dark: '#1A5D5D',      // Dark teal for text on light backgrounds
  lightest: '#E5F2F2',  // Very light teal for backgrounds
};

// Secondary colors
const secondary = {
  main: '#F08A6A',      // Coral - accent color
  light: '#F5B09A',     // Light coral for highlights
  dark: '#D06A4A',      // Dark coral for text on light backgrounds
  lightest: '#FFF1EB',  // Very light coral for backgrounds
};

// Neutral colors
const neutral = {
  white: '#FFFFFF',
  lightest: '#FFF6E9',  // Cream background for cards
  lighter: '#F5F5F5',
  light: '#E0E0E0',
  medium: '#9E9E9E',
  dark: '#616161',
  darker: '#424242',
  darkest: '#004040',   // Dark teal for headings
  black: '#000000',
};

// Content-specific colors
const content = {
  sleep: '#7986CB',     // Indigo
  feeding: '#4DB6AC',   // Teal
  development: '#FFB74D', // Orange
  health: '#E57373',    // Red
  behavior: '#AED581',  // Light Green
  parenting: '#BA68C8', // Purple
};

// Status colors
const status = {
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',
};

export default {
  primary,
  secondary,
  neutral,
  content,
  status,
};
