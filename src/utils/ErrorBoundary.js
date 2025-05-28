import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
    
    // In a production app, you would send this to your error tracking service
    // e.g., Sentry, Bugsnag, etc.
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    
    // Attempt to recover by resetting the component
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <View style={styles.container}>
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={60} color={theme.colors.feedback.error} />
            <Text style={styles.errorTitle}>Something went wrong</Text>
            <Text style={styles.errorMessage}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Text>
            <TouchableOpacity style={styles.resetButton} onPress={this.resetError}>
              <Text style={styles.resetButtonText}>Try Again</Text>
            </TouchableOpacity>
            {this.props.renderCustomFallback && this.props.renderCustomFallback(this.resetError)}
          </View>
        </View>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary.main,
    padding: 20,
  },
  errorContainer: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  errorTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    color: theme.colors.neutral.darkest,
    marginTop: 16,
    marginBottom: 8,
  },
  errorMessage: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
    textAlign: 'center',
    marginBottom: 24,
  },
  resetButton: {
    backgroundColor: theme.colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  resetButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
});

export default ErrorBoundary;
