import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';
import { Row, Column, Body, BodySmall, Caption } from '../index';

/**
 * Card Component
 * 
 * A reusable card component with consistent styling
 * Used throughout the app for content containers
 */
const Card = ({ 
  children,
  variant = 'default',
  onPress,
  style 
}) => {
  // Get card styling based on variant
  const getCardStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.neutral.light,
          ...theme.shadows.none,
        };
      case 'elevated':
        return {
          backgroundColor: theme.colors.neutral.white,
          ...theme.shadows.medium,
        };
      case 'default':
      default:
        return {
          backgroundColor: theme.colors.neutral.white,
          ...theme.shadows.small,
        };
    }
  };

  const cardStyles = getCardStyles();
  
  return (
    <View 
      style={[
        styles.container,
        cardStyles,
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.spacing.borderRadius.md,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.md,
  }
});

export default Card;
