import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme';
import { Row, Column, Body, BodySmall, Caption } from '../index';

/**
 * MilestoneItem Component
 * 
 * A reusable component for displaying milestone items with toggle functionality
 * Used in Journey screen for displaying milestone progress
 */
const MilestoneItem = ({ 
  milestone,
  isCompleted,
  onToggle,
  domainColor,
  style
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Row>
        <View style={[styles.checkbox, isCompleted && styles.checkboxCompleted, { borderColor: domainColor }]}>
          {isCompleted && (
            <Ionicons name="checkmark" size={16} color={theme.colors.neutral.white} />
          )}
        </View>
        
        <Column style={styles.content}>
          <Body 
            style={[
              styles.title, 
              isCompleted && styles.titleCompleted
            ]}
          >
            {milestone.title}
          </Body>
          
          {milestone.description && (
            <BodySmall color="medium" numberOfLines={2}>
              {milestone.description}
            </BodySmall>
          )}
          
          {milestone.ageRange && (
            <Caption color="medium">
              Typically observed: {milestone.ageRange}
            </Caption>
          )}
        </Column>
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
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: theme.spacing.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxCompleted: {
    backgroundColor: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing.spacing.xs,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
});

export default MilestoneItem;
