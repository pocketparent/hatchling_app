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
  SafeContainer,
  ScrollContainer,
  Section,
  Row,
  Column,
  Spacer,
  Card,
  AccentCard,
  InteractiveAccentCard,
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Label,
  AppHeader
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
    return Math.round((observedCount / domain.milestones.length) * 100);
  };
  
  // Calculate activity completion for a milestone
  const calculateActivityCompletion = (milestone) => {
    if (!milestone.suggestedActivities || milestone.suggestedActivities.length === 0) return 0;
    
    const completedCount = milestone.suggestedActivities.filter(activity => activity.completed).length;
    return Math.round((completedCount / milestone.suggestedActivities.length) * 100);
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
    const activityProgress = activityCount > 0 ? Math.round((completedActivities / activityCount) * 100) : 0;
    
    // Determine if this domain is the selected one
    const isSelected = domain.id === selectedDomainId;
    
    // If this is the selected domain, show the appropriate view based on domainCardViewMode
    if (isSelected) {
      if (domainCardViewMode === 1) {
        // Milestones view
        return (
          <AccentCard 
            key={domain.id}
            accentColor={domain.color}
            style={styles.domainCardExpanded}
          >
            <Row align="center">
              <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBackToDomains}
              >
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={[styles.domainIconContainer, { backgroundColor: domain.color }]}>
                <Ionicons name={domain.icon} size={24} color="#FFFFFF" />
              </View>
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
            
            <ScrollContainer 
              style={styles.milestonesContainer}
              contentContainerStyle={styles.milestonesContent}
              showsVerticalScrollIndicator={false}
            >
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
                      <Ionicons name="checkmark-circle" size={24} color="#2A9D8F" />
                    ) : (
                      <Ionicons name="ellipse-outline" size={24} color="#CCCCCC" />
                    )}
                  </TouchableOpacity>
                </Row>
              ))}
            </ScrollContainer>
          </AccentCard>
        );
      } else if (domainCardViewMode === 2) {
        // Activities view
        const activities = getDomainActivities(domain);
        
        return (
          <AccentCard 
            key={domain.id}
            accentColor={domain.color}
            style={styles.domainCardExpanded}
          >
            <Row align="center">
              <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBackToDomains}
              >
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={[styles.domainIconContainer, { backgroundColor: domain.color }]}>
                <Ionicons name={domain.icon} size={24} color="#FFFFFF" />
              </View>
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
            
            <ScrollContainer 
              style={styles.activitiesContainer}
              contentContainerStyle={styles.activitiesContent}
              showsVerticalScrollIndicator={false}
            >
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
                      <Ionicons name="checkmark-circle" size={24} color="#2A9D8F" />
                    ) : (
                      <Ionicons name="ellipse-outline" size={24} color="#CCCCCC" />
                    )}
                  </TouchableOpacity>
                </Row>
              ))}
            </ScrollContainer>
          </AccentCard>
        );
      }
    }
    
    // Default: Overview view
    return (
      <InteractiveAccentCard
        key={domain.id}
        accentColor={domain.color}
        onPress={() => handleSelectDomain(domain.id)}
      >
        <Row>
          <View style={[styles.domainIconContainer, { backgroundColor: domain.color }]}>
            <Ionicons name={domain.icon} size={24} color="#FFFFFF" />
          </View>
          <Column style={styles.domainInfoContainer}>
            <H3>{domain.name}</H3>
            <BodySmall color="medium" numberOfLines={2} style={styles.domainDescription}>
              {domain.description}
            </BodySmall>
            
            <Row style={styles.domainStatsContainer}>
              <Column style={styles.progressBarContainer}>
                <Caption color="medium">Progress</Caption>
                <View style={styles.progressBarBackground}>
                  <View 
                    style={[
                      styles.progressBarFill, 
                      { width: `${progress}%`, backgroundColor: domain.color }
                    ]} 
                  />
                </View>
                <Body style={styles.progressText}>{progress}%</Body>
              </Column>
            </Row>
          </Column>
          <View style={styles.domainCardArrow}>
            <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
          </View>
        </Row>
      </InteractiveAccentCard>
    );
  };
  
  return (
    <ScreenErrorWrapper screenName="Journey" navigation={navigation}>
      <Container>
        <SafeContainer>
          {/* App header with logo */}
          <AppHeader title={selectedPhase.name} />
          
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
          <ScrollContainer contentContainerStyle={styles.domainsContainer}>
            {selectedPhase.domains.map(domain => renderDomainCard(domain))}
            <Spacer size="xl" />
          </ScrollContainer>
        </SafeContainer>
      </Container>
    </ScreenErrorWrapper>
  );
}

const styles = {
  phaseSelector: {
    marginBottom: 16,
  },
  phaseSelectorContent: {
    paddingHorizontal: 8,
  },
  phaseItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  phaseItemSelected: {
    backgroundColor: '#FFFFFF',
  },
  phaseItemText: {
    color: '#FFFFFF',
  },
  phaseItemTextSelected: {
    color: '#2A9D8F',
  },
  phaseDescription: {
    marginBottom: 24,
  },
  phaseDescriptionText: {
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  domainsContainer: {
    paddingBottom: 100, // Extra padding for bottom tab bar
    gap: 8, // Reduced spacing between domain cards
  },
  domainIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  domainInfoContainer: {
    flex: 1,
  },
  domainDescription: {
    marginVertical: 8,
  },
  domainStatsContainer: {
    marginTop: 8,
    width: '100%',
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    marginVertical: 4,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'right',
    fontSize: 12,
  },
  domainCardArrow: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  domainCardExpanded: {
    padding: 16,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  domainTitleContainer: {
    flex: 1,
  },
  viewToggleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
    padding: 4,
    marginVertical: 16,
  },
  viewToggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  viewToggleButtonActive: {
    backgroundColor: '#2A9D8F',
  },
  milestonesContainer: {
    maxHeight: 400,
  },
  milestonesContent: {
    paddingBottom: 16,
  },
  milestoneItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneTitle: {
    marginBottom: 4,
  },
  milestoneCheckbox: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  activitiesContainer: {
    maxHeight: 400,
  },
  activitiesContent: {
    paddingBottom: 16,
  },
  activityItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    marginBottom: 4,
  },
  activityCheckbox: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
};
