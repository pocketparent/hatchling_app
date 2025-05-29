import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import { Row, Column, Body, BodySmall, Caption } from '../index';

/**
 * ActivityItem Component
 * 
 * A reusable component for displaying activity items
 * Used in Journey screen for displaying activities related to milestones
 */
const ActivityItem = ({ 
  activity,
  domainColor,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Row>
        <View style={[styles.iconContainer, { backgroundColor: domainColor }]}>
          <Ionicons 
            name={activity.icon || "star-outline"} 
            size={18} 
            color={theme.colors.neutral.white} 
          />
        </View>
        
        <Column style={styles.content}>
          <Body style={styles.title}>
            {activity.title}
          </Body>
          
          {activity.description && (
            <BodySmall color="medium" numberOfLines={2}>
              {activity.description}
            </BodySmall>
          )}
          
          {activity.duration && (
            <Caption color="medium">
              {activity.duration}
            </Caption>
          )}
        </Column>
        
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color={theme.colors.neutral.medium} 
        />
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lightest,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: theme.spacing.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing.spacing.xs,
  },
});

export default ActivityItem;
