import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Section Component
 * 
 * A reusable layout component for content sections
 * Used throughout the app for consistent layout
 */
const Section = ({ 
  children, 
  padding = true,
  style 
}) => {
  return (
    <View 
      style={[
        styles.container, 
        padding && styles.padding,
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  padding: {
    paddingHorizontal: theme.spacing.spacing.screenPadding,
    paddingVertical: theme.spacing.spacing.md,
  }
});

export default Section;
