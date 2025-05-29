/**
 * Hatchling App - App.js with Data Integration
 * 
 * Updated App.js with all providers and data integration
 * Includes ThemeProvider, AuthProvider, OnboardingProvider, and DataProvider
 * Implements proper font loading with expo-font
 */

import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { OnboardingProvider } from './src/context/OnboardingContext';
import { DataProvider } from './src/context/DataContext';
import AppNavigation from './src/navigation/AppNavigation';
import theme from './src/theme';
import { validateAll } from './src/utils/ExpoValidator';
import useFontLoader from './src/hooks/useFontLoader';

// Main app component
export default function App() {
  // Load fonts using the custom hook
  const { fontsLoaded, onLayoutRootView } = useFontLoader();
  
  // State for Expo compatibility validation
  const [validationResults, setValidationResults] = useState(null);
  const [validationComplete, setValidationComplete] = useState(false);

  // Validate Expo compatibility on app start
  useEffect(() => {
    const validateExpoCompatibility = async () => {
      try {
        const results = await validateAll();
        setValidationResults(results);
      } catch (error) {
        console.error('Validation error:', error);
        setValidationResults({ success: false, error: error.message });
      } finally {
        setValidationComplete(true);
      }
    };

    validateExpoCompatibility();
  }, []);

  // Show loading screen if fonts are not loaded or validation is not complete
  if (!fontsLoaded || !validationComplete) {
    return (
      <View style={styles.validationContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary.main} />
        <Text style={[styles.validationText, { fontFamily: 'System' }]}>
          {!fontsLoaded ? 'Loading fonts...' : 'Validating app compatibility...'}
        </Text>
      </View>
    );
  }

  // Show validation error if validation failed
  if (validationResults && !validationResults.success) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Compatibility Issue</Text>
        <Text style={styles.errorText}>
          There was an issue with app compatibility. Please try restarting the app.
        </Text>
        <Text style={styles.errorDetails}>
          {JSON.stringify(validationResults, null, 2)}
        </Text>
      </View>
    );
  }

  // Main app with all providers
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ThemeProvider>
        <AuthProvider>
          <OnboardingProvider>
            <DataProvider>
              <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <AppNavigation />
              </View>
            </DataProvider>
          </OnboardingProvider>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  validationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
  },
  validationText: {
    marginTop: 20,
    fontSize: 16,
    color: theme.colors.neutral.white,
    fontFamily: 'SFProText-Regular',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.feedback.error,
    marginBottom: 16,
    fontFamily: 'SFProDisplay-Bold',
  },
  errorText: {
    fontSize: 16,
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'SFProText-Regular',
  },
  errorDetails: {
    fontSize: 12,
    color: theme.colors.neutral.lightest,
    textAlign: 'left',
    fontFamily: 'SFProText-Regular',
  },
});
