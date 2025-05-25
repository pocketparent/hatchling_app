/**
 * Hatchling App Color System
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Simple, clean, and purposeful
 * - Minimalist yet warm and approachable
 * - Focused on content, not interface elements
 */

export const colors = {
  // Primary palette
  primary: {
    light: '#A5D6A7', // Soft, calming green
    main: '#66BB6A',  // Main brand color - nurturing green
    dark: '#43A047',  // Deeper green for emphasis
  },
  
  // Secondary palette - warm, nurturing colors
  secondary: {
    light: '#FFCC80', // Soft orange
    main: '#FFA726',  // Warm orange
    dark: '#FB8C00',  // Deep orange
  },
  
  // Neutral palette - clean, minimalist grays
  neutral: {
    white: '#FFFFFF',
    lightest: '#F5F5F5',
    lighter: '#EEEEEE',
    light: '#E0E0E0',
    medium: '#9E9E9E',
    dark: '#616161',
    darker: '#424242',
    darkest: '#212121',
    black: '#000000',
  },
  
  // Feedback colors
  feedback: {
    success: '#4CAF50',
    info: '#2196F3',
    warning: '#FF9800',
    error: '#F44336',
  },
  
  // Content-specific colors
  content: {
    sleep: '#7986CB',    // Calm blue for sleep content
    feeding: '#FF8A65',  // Warm orange for feeding content
    development: '#81C784', // Growth green for development content
    emotional: '#BA68C8', // Soft purple for emotional content
  },
  
  // Background gradients
  gradients: {
    primary: ['#66BB6A', '#43A047'],
    calm: ['#BBDEFB', '#90CAF9'],
    warm: ['#FFECB3', '#FFE082'],
  },
  
  // Transparency utilities
  alpha: {
    10: 'rgba(0,0,0,0.1)',
    20: 'rgba(0,0,0,0.2)',
    50: 'rgba(0,0,0,0.5)',
    70: 'rgba(0,0,0,0.7)',
  },
};

export default colors;
