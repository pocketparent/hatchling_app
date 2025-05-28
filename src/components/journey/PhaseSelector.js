import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * PhaseSelector Component
 * 
 * Horizontal selector for developmental phases (age ranges)
 * Shows timeline visualization with dots and labels
 * Styled to match the Today screen's visual language
 */
const PhaseSelector = ({ phases, selectedPhaseId, onSelectPhase }) => {
  return (
    <View style={styles.container}>
      {/* Current phase title */}
      <Text style={styles.currentPhaseTitle}>
        {phases.find(phase => phase.id === selectedPhaseId)?.label}
      </Text>
      
      {/* Timeline visualization */}
      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />
        
        {phases.map((phase, index) => {
          const isSelected = phase.id === selectedPhaseId;
          
          return (
            <TouchableOpacity
              key={phase.id}
              style={styles.phaseItem}
              onPress={() => onSelectPhase(phase.id)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.timelineDot,
                isSelected && styles.timelineDotSelected
              ]} />
              <Text style={[
                styles.phaseLabel,
                isSelected && styles.phaseLabelSelected
              ]}>
                {phase.label.split('–')[0].trim() + '–' + phase.label.split('–')[1].trim()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  currentPhaseTitle: {
    fontSize: 32,
    fontFamily: 'SFProDisplay-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  timelineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height: 60,
  },
  timelineLine: {
    position: 'absolute',
    top: 12,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 1,
  },
  phaseItem: {
    alignItems: 'center',
    zIndex: 2,
    width: '16%', // Adjusted for 6 phases instead of 4
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#4A9B9B',
  },
  timelineDotSelected: {
    backgroundColor: '#FFFFFF',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
  },
  phaseLabel: {
    fontSize: 12,
    fontFamily: 'SFProText-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  phaseLabelSelected: {
    color: '#FFFFFF',
    fontFamily: 'SFProText-Semibold',
    fontSize: 14,
  },
});

export default PhaseSelector;
