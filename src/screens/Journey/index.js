import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import journeyMock from '../../data/journeyMock';
import PhaseSelector from '../../components/journey/PhaseSelector';
import DomainCard from '../../components/journey/DomainCard';
import MilestoneActivityView from '../../components/journey/MilestoneActivityView';

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
      
      {/* Background decorative elements - matching Today screen */}
      <View style={styles.backgroundDecorations}>
        {/* Small dots */}
        <View style={[styles.smallDot, { top: '10%', left: '15%' }]} />
        <View style={[styles.smallDot, { top: '20%', left: '40%' }]} />
        <View style={[styles.smallDot, { top: '35%', right: '25%' }]} />
        <View style={[styles.smallDot, { top: '50%', left: '30%' }]} />
        <View style={[styles.smallDot, { top: '65%', right: '15%' }]} />
        <View style={[styles.smallDot, { top: '80%', left: '20%' }]} />
        <View style={[styles.smallDot, { top: '90%', right: '30%' }]} />
        <View style={[styles.smallDot, { top: '25%', right: '10%' }]} />
        
        {/* Medium dots */}
        <View style={[styles.mediumDot, { top: '15%', right: '35%' }]} />
        <View style={[styles.mediumDot, { top: '45%', left: '10%' }]} />
        <View style={[styles.mediumDot, { top: '70%', right: '40%' }]} />
        <View style={[styles.mediumDot, { top: '85%', left: '40%' }]} />
        
        {/* Star shapes */}
        <View style={[styles.star, { top: '8%', right: '20%' }]}>
          <View style={styles.starInner} />
        </View>
        <View style={[styles.star, { top: '30%', left: '20%' }]}>
          <View style={styles.starInner} />
        </View>
        
        {/* Leaf shapes */}
        <View style={[styles.leaf, { top: '25%', right: '15%' }]} />
        <View style={[styles.leaf, { top: '60%', left: '15%', transform: [{ rotate: '45deg' }] }]} />
        <View style={[styles.leaf, { bottom: '20%', right: '25%', transform: [{ rotate: '-30deg' }] }]} />
      </View>
      
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
  backgroundDecorations: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  smallDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
  },
  mediumDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
  star: {
    position: 'absolute',
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starInner: {
    width: 12,
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 6,
  },
  leaf: {
    position: 'absolute',
    width: 30,
    height: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
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
