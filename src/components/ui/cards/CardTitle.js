import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../theme';
import { Body, BodySmall } from '../Typography';

/**
 * CardTitle Component
 * 
 * A reusable component for card titles with consistent styling
 * Used throughout the app for card headers
 */
const CardTitle = ({ 
  title,
  subtitle,
  action,
  actionText,
  onActionPress,
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Body weight="bold" style={styles.title}>
          {title}
        </Body>
        
        {subtitle && (
          <BodySmall color="medium">
            {subtitle}
          </BodySmall>
        )}
      </View>
      
      {action && (
        <TouchableOpacity 
          onPress={onActionPress}
          activeOpacity={0.7}
        >
          <BodySmall color="primary">
            {actionText || 'See All'}
          </BodySmall>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    marginBottom: subtitle ? theme.spacing.spacing.xs : 0,
  }
});

export default CardTitle;
