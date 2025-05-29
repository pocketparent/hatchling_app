import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import theme from '../../../theme';

/**
 * MilestoneItem Component
 * 
 * A reusable component for displaying individual milestones with toggle functionality
 * Used in Journey screen and other places where milestones need to be displayed
 * 
 * @param {Object} milestone - The milestone object containing title, description, and observed status
 * @param {Function} onToggle - Function to call when milestone observed status is toggled
 * @param {Object} style - Additional style overrides for the container
 */
const MilestoneItem = ({ 
  milestone, 
  onToggle,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.title}>{milestone.title}</Text>
        <Text style={styles.description}>{milestone.description}</Text>
      </View>
      
      <View style={styles.toggleContainer}>
        <Switch
          trackColor={{ 
            false: theme.colors.neutral.light, 
            true: theme.colors.primary.main 
          }}
          thumbColor={theme.colors.neutral.white}
          ios_backgroundColor={theme.colors.neutral.light}
          onValueChange={() => onToggle(milestone.id)}
          value={milestone.observed}
        />
        <Text style={[
          styles.toggleLabel,
          milestone.observed ? styles.toggleLabelActive : styles.toggleLabelInactive
        ]}>
          {milestone.observed ? 'Observed' : 'Not yet'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  content: {
    marginBottom: theme.spacing.spacing.sm,
  },
  title: {
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.primary.dark,
    marginBottom: theme.spacing.spacing.xs,
  },
  description: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.neutral.dark,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toggleLabel: {
    fontSize: theme.typography.sizes.bodySmall,
    fontFamily: theme.typography.fonts.medium,
    marginLeft: theme.spacing.spacing.sm,
  },
  toggleLabelActive: {
    color: theme.colors.primary.main,
  },
  toggleLabelInactive: {
    color: theme.colors.neutral.medium,
  },
});

export default MilestoneItem;
