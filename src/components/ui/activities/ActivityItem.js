import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';

/**
 * ActivityItem Component
 * 
 * A reusable component for displaying individual activities
 * Used in Journey screen and other places where activities need to be displayed
 * 
 * @param {Object} activity - The activity object containing title, description, and other properties
 * @param {string} iconName - Optional custom icon name (defaults to bulb-outline)
 * @param {string} iconColor - Optional custom icon color (defaults to secondary color)
 * @param {Object} style - Additional style overrides for the container
 */
const ActivityItem = ({ 
  activity, 
  iconName = 'bulb-outline',
  iconColor,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[
        styles.iconContainer, 
        { backgroundColor: `${iconColor || theme.colors.secondary.main}20` }
      ]}>
        <Ionicons 
          name={iconName} 
          size={24} 
          color={iconColor || theme.colors.secondary.main} 
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.description}>{activity.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: theme.spacing.borderRadius.lg,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.sm,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.secondary.main,
    marginBottom: theme.spacing.spacing.xs,
  },
  description: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.neutral.dark,
  },
});

export default ActivityItem;
