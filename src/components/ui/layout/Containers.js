import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import theme from '../../../theme';

/**
 * Container Component
 * 
 * A reusable container component for screen layouts
 * Provides a consistent container with theme background
 * 
 * @param {React.ReactNode} children - Child components to render inside the container
 * @param {Object} style - Additional style overrides for the container
 */
const Container = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

/**
 * SafeContainer Component
 * 
 * A reusable container component with SafeAreaView for screen layouts
 * Provides a consistent container with safe area insets
 * 
 * @param {React.ReactNode} children - Child components to render inside the container
 * @param {Object} style - Additional style overrides for the container
 */
const SafeContainer = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

/**
 * ScrollContainer Component
 * 
 * A reusable scrollable container component for screen layouts
 * Provides a consistent scrollable container
 * 
 * @param {React.ReactNode} children - Child components to render inside the container
 * @param {Object} contentContainerStyle - Style for the content container
 * @param {Object} style - Additional style overrides for the scroll view
 */
const ScrollContainer = ({ children, contentContainerStyle, style }) => {
  return (
    <ScrollView 
      style={[styles.scrollView, style]}
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
  },
  scrollView: {
    flex: 1,
  },
});

export { Container, SafeContainer, ScrollContainer };
