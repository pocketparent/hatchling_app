import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import theme from '../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;
const SWIPE_THRESHOLD = width * 0.2;

/**
 * BottomSheetInsight Component
 * 
 * A component that displays insight content in a bottom sheet with swipeable panels
 * Uses @gorhom/bottom-sheet for the sheet behavior and gesture handling
 */
export default function BottomSheetInsight({ panels, initialSnapPoint = '50%' }) {
  // Bottom sheet reference
  const bottomSheetRef = useRef(null);

  // Variables for swipeable content
  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  
  // Snap points for the bottom sheet (percentage of screen height)
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  
  // Callbacks for sheet events
  const handleSheetChanges = useCallback((index) => {
    console.log('Bottom sheet changed to index:', index);
  }, []);

  // Gesture handler for horizontal swiping
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
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

  // Animated style for the swipeable content
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Get current panel based on index
  const panel = panels[currentIndex.value];

  // Pagination indicator
  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {panels.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex.value && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  // Action buttons
  const renderActionButtons = () => {
    return (
      <View style={styles.actionButtonsContainer}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Save</Text>
        </View>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share</Text>
        </View>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Helpful</Text>
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1} // Start at 50% by default
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.bottomSheetIndicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.insightTitle}>Daily Insight</Text>
          
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.card, animatedStyle]}>
              <Text style={styles.title}>{panel.title}</Text>
              <Text style={styles.body}>{panel.body}</Text>
            </Animated.View>
          </PanGestureHandler>
          
          {renderPaginationDots()}
          {renderActionButtons()}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetBackground: {
    backgroundColor: theme.colors.neutral.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 16,
  },
  bottomSheetIndicator: {
    backgroundColor: theme.colors.primary.main,
    width: 40,
    height: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.spacing.lg,
  },
  insightTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
    alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: CARD_WIDTH,
    minHeight: 200,
  },
  title: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  body: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    lineHeight: 24,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.spacing.lg,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.neutral.light,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: theme.colors.primary.main,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: theme.spacing.spacing.xl,
  },
  actionButton: {
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.lightest,
  },
  actionButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.dark,
  },
});
