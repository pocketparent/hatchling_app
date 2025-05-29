import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import { Body } from '../Typography';

/**
 * BackButton Component
 * 
 * A reusable back button component with consistent styling
 * Used across the app for navigation
 */
const BackButton = ({ 
  onPress, 
  color = 'white',
  showText = true,
  text = 'Back',
  style 
}) => {
  const textColor = color === 'white' 
    ? theme.colors.neutral.white 
    : theme.colors.primary.main;
  
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons 
        name="arrow-back" 
        size={24} 
        color={textColor} 
      />
      
      {showText && (
        <Body 
          color={color} 
          style={styles.text}
        >
          {text}
        </Body>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.spacing.sm,
  },
  text: {
    marginLeft: theme.spacing.spacing.xs,
  }
});

export default BackButton;
