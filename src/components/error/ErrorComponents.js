import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import ErrorBoundary from '../../utils/ErrorBoundary';
import { ErrorMessage } from '../../utils/ErrorHandler';

/**
 * Input Validation Component
 * 
 * Provides consistent validation feedback for form inputs
 * Expo-compatible implementation
 */
export const FormValidation = ({ children, error, touched }) => {
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';
  
  return (
    <View style={styles.container}>
      {children}
      {touched && error ? (
        <ErrorMessage 
          message={error} 
          style={[
            styles.errorText,
            isDarkMode && styles.errorTextDark
          ]} 
        />
      ) : null}
    </View>
  );
};

/**
 * App Error Wrapper
 * 
 * Wraps the entire app with error boundary and provides
 * Expo-compatible error handling
 */
export const AppErrorWrapper = ({ children }) => {
  const handleReset = () => {
    // In a real app, this could clear caches or reset state
    console.log('App error boundary reset');
  };
  
  return (
    <ErrorBoundary onReset={handleReset}>
      {children}
    </ErrorBoundary>
  );
};

/**
 * Screen Error Wrapper
 * 
 * Wraps individual screens with error boundary
 * Provides screen-specific error handling
 */
export const ScreenErrorWrapper = ({ children, screenName, navigation }) => {
  const handleReset = () => {
    // Navigate back to home screen on error
    if (navigation) {
      navigation.navigate('Home');
    }
  };
  
  const renderCustomFallback = (resetError) => (
    <View style={styles.customFallbackContainer}>
      <Text style={styles.screenErrorText}>
        There was a problem loading the {screenName} screen
      </Text>
    </View>
  );
  
  return (
    <ErrorBoundary 
      onReset={handleReset}
      renderCustomFallback={renderCustomFallback}
    >
      {children}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  errorText: {
    color: '#D32F2F', // Error red
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
    fontFamily: 'SFProText-Regular',
  },
  errorTextDark: {
    color: '#FF6B6B', // Lighter red for dark mode
  },
  customFallbackContainer: {
    padding: 16,
    alignItems: 'center',
  },
  screenErrorText: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
    fontFamily: 'SFProText-Medium',
  }
});

export default {
  FormValidation,
  AppErrorWrapper,
  ScreenErrorWrapper
};
