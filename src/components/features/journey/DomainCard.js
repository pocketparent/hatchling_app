import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import DomainBadge from '../../ui/badges/DomainBadge';

/**
 * DomainCard Component
 * 
 * Card displaying a developmental domain with icon, title, progress bar, and explore button
 * Used in the Journey screen to navigate to domain-specific milestones and activities
 * Moved from journey/ to features/journey/ for better organization
 * 
 * @param {Object} domain - The domain object containing name, color, icon, and progress
 * @param {Function} onExplore - Function to call when explore button is pressed
 * @param {Object} style - Additional style overrides for the container
 */
const DomainCard = ({ domain, onExplore, style }) => {
  return (
    <View style={[styles.container, style]}>
      {/* Domain icon and title */}
      <View style={styles.headerContainer}>
        <DomainBadge domain={domain} size="medium" />
        <Text style={styles.title}>{domain.name}</Text>
      </View>
      
      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${domain.progress}%`, backgroundColor: domain.color || theme.colors.primary.main }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {domain.progress}% Complete
        </Text>
      </View>
      
      {/* Explore button */}
      <TouchableOpacity 
        style={styles.exploreButton}
        onPress={() => onExplore(domain.id)}
        activeOpacity={0.8}
      >
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: theme.spacing.borderRadius.lg,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.primary.dark,
    marginLeft: theme.spacing.spacing.sm,
  },
  progressContainer: {
    marginBottom: theme.spacing.spacing.md,
  },
  progressBackground: {
    height: 8,
    backgroundColor: 'rgba(74, 155, 155, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: theme.typography.sizes.caption,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.primary.main,
    textAlign: 'right',
  },
  exploreButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 24,
    paddingVertical: theme.spacing.spacing.sm,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: theme.colors.neutral.white,
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.medium,
  },
});

export default DomainCard;
