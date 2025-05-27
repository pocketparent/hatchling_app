import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';

// Import screen placeholders
import TodayScreen from '../screens/Today';
import JourneyScreen from '../screens/Journey';
import AskScreen from '../screens/Ask';
import SavedScreen from '../screens/Saved';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

/**
 * Main navigation component for Hatchling app
 * Implements bottom tab navigation with the five main sections
 */
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Set icon based on route name
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Milestones') {
              iconName = focused ? 'pulse' : 'pulse-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#B05E35', // Copper/brown color for active tab
          tabBarInactiveTintColor: '#4A9B9B', // Teal color for inactive tabs
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
          name="Milestones" 
          component={JourneyScreen}
          options={{
            tabBarLabel: 'Milestones'
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
          name="Saved" 
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved'
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the design
    borderTopWidth: 0,
    paddingTop: 12,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    fontWeight: '500',
    marginBottom: 5,
  },
});
