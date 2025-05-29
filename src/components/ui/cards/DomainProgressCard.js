import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';
import Row from '../layout/Row';
import Column from '../layout/Column';
import { Body, BodySmall, Caption } from '../Typography';
import ProgressBar from '../progress/ProgressBar';
import DomainBadge from '../badges/DomainBadge';

/**
 * DomainProgressCard Component
 * 
 * A reusable card component for displaying domain progress
 * Used in Journey screen for domain overview
 */
const DomainProgressCard = ({ 
  domain,
  progress,
  onPress,
  style
}) => {
  // Get domain color based on domain type
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

  const domainColor = getDomainColor();
  
  return (
    <View style={[styles.container, style]}>
      <Row style={styles.header}>
        <DomainBadge domain={domain} size="medium" />
        
        <Column style={styles.titleContainer}>
          <Body weight="bold" style={styles.title}>
            {domain.title}
          </Body>
          
          <BodySmall color="medium">
            {Math.round(progress * 100)}% complete
          </BodySmall>
        </Column>
      </Row>
      
      <ProgressBar 
        progress={progress} 
        color={domainColor}
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: theme.spacing.borderRadius.md,
    padding: theme.spacing.spacing.md,
    ...theme.spacing.shadows.small,
  },
  header: {
    marginBottom: theme.spacing.spacing.md,
  },
  titleContainer: {
    marginLeft: theme.spacing.spacing.md,
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing.spacing.xs,
  },
  progressBar: {
    marginTop: theme.spacing.spacing.sm,
  }
});

export default DomainProgressCard;
