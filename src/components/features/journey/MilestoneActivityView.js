import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import theme from '../../../theme';
import MilestoneItem from '../../ui/milestones/MilestoneItem';
import ActivityItem from '../../ui/activities/ActivityItem';

/**
 * MilestoneList Component
 * 
 * Displays a list of milestones with toggle buttons for observed/not yet status
 * Used in the Journey screen after selecting a domain to explore
 * Moved from journey/ to features/journey/ for better organization
 * 
 * @param {Array} milestones - Array of milestone objects
 * @param {Function} onToggleMilestone - Function to call when milestone is toggled
 */
const MilestoneList = ({ milestones, onToggleMilestone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Milestones</Text>
      
      {milestones.map(milestone => (
        <MilestoneItem
          key={milestone.id}
          milestone={milestone}
          onToggle={onToggleMilestone}
        />
      ))}
    </View>
  );
};

/**
 * ActivityList Component
 * 
 * Displays a list of suggested activities for a domain
 * Used in the Journey screen after selecting a domain to explore
 * Moved from journey/ to features/journey/ for better organization
 * 
 * @param {Array} activities - Array of activity objects
 */
const ActivityList = ({ activities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Suggested Activities</Text>
      
      {activities.map(activity => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          iconName="bulb-outline"
          iconColor={theme.colors.secondary.main}
        />
      ))}
    </View>
  );
};

/**
 * MilestoneActivityView Component
 * 
 * Container component that displays both milestones and activities for a domain
 * Used in the Journey screen after selecting a domain to explore
 * Moved from journey/ to features/journey/ for better organization
 * 
 * @param {Object} domain - The domain object containing milestones and activities
 * @param {Function} onToggleMilestone - Function to call when milestone is toggled
 * @param {Function} onBack - Function to call when back button is pressed
 */
const MilestoneActivityView = ({ domain, onToggleMilestone, onBack }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color={theme.colors.neutral.white} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{domain.name}</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <MilestoneList 
            milestones={domain.milestones} 
            onToggleMilestone={onToggleMilestone} 
          />
          
          <View style={styles.divider} />
          
          <ActivityList activities={domain.activities} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.md,
    zIndex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: theme.typography.sizes.body,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.neutral.white,
    marginLeft: theme.spacing.spacing.xs,
  },
  headerTitle: {
    flex: 1,
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginRight: 40, // To offset the back button and center the title
  },
  scrollContainer: {
    flex: 1,
    zIndex: 1,
  },
  contentContainer: {
    padding: theme.spacing.spacing.md,
    paddingBottom: 100, // Extra padding at bottom to account for tab bar
  },
  container: {
    marginBottom: theme.spacing.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.semibold,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: theme.spacing.spacing.xl,
  },
});

export { MilestoneList, ActivityList, MilestoneActivityView };
export default MilestoneActivityView;
