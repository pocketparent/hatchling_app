import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import DomainBadge from '../../ui/badges/DomainBadge';

/**
 * DomainCard Component
 * 
 * Card displaying a developmental domain with icon, title, progress bar, and explore button
 * Used in the Journey screen to navigate to domain-specific milestones and activities
 * Moved from journey/ to features/journey/ for better organization
 * 
 * @param {Object} domain - The domain object containing name, color, icon, and progress
 * @param {Function} onExplore - Function to call when explore button is pressed
 * @param {Object} style - Additional style overrides for the container
 */
const DomainCard = ({ domain, onExplore, style }) => {
  // Import Card component at the top level
  const Card = require('../../ui/cards/Card').default;
  
  // Animation for progress bar
  const [progressAnimation] = useState(new Animated.Value(0));
  const [buttonScale] = useState(new Animated.Value(1));
  
  // Animate progress bar on mount
  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: domain.progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [domain.progress]);
  
  // Button press animation
  const animateButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 4,
        tension: 100,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  // Interpolate width for progress bar
  const progressWidth = progressAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  
  return (
    <Card 
      variant="default" 
      elevation="soft" 
      style={[styles.container, style]}
      animated={true}
    >
      {/* Domain icon and title */}
      <View style={styles.headerContainer}>
        <DomainBadge domain={domain} size="medium" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{domain.name}</Text>
          <Text style={styles.subtitle}>{domain.description || 'Explore developmental milestones and activities'}</Text>
        </View>
      </View>
      
      {/* Progress bar with animation */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <Animated.View 
            style={[
              styles.progressFill, 
              { 
                width: progressWidth, 
                backgroundColor: domain.color || theme.colors.primary.main 
              }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {domain.progress}% Complete
        </Text>
      </View>
      
      {/* Explore button with animation */}
      <TouchableOpacity 
        style={styles.exploreButton}
        onPress={() => {
          animateButtonPress();
          onExplore(domain.id);
        }}
        activeOpacity={0.7}
      >
        <Animated.View style={{ 
          transform: [{ scale: buttonScale }],
          width: '100%',
          alignItems: 'center'
        }}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </Animated.View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: theme.spacing.borderRadius.lg,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.lg, // Increased from md to lg for more breathing room
    ...theme.spacing.shadows.soft,
  },
  titleContainer: {
    flex: 1,
    marginLeft: theme.spacing.spacing.sm,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: 'SFProDisplay-Bold', // Updated to use bold for better contrast
    color: theme.colors.primary.dark,
    marginLeft: theme.spacing.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: 'SFProText-Regular',
    color: theme.colors.neutral.dark, // Changed from medium to dark for better contrast
    marginLeft: theme.spacing.spacing.sm,
    marginTop: 2,
  },
  progressContainer: {
    marginBottom: theme.spacing.spacing.md,
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
    borderRadius: 4,
  },
  progressText: {
    fontSize: theme.typography.sizes.caption,
    fontFamily: 'SFProText-Regular',
    color: theme.colors.primary.dark, // Changed from main to dark for better contrast
    textAlign: 'right',
  },
  exploreButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 24,
    paddingVertical: theme.spacing.spacing.sm,
    alignItems: 'center',
    overflow: 'hidden',
  },
  exploreButtonText: {
    color: theme.colors.neutral.white,
    fontSize: theme.typography.sizes.body,
    fontFamily: 'SFProText-Bold', // Changed from medium to bold for consistency
  },
});

export default DomainCard;
