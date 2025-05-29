/**
 * Hatchling App Button Components
 * 
 * Reusable button components with consistent styling across the app
 */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

// Primary Button - Main call to action
export const PrimaryButton = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false,
  icon = null,
  style,
  ...props 
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      styles.primaryButton,
      disabled && styles.disabledButton,
      style
    ]}
    onPress={onPress}
    disabled={disabled || loading}
    activeOpacity={0.8}
    {...props}
  >
    {loading ? (
      <ActivityIndicator color="#FFFFFF" size="small" />
    ) : (
      <View style={styles.buttonContent}>
        {icon && (
          <Ionicons 
            name={icon} 
            size={18} 
            color="#FFFFFF" 
            style={styles.buttonIcon} 
          />
        )}
        <Text style={styles.primaryButtonText}>{title}</Text>
      </View>
    )}
  </TouchableOpacity>
);

// Secondary Button - Alternative actions
export const SecondaryButton = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false,
  icon = null,
  style,
  ...props 
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      styles.secondaryButton,
      disabled && styles.disabledButton,
      style
    ]}
    onPress={onPress}
    disabled={disabled || loading}
    activeOpacity={0.8}
    {...props}
  >
    {loading ? (
      <ActivityIndicator color={theme.colors.primary.main} size="small" />
    ) : (
      <View style={styles.buttonContent}>
        {icon && (
          <Ionicons 
            name={icon} 
            size={18} 
            color={theme.colors.primary.main} 
            style={styles.buttonIcon} 
          />
        )}
        <Text style={styles.secondaryButtonText}>{title}</Text>
      </View>
    )}
  </TouchableOpacity>
);

// Text Button - Minimal visual impact
export const TextButton = ({ 
  title, 
  onPress, 
  disabled = false, 
  loading = false,
  icon = null,
  color = 'primary',
  style,
  ...props 
}) => {
  const textColor = getButtonTextColor(color, disabled);
  
  return (
    <TouchableOpacity
      style={[
        styles.textButton,
        disabled && styles.disabledTextButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <View style={styles.buttonContent}>
          {icon && (
            <Ionicons 
              name={icon} 
              size={18} 
              color={textColor} 
              style={styles.buttonIcon} 
            />
          )}
          <Text style={[styles.textButtonText, { color: textColor }]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// Icon Button - Just an icon
export const IconButton = ({ 
  icon, 
  onPress, 
  disabled = false, 
  loading = false,
  color = 'primary',
  size = 'medium',
  style,
  ...props 
}) => {
  const iconColor = getButtonTextColor(color, disabled);
  const iconSize = getIconSize(size);
  
  return (
    <TouchableOpacity
      style={[
        styles.iconButton,
        getIconButtonSize(size),
        disabled && styles.disabledIconButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={iconColor} size="small" />
      ) : (
        <Ionicons name={icon} size={iconSize} color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

// Helper function to get button text color
const getButtonTextColor = (colorName, disabled) => {
  if (disabled) {
    return theme.colors.neutral.medium;
  }
  
  switch (colorName) {
    case 'primary':
      return theme.colors.primary.main;
    case 'secondary':
      return theme.colors.secondary.main;
    case 'white':
      return theme.colors.neutral.white;
    case 'dark':
      return theme.colors.neutral.dark;
    case 'error':
      return theme.colors.feedback.error;
    default:
      return theme.colors.primary.main;
  }
};

// Helper function to get icon size
const getIconSize = (size) => {
  switch (size) {
    case 'small':
      return 16;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    default:
      return 24;
  }
};

// Helper function to get icon button size
const getIconButtonSize = (size) => {
  switch (size) {
    case 'small':
      return {
        width: 32,
        height: 32,
      };
    case 'medium':
      return {
        width: 44,
        height: 44,
      };
    case 'large':
      return {
        width: 56,
        height: 56,
      };
    default:
      return {
        width: 44,
        height: 44,
      };
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary.main,
  },
  secondaryButton: {
    backgroundColor: 'rgba(42, 157, 143, 0.1)',
    borderWidth: 1,
    borderColor: theme.colors.primary.main,
  },
  disabledButton: {
    backgroundColor: theme.colors.neutral.lighter,
    borderColor: theme.colors.neutral.lighter,
    opacity: 0.7,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  primaryButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
    textAlign: 'center',
  },
  secondaryButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.primary.main,
    textAlign: 'center',
  },
  textButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledTextButton: {
    opacity: 0.5,
  },
  textButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  disabledIconButton: {
    opacity: 0.5,
  },
});

export default {
  PrimaryButton,
  SecondaryButton,
  TextButton,
  IconButton
};
