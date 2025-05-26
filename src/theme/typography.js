/**
 * Hatchling App Typography System
 * 
 * Simplified to use standard system fonts for maximum compatibility
 * Focuses on readability and consistent styling across all platforms
 */

import { Platform } from 'react-native';

// Base font families - using system fonts for maximum compatibility
const fontFamilies = {
  // Primary font for most text
  primary: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Secondary font for headings and emphasis
  secondary: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
};

// Font weights
const fontWeights = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
};

// Font sizes
const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  display: 36,
  giant: 48,
};

// Line heights
const lineHeights = {
  tight: 1.2 * 20, // Using explicit pixel values for better cross-platform compatibility
  normal: 1.5 * 20,
  relaxed: 1.8 * 20,
};

// Text variants with explicit styling for maximum compatibility
export const textVariants = {
  // Headings
  h1: {
    fontSize: fontSizes.giant,
    fontWeight: fontWeights.bold,
    lineHeight: 58,
    color: '#000000',
  },
  h2: {
    fontSize: fontSizes.display,
    fontWeight: fontWeights.bold,
    lineHeight: 44,
    color: '#000000',
  },
  h3: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.semibold,
    lineHeight: 36,
    color: '#000000',
  },
  h4: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.semibold,
    lineHeight: 30,
    color: '#000000',
  },
  h5: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    lineHeight: 26,
    color: '#000000',
  },
  
  // Body text
  body1: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    color: '#333333',
  },
  body2: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
    color: '#333333',
  },
  
  // Special text styles
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: 16,
    color: '#666666',
  },
  button: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
    color: '#000000',
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: '#666666',
  },
  
  // Content-specific styles
  insightTitle: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: 26,
    color: '#000000',
  },
  insightBody: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: 28,
    color: '#333333',
  },
  milestoneTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
    color: '#000000',
  },
};

export default {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  textVariants,
};
