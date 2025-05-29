import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import Row from '../layout/Row';
import Column from '../layout/Column';
import { Body, BodySmall, Caption } from '../Typography';

/**
 * CategoryPill Component
 * 
 * A reusable pill component for category/topic selection
 * Used in Ask screen for topic filtering and other areas
 */
const CategoryPill = ({ 
  label,
  isSelected = false,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        isSelected && styles.containerSelected,
        style
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <BodySmall 
        style={[
          styles.label,
          isSelected && styles.labelSelected
        ]}
      >
        {label}
      </BodySmall>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.sm,
    borderRadius: theme.spacing.borderRadius.pill,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: theme.spacing.spacing.sm,
    marginBottom: theme.spacing.spacing.sm,
  },
  containerSelected: {
    backgroundColor: theme.colors.neutral.white,
  },
  label: {
    color: theme.colors.neutral.white,
  },
  labelSelected: {
    color: theme.colors.primary.main,
  }
});

export default CategoryPill;
