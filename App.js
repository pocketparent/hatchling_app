import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import theme from './src/theme';

// Import screens
import TodayScreen from './src/screens/Today';
import JourneyScreen from './src/screens/Journey';
import AskScreen from './src/screens/Ask';
import SavedScreen from './src/screens/Saved';
import SettingsScreen from './src/screens/Settings';

// Import demo screens for features
import CheckInDemo from './src/screens/Today/CheckInDemo';

// Create app context for shared state
import { createContext } from 'react';
export const AppContext = createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  // App-wide state
  const [babyAge, setBabyAge] = useState(150); // Default to 5 months (150 days)
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

  // Determine which Today screen to show (normal or check-in demo)
  // For demo purposes, we'll show the check-in demo
  const showCheckInDemo = true;
  const TodayComponent = showCheckInDemo ? CheckInDemo : TodayScreen;

  return (
    <AppContext.Provider value={contextValue}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                // Set icon based on route name
                if (route.name === 'Today') {
                  iconName = focused ? 'today' : 'today-outline';
                } else if (route.name === 'Journey') {
                  iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Ask') {
                  iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                } else if (route.name === 'Saved') {
                  iconName = focused ? 'bookmark' : 'bookmark-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: theme.colors.primary.main,
              tabBarInactiveTintColor: theme.colors.neutral.medium,
              headerShown: false,
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabBarLabel,
            })}
          >
            <Tab.Screen name="Today" component={TodayComponent} />
            <Tab.Screen name="Journey" component={JourneyScreen} />
            <Tab.Screen name="Ask" component={AskScreen} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  tabBar: {
    backgroundColor: theme.colors.neutral.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
    paddingTop: 8,
    height: 60,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});
