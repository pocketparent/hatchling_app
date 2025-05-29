import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';

/**
 * DomainBadge Component
 * 
 * A reusable badge component for displaying developmental domains with icon and optional text
 * Used in Journey screen and other places where domains need to be identified
 * 
 * @param {Object} domain - The domain object containing name, color, and icon
 * @param {string} size - Size variant: 'small', 'medium', or 'large'
 * @param {boolean} showText - Whether to display the domain name text
 * @param {Object} style - Additional style overrides for the container
 */
const DomainBadge = ({ 
  domain, 
  size = 'medium', 
  showText = true,
  style
}) => {
  // Get icon based on domain name if not provided
  const getIconName = () => {
    if (domain.icon) return domain.icon;
    
    switch(domain.name) {
      case 'Physical':
        return 'body-outline';
      case 'Cognitive':
        return 'brain-outline';
      case 'Language':
        return 'chatbubble-outline';
      case 'Social/Emotional':
        return 'heart-outline';
      default:
        return 'star-outline';
    }
  };

  // Determine icon size based on badge size
  const getIconSize = () => {
    switch(size) {
      case 'small':
        return 16;
      case 'large':
        return 28;
      case 'medium':
      default:
        return 22;
    }
  };

  return (
    <View style={[
      styles.container, 
      styles[size], 
      { backgroundColor: domain.color || theme.colors.primary.main },
      style
    ]}>
      <Ionicons 
        name={getIconName()} 
        size={getIconSize()} 
        color={theme.colors.neutral.white} 
      />
      {showText && size !== 'small' && (
        <Text style={styles.text}>{domain.name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.spacing.borderRadius.md,
    padding: theme.spacing.spacing.xs,
  },
  small: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    borderRadius: 16,
    padding: 0,
  },
  medium: {
    paddingHorizontal: theme.spacing.spacing.sm,
    paddingVertical: theme.spacing.spacing.xs,
  },
  large: {
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.sm,
  },
  text: {
    fontFamily: theme.typography.fonts.medium,
    fontSize: theme.typography.sizes.bodySmall,
    color: theme.colors.neutral.white,
    marginLeft: theme.spacing.spacing.xs,
  },
});

export default DomainBadge;
