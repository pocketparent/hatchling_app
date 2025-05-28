import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * BackgroundContainer Component
 * 
 * Creates a consistent plain teal background for all screens
 */
const BackgroundContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A9B9B', // Teal background color
  },
});

export default BackgroundContainer;
