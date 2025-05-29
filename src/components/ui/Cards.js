/**
 * Hatchling App Card Components
 * 
 * Reusable card components with consistent styling across the app
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';

// Basic Card - Simple container with consistent styling
export const Card = ({ 
  children, 
  style, 
  ...props 
}) => (
  <View
    style={[styles.card, style]}
    {...props}
  >
    {children}
  </View>
);

// Interactive Card - Touchable card with hover/press states
export const InteractiveCard = ({ 
  children, 
  onPress, 
  disabled = false,
  style,
  ...props 
}) => (
  <TouchableOpacity
    style={[
      styles.card, 
      styles.interactiveCard,
      disabled && styles.disabledCard,
      style
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
    {...props}
  >
    {children}
  </TouchableOpacity>
);

// Accent Card - Card with colored accent border
export const AccentCard = ({ 
  children, 
  accentColor = theme.colors.primary.main,
  accentPosition = 'left',
  style,
  ...props 
}) => {
  const accentStyle = getAccentStyle(accentPosition, accentColor);
  
  return (
    <View
      style={[styles.card, accentStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
};

// Interactive Accent Card - Touchable card with accent
export const InteractiveAccentCard = ({ 
  children, 
  onPress, 
  disabled = false,
  accentColor = theme.colors.primary.main,
  accentPosition = 'left',
  style,
  ...props 
}) => {
  const accentStyle = getAccentStyle(accentPosition, accentColor);
  
  return (
    <TouchableOpacity
      style={[
        styles.card, 
        styles.interactiveCard,
        accentStyle,
        disabled && styles.disabledCard,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

// Helper function to get accent style based on position
const getAccentStyle = (position, color) => {
  switch (position) {
    case 'left':
      return {
        borderLeftWidth: 4,
        borderLeftColor: color,
      };
    case 'right':
      return {
        borderRightWidth: 4,
        borderRightColor: color,
      };
    case 'top':
      return {
        borderTopWidth: 4,
        borderTopColor: color,
      };
    case 'bottom':
      return {
        borderBottomWidth: 4,
        borderBottomColor: color,
      };
    default:
      return {
        borderLeftWidth: 4,
        borderLeftColor: color,
      };
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  interactiveCard: {
    // Additional styles for interactive cards
  },
  disabledCard: {
    opacity: 0.7,
  },
});

export default {
  Card,
  InteractiveCard,
  AccentCard,
  InteractiveAccentCard
};
