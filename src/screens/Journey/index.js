import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyData from '../../data/journeyData';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';

/**
 * Journey Screen
 * 
 * Shows weekly themes and activities based on baby's development
 * Allows users to track weekly activities and progress
 */
export default function JourneyScreen({ navigation }) {
  // State for selected week
  const [selectedWeekId, setSelectedWeekId] = useState(null);
  const [journeyState, setJourneyState] = useState(journeyData);
  
  // Get selected week data if any
  const selectedWeek = selectedWeekId 
    ? journeyState.weeks.find(week => week.id === selectedWeekId)
    : null;
  
  // Handle week selection
  const handleSelectWeek = (weekId) => {
    setSelectedWeekId(weekId);
  };
  
  // Handle back button from week view
  const handleBackToWeeks = () => {
    setSelectedWeekId(null);
  };
  
  // Handle activity completion toggle
  const handleToggleActivity = (weekId) => {
    // Create a deep copy of the data to modify
    const updatedData = JSON.parse(JSON.stringify(journeyState));
    
    // Find the week
    const weekIndex = updatedData.weeks.findIndex(week => week.id === weekId);
    
    if (weekIndex !== -1) {
      // Toggle the completed status
      updatedData.weeks[weekIndex].completed = 
        !updatedData.weeks[weekIndex].completed;
    }
    
    setJourneyState(updatedData);
  };

  // If a week is selected, show detailed activity view
  if (selectedWeek) {
    return (
      <ScreenErrorWrapper screenName="Journey Week" navigation={navigation}>
        <BackgroundContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.weekDetailContainer}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBackToWeeks}
              >
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              
              <View style={styles.weekCard}>
                <Text style={styles.weekTitle}>Week {selectedWeek.week}</Text>
                <Text style={styles.weekTheme}>{selectedWeek.theme}</Text>
                
                <View style={styles.activityContainer}>
                  <Text style={styles.activityTitle}>Activity</Text>
                  <Text style={styles.activityText}>{selectedWeek.activityTip}</Text>
                  
                  <TouchableOpacity 
                    style={[
                      styles.completeButton,
                      selectedWeek.completed ? styles.completedButton : {}
                    ]}
                    onPress={() => handleToggleActivity(selectedWeek.id)}
                  >
                    <Text style={styles.completeButtonText}>
                      {selectedWeek.completed ? 'Completed' : 'Mark as Complete'}
                    </Text>
                    {selectedWeek.completed && (
                      <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" style={styles.checkIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </BackgroundContainer>
      </ScreenErrorWrapper>
    );
  }
  
  // Otherwise show the weeks list view
  return (
    <ScreenErrorWrapper screenName="Journey" navigation={navigation}>
      <BackgroundContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          
          {/* App header */}
          <View style={styles.appHeader}>
            <Text style={styles.appTitle}>Hatchling</Text>
          </View>
          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Journey header */}
            <View style={styles.journeyHeaderContainer}>
              <Text style={styles.journeyHeaderTitle}>First 8 Weeks</Text>
              <Text style={styles.journeyHeaderDescription}>
                Track your baby's development journey week by week with activities designed to support their growth.
              </Text>
            </View>
            
            {/* Weekly cards */}
            <View style={styles.weeksContainer}>
              {journeyState.weeks.map(week => (
                <TouchableOpacity 
                  key={week.id}
                  style={[
                    styles.weekItem,
                    week.completed ? styles.weekItemCompleted : {}
                  ]}
                  onPress={() => handleSelectWeek(week.id)}
                >
                  <View style={styles.weekItemHeader}>
                    <Text style={styles.weekItemNumber}>Week {week.week}</Text>
                    {week.completed && (
                      <Ionicons name="checkmark-circle" size={20} color="#4A9B9B" />
                    )}
                  </View>
                  <Text style={styles.weekItemTheme}>{week.theme}</Text>
                  <Text style={styles.weekItemPreview} numberOfLines={2}>
                    {week.activityTip}
                  </Text>
                  <View style={styles.weekItemFooter}>
                    <Text style={styles.viewDetailsText}>View Details</Text>
                    <Ionicons name="chevron-forward" size={16} color="#4A9B9B" />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </BackgroundContainer>
    </ScreenErrorWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appHeader: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 5,
    zIndex: 1,
  },
  appTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding at bottom to account for tab bar
    zIndex: 1,
  },
  journeyHeaderContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  journeyHeaderTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  journeyHeaderDescription: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 22,
  },
  weeksContainer: {
    padding: 16,
  },
  weekItem: {
    backgroundColor: '#F8EFE0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  weekItemCompleted: {
    borderLeftWidth: 5,
    borderLeftColor: '#4A9B9B',
  },
  weekItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  weekItemNumber: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 16,
    color: '#4A9B9B',
  },
  weekItemTheme: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D',
    marginBottom: 8,
  },
  weekItemPreview: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    color: '#004D4D',
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 12,
  },
  weekItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 14,
    fontFamily: 'SFProText-Medium',
    color: '#4A9B9B',
    marginRight: 4,
  },
  weekDetailContainer: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'SFProText-Medium',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  weekCard: {
    backgroundColor: '#F8EFE0',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  weekTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#4A9B9B',
    marginBottom: 8,
  },
  weekTheme: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    color: '#004D4D',
    marginBottom: 20,
  },
  activityContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  activityTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D',
    marginBottom: 12,
  },
  activityText: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#004D4D',
    lineHeight: 24,
    marginBottom: 20,
  },
  completeButton: {
    backgroundColor: '#4A9B9B',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  completedButton: {
    backgroundColor: '#2E7D7D',
  },
  completeButtonText: {
    fontSize: 16,
    fontFamily: 'SFProText-Medium',
    color: '#FFFFFF',
  },
  checkIcon: {
    marginLeft: 8,
  },
});
