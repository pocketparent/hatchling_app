import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import InsightCard from '../../components/InsightCard';
import { mockInsights } from '../../data/mockInsights';

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card
 * Non-tracking, content-first approach
 */
export default function TodayScreen() {
  const [currentInsight, setCurrentInsight] = useState(null);
  const [lastViewedDate, setLastViewedDate] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  
  // Mock function to get today's date
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD format
  };
  
  // Mock function to determine if today is Friday (for weekly check-in)
  const isFriday = () => {
    const today = new Date();
    return today.getDay() === 5; // 0 is Sunday, 5 is Friday
  };
  
  // Mock function to select an insight based on baby's age and other factors
  const selectInsightForToday = () => {
    // In a real app, this would use personalization logic
    // For now, just return a random insight from the mock data
    const randomIndex = Math.floor(Math.random() * mockInsights.length);
    return mockInsights[randomIndex];
  };
  
  // Initialize insight on component mount
  useEffect(() => {
    loadTodayInsight();
    
    // Check if today is Friday to show weekly check-in
    if (isFriday()) {
      setShowCheckIn(true);
    }
  }, []);
  
  // Load today's insight
  const loadTodayInsight = () => {
    const todayDate = getTodayDate();
    
    // If we already viewed today's insight, show the same one
    if (lastViewedDate === todayDate && currentInsight) {
      return;
    }
    
    // Otherwise, select a new insight
    const insight = selectInsightForToday();
    setCurrentInsight(insight);
    setLastViewedDate(todayDate);
  };
  
  // Handle pull-to-refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    
    // Simulate network request
    setTimeout(() => {
      loadTodayInsight();
      setIsRefreshing(false);
    }, 1000);
  };
  
  // Handle check-in completion
  const handleCheckInComplete = () => {
    setShowCheckIn(false);
    // In a real app, this would save check-in data to Firestore
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
      >
        {/* Header with date */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
            <Text style={styles.headerTitle}>Today</Text>
          </View>
          <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
            <Ionicons name="refresh" size={24} color={theme.colors.primary.main} />
          </TouchableOpacity>
        </View>
        
        {/* Daily Insight Card */}
        {currentInsight ? (
          <InsightCard insight={currentInsight} />
        ) : (
          <View style={styles.placeholderCard}>
            <Text style={styles.placeholderText}>Loading your daily insight...</Text>
          </View>
        )}
        
        {/* Weekly Check-In (shown only on Fridays) */}
        {showCheckIn && (
          <View style={styles.checkInCard}>
            <Text style={styles.checkInTitle}>Weekly Check-In</Text>
            <Text style={styles.checkInDescription}>
              A few quick questions to help personalize your experience.
            </Text>
            <TouchableOpacity 
              style={styles.checkInButton}
              onPress={handleCheckInComplete}
            >
              <Text style={styles.checkInButtonText}>Start Check-In</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Baby Development Summary */}
        <View style={styles.developmentCard}>
          <View style={styles.developmentHeader}>
            <Text style={styles.developmentTitle}>Current Phase: 4-6 months</Text>
            <TouchableOpacity>
              <Text style={styles.developmentLink}>View Journey</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: '45%' }]} />
          </View>
          <Text style={styles.developmentDescription}>
            Your baby is developing rapidly! They're likely working on rolling, 
            showing interest in objects, and becoming more vocal.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  dateText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.xxs,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
  },
  refreshButton: {
    padding: theme.spacing.spacing.xs,
  },
  placeholderCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  placeholderText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.medium,
  },
  checkInCard: {
    backgroundColor: theme.colors.secondary.light,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkInTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  checkInDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
  },
  checkInButton: {
    backgroundColor: theme.colors.secondary.main,
    borderRadius: 8,
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
    alignSelf: 'flex-start',
  },
  checkInButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
  },
  developmentCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  developmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.sm,
  },
  developmentTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
  },
  developmentLink: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    fontSize: 14,
  },
  progressContainer: {
    height: 6,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 3,
    marginBottom: theme.spacing.spacing.md,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: 3,
  },
  developmentDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
});
