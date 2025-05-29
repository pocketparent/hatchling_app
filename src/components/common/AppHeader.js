import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';

/**
 * AppHeader Component
 * 
 * Consistent header with small Hatchling logo for use across all app screens
 */
const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logoText}>Hatchling</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
  },
  logoText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  }
});

export default AppHeader;
