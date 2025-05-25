import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import theme from '../../theme';

/**
 * Saved Screen
 * 
 * Shows saved insights, activities, and milestone media
 * Implements the design from the mockup
 */
export default function SavedScreen() {
  // Mock data for saved insights
  const savedInsights = [
    {
      id: '1',
      title: 'Managing Sleep Regressions',
      type: 'Daily Insight',
      icon: '🌙',
      color: '#FFCC80'
    },
    {
      id: '2',
      title: 'Strategies for Self-Soothing',
      type: 'Daily Insight',
      icon: '😊',
      color: '#FF8A65'
    }
  ];

  // Mock data for saved activities
  const savedActivities = [
    {
      id: '1',
      title: 'Singing Songs',
      type: 'Activity Suggestion',
      icon: '🎵',
      color: '#FFCC80'
    },
    {
      id: '2',
      title: 'Building with Blocks',
      type: 'Activity Suggestion',
      icon: '🧱',
      color: '#FF8A65'
    }
  ];

  // Mock data for milestone media
  const milestoneMedia = [
    { id: '1', source: null },
    { id: '2', source: null },
    { id: '3', source: null },
    { id: '4', source: null }
  ];

  // Render a saved item (insight or activity)
  const renderSavedItem = (item) => (
    <View key={item.id} style={styles.savedItemContainer}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.savedItemContent}>
        <Text style={styles.savedItemTitle}>{item.title}</Text>
        <Text style={styles.savedItemType}>{item.type}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Saved</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Insights</Text>
          {savedInsights.map(renderSavedItem)}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Activities</Text>
          {savedActivities.map(renderSavedItem)}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Captured Milestone Media</Text>
          <View style={styles.mediaGrid}>
            {milestoneMedia.map(item => (
              <View key={item.id} style={styles.mediaItem}>
                <View style={styles.mediaPlaceholder}>
                  <Text style={styles.mediaPlaceholderText}>📷</Text>
                </View>
              </View>
            ))}
          </View>
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
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  section: {
    marginBottom: theme.spacing.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  savedItemContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    marginBottom: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  iconContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
  },
  savedItemContent: {
    flex: 1,
    padding: theme.spacing.spacing.md,
    justifyContent: 'center',
  },
  savedItemTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xxs,
  },
  savedItemType: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.spacing.xs,
  },
  mediaItem: {
    width: '25%',
    padding: theme.spacing.spacing.xs,
  },
  mediaPlaceholder: {
    aspectRatio: 1,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaPlaceholderText: {
    fontSize: 24,
  },
});
