import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import mockMilestones from '../../data/mockMilestones';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (theme.spacing.spacing.screenPadding * 2);

/**
 * MilestonePhaseSelector Component
 * 
 * Horizontal scrollable selector for age phases
 */
const MilestonePhaseSelector = ({ phases, selectedPhase, onSelectPhase }) => {
  return (
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
            selectedPhase.id === phase.id && styles.phaseButtonActive
          ]}
          onPress={() => onSelectPhase(phase)}
        >
          <Text style={[
            styles.phaseText,
            selectedPhase.id === phase.id && styles.phaseTextActive
          ]}>
            {phase.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

/**
 * DomainProgressCard Component
 * 
 * Card showing progress in a developmental domain
 */
const DomainProgressCard = ({ domain, progress, onExplore }) => {
  return (
    <View style={styles.domainCard}>
      <View style={styles.domainHeader}>
        <Text style={styles.domainTitle}>{domain.name}</Text>
        <TouchableOpacity 
          style={styles.exploreButton}
          onPress={() => onExplore(domain)}
        >
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
      
      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <View 
          style={[
            styles.progressBar, 
            { width: `${progress * 100}%` }
          ]} 
        />
      </View>
      
      {/* Milestone count */}
      <Text style={styles.milestoneCount}>
        {domain.milestones.length} key milestones in this phase
      </Text>
    </View>
  );
};

/**
 * WeeklyFocusCard Component
 * 
 * Card showing the weekly focus activity
 */
const WeeklyFocusCard = ({ focus }) => {
  return (
    <View style={styles.focusCard}>
      <Text style={styles.focusCardTitle}>Weekly Focus</Text>
      <Text style={styles.focusCardHeading}>{focus.title}</Text>
      <Text style={styles.focusCardDescription}>{focus.description}</Text>
    </View>
  );
};

/**
 * DomainDetailModal Component
 * 
 * Modal showing detailed milestones for a domain
 */
const DomainDetailModal = ({ domain, visible, onClose }) => {
  if (!visible) return null;
  
  return (
    <Animated.View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{domain.name} Milestones</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color={theme.colors.neutral.dark} />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.modalBody}>
          {domain.milestones.map(milestone => (
            <View key={milestone.id} style={styles.milestoneItem}>
              <Text style={styles.milestoneTitle}>{milestone.title}</Text>
              <Text style={styles.milestoneDescription}>{milestone.description}</Text>
              
              <View style={styles.milestoneSection}>
                <Text style={styles.milestoneSectionTitle}>What it looks like:</Text>
                <Text style={styles.milestoneSectionText}>{milestone.whatItLooksLike}</Text>
              </View>
              
              <View style={styles.milestoneSection}>
                <Text style={styles.milestoneSectionTitle}>How to support:</Text>
                <Text style={styles.milestoneSectionText}>{milestone.howToSupport}</Text>
              </View>
              
              {milestone.nextMilestone && (
                <View style={styles.milestoneSection}>
                  <Text style={styles.milestoneSectionTitle}>Coming next:</Text>
                  <Text style={styles.milestoneSectionText}>{milestone.nextMilestone}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        
        <TouchableOpacity 
          style={styles.modalCloseButton}
          onPress={onClose}
        >
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

/**
 * Journey Screen
 * 
 * Shows milestone journey navigator with developmental phases
 * Non-tracking, exploration-focused approach
 */
export default function JourneyScreen() {
  const [phases] = useState(mockMilestones.phases);
  const [selectedPhase, setSelectedPhase] = useState(phases[2]); // Default to 4-6 months
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Calculate domain progress (mock data)
  const getDomainProgress = (domainId) => {
    // In a real app, this would be calculated based on observed milestones
    // For now, return random progress between 0.3 and 0.8
    return 0.3 + Math.random() * 0.5;
  };
  
  // Handle domain exploration
  const handleExplore = (domain) => {
    setSelectedDomain(domain);
    setModalVisible(true);
  };
  
  // Close modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  
  // Get weekly focus for the selected phase
  const getWeeklyFocus = () => {
    if (selectedPhase && selectedPhase.weeklyFocus && selectedPhase.weeklyFocus.length > 0) {
      // In a real app, this would select based on the current week
      return selectedPhase.weeklyFocus[0];
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Journey</Text>
        
        {/* Phase selector */}
        <MilestonePhaseSelector 
          phases={phases}
          selectedPhase={selectedPhase}
          onSelectPhase={setSelectedPhase}
        />
        
        {/* Phase description */}
        <View style={styles.phaseDescriptionContainer}>
          <Text style={styles.phaseDescription}>
            {selectedPhase.description}
          </Text>
        </View>
        
        {/* Weekly focus card */}
        {getWeeklyFocus() && (
          <WeeklyFocusCard focus={getWeeklyFocus()} />
        )}
        
        {/* Developmental domains */}
        <View style={styles.domainsContainer}>
          <Text style={styles.sectionTitle}>Developmental Domains</Text>
          {selectedPhase.domains.map(domain => (
            <DomainProgressCard 
              key={domain.id}
              domain={domain}
              progress={getDomainProgress(domain.id)}
              onExplore={() => handleExplore(domain)}
            />
          ))}
        </View>
        
        {/* Domain detail modal */}
        {selectedDomain && (
          <DomainDetailModal 
            domain={selectedDomain}
            visible={modalVisible}
            onClose={handleCloseModal}
          />
        )}
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
    paddingBottom: theme.spacing.spacing.xxxl,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  phaseContainer: {
    paddingBottom: theme.spacing.spacing.md,
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
  phaseDescriptionContainer: {
    marginVertical: theme.spacing.spacing.md,
  },
  phaseDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  focusCard: {
    backgroundColor: theme.colors.secondary.light,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    marginVertical: theme.spacing.spacing.lg,
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
  sectionTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  domainsContainer: {
    marginTop: theme.spacing.spacing.lg,
  },
  domainCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
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
    marginBottom: theme.spacing.spacing.sm,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary.main,
    borderRadius: 3,
  },
  milestoneCount: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.medium,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 16,
    width: '90%',
    maxHeight: '80%',
    padding: theme.spacing.spacing.lg,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  modalTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
  },
  modalBody: {
    maxHeight: 400,
  },
  milestoneItem: {
    marginBottom: theme.spacing.spacing.lg,
    paddingBottom: theme.spacing.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lighter,
  },
  milestoneTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xs,
  },
  milestoneDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
  },
  milestoneSection: {
    marginBottom: theme.spacing.spacing.sm,
  },
  milestoneSectionTitle: {
    ...theme.typography.textVariants.subtitle1,
    color: theme.colors.primary.dark,
    marginBottom: theme.spacing.spacing.xxs,
  },
  milestoneSectionText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
  },
  modalCloseButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingVertical: theme.spacing.spacing.sm,
    alignItems: 'center',
    marginTop: theme.spacing.spacing.md,
  },
  modalCloseButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
  },
});
