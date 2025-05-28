/**
 * Hatchling App Color System
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Simple, clean, and purposeful
 * - Minimalist yet warm and approachable
 * - Focused on content, not interface elements
 */

export const colors = {
  // Primary palette - based on core screen designs
  primary: {
    light: '#4FBCB5', // Lighter teal
    main: '#2A9D8F', // Soft teal (primary brand color)
    dark: '#004D4D', // Dark teal for text and emphasis
  },
  
  // Secondary palette - warm, nurturing colors
  secondary: {
    light: '#F79770', // Light coral
    main: '#E76F51', // Warm coral (secondary brand color)
    dark: '#B05E35', // Copper/brown for accents
  },
  
  // Neutral palette - clean, minimalist grays
  neutral: {
    white: '#FFFFFF',
    lightest: '#F8EFE0', // Cream/beige for cards
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
  
  // Background colors
  background: {
    primary: '#4A9B9B', // Teal background
    card: '#F8EFE0',    // Cream/beige for cards
    accent: '#F79770',  // Coral for accents
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
