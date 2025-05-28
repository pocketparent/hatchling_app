import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

/**
 * Period Summary Component for Journey Screen
 * 
 * Displays a summary of the current developmental period
 * Shows overall progress across domains and key milestones
 */
const PeriodSummary = ({ phase, onViewAllMilestones }) => {
  // Calculate overall progress across all domains
  const calculateOverallProgress = () => {
    if (!phase || !phase.domains || phase.domains.length === 0) return 0;
    
    const totalProgress = phase.domains.reduce((sum, domain) => sum + (domain.progress || 0), 0);
    return Math.round((totalProgress / phase.domains.length) * 100);
  };

  // Get count of observed milestones
  const getObservedMilestonesCount = () => {
    if (!phase || !phase.domains) return 0;
    
    return phase.domains.reduce((count, domain) => {
      const observedInDomain = domain.milestones ? 
        domain.milestones.filter(m => m.observed).length : 0;
      return count + observedInDomain;
    }, 0);
  };

  // Get total milestones count
  const getTotalMilestonesCount = () => {
    if (!phase || !phase.domains) return 0;
    
    return phase.domains.reduce((count, domain) => {
      return count + (domain.milestones ? domain.milestones.length : 0);
    }, 0);
  };

  // Progress percentage
  const progressPercentage = calculateOverallProgress();
  const observedCount = getObservedMilestonesCount();
  const totalCount = getTotalMilestonesCount();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Period Summary</Text>
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={onViewAllMilestones}
        >
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={16} color={theme.colors.neutral.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>{progressPercentage}%</Text>
            <Text style={styles.progressLabel}>Complete</Text>
          </View>
        </View>
        
        <View style={styles.progressStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{observedCount}/{totalCount}</Text>
            <Text style={styles.statLabel}>Milestones Observed</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{phase.domains.length}</Text>
            <Text style={styles.statLabel}>Development Domains</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{phase.ageRange}</Text>
            <Text style={styles.statLabel}>Age Range</Text>
          </View>
        </View>
      </View>

      <View style={styles.phaseDescription}>
        <Text style={styles.descriptionText}>{phase.summary || phase.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the design
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: '#004D4D', // Dark teal matching the design
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary.main,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  viewAllText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
    marginRight: 4,
  },
  progressSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  progressCircleContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: theme.colors.neutral.white,
  },
  progressLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.white,
  },
  progressStats: {
    flex: 1,
    justifyContent: 'space-around',
  },
  statItem: {
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D', // Dark teal matching the design
  },
  statLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.dark,
  },
  phaseDescription: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    padding: 16,
  },
  descriptionText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#004D4D', // Dark teal matching the design
    lineHeight: 22,
  },
});

export default PeriodSummary;
