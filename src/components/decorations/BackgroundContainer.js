/**
 * Hatchling App Background Container
 * 
 * Creates a consistent plain teal background for all screens
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';

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
    backgroundColor: theme.colors.background.primary, // Teal background color
  },
});

export default BackgroundContainer;
