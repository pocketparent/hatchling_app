import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';

/**
 * BackButton Component
 * 
 * A reusable back button component with consistent styling
 * Used across the app for navigation
 * 
 * @param {Function} onPress - Function to call when button is pressed
 * @param {string} color - Optional color override (defaults to white)
 * @param {Object} style - Additional style overrides for the container
 */
const BackButton = ({ 
  onPress, 
  color = theme.colors.neutral.white,
  style 
}) => {
  return (
    <TouchableOpacity
      style={[{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name="chevron-back" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;
