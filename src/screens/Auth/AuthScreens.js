/**
 * Hatchling App - Basic Auth Screens
 * 
 * Implements simplified mock authentication screens
 * Includes Welcome, Login, and Signup screens
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import theme from '../../theme';

// Welcome Screen
export const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Hatchling</Text>
        </View>
        
        <Text style={styles.tagline}>Parenting insights that grow with your baby</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]} 
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Create Account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.tertiaryButton]} 
            onPress={() => navigation.navigate('SkipAuth')}
          >
            <Text style={[styles.buttonText, styles.tertiaryButtonText]}>Skip to Trial</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Login Screen
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, loading } = useAuth();
  
  const handleLogin = async () => {
    try {
      setError('');
      await signIn(email, password);
      // Navigation will be handled by the AppNavigation component
    } catch (e) {
      setError(e.message);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.screenTitle}>Sign In</Text>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, loading && styles.disabledButton]} 
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Signing In...' : 'Sign In'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Signup Screen
export const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp, loading } = useAuth();
  
  const handleSignup = async () => {
    try {
      setError('');
      await signUp(email, password, name);
      // Navigation will be handled by the AppNavigation component
    } catch (e) {
      setError(e.message);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.screenTitle}>Create Account</Text>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name (Optional)</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Create a password"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton, loading && styles.disabledButton]} 
          onPress={handleSignup}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Creating Account...' : 'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
    padding: theme.spacing.spacing.screenPadding,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  logo: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 48,
    color: theme.colors.neutral.white,
  },
  tagline: {
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginBottom: theme.spacing.spacing.xxl,
  },
  buttonContainer: {
    marginBottom: theme.spacing.spacing.xxl,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.neutral.white,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.neutral.white,
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.primary.main,
  },
  secondaryButtonText: {
    color: theme.colors.neutral.white,
  },
  tertiaryButtonText: {
    color: theme.colors.neutral.white,
    textDecorationLine: 'underline',
  },
  footerText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.lightest,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
  screenTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 32,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.xl,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.spacing.md,
  },
  inputLabel: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
  },
  errorText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.feedback.error,
    marginBottom: theme.spacing.spacing.md,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.7,
  },
  linkText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginTop: theme.spacing.spacing.md,
    textDecorationLine: 'underline',
  },
});

export default {
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
};
