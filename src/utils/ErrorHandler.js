import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ErrorBoundary from '../utils/ErrorBoundary';

/**
 * Error Handler Utility
 * 
 * Provides consistent error handling functions throughout the app
 */

// Handle API errors
export const handleApiError = (error, fallbackMessage = 'Something went wrong. Please try again.') => {
  console.error('API Error:', error);
  
  // Extract meaningful error message if available
  let errorMessage = fallbackMessage;
  if (error?.response?.data?.message) {
    errorMessage = error.response.data.message;
  } else if (error?.message) {
    errorMessage = error.message;
  }
  
  // Show error alert to user
  Alert.alert(
    'Error',
    errorMessage,
    [{ text: 'OK' }]
  );
  
  return errorMessage;
};

// Handle form validation errors
export const handleValidationError = (errors, setFieldErrors) => {
  if (typeof setFieldErrors === 'function') {
    setFieldErrors(errors);
  }
  
  // Show first error in an alert for accessibility
  const firstError = Object.values(errors)[0];
  if (firstError) {
    Alert.alert(
      'Validation Error',
      firstError,
      [{ text: 'OK' }]
    );
  }
  
  return errors;
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate required fields
export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`;
  }
  return null;
};

// Wrap component with error boundary
export const withErrorBoundary = (Component, options = {}) => {
  return (props) => (
    <ErrorBoundary 
      onReset={options.onReset}
      renderCustomFallback={options.renderCustomFallback}
    >
      <Component {...props} />
    </ErrorBoundary>
  );
};

// Error message component
export const ErrorMessage = ({ message, style }) => {
  if (!message) return null;
  
  return (
    <View style={styles.errorContainer}>
      <Text style={[styles.errorText, style]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 8,
    marginVertical: 4,
  },
  errorText: {
    color: '#D32F2F', // Error red
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
  },
});

export default {
  handleApiError,
  handleValidationError,
  validateEmail,
  validateRequired,
  withErrorBoundary,
  ErrorMessage
};
