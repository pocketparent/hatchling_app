import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';

/**
 * AppHeader Component
 * 
 * Consistent header with small Hatchling logo for use across all app screens
 */
const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={require('../../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
  },
  logo: {
    width: 80, // Small logo as requested
    height: 30,
  },
});

export default AppHeader;
