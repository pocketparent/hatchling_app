import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../App';
import theme from '../../src/theme';

const JourneyScreen = () => {
  const { babyName, babyAge } = useContext(AppContext);
  const [selectedPhase, setSelectedPhase] = useState('current');
  const [selectedDomain, setSelectedDomain] = useState('all');
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  // Determine current phase based on age
  const getCurrentPhase = () => {
    if (babyAge < 90) return 'newborn';
    if (babyAge < 180) return 'infant';
    if (babyAge < 365) return 'crawler';
    return 'toddler';
  };
  
  const currentPhase = getCurrentPhase();
  
  // Phase data
  const phases = [
    { id: 'newborn', label: 'Newborn', range: '0-3m' },
    { id: 'infant', label: 'Infant', range: '3-6m' },
    { id: 'crawler', label: 'Crawler', range: '6-12m' },
    { id: 'toddler', label: 'Toddler', range: '12m+' }
  ];
  
  // Domain data
  const domains = [
    { id: 'all', label: 'All', icon: 'apps-outline' },
    { id: 'physical', label: 'Physical', icon: 'body-outline' },
    { id: 'cognitive', label: 'Cognitive', icon: 'bulb-outline' },
    { id: 'social', label: 'Social', icon: 'people-outline' },
    { id: 'language', label: 'Language', icon: 'chatbubble-outline' }
  ];
  
  // Mock milestone data
  const milestones = [
    {
      id: 'milestone_001',
      title: 'Rolling Over',
      description: 'Baby can roll from back to tummy and tummy to back',
      domain: 'physical',
      phase: 'infant',
      completed: true,
      whatItLooksLike: 'Your baby may first roll from tummy to back, usually around 4 months. Rolling from back to tummy typically comes later, around 5-6 months. They might accidentally roll at first, then begin to do it intentionally.',
      howToSupport: 'Give plenty of supervised tummy time to build strength. Place toys just out of reach during floor play to encourage movement. Celebrate when your baby rolls, even if it startles them at first!'
    },
    {
      id: 'milestone_002',
      title: 'Responds to Name',
      description: 'Baby turns head when their name is called',
      domain: 'language',
      phase: 'infant',
      completed: false,
      whatItLooksLike: 'Around 4-6 months, your baby will begin to recognize their name and turn toward the person saying it. They may pause what they\'re doing, make eye contact, or smile in response.',
      howToSupport: 'Use your baby\'s name frequently during the day. Say their name before giving instructions or starting interactions. Make a game of calling their name gently from different directions during playtime.'
    },
    {
      id: 'milestone_003',
      title: 'Sitting Unassisted',
      description: 'Baby can sit without support',
      domain: 'physical',
      phase: 'infant',
      completed: false,
      whatItLooksLike: 'Around 6 months, babies begin to sit momentarily without support. By 8 months, most can sit steadily and may use their hands to reach for toys while sitting.',
      howToSupport: 'Practice supported sitting, gradually reducing your support as baby gains strength. Place baby in a tripod position (leaning forward on their hands) to help them learn balance. Surround them with pillows for safety during practice.'
    }
  ];
  
  // Filter milestones based on selected phase and domain
  const filteredMilestones = milestones.filter(milestone => 
    (selectedPhase === 'current' ? milestone.phase === currentPhase : milestone.phase === selectedPhase) &&
    (selectedDomain === 'all' || milestone.domain === selectedDomain)
  );
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundElements}>
        {/* Decorative elements */}
        <View style={[styles.decorativeElement, { top: 50, left: 20 }]} />
        <View style={[styles.decorativeElement, { top: 120, right: 30 }]} />
        <View style={[styles.decorativeStar, { top: 80, right: 50 }]} />
        <View style={[styles.decorativeLeaf, { top: 100, right: 20 }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Milestone Journey</Text>
        <Text style={styles.headerSubtitle}>{babyName}, {ageInMonths} months</Text>
      </View>
      
      {/* Phase selector */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.phaseContainer}
      >
        <TouchableOpacity
          style={[
            styles.phaseButton,
            selectedPhase === 'current' && styles.phaseButtonActive
          ]}
          onPress={() => setSelectedPhase('current')}
        >
          <Text style={[
            styles.phaseButtonText,
            selectedPhase === 'current' && styles.phaseButtonTextActive
          ]}>Current</Text>
        </TouchableOpacity>
        
        {phases.map(phase => (
          <TouchableOpacity
            key={phase.id}
            style={[
              styles.phaseButton,
              selectedPhase === phase.id && styles.phaseButtonActive,
              phase.id === currentPhase && styles.currentPhaseIndicator
            ]}
            onPress={() => setSelectedPhase(phase.id)}
          >
            <Text style={[
              styles.phaseButtonText,
              selectedPhase === phase.id && styles.phaseButtonTextActive
            ]}>{phase.label}</Text>
            <Text style={styles.phaseRange}>{phase.range}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Domain selector */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.domainContainer}
      >
        {domains.map(domain => (
          <TouchableOpacity
            key={domain.id}
            style={[
              styles.domainButton,
              selectedDomain === domain.id && styles.domainButtonActive
            ]}
            onPress={() => setSelectedDomain(domain.id)}
          >
            <Ionicons 
              name={domain.icon} 
              size={24} 
              color={selectedDomain === domain.id ? theme.colors.primary.main : theme.colors.neutral.dark} 
            />
            <Text style={[
              styles.domainButtonText,
              selectedDomain === domain.id && styles.domainButtonTextActive
            ]}>{domain.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Milestones list */}
      <View style={styles.milestonesContainer}>
        <Text style={styles.sectionTitle}>
          {selectedPhase === 'current' ? 'Current Phase Milestones' : `${phases.find(p => p.id === selectedPhase)?.label} Milestones`}
        </Text>
        
        {filteredMilestones.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No milestones found for the selected filters</Text>
          </View>
        ) : (
          filteredMilestones.map(milestone => (
            <TouchableOpacity 
              key={milestone.id}
              style={styles.milestoneCard}
            >
              <View style={[
                styles.milestoneStatus,
                milestone.completed ? styles.milestoneCompleted : styles.milestoneUpcoming
              ]}>
                {milestone.completed && (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                )}
              </View>
              
              <View style={styles.milestoneContent}>
                <View style={styles.milestoneHeader}>
                  <Text style={styles.milestoneTitle}>{milestone.title}</Text>
                  <View style={styles.domainTag}>
                    <Text style={styles.domainTagText}>
                      {domains.find(d => d.id === milestone.domain)?.label}
                    </Text>
                  </View>
                </View>
                
                <Text style={styles.milestoneDescription}>{milestone.description}</Text>
                
                <View style={styles.milestoneDetails}>
                  <View style={styles.detailSection}>
                    <Text style={styles.detailTitle}>What it looks like:</Text>
                    <Text style={styles.detailText}>{milestone.whatItLooksLike}</Text>
                  </View>
                  
                  <View style={styles.detailSection}>
                    <Text style={styles.detailTitle}>How to support:</Text>
                    <Text style={styles.detailText}>{milestone.howToSupport}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
      
      {/* Weekly focus */}
      <View style={styles.weeklyFocusContainer}>
        <Text style={styles.sectionTitle}>This Week's Focus</Text>
        
        <View style={styles.weeklyFocusCard}>
          <Image 
            source={require('../../assets/tummy_time.png')} 
            style={styles.weeklyFocusImage}
            defaultSource={require('../../assets/tummy_time.png')}
          />
          
          <View style={styles.weeklyFocusContent}>
            <Text style={styles.weeklyFocusTitle}>Tummy Time</Text>
            <Text style={styles.weeklyFocusDescription}>
              Tummy time helps develop neck, shoulder, and core strength, which are essential for rolling, sitting, and crawling.
            </Text>
            
            <TouchableOpacity style={styles.weeklyFocusButton}>
              <Text style={styles.weeklyFocusButtonText}>View Activities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Spacing at bottom */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  decorativeElement: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  decorativeStar: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '180deg' }],
  },
  decorativeLeaf: {
    position: 'absolute',
    width: 20,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '45deg' }],
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
  phaseContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  phaseButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  phaseButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  currentPhaseIndicator: {
    borderWidth: 2,
    borderColor: theme.colors.secondary.main,
  },
  phaseButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  phaseButtonTextActive: {
    color: theme.colors.primary.main,
  },
  phaseRange: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginTop: 2,
  },
  domainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  domainButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  domainButtonActive: {
    backgroundColor: theme.colors.neutral.lightest,
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
  },
  domainButtonText: {
    color: theme.colors.neutral.dark,
    fontWeight: '500',
    marginLeft: 5,
  },
  domainButtonTextActive: {
    color: theme.colors.primary.main,
  },
  milestonesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  emptyState: {
    backgroundColor: theme.colors.neutral.lightest,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  emptyStateText: {
    color: theme.colors.neutral.dark,
    textAlign: 'center',
  },
  milestoneCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  milestoneStatus: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  milestoneCompleted: {
    backgroundColor: theme.colors.status.success,
  },
  milestoneUpcoming: {
    backgroundColor: theme.colors.neutral.medium,
  },
  milestoneContent: {
    padding: 15,
  },
  milestoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  milestoneTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    flex: 1,
  },
  domainTag: {
    backgroundColor: theme.colors.primary.lightest,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  domainTagText: {
    color: theme.colors.primary.dark,
    fontSize: 12,
    fontWeight: '500',
  },
  milestoneDescription: {
    color: theme.colors.neutral.dark,
    marginBottom: 15,
  },
  milestoneDetails: {
    backgroundColor: theme.colors.neutral.lighter,
    padding: 15,
    borderRadius: 10,
  },
  detailSection: {
    marginBottom: 10,
  },
  detailTitle: {
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 5,
  },
  detailText: {
    color: theme.colors.neutral.darker,
    lineHeight: 20,
  },
  weeklyFocusContainer: {
    padding: 20,
  },
  weeklyFocusCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    overflow: 'hidden',
  },
  weeklyFocusImage: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.neutral.light,
  },
  weeklyFocusContent: {
    padding: 15,
  },
  weeklyFocusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 10,
  },
  weeklyFocusDescription: {
    color: theme.colors.neutral.dark,
    marginBottom: 15,
    lineHeight: 22,
  },
  weeklyFocusButton: {
    backgroundColor: theme.colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  weeklyFocusButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default JourneyScreen;
