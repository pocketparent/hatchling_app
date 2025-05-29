import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Spacer Component
 * 
 * A reusable layout component for adding consistent spacing
 * Used throughout the app for consistent layout
 */
const Spacer = ({ 
  size = 'md',
  horizontal = false,
  style 
}) => {
  // Get spacing value based on size
  const getSpacingValue = () => {
    switch (size) {
      case 'xs':
        return theme.spacing.spacing.xs;
      case 'sm':
        return theme.spacing.spacing.sm;
      case 'lg':
        return theme.spacing.spacing.lg;
      case 'xl':
        return theme.spacing.spacing.xl;
      case 'xxl':
        return theme.spacing.spacing.xxl;
      case 'md':
      default:
        return theme.spacing.spacing.md;
    }
  };

  const spacingValue = getSpacingValue();
  
  return (
    <View 
      style={[
        horizontal 
          ? { width: spacingValue, height: '100%' }
          : { height: spacingValue, width: '100%' },
        style
      ]}
    />
  );
};

export default Spacer;
