import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Column Component
 * 
 * A reusable layout component for vertical arrangement
 * Used throughout the app for consistent layout
 */
const Column = ({ 
  children, 
  align = 'flex-start', 
  justify = 'flex-start',
  style 
}) => {
  return (
    <View 
      style={[
        styles.container, 
        { 
          alignItems: align,
          justifyContent: justify,
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  }
});

export default Column;
