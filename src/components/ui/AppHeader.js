/**
 * Hatchling App Header Component
 * 
 * Consistent header with Hatchling branding for use across all screens
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

// Standard app header with optional back button and right action
export const AppHeader = ({
  title,
  showBackButton = false,
  onBackPress,
  rightIcon,
  onRightPress,
  style,
  ...props
}) => (
  <View style={[styles.headerContainer, style]} {...props}>
    <View style={styles.headerContent}>
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBackPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      
      <Text style={styles.headerTitle}>
        {title || "Hatchling"}
      </Text>
      
      {rightIcon && (
        <TouchableOpacity 
          style={styles.rightButton} 
          onPress={onRightPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name={rightIcon} size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 4,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    padding: 4,
  }
});

export default AppHeader;
