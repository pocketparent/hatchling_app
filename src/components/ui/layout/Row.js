import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Row Component
 * 
 * A reusable layout component for horizontal arrangement
 * Used throughout the app for consistent layout
 */
const Row = ({ 
  children, 
  align = 'center', 
  justify = 'flex-start',
  wrap = false,
  style 
}) => {
  return (
    <View 
      style={[
        styles.container, 
        { 
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? 'wrap' : 'nowrap'
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
    flexDirection: 'row',
  }
});

export default Row;
