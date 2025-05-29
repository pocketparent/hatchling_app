import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Section Component
 * 
 * A reusable section component for grouping related content
 * Used across the app for content organization
 * 
 * @param {React.ReactNode} children - Child components to render inside the section
 * @param {Object} style - Additional style overrides for the container
 */
const Section = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.spacing.lg,
  },
});

export default Section;
