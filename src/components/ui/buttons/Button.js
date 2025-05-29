import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import { Body, BodySmall } from '../Typography';
import { Ionicons } from '@expo/vector-icons';

/**
 * Button Component
 * 
 * A reusable button component with consistent styling
 * Used throughout the app for actions
 */
const Button = ({ 
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  onPress,
  style 
}) => {
  // Get button styling based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.colors.primary.main,
          },
          label: {
            color: theme.colors.primary.main,
          }
        };
      case 'text':
        return {
          container: {
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
          },
          label: {
            color: theme.colors.primary.main,
          }
        };
      case 'primary':
      default:
        return {
          container: {
            backgroundColor: theme.colors.primary.main,
          },
          label: {
            color: theme.colors.neutral.white,
          }
        };
    }
  };

  // Get button size styling
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: {
            paddingVertical: theme.spacing.spacing.sm,
            paddingHorizontal: theme.spacing.spacing.md,
          },
          label: {
            fontSize: 14,
          },
          icon: {
            size: 16,
          }
        };
      case 'large':
        return {
          container: {
            paddingVertical: theme.spacing.spacing.lg,
            paddingHorizontal: theme.spacing.spacing.xl,
          },
          label: {
            fontSize: 18,
          },
          icon: {
            size: 24,
          }
        };
      case 'medium':
      default:
        return {
          container: {
            paddingVertical: theme.spacing.spacing.md,
            paddingHorizontal: theme.spacing.spacing.lg,
          },
          label: {
            fontSize: 16,
          },
          icon: {
            size: 20,
          }
        };
    }
  };

  const variantStyles = getButtonStyles();
  const sizeStyles = getSizeStyles();
  
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        variantStyles.container,
        sizeStyles.container,
        disabled && styles.disabled,
        style
      ]} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && iconPosition === 'left' && (
        <Ionicons 
          name={icon} 
          size={sizeStyles.icon.size} 
          color={variantStyles.label.color} 
          style={styles.iconLeft} 
        />
      )}
      
      <Body 
        style={[
          styles.label,
          { 
            color: variantStyles.label.color,
            fontSize: sizeStyles.label.fontSize 
          }
        ]}
      >
        {label}
      </Body>
      
      {icon && iconPosition === 'right' && (
        <Ionicons 
          name={icon} 
          size={sizeStyles.icon.size} 
          color={variantStyles.label.color} 
          style={styles.iconRight} 
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing.borderRadius.md,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontFamily: 'SFProText-Medium',
  },
  iconLeft: {
    marginRight: theme.spacing.spacing.sm,
  },
  iconRight: {
    marginLeft: theme.spacing.spacing.sm,
  }
});

export default Button;
