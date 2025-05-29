import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Row Component
 * 
 * A reusable row component for horizontal layouts
 * Used across the app for content organization
 * 
 * @param {React.ReactNode} children - Child components to render inside the row
 * @param {Object} style - Additional style overrides for the container
 */
const Row = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Row;
