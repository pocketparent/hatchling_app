import colors from './colors';
import typography from './typography';
import spacing from './spacing';

// Create a theme object that can be used throughout the app
const theme = {
  colors,
  typography,
  spacing,
  // Add dark mode variants
  dark: {
    colors: {
      primary: {
        ...colors.primary,
        main: '#1A5F66', // Darker teal for dark mode
        light: '#2D7D84',
        dark: '#0F4B52',
      },
      neutral: {
        white: '#121212', // Dark background
        lightest: '#1E1E1E', // Card background
        lighter: '#2C2C2C', // Borders
        light: '#3D3D3D', // Disabled state
        medium: '#A0A0A0', // Secondary text
        dark: '#E0E0E0', // Primary text
        darker: '#F5F5F5', // Headings
        darkest: '#FFFFFF', // Emphasized text
        black: '#FFFFFF', // Inverted
      },
      content: {
        ...colors.content,
      },
      status: {
        ...colors.status,
      },
    },
  }
};

export default theme;
