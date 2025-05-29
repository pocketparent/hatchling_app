import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * Spacer Component
 * 
 * A reusable spacer component for adding consistent spacing
 * Used across the app for layout management
 * 
 * @param {string} size - Size of the spacer: 'xs', 'sm', 'md', 'lg', 'xl'
 * @param {boolean} horizontal - Whether the spacer is horizontal (default is vertical)
 */
const Spacer = ({ size = 'md', horizontal = false }) => {
  const spacerStyle = {
    width: horizontal ? theme.spacing.spacing[size] : undefined,
    height: !horizontal ? theme.spacing.spacing[size] : undefined,
  };
  
  return <View style={spacerStyle} />;
};

export default Spacer;
