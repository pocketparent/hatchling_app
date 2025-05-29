import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';

/**
 * CardTitle Component
 * 
 * A reusable component for displaying card titles with optional icon and action button
 * Used across the app for consistent card header styling
 * 
 * @param {string} title - The title text to display
 * @param {string} iconName - Optional icon name to display before the title
 * @param {string} iconColor - Optional color for the icon
 * @param {string} actionText - Optional text for the action button
 * @param {Function} onAction - Function to call when action button is pressed
 * @param {Object} style - Additional style overrides for the container
 */
const CardTitle = ({ 
  title,
  iconName,
  iconColor = theme.colors.primary.main,
  actionText,
  onAction,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        {iconName && (
          <Ionicons 
            name={iconName} 
            size={20} 
            color={iconColor} 
            style={styles.icon}
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      
      {actionText && onAction && (
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.sm,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing.spacing.xs,
  },
  title: {
    fontSize: theme.typography.sizes.h3,
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.neutral.darkest,
  },
  actionText: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.primary.main,
  },
});

export default CardTitle;
