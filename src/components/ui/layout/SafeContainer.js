import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * SafeContainer Component
 * 
 * A reusable layout component for safe area containers
 * Used throughout the app for consistent layout with safe area insets
 */
const SafeContainer = ({ 
  children, 
  style 
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  }
});

export default SafeContainer;
