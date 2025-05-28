/**
 * Hatchling App - Expo Compatibility Validation
 * 
 * This file contains utility functions to validate Expo compatibility
 * for all features implemented in the app.
 */

import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Validates AsyncStorage functionality
 * @returns {Promise<boolean>} Whether AsyncStorage is working correctly
 */
export const validateAsyncStorage = async () => {
  try {
    // Test key and value
    const testKey = 'hatchling_test_key';
    const testValue = 'test_value_' + Date.now();
    
    // Write to AsyncStorage
    await AsyncStorage.setItem(testKey, testValue);
    
    // Read from AsyncStorage
    const retrievedValue = await AsyncStorage.getItem(testKey);
    
    // Clean up
    await AsyncStorage.removeItem(testKey);
    
    // Validate
    return retrievedValue === testValue;
  } catch (error) {
    console.error('AsyncStorage validation failed:', error);
    return false;
  }
};

/**
 * Validates environment configuration
 * @returns {boolean} Whether environment configuration is valid
 */
export const validateEnvironmentConfig = () => {
  try {
    // Import config
    const config = require('../config/environment').default;
    
    // Check required properties
    return (
      typeof config === 'object' &&
      typeof config.API_BASE_URL === 'string' &&
      typeof config.ENVIRONMENT === 'string' &&
      typeof config.VERSION === 'string'
    );
  } catch (error) {
    console.error('Environment config validation failed:', error);
    return false;
  }
};

/**
 * Validates navigation functionality
 * @param {object} navigation - React Navigation object
 * @returns {boolean} Whether navigation is working correctly
 */
export const validateNavigation = (navigation) => {
  try {
    // Check if navigation object has required methods
    return (
      typeof navigation === 'object' &&
      typeof navigation.navigate === 'function' &&
      typeof navigation.goBack === 'function'
    );
  } catch (error) {
    console.error('Navigation validation failed:', error);
    return false;
  }
};

/**
 * Validates platform-specific features
 * @returns {object} Object containing validation results for platform-specific features
 */
export const validatePlatformFeatures = () => {
  try {
    // Check platform
    const platform = Platform.OS;
    
    // Platform-specific validations
    const validations = {
      platform,
      isIOS: platform === 'ios',
      isAndroid: platform === 'android',
      isWeb: platform === 'web',
      version: Platform.Version,
      // Add more platform-specific validations as needed
    };
    
    return validations;
  } catch (error) {
    console.error('Platform features validation failed:', error);
    return {
      error: true,
      message: error.message,
    };
  }
};

/**
 * Runs all validations
 * @param {object} navigation - React Navigation object (optional)
 * @returns {Promise<object>} Object containing all validation results
 */
export const validateAll = async (navigation = null) => {
  const results = {
    asyncStorage: await validateAsyncStorage(),
    environmentConfig: validateEnvironmentConfig(),
    platformFeatures: validatePlatformFeatures(),
  };
  
  if (navigation) {
    results.navigation = validateNavigation(navigation);
  }
  
  // Overall validation result
  results.success = Object.values(results).every(result => 
    typeof result === 'boolean' ? result : 
    typeof result === 'object' && !result.error
  );
  
  return results;
};

export default {
  validateAsyncStorage,
  validateEnvironmentConfig,
  validateNavigation,
  validatePlatformFeatures,
  validateAll,
};
