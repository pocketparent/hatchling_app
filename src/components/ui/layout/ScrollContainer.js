import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * ScrollContainer Component
 * 
 * A reusable layout component for scrollable containers
 * Used throughout the app for consistent scrollable content
 */
const ScrollContainer = ({ 
  children, 
  contentContainerStyle,
  style 
}) => {
  return (
    <ScrollView 
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ScrollContainer;
