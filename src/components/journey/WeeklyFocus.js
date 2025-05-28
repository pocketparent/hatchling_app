import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

/**
 * Weekly Focus Component for Journey Screen
 * 
 * Displays suggested focus areas for the current week
 * Based on baby's age and developmental phase
 */
const WeeklyFocus = ({ phase, babyAge = "4 months" }) => {
  // Mock data for weekly focus areas
  // In a real app, this would be dynamically generated based on the baby's age and progress
  const focusAreas = [
    {
      id: '1',
      domain: 'Motor',
      title: 'Tummy Time',
      description: 'Aim for 3-5 short sessions daily to strengthen neck and shoulder muscles.',
      icon: '💪'
    },
    {
      id: '2',
      domain: 'Language',
      title: 'Responsive Talking',
      description: 'Respond to your baby\'s coos and babbles as if having a conversation.',
      icon: '🗣️'
    },
    {
      id: '3',
      domain: 'Cognitive',
      title: 'Object Permanence',
      description: 'Practice hiding and revealing toys to develop object permanence.',
      icon: '🧩'
    }
  ];

  // Handle navigation to activity details
  const handleViewActivity = (activityId) => {
    // In a real app, this would navigate to activity details
    console.log(`View activity ${activityId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weekly Focus</Text>
        <View style={styles.weekBadge}>
          <Text style={styles.weekText}>Week of May 25</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>
        Suggested activities to support development this week
      </Text>

      <View style={styles.focusAreasContainer}>
        {focusAreas.map(area => (
          <TouchableOpacity 
            key={area.id}
            style={styles.focusAreaItem}
            onPress={() => handleViewActivity(area.id)}
          >
            <View style={styles.focusAreaIconContainer}>
              <Text style={styles.focusAreaIcon}>{area.icon}</Text>
            </View>
            <View style={styles.focusAreaContent}>
              <Text style={styles.focusAreaDomain}>{area.domain}</Text>
              <Text style={styles.focusAreaTitle}>{area.title}</Text>
              <Text style={styles.focusAreaDescription} numberOfLines={2}>
                {area.description}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.viewAllActivitiesButton}
        onPress={() => console.log('View all activities')}
      >
        <Text style={styles.viewAllActivitiesText}>View All Activities</Text>
      </TouchableOpacity>
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
    marginBottom: 8,
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: '#004D4D', // Dark teal matching the design
  },
  weekBadge: {
    backgroundColor: theme.colors.secondary.main,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  weekText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: theme.colors.neutral.white,
  },
  subtitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
    marginBottom: 16,
  },
  focusAreasContainer: {
    marginBottom: 16,
  },
  focusAreaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  focusAreaIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 77, 77, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  focusAreaIcon: {
    fontSize: 20,
  },
  focusAreaContent: {
    flex: 1,
    marginRight: 8,
  },
  focusAreaDomain: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: theme.colors.primary.main,
    marginBottom: 2,
  },
  focusAreaTitle: {
    fontFamily: 'SFProText-Bold',
    fontSize: 16,
    color: '#004D4D', // Dark teal matching the design
    marginBottom: 4,
  },
  focusAreaDescription: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.dark,
    lineHeight: 18,
  },
  viewAllActivitiesButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  viewAllActivitiesText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
});

export default WeeklyFocus;
