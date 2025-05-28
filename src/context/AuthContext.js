/**
 * Hatchling App Authentication Context
 * 
 * Provides authentication state and methods to the entire application
 * Implements a simplified mock version for now
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create authentication context
const AuthContext = createContext();

// Mock user data
const MOCK_USER = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
};

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const userSession = await AsyncStorage.getItem('user');
        if (userSession) {
          setUser(JSON.parse(userSession));
        }
      } catch (e) {
        console.error('Failed to load user session:', e);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

  // Mock sign in function
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      // Mock successful authentication
      const userData = MOCK_USER;
      
      // Save to storage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      return userData;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  // Mock sign up function
  const signUp = async (email, password, name) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      // Mock successful registration
      const userData = {
        ...MOCK_USER,
        name: name || MOCK_USER.name,
        email,
      };
      
      // Save to storage
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      // Update state
      setUser(userData);
      return userData;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true);
      
      // Clear storage
      await AsyncStorage.removeItem('user');
      
      // Update state
      setUser(null);
    } catch (e) {
      console.error('Error signing out:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
