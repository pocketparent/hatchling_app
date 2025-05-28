import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  FlatList,
  Animated
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyMilestoneData from '../../data/journeyMilestoneData';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

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
  
  // Refs for scrolling
  const phaseScrollRef = useRef(null);
  
  // Get selected phase data
  const selectedPhase = journeyState.phases.find(phase => phase.id === selectedPhaseId);
  
  // Get selected domain data if any
  const selectedDomain = selectedDomainId 
    ? selectedPhase.domains.find(domain => domain.id === selectedDomainId)
    : null;
    
  // Get selected milestone if any
  const selectedMilestone = selectedMilestoneId && selectedDomain
    ? selectedDomain.milestones.find(milestone => milestone.id === selectedMilestoneId)
    : null;
  
  // Handle phase selection
  const handleSelectPhase = (phaseId) => {
    setSelectedPhaseId(phaseId);
    setSelectedDomainId(null); // Reset domain selection when phase changes
    setSelectedMilestoneId(null); // Reset milestone selection
  };
  
  // Handle domain selection
  const handleSelectDomain = (domainId) => {
    setSelectedDomainId(domainId === selectedDomainId ? null : domainId);
    setSelectedMilestoneId(null); // Reset milestone selection
  };
  
  // Handle milestone selection
  const handleSelectMilestone = (milestoneId) => {
    setSelectedMilestoneId(milestoneId);
  };
  
  // Handle back button from domain view
  const handleBackToDomains = () => {
    setSelectedDomainId(null);
    setSelectedMilestoneId(null);
  };
  
  // Handle back button from milestone view
  const handleBackToMilestones = () => {
    setSelectedMilestoneId(null);
  };
  
  // Handle milestone toggle (Observed/Not Yet)
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
  
  // Render phase item for horizontal carousel
  const renderPhaseItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.phaseItem,
        selectedPhaseId === item.id && styles.phaseItemSelected
      ]}
      onPress={() => handleSelectPhase(item.id)}
    >
      <Text 
        style={[
          styles.phaseItemText,
          selectedPhaseId === item.id && styles.phaseItemTextSelected
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  
  // Render domain card
  const renderDomainCard = (domain) => {
    const progress = calculateDomainProgress(domain);
    
    return (
      <TouchableOpacity
        key={domain.id}
        style={[
          styles.domainCard,
          { borderColor: domain.color }
        ]}
        onPress={() => handleSelectDomain(domain.id)}
      >
        <View style={styles.domainCardHeader}>
          <View style={[styles.domainIconContainer, { backgroundColor: domain.color }]}>
            <Ionicons name={domain.icon} size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.domainTitle}>{domain.name}</Text>
        </View>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill,
                { width: `${progress}%`, backgroundColor: domain.color }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
        
        <Text style={styles.domainDescription}>{domain.description}</Text>
        
        <View style={styles.domainCardFooter}>
          <Text style={[styles.viewDetailsText, { color: domain.color }]}>
            View Milestones
          </Text>
          <Ionicons name="chevron-forward" size={16} color={domain.color} />
        </View>
      </TouchableOpacity>
    );
  };
  
  // Render milestone card
  const renderMilestoneCard = (milestone) => {
    return (
      <TouchableOpacity
        key={milestone.id}
        style={[
          styles.milestoneCard,
          milestone.observed && styles.milestoneCardObserved
        ]}
        onPress={() => handleSelectMilestone(milestone.id)}
      >
        <View style={styles.milestoneCardContent}>
          <Text style={styles.milestoneTitle}>{milestone.title}</Text>
          <Text style={styles.milestoneAgeRange}>{milestone.ageRange}</Text>
          <Text style={styles.milestonePreview} numberOfLines={2}>
            {milestone.description}
          </Text>
        </View>
        
        <View style={styles.milestoneCardActions}>
          <TouchableOpacity
            style={[
              styles.milestoneToggleButton,
              milestone.observed ? styles.milestoneToggleButtonObserved : styles.milestoneToggleButtonNotYet
            ]}
            onPress={() => handleToggleMilestone(milestone.id)}
          >
            <Text style={[
              styles.milestoneToggleButtonText,
              !milestone.observed && styles.milestoneToggleButtonTextNotYet
            ]}>
              {milestone.observed ? 'Observed' : 'Not Yet'}
            </Text>
            {milestone.observed && (
              <Ionicons name="checkmark-circle" size={16} color="#FFFFFF" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
          
          <View style={styles.activitiesBadge}>
            <Text style={styles.activitiesBadgeText}>
              {milestone.suggestedActivities.length} {milestone.suggestedActivities.length === 1 ? 'Activity' : 'Activities'}
            </Text>
          </View>
          
          <Ionicons 
            name="chevron-forward" 
            size={16} 
            color={selectedDomain.color} 
          />
        </View>
      </TouchableOpacity>
    );
  };
  
  // Render activity card
  const renderActivityCard = (activity, milestoneId) => {
    return (
      <View key={activity.id} style={styles.activityCard}>
        <View style={styles.activityCardContent}>
          <Text style={styles.activityTitle}>{activity.title}</Text>
          <Text style={styles.activityDescription}>{activity.description}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.activityToggleButton}
          onPress={() => handleToggleActivity(milestoneId, activity.id)}
        >
          {activity.completed ? (
            <Ionicons name="checkmark-circle" size={24} color="#2A9D8F" />
          ) : (
            <Ionicons name="ellipse-outline" size={24} color="#CCCCCC" />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  // If a domain is selected, show milestones view
  if (selectedDomain && !selectedMilestone) {
    return (
      <ScreenErrorWrapper screenName="Domain Milestones" navigation={navigation}>
        <BackgroundContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.domainDetailContainer}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBackToDomains}
              >
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              
              <View style={[styles.domainHeaderCard, {borderLeftWidth: 4, borderLeftColor: selectedDomain.color}]}>
                <View style={styles.domainCardHeader}>
                  <View style={[styles.domainIconContainer, { backgroundColor: selectedDomain.color }]}>
                    <Ionicons name={selectedDomain.icon} size={24} color="#FFFFFF" />
                  </View>
                  <View>
                    <Text style={styles.domainTitle}>{selectedDomain.name}</Text>
                    <Text style={styles.phaseSubtitle}>{selectedPhase.name}</Text>
                  </View>
                </View>
              </View>
              
              <Text style={styles.milestonesTitle}>Milestones</Text>
              
              <ScrollView contentContainerStyle={styles.milestonesScrollContent}>
                {selectedDomain.milestones.map(milestone => renderMilestoneCard(milestone))}
              </ScrollView>
            </View>
          </SafeAreaView>
        </BackgroundContainer>
      </ScreenErrorWrapper>
    );
  }
  
  // If a milestone is selected, show milestone detail view
  if (selectedMilestone) {
    const activityCompletion = calculateActivityCompletion(selectedMilestone);
    
    return (
      <ScreenErrorWrapper screenName="Milestone Detail" navigation={navigation}>
        <BackgroundContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.milestoneDetailContainer}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={handleBackToMilestones}
              >
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              
              <ScrollView contentContainerStyle={styles.milestoneDetailScrollContent}>
                <View style={styles.milestoneDetailCard}>
                  <View style={styles.milestoneDetailHeader}>
                    <Text style={styles.milestoneDetailTitle}>{selectedMilestone.title}</Text>
                    <Text style={styles.milestoneDetailAgeRange}>{selectedMilestone.ageRange}</Text>
                  </View>
                  
                  <Text style={styles.milestoneDetailDescription}>
                    {selectedMilestone.description}
                  </Text>
                  
                  <TouchableOpacity
                    style={[
                      styles.milestoneDetailToggleButton,
                      selectedMilestone.observed ? styles.milestoneToggleButtonObserved : styles.milestoneToggleButtonNotYet
                    ]}
                    onPress={() => handleToggleMilestone(selectedMilestone.id)}
                  >
                    <Text style={[
                      styles.milestoneToggleButtonText,
                      !selectedMilestone.observed && styles.milestoneToggleButtonTextNotYet
                    ]}>
                      {selectedMilestone.observed ? 'Observed' : 'Not Yet Observed'}
                    </Text>
                    {selectedMilestone.observed && (
                      <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" style={styles.checkIcon} />
                    )}
                  </TouchableOpacity>
                  
                  {selectedMilestone.observed && selectedMilestone.dateObserved && (
                    <Text style={styles.dateObservedText}>
                      Observed on: {selectedMilestone.dateObserved}
                    </Text>
                  )}
                  
                  <View style={styles.suggestedActivitiesSection}>
                    <View style={styles.suggestedActivitiesHeader}>
                      <Text style={styles.suggestedActivitiesTitle}>Suggested Activities</Text>
                      <View style={styles.activityProgressContainer}>
                        <View style={styles.activityProgressBar}>
                          <View 
                            style={[
                              styles.activityProgressFill,
                              { width: `${activityCompletion}%` }
                            ]} 
                          />
                        </View>
                        <Text style={styles.activityProgressText}>{activityCompletion}%</Text>
                      </View>
                    </View>
                    
                    {selectedMilestone.suggestedActivities.map(activity => 
                      renderActivityCard(activity, selectedMilestone.id)
                    )}
                  </View>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </BackgroundContainer>
      </ScreenErrorWrapper>
    );
  }
  
  // Otherwise show the domains grid view
  return (
    <ScreenErrorWrapper screenName="Journey" navigation={navigation}>
      <BackgroundContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          
          {/* App header */}
          <View style={styles.appHeader}>
            <Text style={styles.appTitle}>Hatchling</Text>
          </View>
          
          {/* Phase selector (horizontal carousel) */}
          <View style={styles.phaseSelectorContainer}>
            <FlatList
              ref={phaseScrollRef}
              data={journeyState.phases}
              renderItem={renderPhaseItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.phaseList}
            />
          </View>
          
          {/* Main content area */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Phase header */}
            <View style={styles.phaseHeaderContainer}>
              <Text style={styles.phaseHeaderTitle}>{selectedPhase.name}</Text>
              <Text style={styles.phaseHeaderDescription}>
                {selectedPhase.description}
              </Text>
            </View>
            
            {/* Domain cards grid */}
            <View style={styles.domainsContainer}>
              {selectedPhase.domains.map(domain => renderDomainCard(domain))}
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
    backgroundColor: 'transparent',
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
  phaseSelectorContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  phaseList: {
    paddingHorizontal: 16,
  },
  phaseItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  phaseItemSelected: {
    backgroundColor: '#FFFFFF',
  },
  phaseItemText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  phaseItemTextSelected: {
    color: '#004D4D', // Darker teal
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding at bottom to account for tab bar
  },
  phaseHeaderContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  phaseHeaderTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  phaseHeaderDescription: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 22,
  },
  domainsContainer: {
    padding: 16,
  },
  domainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  domainCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  domainIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  domainTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D', // Darker teal
  },
  phaseSubtitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#555555',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: '#004D4D', // Darker teal
    width: 40,
    textAlign: 'right',
  },
  domainDescription: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    color: '#555555',
    marginBottom: 12,
  },
  domainCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 14,
    fontFamily: 'SFProText-Medium',
    marginRight: 4,
  },
  domainDetailContainer: {
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
  domainHeaderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  milestonesTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  milestonesScrollContent: {
    paddingBottom: 100, // Extra padding for tab bar
  },
  milestoneCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  milestoneCardObserved: {
    borderLeftWidth: 4,
    borderLeftColor: '#2A9D8F', // Green
  },
  milestoneCardContent: {
    marginBottom: 12,
  },
  milestoneTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 16,
    color: '#004D4D',
    marginBottom: 4,
  },
  milestoneAgeRange: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#777777',
    marginBottom: 8,
  },
  milestonePreview: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
  milestoneCardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  milestoneToggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  milestoneToggleButtonObserved: {
    backgroundColor: '#2A9D8F', // Green
  },
  milestoneToggleButtonNotYet: {
    backgroundColor: '#E9E9E9',
  },
  milestoneToggleButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  milestoneToggleButtonTextNotYet: {
    color: '#555555',
  },
  checkIcon: {
    marginLeft: 4,
  },
  activitiesBadge: {
    backgroundColor: 'rgba(42, 157, 143, 0.1)', // Light teal
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  activitiesBadgeText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: '#004D4D',
  },
  milestoneDetailContainer: {
    flex: 1,
    padding: 16,
  },
  milestoneDetailScrollContent: {
    paddingBottom: 100, // Extra padding for tab bar
  },
  milestoneDetailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  milestoneDetailHeader: {
    marginBottom: 16,
  },
  milestoneDetailTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: '#004D4D',
    marginBottom: 4,
  },
  milestoneDetailAgeRange: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#777777',
  },
  milestoneDetailDescription: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 20,
  },
  milestoneDetailToggleButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dateObservedText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 20,
  },
  suggestedActivitiesSection: {
    marginTop: 16,
  },
  suggestedActivitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  suggestedActivitiesTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D',
  },
  activityProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  activityProgressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#F0F0F0',
    borderRadius: 3,
    marginRight: 8,
    overflow: 'hidden',
  },
  activityProgressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#2A9D8F', // Green
  },
  activityProgressText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: '#004D4D',
    width: 30,
    textAlign: 'right',
  },
  activityCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityCardContent: {
    flex: 1,
    marginRight: 12,
  },
  activityTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 16,
    color: '#004D4D',
    marginBottom: 8,
  },
  activityDescription: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
  activityToggleButton: {
    padding: 4,
  },
});
