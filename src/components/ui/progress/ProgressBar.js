import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import Row from '../layout/Row';
import Column from '../layout/Column';
import { Body, BodySmall, Caption } from '../Typography';

/**
 * ProgressBar Component
 * 
 * A reusable component for displaying progress bars
 * Used in Journey screen for domain progress and other areas
 */
const ProgressBar = ({ 
  progress = 0, 
  color = theme.colors.primary.main,
  height = 8,
  style
}) => {
  // Ensure progress is between 0 and 1
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  
  return (
    <View style={[styles.container, { height }, style]}>
      <View 
        style={[
          styles.fill, 
          { 
            width: `${safeProgress * 100}%`,
            backgroundColor: color 
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: theme.spacing.borderRadius.sm,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: theme.spacing.borderRadius.sm,
  }
});

export default ProgressBar;
