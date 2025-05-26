import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../src/theme';

// Create a consistent bottom tab bar component that matches the mockup
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Set icon based on route name
        let iconName;
        if (route.name === 'Today') {
          iconName = isFocused ? 'home' : 'home-outline';
        } else if (route.name === 'Journey') {
          iconName = isFocused ? 'football' : 'football-outline';
        } else if (route.name === 'Ask') {
          iconName = isFocused ? 'chatbubble' : 'chatbubble-outline';
        } else if (route.name === 'Saved') {
          iconName = isFocused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Settings') {
          iconName = isFocused ? 'settings' : 'settings-outline';
        }

        // Get color based on focus state
        const color = isFocused ? theme.colors.secondary.main : theme.colors.primary.main;

        return (
          <View key={index} style={styles.tabItem}>
            <Ionicons 
              name={iconName} 
              size={24} 
              color={color} 
              onPress={onPress}
            />
            <Text style={[
              styles.tabLabel,
              { color: color }
            ]}>
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
});

export default CustomTabBar;
