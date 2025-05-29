import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';
import { Body, BodySmall } from '../Typography';

/**
 * ProgressIndicator Component
 * 
 * A reusable component for displaying step progress in multi-step flows
 * Used in Onboarding screens and other multi-step interfaces
 */
const ProgressIndicator = ({ 
  currentStep, 
  totalSteps,
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View 
          key={index} 
          style={[
            styles.dot, 
            index < currentStep ? styles.dotActive : {}
          ]} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: theme.colors.neutral.white,
  }
});

export default ProgressIndicator;
