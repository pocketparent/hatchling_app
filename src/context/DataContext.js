/**
 * Hatchling App Data Context
 * 
 * Provides data persistence and API integration throughout the app
 * Uses DataManager for storage operations
 */

import React, { createContext, useState, useContext, useEffect } from 'react';
import DataManager from '../utils/DataManager';

// Create context
const DataContext = createContext(null);

// Data provider component
export const DataProvider = ({ children }) => {
  // State for user data
  const [userData, setUserData] = useState(null);
  const [babyData, setBabyData] = useState(null);
  const [milestoneData, setMilestoneData] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load user data
        const storedUserData = await DataManager.getUserData();
        if (storedUserData) {
          setUserData(storedUserData);
        }

        // Load baby data
        const storedBabyData = await DataManager.getBabyData();
        if (storedBabyData) {
          setBabyData(storedBabyData);
        }

        // Load milestone data
        const storedMilestoneData = await DataManager.getMilestoneData();
        if (storedMilestoneData) {
          setMilestoneData(storedMilestoneData);
        }

        // Load settings
        const storedSettings = await DataManager.getSettings();
        if (storedSettings) {
          setSettings(storedSettings);
        }
      } catch (err) {
        console.error('Error loading initial data:', err);
        setError('Failed to load app data. Please restart the app.');
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Update user data
  const updateUserData = async (newUserData) => {
    try {
      setLoading(true);
      setError(null);

      // Merge with existing data
      const updatedData = { ...userData, ...newUserData };
      
      // Save to storage
      const success = await DataManager.saveUserData(updatedData);
      
      if (success) {
        setUserData(updatedData);
        return true;
      } else {
        setError('Failed to save user data');
        return false;
      }
    } catch (err) {
      console.error('Error updating user data:', err);
      setError('Failed to update user data');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update baby data
  const updateBabyData = async (newBabyData) => {
    try {
      setLoading(true);
      setError(null);

      // Merge with existing data
      const updatedData = { ...babyData, ...newBabyData };
      
      // Save to storage
      const success = await DataManager.saveBabyData(updatedData);
      
      if (success) {
        setBabyData(updatedData);
        return true;
      } else {
        setError('Failed to save baby data');
        return false;
      }
    } catch (err) {
      console.error('Error updating baby data:', err);
      setError('Failed to update baby data');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update milestone data
  const updateMilestoneData = async (newMilestoneData) => {
    try {
      setLoading(true);
      setError(null);

      // Save to storage
      const success = await DataManager.saveMilestoneData(newMilestoneData);
      
      if (success) {
        setMilestoneData(newMilestoneData);
        return true;
      } else {
        setError('Failed to save milestone data');
        return false;
      }
    } catch (err) {
      console.error('Error updating milestone data:', err);
      setError('Failed to update milestone data');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update settings
  const updateSettings = async (newSettings) => {
    try {
      setLoading(true);
      setError(null);

      // Merge with existing settings
      const updatedSettings = { ...settings, ...newSettings };
      
      // Save to storage
      const success = await DataManager.saveSettings(updatedSettings);
      
      if (success) {
        setSettings(updatedSettings);
        return true;
      } else {
        setError('Failed to save settings');
        return false;
      }
    } catch (err) {
      console.error('Error updating settings:', err);
      setError('Failed to update settings');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fetch fresh milestone data from API
  const refreshMilestoneData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get baby age from baby data
      const age = babyData?.age || '0 months';
      
      // Fetch from API (mock)
      const apiData = await DataManager.fetchMilestoneData(age);
      
      if (apiData && apiData.success) {
        // In a real app, we would process the API response here
        // For now, we'll just return success
        return true;
      } else {
        setError('Failed to refresh milestone data');
        return false;
      }
    } catch (err) {
      console.error('Error refreshing milestone data:', err);
      setError('Failed to refresh milestone data');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Fetch daily insights from API
  const fetchDailyInsights = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get baby age from baby data
      const age = babyData?.age || '0 months';
      
      // Fetch from API (mock)
      const apiData = await DataManager.fetchDailyInsights(age);
      
      if (apiData && apiData.success) {
        // In a real app, we would process the API response here
        // For now, we'll just return success
        return true;
      } else {
        setError('Failed to fetch daily insights');
        return false;
      }
    } catch (err) {
      console.error('Error fetching daily insights:', err);
      setError('Failed to fetch daily insights');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Clear all data (for logout or reset)
  const clearAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Clear from storage
      const success = await DataManager.clearAllData();
      
      if (success) {
        // Reset state
        setUserData(null);
        setBabyData(null);
        setMilestoneData(null);
        setSettings(null);
        return true;
      } else {
        setError('Failed to clear data');
        return false;
      }
    } catch (err) {
      console.error('Error clearing data:', err);
      setError('Failed to clear data');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    userData,
    babyData,
    milestoneData,
    settings,
    loading,
    error,
    updateUserData,
    updateBabyData,
    updateMilestoneData,
    updateSettings,
    refreshMilestoneData,
    fetchDailyInsights,
    clearAllData,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for using the data context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataContext;
