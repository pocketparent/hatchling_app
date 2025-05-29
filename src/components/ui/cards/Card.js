import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Card Component
 * 
 * A reusable card component with consistent styling
 * Used across the app for content containers
 * 
 * @param {React.ReactNode} children - Child components to render inside the card
 * @param {Object} style - Additional style overrides for the container
 */
const Card = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: theme.spacing.borderRadius.lg,
    padding: theme.spacing.spacing.lg,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default Card;
