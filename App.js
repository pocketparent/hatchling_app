import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createContext, useState } from 'react';

// Import screens
import TodayScreen from './src/screens/Today';
import JourneyScreen from './src/screens/Journey';
import AskScreen from './src/screens/Ask';
import SavedScreen from './src/screens/Saved';
import SettingsScreen from './src/screens/Settings';

// Import custom tab bar
import CustomTabBar from './src/components/CustomTabBar';

// Import theme
import theme from './src/theme';

// Create app context for shared state
export const AppContext = createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  // App-wide state
  const [babyAge, setBabyAge] = useState(120); // Default to 4 months (120 days)
  const [babyName, setBabyName] = useState('Emma');
  const [savedItems, setSavedItems] = useState({
    insights: [],
    activities: [],
    media: []
  });
  
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
  
  // App context value
  const contextValue = {
    babyAge,
    setBabyAge,
    babyName,
    setBabyName,
    savedItems,
    handleSaveItem,
    handleRemoveSavedItem,
    isItemSaved
  };

  return (
    <SafeAreaProvider>
      <AppContext.Provider value={contextValue}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary.main} />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="Journey" component={JourneyScreen} />
            <Tab.Screen name="Ask" component={AskScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}
