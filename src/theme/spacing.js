/**
 * Hatchling App Spacing System
 * 
 * Inspired by Dieter Rams and Steve Jobs design principles:
 * - Consistent, intentional, and harmonious spacing
 * - Creates visual rhythm and hierarchy
 * - Ensures content breathability and focus
 */

// Base unit for spacing (4px)
const BASE = 4;

// Spacing scale
export const spacing = {
  // Core spacing values
  none: 0,
  xxs: BASE, // 4px
  xs: BASE * 2, // 8px
  sm: BASE * 3, // 12px
  md: BASE * 4, // 16px
  lg: BASE * 6, // 24px
  xl: BASE * 8, // 32px
  xxl: BASE * 12, // 48px
  xxxl: BASE * 16, // 64px
  
  // Functional spacing
  screenPadding: BASE * 4, // 16px
  cardPadding: BASE * 4, // 16px
  contentSpacing: BASE * 6, // 24px
  sectionSpacing: BASE * 8, // 32px
  
  // Component-specific spacing
  buttonPadding: BASE * 3, // 12px
  inputPadding: BASE * 3, // 12px
  iconSize: BASE * 6, // 24px
  touchableMinHeight: BASE * 11, // 44px (iOS HIG minimum)
};

// Border radius values
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};

// Insets for consistent padding
export const insets = {
  screen: {
    horizontal: spacing.screenPadding,
    vertical: spacing.screenPadding,
  },
  card: {
    horizontal: spacing.cardPadding,
    vertical: spacing.cardPadding,
  },
};

// Shadow styles
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.0,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4.5,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.28,
    shadowRadius: 6.5,
    elevation: 9,
  },
  // Adding a softer shadow option for cards
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  // Inner shadow effect for pressed states
  inner: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0, // Inner shadows don't use elevation on Android
  },
};

export default {
  BASE,
  spacing,
  borderRadius,
  insets,
  shadows,
};
