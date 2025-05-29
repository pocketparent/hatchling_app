import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../theme';

/**
 * CategoryPill Component
 * 
 * A reusable component for displaying selectable category pills/filters
 * Used in Ask screen and other places where category filtering is needed
 * 
 * @param {string} label - The category label to display
 * @param {boolean} isActive - Whether the category is currently selected
 * @param {Function} onPress - Function to call when the pill is pressed
 * @param {Object} style - Additional style overrides for the container
 */
const CategoryPill = ({ 
  label,
  isActive,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive ? styles.containerActive : styles.containerInactive,
        style
      ]}
    >
      <Text 
        style={[
          styles.label,
          isActive ? styles.labelActive : styles.labelInactive
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.spacing.xs,
    paddingHorizontal: theme.spacing.spacing.md,
    borderRadius: 20,
    marginRight: theme.spacing.spacing.sm,
    marginBottom: theme.spacing.spacing.xs,
  },
  containerActive: {
    backgroundColor: theme.colors.neutral.white,
  },
  containerInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  label: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.medium,
  },
  labelActive: {
    color: theme.colors.primary.main,
  },
  labelInactive: {
    color: theme.colors.neutral.white,
  },
});

export default CategoryPill;
