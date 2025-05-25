import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import theme from '../../theme';

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card
 * Non-tracking, content-first approach
 */
export default function TodayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Today</Text>
        </View>
        
        <View style={styles.insightCard}>
          <Text style={styles.insightTitle}>Daily Insight</Text>
          <Text style={styles.insightDescription}>
            Your daily insight will appear here. Swipe through panels to learn about what your baby
            might be experiencing today and get gentle guidance.
          </Text>
        </View>
        
        <View style={styles.weeklyCheckIn}>
          <Text style={styles.sectionTitle}>Weekly Check-In</Text>
          <Text style={styles.sectionDescription}>
            Every Friday, a quick check-in will appear here to help personalize your experience.
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
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
  },
  insightCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  insightTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  insightDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  weeklyCheckIn: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  sectionDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
});
