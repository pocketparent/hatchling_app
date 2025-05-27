import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../theme';
import BottomSheetInsight from '../../components/BottomSheetInsight';

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card with bottom sheet
 * Non-tracking, content-first approach
 */
export default function TodayScreen() {
  const mockInsightPanels = [
    {
      title: 'Why Is Emma Waking at 4am?',
      body: 'Around 4 months, babies enter lighter sleep cycles, which can cause early waking. This is a normal part of development as their brain processes the day's learning and experiences. Many parents notice this pattern emerging around this age.',
    },
    {
      title: 'What's Going On?',
      body: 'Their brain is busy processing motor learning in light sleep — totally normal! During this developmental phase, babies are learning new skills and their brains are making important neural connections. The 4-month sleep regression is a well-documented phenomenon.',
    },
    {
      title: 'Try This',
      body: 'Try moving bedtime slightly earlier and offer a quiet response at 4am. Keep the room dark and interactions minimal. Consider a gentle pat or shushing rather than picking up. Consistency is key - within a week, many babies adjust to the new sleep pattern.',
    },
  ];

  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Today</Text>
        </View>

        <View style={styles.insightContainer}>
          <BottomSheetInsight panels={mockInsightPanels} />
        </View>

        <View style={styles.weeklyCheckInContainer}>
          <View style={styles.weeklyCheckIn}>
            <Text style={styles.sectionTitle}>Weekly Check-In</Text>
            <Text style={styles.sectionDescription}>
              Every Friday, a quick check-in will appear here to help personalize your experience.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  header: {
    padding: theme.spacing.spacing.screenPadding,
    marginBottom: theme.spacing.spacing.md,
    marginTop: theme.spacing.spacing.md,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    fontFamily: 'SF Pro Display',
  },
  insightContainer: {
    flex: 1,
    marginBottom: 120, // Space for the bottom tab bar and weekly check-in
  },
  weeklyCheckInContainer: {
    position: 'absolute',
    bottom: 80, // Above the tab bar
    left: 0,
    right: 0,
    padding: theme.spacing.spacing.screenPadding,
  },
  weeklyCheckIn: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
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
    fontFamily: 'SF Pro Text',
  },
  sectionDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    fontFamily: 'SF Pro Text',
  },
});
