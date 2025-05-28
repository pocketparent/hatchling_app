/**
 * Hatchling App Onboarding Context
 * 
 * Provides onboarding state and methods to the entire application
 * Tracks onboarding progress and stores user selections
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create onboarding context
const OnboardingContext = createContext();

// Default baby data
const DEFAULT_BABY_DATA = {
  name: '',
  birthDate: null,
  photo: null,
  feedingMethod: null,
  sleepArrangement: null,
  experienceLevel: null,
  topConcern: null,
};

// Onboarding provider component
export const OnboardingProvider = ({ children }) => {
  const [babyData, setBabyData] = useState(DEFAULT_BABY_DATA);
  const [currentStep, setCurrentStep] = useState(1);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check for existing onboarding data on mount
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const onboardingStatus = await AsyncStorage.getItem('onboardingCompleted');
        const savedBabyData = await AsyncStorage.getItem('babyData');
        
        if (onboardingStatus === 'true') {
          setHasCompletedOnboarding(true);
        }
        
        if (savedBabyData) {
          setBabyData(JSON.parse(savedBabyData));
        }
      } catch (e) {
        console.error('Failed to load onboarding data:', e);
      } finally {
        setLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  // Update baby data
  const updateBabyData = async (newData) => {
    try {
      const updatedData = { ...babyData, ...newData };
      setBabyData(updatedData);
      await AsyncStorage.setItem('babyData', JSON.stringify(updatedData));
    } catch (e) {
      console.error('Failed to update baby data:', e);
    }
  };

  // Move to next onboarding step
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  // Move to previous onboarding step
  const prevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  // Complete onboarding
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      setHasCompletedOnboarding(true);
    } catch (e) {
      console.error('Failed to complete onboarding:', e);
    }
  };

  // Reset onboarding (for testing)
  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('onboardingCompleted');
      await AsyncStorage.removeItem('babyData');
      setBabyData(DEFAULT_BABY_DATA);
      setCurrentStep(1);
      setHasCompletedOnboarding(false);
    } catch (e) {
      console.error('Failed to reset onboarding:', e);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        babyData,
        updateBabyData,
        currentStep,
        nextStep,
        prevStep,
        hasCompletedOnboarding,
        completeOnboarding,
        resetOnboarding,
        loading,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

// Custom hook to use onboarding
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
