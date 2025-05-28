import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * DomainCard Component
 * 
 * Card displaying a developmental domain with icon, title, progress bar, and explore button
 * Used in the Journey screen to navigate to domain-specific milestones and activities
 * Styled to match the Today screen's visual language
 */
const DomainCard = ({ domain, onExplore }) => {
  // Custom icon based on domain name
  const renderDomainIcon = () => {
    switch(domain.name) {
      case 'Physical':
        return (
          <View style={styles.iconContainer}>
            <Ionicons name="body-outline" size={32} color="#4A9B9B" />
          </View>
        );
      case 'Cognitive':
        return (
          <View style={styles.iconContainer}>
            <Ionicons name="brain-outline" size={32} color="#4A9B9B" />
          </View>
        );
      case 'Language':
        return (
          <View style={styles.iconContainer}>
            <Ionicons name="chatbubble-outline" size={32} color="#4A9B9B" />
          </View>
        );
      case 'Social/Emotional':
        return (
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={32} color="#4A9B9B" />
          </View>
        );
      default:
        return (
          <View style={styles.iconContainer}>
            <Ionicons name="star-outline" size={32} color="#4A9B9B" />
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Domain icon and title */}
      <View style={styles.headerContainer}>
        {renderDomainIcon()}
        <Text style={styles.title}>{domain.name}</Text>
      </View>
      
      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${domain.progress * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {Math.round(domain.progress * 100)}% Complete
        </Text>
      </View>
      
      {/* Explore button */}
      <TouchableOpacity 
        style={styles.exploreButton}
        onPress={() => onExplore(domain.id)}
        activeOpacity={0.8}
      >
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the Today screen cards
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(74, 155, 155, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Semibold',
    color: '#004D4D', // Dark teal matching the Today screen text
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBackground: {
    height: 8,
    backgroundColor: 'rgba(74, 155, 155, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A9B9B', // Teal matching the app theme
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    color: '#4A9B9B',
    textAlign: 'right',
  },
  exploreButton: {
    backgroundColor: '#4A9B9B', // Teal matching the app theme
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'SFProText-Medium',
  },
});

export default DomainCard;
