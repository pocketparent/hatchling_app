import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import { Row, Body } from '../index';

/**
 * DomainBadge Component
 * 
 * A reusable badge component for displaying domain icons with consistent styling
 * Used in Journey screen and other places where domain identification is needed
 */
const DomainBadge = ({ 
  domain, 
  size = 'medium', 
  style 
}) => {
  // Get domain color and icon based on domain type
  const getDomainColor = () => {
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

  const getDomainIcon = () => {
    switch (domain.type) {
      case 'physical':
        return 'body-outline';
      case 'cognitive':
        return 'bulb-outline';
      case 'social':
        return 'people-outline';
      case 'emotional':
        return 'heart-outline';
      case 'language':
        return 'chatbubble-outline';
      default:
        return 'star-outline';
    }
  };

  // Determine size dimensions
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: {
            width: 32,
            height: 32,
            borderRadius: 16,
          },
          icon: {
            size: 16
          }
        };
      case 'large':
        return {
          container: {
            width: 64,
            height: 64,
            borderRadius: 32,
          },
          icon: {
            size: 32
          }
        };
      case 'medium':
      default:
        return {
          container: {
            width: 48,
            height: 48,
            borderRadius: 24,
          },
          icon: {
            size: 24
          }
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const domainColor = getDomainColor();
  const domainIcon = getDomainIcon();

  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: domainColor },
        sizeStyles.container,
        style
      ]}
    >
      <Ionicons 
        name={domainIcon} 
        size={sizeStyles.icon.size} 
        color={theme.colors.neutral.white} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DomainBadge;
