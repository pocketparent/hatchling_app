import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../../theme';
import { Body } from '../Typography';
import { Ionicons } from '@expo/vector-icons';

/**
 * SecondaryButton Component
 * 
 * A reusable secondary button component with consistent styling
 * Used throughout the app for secondary actions
 */
const SecondaryButton = ({ 
  title,
  icon,
  iconPosition = 'left',
  onPress,
  style,
  disabled = false
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
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
          size={20} 
          color={theme.colors.primary.main} 
          style={styles.iconLeft} 
        />
      )}
      
      <Body style={styles.title}>
        {title}
      </Body>
      
      {icon && iconPosition === 'right' && (
        <Ionicons 
          name={icon} 
          size={20} 
          color={theme.colors.primary.main} 
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
    paddingVertical: theme.spacing.spacing.md,
    paddingHorizontal: theme.spacing.spacing.lg,
    borderRadius: theme.spacing.borderRadius.md,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    color: theme.colors.primary.main,
    fontFamily: 'SFProText-Medium',
  },
  iconLeft: {
    marginRight: theme.spacing.spacing.sm,
  },
  iconRight: {
    marginLeft: theme.spacing.spacing.sm,
  }
});

export default SecondaryButton;
