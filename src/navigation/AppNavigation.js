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
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Journey" component={JourneyScreen} />
        <Tab.Screen name="Ask" component={AskScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.neutral.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
    paddingTop: theme.spacing.spacing.xs,
    height: 60,
  },
  tabBarLabel: {
    fontSize: theme.typography.fontSizes.xs,
    fontFamily: theme.typography.fontFamilies.primary,
    fontWeight: theme.typography.fontWeights.medium,
  },
});
