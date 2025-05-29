import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import { Body, BodySmall } from '../Typography';
import { Ionicons } from '@expo/vector-icons';

/**
 * OptionButton Component
 * 
 * A reusable component for selection options
 * Used in Onboarding screens and other selection interfaces
 */
const OptionButton = ({ 
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
      <Body 
        style={[
          styles.label,
          isSelected && styles.labelSelected
        ]}
      >
        {label}
      </Body>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: theme.spacing.borderRadius.md,
    paddingVertical: theme.spacing.spacing.md,
    paddingHorizontal: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.sm,
    alignItems: 'center',
  },
  containerSelected: {
    backgroundColor: theme.colors.neutral.white,
  },
  label: {
    color: theme.colors.neutral.white,
    textAlign: 'center',
  },
  labelSelected: {
    color: theme.colors.primary.main,
  }
});

export default OptionButton;
