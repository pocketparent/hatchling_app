import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * MilestoneList Component
 * 
 * Displays a list of milestones with toggle buttons for observed/not yet status
 * Used in the Journey screen after selecting a domain to explore
 * Styled to match the Today screen's visual language
 */
const MilestoneList = ({ milestones, onToggleMilestone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Milestones</Text>
      
      {milestones.map(milestone => (
        <View key={milestone.id} style={styles.milestoneItem}>
          <View style={styles.milestoneContent}>
            <Text style={styles.milestoneTitle}>{milestone.title}</Text>
            <Text style={styles.milestoneDescription}>{milestone.description}</Text>
          </View>
          
          <View style={styles.toggleContainer}>
            <Switch
              trackColor={{ false: '#E0E0E0', true: '#4A9B9B' }}
              thumbColor={milestone.observed ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#E0E0E0"
              onValueChange={() => onToggleMilestone(milestone.id)}
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
      ))}
    </View>
  );
};

/**
 * ActivityList Component
 * 
 * Displays a list of suggested activities for a domain
 * Used in the Journey screen after selecting a domain to explore
 * Styled to match the Today screen's visual language
 */
const ActivityList = ({ activities }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Suggested Activities</Text>
      
      {activities.map(activity => (
        <View key={activity.id} style={styles.activityItem}>
          <View style={styles.activityIconContainer}>
            <Ionicons name="bulb-outline" size={24} color="#B05E35" />
          </View>
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>{activity.title}</Text>
            <Text style={styles.activityDescription}>{activity.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

/**
 * MilestoneActivityView Component
 * 
 * Container component that displays both milestones and activities for a domain
 * Used in the Journey screen after selecting a domain to explore
 * Styled to match the Today screen's visual language
 */
const MilestoneActivityView = ({ domain, onToggleMilestone, onBack }) => {
  return (
    <View style={styles.mainContainer}>
      {/* Plain teal background is now handled by the parent container */}
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
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
    backgroundColor: '#4A9B9B', // Teal background matching the Today screen
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    zIndex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'SFProText-Medium',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'SFProDisplay-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginRight: 40, // To offset the back button and center the title
  },
  scrollContainer: {
    flex: 1,
    zIndex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 100, // Extra padding at bottom to account for tab bar
  },
  container: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Semibold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  milestoneItem: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the Today screen cards
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  milestoneContent: {
    marginBottom: 12,
  },
  milestoneTitle: {
    fontSize: 16,
    fontFamily: 'SFProText-Semibold',
    color: '#004D4D', // Dark teal matching the Today screen text
    marginBottom: 4,
  },
  milestoneDescription: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    color: '#4D4D4D',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toggleLabel: {
    fontSize: 14,
    fontFamily: 'SFProText-Medium',
    marginLeft: 8,
  },
  toggleLabelActive: {
    color: '#4A9B9B',
  },
  toggleLabelInactive: {
    color: '#9E9E9E',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 24,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: '#F8EFE0', // Cream/beige background matching the Today screen cards
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(176, 94, 53, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'SFProText-Semibold',
    color: '#B05E35', // Copper/brown color matching the Today screen
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    color: '#4D4D4D',
  },
});

export { MilestoneList, ActivityList, MilestoneActivityView };
export default MilestoneActivityView;
