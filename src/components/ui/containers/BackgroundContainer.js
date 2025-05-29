import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * BackgroundContainer Component
 * 
 * Creates a consistent plain teal background for all screens
 * Moved from decorations/ to ui/containers/ for better organization
 */
const BackgroundContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
});

export default BackgroundContainer;
