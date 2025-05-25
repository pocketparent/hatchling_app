/**
 * Hatchling App Typography System
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Clear, legible, and purposeful
 * - Minimalist yet warm and approachable
 * - Focused on readability and content hierarchy
 */

import { Platform } from 'react-native';

// Base font families
const fontFamilies = {
  // Primary font for most text
  primary: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Secondary font for headings and emphasis
  secondary: Platform.select({
    ios: 'Georgia',
    android: 'serif',
    default: 'Georgia',
  }),
  
  // Monospace font for technical content
  mono: Platform.select({
    ios: 'Courier',
    android: 'monospace',
    default: 'Courier',
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
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.8,
};

// Letter spacing
const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
};

// Text variants
export const textVariants = {
  // Headings
  h1: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.giant,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.display,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
  },
  h4: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
  },
  h5: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
  },
  
  // Body text
  body1: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  body2: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  
  // Special text styles
  caption: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  button: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wider,
    textTransform: 'uppercase',
  },
  
  // Content-specific styles
  insightTitle: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
  },
  insightBody: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.relaxed,
  },
  milestoneTitle: {
    fontFamily: fontFamilies.secondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
  },
};

export default {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
  textVariants,
};
