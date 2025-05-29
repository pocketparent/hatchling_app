import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

// Import screens
import TodayScreen from '../screens/Today';
import JourneyScreen from '../screens/Journey';
import AskScreen from '../screens/Ask';
import SavedScreen from '../screens/Saved';
import SettingsScreen from '../screens/Settings';
import EditProfileScreen from '../screens/Settings/EditProfile';

// Import auth screens
import { 
  WelcomeScreen, 
  LoginScreen, 
  SignupScreen 
} from '../screens/Auth/AuthScreens';

// Import onboarding screens
import {
  BabyInfoScreen,
  FeedingMethodScreen,
  SleepArrangementScreen,
  ExperienceLevelScreen,
  TopConcernScreen,
  PersonalizationScreen
} from '../screens/Onboarding/OnboardingScreens';

// Import contexts
import { useAuth } from '../context/AuthContext';
import { useOnboarding } from '../context/OnboardingContext';

// Import theme
import theme from '../theme';

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Import screens
import SubscriptionScreen from '../screens/Settings/Subscription';
import PrivacyPolicyScreen from '../screens/Settings/PrivacyPolicy';
import TermsScreen from '../screens/Settings/Terms';

// Settings stack navigator
const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
  );
};

// Main tab navigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set icon based on route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Journey') {
            iconName = focused ? 'pulse' : 'pulse-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.secondary.dark, // Copper/brown color for active tab
        tabBarInactiveTintColor: theme.colors.primary.main, // Teal color for inactive tabs
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={TodayScreen}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen 
        name="Journey" 
        component={JourneyScreen}
        options={{
          tabBarLabel: 'Journey'
        }}
      />
      <Tab.Screen 
        name="Chat" 
        component={AskScreen}
        options={{
          tabBarLabel: 'Chat'
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: 'Settings'
        }}
      />
    </Tab.Navigator>
  );
};

// Authentication navigator
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="SkipAuth" component={OnboardingNavigator} />
    </Stack.Navigator>
  );
};

// Onboarding navigator
const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BabyInfo" component={BabyInfoScreen} />
      <Stack.Screen name="FeedingMethod" component={FeedingMethodScreen} />
      <Stack.Screen name="SleepArrangement" component={SleepArrangementScreen} />
      <Stack.Screen name="ExperienceLevel" component={ExperienceLevelScreen} />
      <Stack.Screen name="TopConcern" component={TopConcernScreen} />
      <Stack.Screen name="Personalization" component={PersonalizationScreen} />
    </Stack.Navigator>
  );
};

// Root navigator - without NavigationContainer (moved to App.js)
const AppNavigation = () => {
  const { isAuthenticated } = useAuth();
  const { hasCompletedOnboarding } = useOnboarding();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        hasCompletedOnboarding ? (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        )
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.neutral.lightest, // Cream/beige background matching the design
    borderTopWidth: 0,
    paddingTop: 10,
    paddingBottom: 8, // Added padding at the bottom to prevent text cutoff
    height: 75, // Increased height slightly
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    fontWeight: '500',
    marginBottom: 8, // Increased margin to move text up
  },
});

export default AppNavigation;
