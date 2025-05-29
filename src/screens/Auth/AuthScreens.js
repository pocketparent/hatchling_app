import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import theme from '../../theme';

// Import UI components
import {
  Container,
  Row,
  Column,
  Spacer,
  H1,
  H2,
  Body,
  BodySmall,
  Caption,
  Button,
  TextInput,
  BackButton
} from '../../components/ui';

// Welcome Screen
export const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Container style={styles.content}>
        <View style={styles.logoContainer}>
          <H1 style={styles.logo}>Hatchling</H1>
        </View>
        
        <Body style={styles.tagline}>Parenting insights that grow with your baby</Body>
        
        <Column style={styles.buttonContainer}>
          <Button 
            label="Sign In"
            variant="primary"
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          />
          
          <Button 
            label="Create Account"
            variant="outline"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
          />
          
          <Button 
            label="Skip to Trial"
            variant="text"
            onPress={() => navigation.navigate('SkipAuth')}
            style={styles.button}
          />
        </Column>
        
        <Caption style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Caption>
      </Container>
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
      <Container style={styles.content}>
        <BackButton 
          onPress={() => navigation.goBack()}
          color="white"
          style={styles.backButton}
        />
        
        <H2 style={styles.screenTitle}>Sign In</H2>
        
        {error ? <Body color="error" style={styles.errorText}>{error}</Body> : null}
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Email</BodySmall>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Column>
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Password</BodySmall>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </Column>
        
        <Button 
          label={loading ? 'Signing In...' : 'Sign In'}
          variant="primary"
          onPress={handleLogin}
          disabled={loading}
          style={styles.button}
        />
        
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <BodySmall color="white" style={styles.linkText}>Forgot Password?</BodySmall>
        </TouchableOpacity>
      </Container>
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
      <Container style={styles.content}>
        <BackButton 
          onPress={() => navigation.goBack()}
          color="white"
          style={styles.backButton}
        />
        
        <H2 style={styles.screenTitle}>Create Account</H2>
        
        {error ? <Body color="error" style={styles.errorText}>{error}</Body> : null}
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Name (Optional)</BodySmall>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </Column>
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Email</BodySmall>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Column>
        
        <Column style={styles.inputContainer}>
          <BodySmall color="white" style={styles.inputLabel}>Password</BodySmall>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Create a password"
            secureTextEntry
          />
        </Column>
        
        <Button 
          label={loading ? 'Creating Account...' : 'Continue'}
          variant="primary"
          onPress={handleSignup}
          disabled={loading}
          style={styles.button}
        />
      </Container>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
    padding: theme.spacing.spacing.lg,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  logo: {
    color: theme.colors.neutral.white,
    fontSize: 48,
  },
  tagline: {
    color: theme.colors.neutral.white,
    textAlign: 'center',
    marginBottom: theme.spacing.spacing.xxl,
  },
  buttonContainer: {
    marginBottom: theme.spacing.spacing.xxl,
    gap: theme.spacing.spacing.sm,
  },
  button: {
    marginBottom: theme.spacing.spacing.sm,
  },
  footerText: {
    color: theme.colors.neutral.lightest,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  screenTitle: {
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.xl,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.spacing.md,
  },
  inputLabel: {
    marginBottom: theme.spacing.spacing.xs,
  },
  errorText: {
    marginBottom: theme.spacing.spacing.md,
    textAlign: 'center',
  },
  linkText: {
    textAlign: 'center',
    marginTop: theme.spacing.spacing.md,
    textDecorationLine: 'underline',
  },
};

export default {
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
};
