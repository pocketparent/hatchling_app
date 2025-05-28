import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyMock from '../../data/journeyMock';
import PhaseSelector from '../../components/journey/PhaseSelector';
import DomainCard from '../../components/journey/DomainCard';
import MilestoneActivityView from '../../components/journey/MilestoneActivityView';
import BackgroundDecorations from '../../components/decorations/BackgroundDecorations';

/**
 * Journey Screen
 * 
 * Shows developmental phases, domains, milestones, and activities
 * Allows users to track milestones and explore suggested activities
 */
export default function JourneyScreen() {
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
  
  // If a domain is selected, show milestone and activity view
  if (selectedDomain) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        {/* Background decorations for milestone view */}
        <BackgroundDecorations />
        <MilestoneActivityView 
          domain={selectedDomain}
          onToggleMilestone={handleToggleMilestone}
          onBack={handleBackToPhase}
        />
      </SafeAreaView>
    );
  }
  
  // Otherwise show the phase and domain selection view
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background decorative elements - using new SVG components */}
      <BackgroundDecorations />
      
      {/* App header */}
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>Hatchling</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
        
        {/* Phase description */}
        <View style={styles.phaseDescriptionContainer}>
          <Text style={styles.phaseDescription}>
            {currentPhase.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A9B9B', // Teal background matching the Today screen
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
  phaseDescription: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    color: '#004D4D', // Dark teal matching the Today screen text
    lineHeight: 22,
  },
});
