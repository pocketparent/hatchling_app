import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Column Component
 * 
 * A reusable column component for vertical layouts
 * Used across the app for content organization
 * 
 * @param {React.ReactNode} children - Child components to render inside the column
 * @param {Object} style - Additional style overrides for the container
 */
const Column = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default Column;
