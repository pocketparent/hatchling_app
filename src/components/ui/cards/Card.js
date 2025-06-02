/**
 * Card Component
 * 
 * A reusable card component with consistent styling
 * Used throughout the app for content containers
 */
import React from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import theme from '../../../theme';
import Row from '../layout/Row';
import Column from '../layout/Column';
import { Body, BodySmall, Caption } from '../Typography';

const Card = ({ 
  children,
  variant = 'default',
  onPress,
  style,
  elevation = 'soft', // Changed default from 'default' to 'soft'
  activeElevation = 'inner',
  pressable = false,
  animated = false
}) => {
  // Animation value for subtle hover effect
  const animatedValue = React.useRef(new Animated.Value(1)).current;
  
  // Get card styling based on variant
  const getCardStyles = () => {
    // Base styles for each variant
    const variantStyles = {
      'outlined': {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.neutral.light,
        ...theme.spacing.shadows.none,
      },
      'elevated': {
        backgroundColor: theme.colors.neutral.white,
        ...theme.spacing.shadows.medium,
      },
      'default': {
        backgroundColor: theme.colors.neutral.white,
        ...theme.spacing.shadows.soft, // Changed from small to soft
      }
    };
    
    // Get the base style for the variant
    const baseStyle = variantStyles[variant] || variantStyles.default;
    
    // Apply elevation shadow if specified
    if (elevation !== 'default' && elevation !== 'none') {
      return {
        ...baseStyle,
        ...theme.spacing.shadows[elevation],
      };
    }
    
    return baseStyle;
  };

  const cardStyles = getCardStyles();
  
  // Handle press in animation
  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.98,
      friction: 5,
      tension: 300,
      useNativeDriver: true,
    }).start();
  };
  
  // Handle press out animation
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 400,
      useNativeDriver: true,
    }).start();
  };
  
  // If card is pressable, wrap in Pressable component with active state
  if (pressable || onPress) {
    // If animated, use Animated.View for transform effects
    if (animated) {
      return (
        <Pressable 
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={({ pressed }) => [
            styles.container,
            cardStyles,
            style,
            pressed && activeElevation && { ...theme.spacing.shadows[activeElevation] }
          ]}
        >
          <Animated.View style={{
            transform: [{ scale: animatedValue }],
            width: '100%',
          }}>
            {children}
          </Animated.View>
        </Pressable>
      );
    }
    
    // Standard pressable without animation
    return (
      <Pressable 
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          cardStyles,
          style,
          pressed && activeElevation && { ...theme.spacing.shadows[activeElevation] }
        ]}
      >
        {children}
      </Pressable>
    );
  }
  
  // Otherwise render as a simple View
  return (
    <View 
      style={[
        styles.container,
        cardStyles,
        style
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.spacing.borderRadius.lg, // Changed from md to lg
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.md,
  }
});

export default Card;
