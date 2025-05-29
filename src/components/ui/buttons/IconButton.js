import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';

/**
 * IconButton Component
 * 
 * A reusable button component with an icon
 * Used throughout the app for icon-based interactions
 */
const IconButton = ({ 
  icon,
  size = 'medium',
  variant = 'primary',
  color,
  onPress,
  style,
  disabled = false
}) => {
  // Get size values
  const getSizeValues = () => {
    switch (size) {
      case 'small':
        return {
          containerSize: 32,
          iconSize: 16,
        };
      case 'large':
        return {
          containerSize: 56,
          iconSize: 28,
        };
      case 'medium':
      default:
        return {
          containerSize: 44,
          iconSize: 22,
        };
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'transparent',
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: color || theme.colors.primary.main,
        };
      case 'primary':
      default:
        return {
          backgroundColor: color || theme.colors.primary.main,
        };
    }
  };

  const { containerSize, iconSize } = getSizeValues();
  const variantStyles = getVariantStyles();
  
  // Determine icon color based on variant
  const getIconColor = () => {
    if (variant === 'primary') {
      return theme.colors.neutral.white;
    }
    return color || theme.colors.primary.main;
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
        variantStyles,
        disabled && styles.disabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Ionicons 
        name={icon} 
        size={iconSize} 
        color={getIconColor()} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  }
});

export default IconButton;
