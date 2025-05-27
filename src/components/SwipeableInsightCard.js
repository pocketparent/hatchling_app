import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import theme from '../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;
const SWIPE_THRESHOLD = width * 0.2;

export default function SwipeableInsightCard({ panels }) {
  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const direction =
        translateX.value > SWIPE_THRESHOLD ? -1 :
        translateX.value < -SWIPE_THRESHOLD ? 1 : 0;

      if (direction !== 0) {
        const nextIndex = currentIndex.value + direction;
        if (nextIndex >= 0 && nextIndex < panels.length) {
          currentIndex.value = nextIndex;
        }
      }
      translateX.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const panel = panels[currentIndex.value];

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>{panel.title}</Text>
        <Text style={styles.body}>{panel.body}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: CARD_WIDTH,
  },
  title: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  body: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
});
