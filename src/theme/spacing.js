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

export default {
  BASE,
  spacing,
  insets,
};
