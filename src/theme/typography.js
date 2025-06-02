/**
 * Hatchling App Typography System
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Clear, legible, and purposeful
 * - Minimalist yet warm and approachable
 * - Focused on readability and content hierarchy
 */

// Font families (using custom-loaded SF Pro)
const fontFamilies = {
  primary: 'SFProText-Regular',
  secondary: 'SFProDisplay-Regular',
  secondaryBold: 'SFProDisplay-Bold',
  mono: 'Courier',
};

// Font weights (simplified to just two main weights)
const fontWeights = {
  regular: '400',
  bold: '700',
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
  h1: {
    fontFamily: fontFamilies.secondaryBold,
    fontSize: fontSizes.giant,
    lineHeight: fontSizes.giant * lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily: fontFamilies.secondaryBold,
    fontSize: fontSizes.display,
    lineHeight: fontSizes.display * lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily: fontFamilies.secondaryBold, // Changed from secondary to secondaryBold for better contrast
    fontSize: fontSizes.xxxl,
    lineHeight: fontSizes.xxxl * lineHeights.tight,
  },
  h4: {
    fontFamily: fontFamilies.secondaryBold, // Changed from secondary to secondaryBold for better contrast
    fontSize: fontSizes.xxl,
    lineHeight: fontSizes.xxl * lineHeights.tight,
  },
  h5: {
    fontFamily: fontFamilies.secondaryBold, // Changed from secondary to secondaryBold for better contrast
    fontSize: fontSizes.xl,
    lineHeight: fontSizes.xl * lineHeights.tight,
  },
  body1: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    lineHeight: fontSizes.md * lineHeights.normal,
  },
  body2: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.sm * lineHeights.normal,
  },
  caption: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs * lineHeights.normal,
  },
  button: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    lineHeight: fontSizes.md * lineHeights.tight,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs * lineHeights.normal,
    letterSpacing: letterSpacing.wider,
    textTransform: 'uppercase',
  },
  insightTitle: {
    fontFamily: fontFamilies.secondaryBold, // Changed from secondary to secondaryBold for better contrast
    fontSize: fontSizes.xl,
    lineHeight: fontSizes.xl * lineHeights.tight,
  },
  insightBody: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.md,
    lineHeight: fontSizes.md * lineHeights.relaxed,
  },
  milestoneTitle: {
    fontFamily: fontFamilies.secondaryBold, // Changed from secondary to secondaryBold for better contrast
    fontSize: fontSizes.lg,
    lineHeight: fontSizes.lg * lineHeights.tight,
  },
};

export default {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  textVariants,
};
