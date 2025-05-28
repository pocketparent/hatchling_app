import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyMock from '../../data/journeyMock';
import PhaseSelector from '../../components/journey/PhaseSelector';
import DomainCard from '../../components/journey/DomainCard';
import MilestoneActivityView from '../../components/journey/MilestoneActivityView';
import PeriodSummary from '../../components/journey/PeriodSummary';
import WeeklyFocus from '../../components/journey/WeeklyFocus';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';

/**
 * Journey Screen
 * 
 * Shows developmental phases, domains, milestones, and activities
 * Allows users to track milestones and explore suggested activities
 * Includes period summary and weekly focus areas
 */
export default function JourneyScreen({ navigation }) {
  // State for selected phase and domain
  const [selectedPhaseId, setSelectedPhaseId] = useState(journeyMock.phases[1].id); // Default to 2-4 months
  const [selectedDomainId, setSelectedDomainId] = useState(null);
  const [milestoneData, setMilestoneData] = useState(journeyMock);
  
  // Get current phase data
  const currentPhase = milestoneData.phases.find(phase => phase.id === selectedPhaseId);
  
  // Get selected domain data if any
  const selectedDomain = selectedDomainId 
    ? currentPhase.domains.find(domain => domain.id === selectedDomainId)
    : null;
  
  // Handle phase selection
  const handleSelectPhase = (phaseId) => {
    setSelectedPhaseId(phaseId);
    setSelectedDomainId(null); // Reset domain selection when changing phase
  };
  
  // Handle domain exploration
  const handleExploreDomain = (domainId) => {
    setSelectedDomainId(domainId);
  };
  
  // Handle back button from milestone/activity view
  const handleBackToPhase = () => {
    setSelectedDomainId(null);
  };
  
  // Handle milestone toggle
  const handleToggleMilestone = (milestoneId) => {
    // Create a deep copy of the data to modify
    const updatedData = JSON.parse(JSON.stringify(milestoneData));
    
    // Find the current phase and domain
    const phaseIndex = updatedData.phases.findIndex(phase => phase.id === selectedPhaseId);
    const domainIndex = updatedData.phases[phaseIndex].domains.findIndex(domain => domain.id === selectedDomainId);
    
    // Find and toggle the milestone
    const milestoneIndex = updatedData.phases[phaseIndex].domains[domainIndex].milestones.findIndex(
      milestone => milestone.id === milestoneId
    );
    
    if (milestoneIndex !== -1) {
      updatedData.phases[phaseIndex].domains[domainIndex].milestones[milestoneIndex].observed = 
        !updatedData.phases[phaseIndex].domains[domainIndex].milestones[milestoneIndex].observed;
      
      // Update progress based on observed milestones
      const totalMilestones = updatedData.phases[phaseIndex].domains[domainIndex].milestones.length;
      const observedMilestones = updatedData.phases[phaseIndex].domains[domainIndex].milestones.filter(
        m => m.observed
      ).length;
      
      updatedData.phases[phaseIndex].domains[domainIndex].progress = totalMilestones > 0 
        ? observedMilestones / totalMilestones 
        : 0;
    }
    
    setMilestoneData(updatedData);
  };

  // Handle view all milestones
  const handleViewAllMilestones = () => {
    // In a real app, this would navigate to a comprehensive milestones view
    console.log('View all milestones');
  };
  
  // If a domain is selected, show milestone and activity view
  if (selectedDomain) {
    return (
      <ScreenErrorWrapper screenName="Journey Domain" navigation={navigation}>
        <BackgroundContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <MilestoneActivityView 
              domain={selectedDomain}
              onToggleMilestone={handleToggleMilestone}
              onBack={handleBackToPhase}
            />
          </SafeAreaView>
        </BackgroundContainer>
      </ScreenErrorWrapper>
    );
  }
  
  // Otherwise show the phase and domain selection view
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
            {/* Period Summary */}
            <PeriodSummary 
              phase={currentPhase}
              onViewAllMilestones={handleViewAllMilestones}
            />
            
            {/* Phase selector */}
            <PhaseSelector 
              phases={milestoneData.phases}
              selectedPhaseId={selectedPhaseId}
              onSelectPhase={handleSelectPhase}
            />
            
            {/* Domain cards */}
            <View style={styles.domainsContainer}>
              {currentPhase.domains.map(domain => (
                <DomainCard 
                  key={domain.id}
                  domain={domain}
                  onExplore={() => handleExploreDomain(domain.id)}
                />
              ))}
            </View>
            
            {/* Weekly Focus */}
            <WeeklyFocus phase={currentPhase} />
            
            {/* Phase description */}
            <View style={styles.phaseDescriptionContainer}>
              <Text style={styles.phaseDescriptionTitle}>About This Period</Text>
              <Text style={styles.phaseDescription}>
                {currentPhase.description}
              </Text>
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
  domainsContainer: {
    padding: 16,
  },
  phaseDescriptionContainer: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the Today screen cards
    margin: 16,
    marginTop: 0,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  phaseDescriptionTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#004D4D', // Dark teal matching the design
    marginBottom: 8,
  },
  phaseDescription: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#004D4D', // Dark teal matching the Today screen text
    lineHeight: 22,
  },
});
