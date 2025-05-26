import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createContext, useState, useEffect } from 'react';

// Import screens
import TodayScreen from './src/screens/Today';
import JourneyScreen from './src/screens/Journey';
import AskScreen from './src/screens/Ask';
import SavedScreen from './src/screens/Saved';
import SettingsScreen from './src/screens/Settings';

// Import settings sub-screens
import ProfileScreen from './src/screens/Settings/ProfileScreen';
import BirthdayScreen from './src/screens/Settings/BirthdayScreen';
import BackupScreen from './src/screens/Settings/BackupScreen';
import PrivacyScreen from './src/screens/Settings/PrivacyScreen';
import HelpCenterScreen from './src/screens/Settings/HelpCenterScreen';
import ContactScreen from './src/screens/Settings/ContactScreen';
import AboutScreen from './src/screens/Settings/AboutScreen';

// Import custom tab bar
import CustomTabBar from './src/components/CustomTabBar';

// Import theme
import theme from './src/theme';

// Create app context for shared state
export const AppContext = createContext();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Settings stack navigator
const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Birthday" component={BirthdayScreen} />
      <Stack.Screen name="Backup" component={BackupScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  // App-wide state
  const [babyAge, setBabyAge] = useState(120); // Default to 4 months (120 days)
  const [babyName, setBabyName] = useState('Emma');
  const [savedItems, setSavedItems] = useState({
    insights: [],
    activities: [],
    media: []
  });
  const [darkMode, setDarkMode] = useState(false);
  
  // Handle saving items
  const handleSaveItem = (item, type) => {
    setSavedItems(prev => {
      const newSavedItems = {...prev};
      
      // Check if item already exists
      const exists = newSavedItems[type].some(i => i.id === item.id);
      
      if (!exists) {
        newSavedItems[type] = [...newSavedItems[type], item];
      }
      
      return newSavedItems;
    });
  };
  
  // Handle removing saved items
  const handleRemoveSavedItem = (itemId, type) => {
    setSavedItems(prev => {
      const newSavedItems = {...prev};
      newSavedItems[type] = newSavedItems[type].filter(item => item.id !== itemId);
      return newSavedItems;
    });
  };
  
  // Check if an item is saved
  const isItemSaved = (itemId, type) => {
    return savedItems[type].some(item => item.id === itemId);
  };
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  // Get current theme based on dark mode setting
  const currentTheme = darkMode ? theme.dark : theme;
  
  // App context value
  const contextValue = {
    babyAge,
    setBabyAge,
    babyName,
    setBabyName,
    savedItems,
    handleSaveItem,
    handleRemoveSavedItem,
    isItemSaved,
    darkMode,
    toggleDarkMode,
    currentTheme
  };

  return (
    <SafeAreaProvider>
      <AppContext.Provider value={contextValue}>
        <StatusBar 
          barStyle={darkMode ? "light-content" : "dark-content"} 
          backgroundColor={darkMode ? theme.dark.colors.primary.main : theme.colors.primary.main} 
        />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} darkMode={darkMode} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="Journey" component={JourneyScreen} />
            <Tab.Screen name="Ask" component={AskScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Settings" component={SettingsStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}
