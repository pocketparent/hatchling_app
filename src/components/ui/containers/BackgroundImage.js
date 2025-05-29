import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import theme from '../../../theme';

/**
 * BackgroundImage Component
 * 
 * Creates a consistent background image for all screens using the pattern image
 * provided by the user.
 * Moved from decorations/ to ui/containers/ for better organization
 */
const BackgroundImage = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={require('../../../../assets/background_pattern.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background.primary,
  },
});

export default BackgroundImage;
