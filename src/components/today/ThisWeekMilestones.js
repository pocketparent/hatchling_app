import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

/**
 * This Week Milestones Component
 * 
 * Displays a summary of upcoming and recent milestones for the week
 * Includes progress tracking and milestone completion functionality
 */
const ThisWeekMilestones = ({ navigation, babyAge = "4 months" }) => {
  // Mock data for this week's milestones
  const weeklyMilestones = [
    {
      id: '1',
      title: 'Rolls from tummy to back',
      domain: 'Motor',
      completed: true,
      date: 'May 25',
      icon: '🔄'
    },
    {
      id: '2',
      title: 'Babbles with expression',
      domain: 'Language',
      completed: false,
      upcoming: true,
      icon: '🗣️'
    },
    {
      id: '3',
      title: 'Reaches for toys',
      domain: 'Motor',
      completed: false,
      icon: '🧸'
    }
  ];

  // Calculate completion percentage
  const completedCount = weeklyMilestones.filter(m => m.completed).length;
  const completionPercentage = Math.round((completedCount / weeklyMilestones.length) * 100);

  // Handle milestone toggle
  const handleToggleMilestone = (id) => {
    // In a real app, this would update the milestone status in state/storage
    console.log(`Toggle milestone ${id}`);
  };

  // Handle navigation to Journey screen
  const handleViewAllMilestones = () => {
    if (navigation) {
      navigation.navigate('Journey');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>This Week</Text>
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={handleViewAllMilestones}
        >
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={16} color={theme.colors.neutral.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressLabel}>Milestone Progress</Text>
          <Text style={styles.progressPercentage}>{completionPercentage}%</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBarFill, 
              { width: `${completionPercentage}%` }
            ]} 
          />
        </View>
      </View>

      <View style={styles.milestonesContainer}>
        {weeklyMilestones.map(milestone => (
          <TouchableOpacity 
            key={milestone.id}
            style={[
              styles.milestoneItem,
              milestone.upcoming && styles.upcomingMilestone
            ]}
            onPress={() => handleToggleMilestone(milestone.id)}
          >
            <View style={styles.milestoneIconContainer}>
              <Text style={styles.milestoneIcon}>{milestone.icon}</Text>
            </View>
            <View style={styles.milestoneContent}>
              <Text style={styles.milestoneTitle}>{milestone.title}</Text>
              <Text style={styles.milestoneDomain}>{milestone.domain}</Text>
              {milestone.date && (
                <Text style={styles.milestoneDate}>Achieved: {milestone.date}</Text>
              )}
            </View>
            <View style={styles.milestoneCheckbox}>
              {milestone.completed ? (
                <View style={styles.checkboxChecked}>
                  <Ionicons name="checkmark" size={16} color={theme.colors.neutral.white} />
                </View>
              ) : (
                <View style={styles.checkboxUnchecked} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.weeklyCheckInButton}
        onPress={() => console.log('Weekly check-in')}
      >
        <Ionicons name="calendar-outline" size={20} color={theme.colors.neutral.white} style={styles.checkInIcon} />
        <Text style={styles.weeklyCheckInText}>Complete Weekly Check-in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the design
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
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
  progressContainer: {
    marginBottom: 20,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#004D4D', // Dark teal matching the design
  },
  progressPercentage: {
    fontFamily: 'SFProText-Bold',
    fontSize: 16,
    color: theme.colors.primary.main,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: 'rgba(0, 77, 77, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: 4,
  },
  milestonesContainer: {
    marginBottom: 20,
  },
  milestoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  upcomingMilestone: {
    borderWidth: 1,
    borderColor: theme.colors.secondary.main,
    backgroundColor: 'rgba(247, 151, 112, 0.1)', // Light coral background
  },
  milestoneIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 77, 77, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  milestoneIcon: {
    fontSize: 20,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneTitle: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: '#004D4D', // Dark teal matching the design
    marginBottom: 2,
  },
  milestoneDomain: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.primary.main,
    marginBottom: 2,
  },
  milestoneDate: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.medium,
  },
  milestoneCheckbox: {
    marginLeft: 8,
  },
  checkboxUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weeklyCheckInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary.main,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  checkInIcon: {
    marginRight: 8,
  },
  weeklyCheckInText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
});

export default ThisWeekMilestones;
