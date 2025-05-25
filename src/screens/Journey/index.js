import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../theme';

/**
 * Journey Screen
 * 
 * Shows milestone journey navigator with developmental phases
 * Non-tracking, exploration-focused approach
 */
export default function JourneyScreen() {
  // Mock data for developmental phases
  const phases = [
    { id: '1', name: '0-2 months', active: false },
    { id: '2', name: '2-4 months', active: true },
    { id: '3', name: '4-6 months', active: false },
    { id: '4', name: '6-8 months', active: false },
    { id: '5', name: '8-10 months', active: false },
    { id: '6', name: '10-12 months', active: false },
  ];

  // Mock data for developmental domains
  const domains = [
    { id: '1', name: 'Physical', progress: 0.6 },
    { id: '2', name: 'Cognitive', progress: 0.4 },
    { id: '3', name: 'Language', progress: 0.3 },
    { id: '4', name: 'Social & Emotional', progress: 0.5 },
  ];

  // Mock data for weekly focus
  const weeklyFocus = {
    title: 'Tummy Time Exploration',
    description: 'This week, focus on short, frequent tummy time sessions to help develop neck and shoulder muscles.',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Journey</Text>
        
        {/* Phase selector */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.phaseContainer}
        >
          {phases.map(phase => (
            <TouchableOpacity 
              key={phase.id} 
              style={[
                styles.phaseButton, 
                phase.active && styles.phaseButtonActive
              ]}
            >
              <Text style={[
                styles.phaseText,
                phase.active && styles.phaseTextActive
              ]}>
                {phase.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Weekly focus card */}
        <View style={styles.focusCard}>
          <Text style={styles.focusCardTitle}>Weekly Focus</Text>
          <Text style={styles.focusCardHeading}>{weeklyFocus.title}</Text>
          <Text style={styles.focusCardDescription}>{weeklyFocus.description}</Text>
        </View>
        
        {/* Developmental domains */}
        <View style={styles.domainsContainer}>
          {domains.map(domain => (
            <View key={domain.id} style={styles.domainCard}>
              <View style={styles.domainHeader}>
                <Text style={styles.domainTitle}>{domain.name}</Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
              </View>
              
              {/* Progress bar */}
              <View style={styles.progressContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: `${domain.progress * 100}%` }
                  ]} 
                />
              </View>
            </View>
          ))}
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
  phaseContainer: {
    paddingBottom: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.lg,
  },
  phaseButton: {
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.sm,
    borderRadius: 20,
    marginRight: theme.spacing.spacing.sm,
    backgroundColor: theme.colors.neutral.lighter,
  },
  phaseButtonActive: {
    backgroundColor: theme.colors.primary.main,
  },
  phaseText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.dark,
  },
  phaseTextActive: {
    color: theme.colors.neutral.white,
  },
  focusCard: {
    backgroundColor: theme.colors.secondary.light,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  focusCardTitle: {
    ...theme.typography.textVariants.overline,
    color: theme.colors.secondary.dark,
    marginBottom: theme.spacing.spacing.xs,
  },
  focusCardHeading: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  focusCardDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  domainsContainer: {
    marginBottom: theme.spacing.spacing.xl,
  },
  domainCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  domainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  domainTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
  },
  exploreButton: {
    backgroundColor: theme.colors.primary.light,
    paddingHorizontal: theme.spacing.spacing.md,
    paddingVertical: theme.spacing.spacing.xs,
    borderRadius: 16,
  },
  exploreButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.dark,
    fontSize: 12,
  },
  progressContainer: {
    height: 6,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: 3,
  },
});
