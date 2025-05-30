import React, { useState, useRef, useEffect } from 'react';
import { 
  FlatList,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyMilestoneData from '../../data/journeyMilestoneData';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

// Import UI components
import {
  Container,
  Row,
  Column,
  Spacer,
  Card,
  Section,
  Body,
  BodySmall,
  Caption,
  H3,
  BackButton,
  DomainBadge,
  ProgressBar
} from '../../components/ui';

const { width } = Dimensions.get('window');

/**
 * Journey Screen
 * 
 * Shows baby development milestones organized by phases and domains
 * Allows tracking of observed milestones and suggested activities
 */
export default function JourneyScreen({ navigation }) {
  // State for selected phase and domain
  const [selectedPhaseId, setSelectedPhaseId] = useState(journeyMilestoneData.phases[0].id);
  const [selectedDomainId, setSelectedDomainId] = useState(null);
  const [journeyState, setJourneyState] = useState(journeyMilestoneData);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState(null);
  
  // State for domain card view mode (0: overview, 1: milestones, 2: activities)
  const [domainCardViewMode, setDomainCardViewMode] = useState(0);
  
  // Refs for scrolling
  const phaseScrollRef = useRef(null);
  
  // Get selected phase data
  const selectedPhase = journeyState.phases.find(phase => phase.id === selectedPhaseId) || journeyState.phases[0];
  
  // Get selected domain data if any
  const selectedDomain = selectedDomainId && selectedPhase
    ? selectedPhase.domains.find(domain => domain.id === selectedDomainId)
    : null;
    
  // Get selected milestone if any
  const selectedMilestone = selectedMilestoneId && selectedDomain
    ? selectedDomain.milestones.find(milestone => milestone.id === selectedMilestoneId)
    : null;
  
  // Effect to scroll to selected phase
  useEffect(() => {
    if (phaseScrollRef.current && selectedPhaseId) {
      const phaseIndex = journeyState.phases.findIndex(phase => phase.id === selectedPhaseId);
      if (phaseIndex !== -1) {
        phaseScrollRef.current.scrollToIndex({ 
          index: phaseIndex, 
          animated: true,
          viewPosition: 0.5 // Center the item
        });
      }
    }
  }, [selectedPhaseId]);
  
  // Handle phase selection
  const handleSelectPhase = (phaseId) => {
    if (phaseId !== selectedPhaseId) {
      setSelectedPhaseId(phaseId);
      setSelectedDomainId(null); // Reset domain selection when phase changes
      setSelectedMilestoneId(null); // Reset milestone selection
      setDomainCardViewMode(0); // Reset to overview mode
    }
  };
  
  // Handle domain selection
  const handleSelectDomain = (domainId) => {
    if (domainId === selectedDomainId) {
      // If already selected, toggle between milestones and activities view
      setDomainCardViewMode(domainCardViewMode === 1 ? 2 : 1);
    } else {
      // If new domain, select it and show milestones view
      setSelectedDomainId(domainId);
      setSelectedMilestoneId(null);
      setDomainCardViewMode(1); // Default to milestones view when clicking a domain
    }
  };
  
  // Handle view toggle between milestones and activities
  const handleToggleView = () => {
    setDomainCardViewMode(domainCardViewMode === 1 ? 2 : 1);
  };
  
  // Handle milestone selection
  const handleSelectMilestone = (milestoneId) => {
    setSelectedMilestoneId(milestoneId);
  };
  
  // Handle back button from domain view
  const handleBackToDomains = () => {
    setSelectedDomainId(null);
    setSelectedMilestoneId(null);
    setDomainCardViewMode(0);
  };
  
  // Handle back button from milestone view
  const handleBackToMilestones = () => {
    setSelectedMilestoneId(null);
  };
  
  // Handle milestone toggle (checkbox)
  const handleToggleMilestone = (milestoneId) => {
    // Create a deep copy of the data to modify
    const updatedData = JSON.parse(JSON.stringify(journeyState));
    
    // Find the phase, domain, and milestone
    const phaseIndex = updatedData.phases.findIndex(phase => phase.id === selectedPhaseId);
    const domainIndex = updatedData.phases[phaseIndex].domains.findIndex(domain => domain.id === selectedDomainId);
    const milestoneIndex = updatedData.phases[phaseIndex].domains[domainIndex].milestones.findIndex(
      milestone => milestone.id === milestoneId
    );
    
    if (phaseIndex !== -1 && domainIndex !== -1 && milestoneIndex !== -1) {
      // Toggle the observed status
      const milestone = updatedData.phases[phaseIndex].domains[domainIndex].milestones[milestoneIndex];
      milestone.observed = !milestone.observed;
      
      // Update date observed if now observed
      if (milestone.observed) {
        milestone.dateObserved = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      } else {
        milestone.dateObserved = null;
      }
      
      // Update domain progress
      const domain = updatedData.phases[phaseIndex].domains[domainIndex];
      domain.progress = calculateDomainProgress(domain);
    }
    
    setJourneyState(updatedData);
  };
  
  // Handle activity completion toggle
  const handleToggleActivity = (milestoneId, activityId) => {
    // Create a deep copy of the data to modify
    const updatedData = JSON.parse(JSON.stringify(journeyState));
    
    // Find the phase, domain, milestone, and activity
    const phaseIndex = updatedData.phases.findIndex(phase => phase.id === selectedPhaseId);
    const domainIndex = updatedData.phases[phaseIndex].domains.findIndex(domain => domain.id === selectedDomainId);
    const milestoneIndex = updatedData.phases[phaseIndex].domains[domainIndex].milestones.findIndex(
      milestone => milestone.id === milestoneId
    );
    
    if (phaseIndex !== -1 && domainIndex !== -1 && milestoneIndex !== -1) {
      const milestone = updatedData.phases[phaseIndex].domains[domainIndex].milestones[milestoneIndex];
      const activityIndex = milestone.suggestedActivities.findIndex(activity => activity.id === activityId);
      
      if (activityIndex !== -1) {
        // Toggle the completed status
        milestone.suggestedActivities[activityIndex].completed = 
          !milestone.suggestedActivities[activityIndex].completed;
      }
    }
    
    setJourneyState(updatedData);
  };
  
  // Calculate domain progress
  const calculateDomainProgress = (domain) => {
    if (!domain.milestones || domain.milestones.length === 0) return 0;
    
    const observedCount = domain.milestones.filter(milestone => milestone.observed).length;
    return observedCount / domain.milestones.length;
  };
  
  // Calculate activity completion for a milestone
  const calculateActivityCompletion = (milestone) => {
    if (!milestone.suggestedActivities || milestone.suggestedActivities.length === 0) return 0;
    
    const completedCount = milestone.suggestedActivities.filter(activity => activity.completed).length;
    return completedCount / milestone.suggestedActivities.length;
  };
  
  // Get all activities for a domain
  const getDomainActivities = (domain) => {
    if (!domain || !domain.milestones) return [];
    
    const activities = [];
    domain.milestones.forEach(milestone => {
      if (milestone.suggestedActivities) {
        milestone.suggestedActivities.forEach(activity => {
          activities.push({
            ...activity,
            milestoneId: milestone.id,
            milestoneTitle: milestone.title
          });
        });
      }
    });
    
    return activities;
  };
  
  // Render phase item for horizontal carousel
  const renderPhaseItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.phaseItem,
        selectedPhaseId === item.id && styles.phaseItemSelected
      ]}
      onPress={() => handleSelectPhase(item.id)}
    >
      <BodySmall 
        style={selectedPhaseId === item.id ? styles.phaseItemTextSelected : styles.phaseItemText}
      >
        {item.name}
      </BodySmall>
    </TouchableOpacity>
  );
  
  // Render domain card with click navigation
  const renderDomainCard = (domain) => {
    const progress = calculateDomainProgress(domain);
    const activities = getDomainActivities(domain);
    const activityCount = activities.length;
    const completedActivities = activities.filter(activity => activity.completed).length;
    const activityProgress = activityCount > 0 ? completedActivities / activityCount : 0;
    
    // Determine if this domain is the selected one
    const isSelected = domain.id === selectedDomainId;
    
    // If this is the selected domain, show the appropriate view based on domainCardViewMode
    if (isSelected) {
      if (domainCardViewMode === 1) {
        // Milestones view
        return (
          <Card 
            key={domain.id}
            style={styles.domainCardExpanded}
          >
            <Row align="center">
              <BackButton 
                onPress={handleBackToDomains}
                color="primary"
              />
              <DomainBadge domain={domain} size="medium" />
              <Column style={styles.domainTitleContainer}>
                <H3>{domain.name}</H3>
                <BodySmall color="medium">Milestones</BodySmall>
              </Column>
            </Row>
            
            <Row style={styles.viewToggleContainer}>
              <TouchableOpacity 
                style={[styles.viewToggleButton, styles.viewToggleButtonActive]}
                onPress={handleToggleView}
              >
                <BodySmall color="white">Milestones</BodySmall>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.viewToggleButton}
                onPress={handleToggleView}
              >
                <BodySmall color="primary">Activities</BodySmall>
              </TouchableOpacity>
            </Row>
            
            <View style={styles.milestonesContainer}>
              {domain.milestones.map(milestone => (
                <Row key={milestone.id} style={styles.milestoneItem}>
                  <Column style={styles.milestoneContent}>
                    <Body style={styles.milestoneTitle}>{milestone.title}</Body>
                    <BodySmall color="medium" numberOfLines={2}>
                      {milestone.description}
                    </BodySmall>
                  </Column>
                  <TouchableOpacity
                    style={styles.milestoneCheckbox}
                    onPress={() => handleToggleMilestone(milestone.id)}
                  >
                    {milestone.observed ? (
                      <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary.main} />
                    ) : (
                      <Ionicons name="ellipse-outline" size={24} color={theme.colors.neutral.light} />
                    )}
                  </TouchableOpacity>
                </Row>
              ))}
            </View>
          </Card>
        );
      } else if (domainCardViewMode === 2) {
        // Activities view
        const activities = getDomainActivities(domain);
        
        return (
          <Card 
            key={domain.id}
            style={styles.domainCardExpanded}
          >
            <Row align="center">
              <BackButton 
                onPress={handleBackToDomains}
                color="primary"
              />
              <DomainBadge domain={domain} size="medium" />
              <Column style={styles.domainTitleContainer}>
                <H3>{domain.name}</H3>
                <BodySmall color="medium">Activities</BodySmall>
              </Column>
            </Row>
            
            <Row style={styles.viewToggleContainer}>
              <TouchableOpacity 
                style={styles.viewToggleButton}
                onPress={handleToggleView}
              >
                <BodySmall color="primary">Milestones</BodySmall>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.viewToggleButton, styles.viewToggleButtonActive]}
                onPress={handleToggleView}
              >
                <BodySmall color="white">Activities</BodySmall>
              </TouchableOpacity>
            </Row>
            
            <View style={styles.activitiesContainer}>
              {activities.map(activity => (
                <Row key={activity.id} style={styles.activityItem}>
                  <Column style={styles.activityContent}>
                    <Body style={styles.activityTitle}>{activity.title}</Body>
                    {activity.milestoneTitle && (
                      <Caption color="primary">For: {activity.milestoneTitle}</Caption>
                    )}
                    <BodySmall color="medium" numberOfLines={2}>
                      {activity.description}
                    </BodySmall>
                  </Column>
                  <TouchableOpacity
                    style={styles.activityCheckbox}
                    onPress={() => handleToggleActivity(activity.milestoneId, activity.id)}
                  >
                    {activity.completed ? (
                      <Ionicons name="checkmark-circle" size={24} color={theme.colors.primary.main} />
                    ) : (
                      <Ionicons name="ellipse-outline" size={24} color={theme.colors.neutral.light} />
                    )}
                  </TouchableOpacity>
                </Row>
              ))}
            </View>
          </Card>
        );
      }
    }
    
    // Default: Overview view
    return (
      <TouchableOpacity
        key={domain.id}
        style={styles.domainCardTouchable}
        onPress={() => handleSelectDomain(domain.id)}
        activeOpacity={0.7}
      >
        <Card
          style={styles.domainCard}
        >
          <Row>
            <DomainBadge domain={domain} size="medium" />
            <Column style={styles.domainInfoContainer}>
              <H3>{domain.name}</H3>
              <BodySmall color="medium" numberOfLines={2} style={styles.domainDescription}>
                {domain.description}
              </BodySmall>
              
              <Row style={styles.domainStatsContainer}>
                <Column style={styles.progressBarContainer}>
                  <ProgressBar 
                    progress={progress} 
                    color={getDomainColor(domain)}
                    height={8}
                    style={styles.progressBar}
                  />
                  <Body style={styles.progressText}>{Math.round(progress * 100)}%</Body>
                </Column>
              </Row>
            </Column>
            <View style={styles.domainCardArrow}>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.light} />
            </View>
          </Row>
        </Card>
      </TouchableOpacity>
    );
  };
  
  // Get domain color based on domain type
  const getDomainColor = (domain) => {
    switch (domain.type) {
      case 'physical':
        return theme.colors.domains.physical;
      case 'cognitive':
        return theme.colors.domains.cognitive;
      case 'social':
        return theme.colors.domains.social;
      case 'emotional':
        return theme.colors.domains.emotional;
      case 'language':
        return theme.colors.domains.language;
      default:
        return theme.colors.primary.main;
    }
  };
  
  return (
    <ScreenErrorWrapper screenName="Journey" navigation={navigation}>
      <Container>
        <StatusBar style="light" />
        
        {/* Phase selector */}
        <Section style={styles.phaseSelector}>
          <FlatList
            ref={phaseScrollRef}
            data={journeyState.phases}
            renderItem={renderPhaseItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.phaseSelectorContent}
            initialScrollIndex={0}
            onScrollToIndexFailed={() => {}}
          />
        </Section>
        
        {/* Phase description */}
        <Section style={styles.phaseDescription}>
          <Body color="white" style={styles.phaseDescriptionText}>
            {selectedPhase.description}
          </Body>
        </Section>
        
        {/* Domain cards */}
        <View style={styles.domainsContainer}>
          {selectedPhase.domains.map(domain => renderDomainCard(domain))}
          <Spacer size="xl" />
        </View>
      </Container>
    </ScreenErrorWrapper>const styles = {
  gestureRoot: {
    flex: 1,
  },
  phaseSelector: {
    paddingVertical: theme.spacing.spacing.sm,
    backgroundColor: theme.colors.primary.main,
  },
  phaseSelectorContent: {
    paddingHorizontal: theme.spacing.spacing.md,
  },
  phaseItem: {
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
    marginRight: theme.spacing.spacing.sm,
    borderRadius: theme.spacing.borderRadius.pill,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  phaseItemSelected: {
    backgroundColor: theme.colors.neutral.white,
  },
  phaseItemText: {
    color: theme.colors.neutral.white,
  },
  phaseItemTextSelected: {
    color: theme.colors.primary.main,
  },
  domainCardTouchable: {
    marginBottom: theme.spacing.spacing.sm,
  },
  domainCard: {
    padding: theme.spacing.spacing.md,
    marginBottom: 0,
  },
  domainsContainer: {
    paddingBottom: 100, // Extra padding for bottom tab bar
    gap: 8, // Reduced spacing between domain cards
    paddingHorizontal: theme.spacing.spacing.md,
  },
  domainCard: {
    marginBottom: theme.spacing.spacing.sm,
  },
  domainInfoContainer: {
    flex: 1,
    marginLeft: theme.spacing.spacing.md,
  },
  domainDescription: {
    marginVertical: theme.spacing.spacing.sm,
  },
  domainStatsContainer: {
    marginTop: theme.spacing.spacing.sm,
    width: '100%',
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBar: {
    marginVertical: theme.spacing.spacing.xs,
  },
  progressText: {
    textAlign: 'right',
    fontSize: 12,
  },
  domainCardArrow: {
    justifyContent: 'center',
    paddingLeft: theme.spacing.spacing.sm,
  },
  domainCardExpanded: {
    padding: theme.spacing.spacing.md,
  },
  domainTitleContainer: {
    flex: 1,
    marginLeft: theme.spacing.spacing.md,
  },
  viewToggleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: theme.spacing.borderRadius.pill,
    padding: theme.spacing.spacing.xs,
    marginVertical: theme.spacing.spacing.md,
  },
  viewToggleButton: {
    flex: 1,
    paddingVertical: theme.spacing.spacing.sm,
    alignItems: 'center',
    borderRadius: theme.spacing.borderRadius.pill,
  },
  viewToggleButtonActive: {
    backgroundColor: theme.colors.primary.main,
  },
  milestonesContainer: {
    maxHeight: 400,
  },
  milestoneItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: theme.spacing.borderRadius.sm,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneTitle: {
    marginBottom: theme.spacing.spacing.xs,
  },
  milestoneCheckbox: {
    justifyContent: 'center',
    paddingLeft: theme.spacing.spacing.sm,
  },
  activitiesContainer: {
    maxHeight: 400,
  },
  activityItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: theme.spacing.borderRadius.sm,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    marginBottom: theme.spacing.spacing.xs,
  },
  activityCheckbox: {
    justifyContent: 'center',
    paddingLeft: theme.spacing.spacing.sm,
  },
};
