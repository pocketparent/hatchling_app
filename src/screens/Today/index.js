import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card
 * Matches the design from the provided screenshots
 */
export default function TodayScreen() {
  // State for tracking current insight panel
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Insights data
  const insightPanels = [
    {
      title: "Why Your Good Sleeper Suddenly Isn't",
      content: "Is Emma suddenly waking more frequently?",
    },
    {
      title: "What's Going On?",
      content: "Their brain is busy processing motor learning in light sleep — totally normal!",
    },
    {
      title: "Try This",
      content: "Try moving bedtime slightly earlier and offer a quiet response at 4am.",
    },
    {
      title: "When To Seek Help",
      content: "If sleep disruption persists beyond 2-3 weeks, consider consulting your pediatrician.",
    },
  ];
  
  // Animation values
  const translateX = useSharedValue(0);
  const { width } = Dimensions.get('window');
  const SWIPE_THRESHOLD = width * 0.2;
  
  // Update current index
  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  
  // Gesture handler for swipe
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
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < insightPanels.length) {
          runOnJS(updateIndex)(newIndex);
        }
      }
      translateX.value = withSpring(0);
    },
  });
  
  // Animated style for swipe
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  
  // Current insight panel
  const currentPanel = insightPanels[currentIndex];
  
  // Handle navigation
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < insightPanels.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <SafeAreaView style={styles.container}>
        {/* Background decorative elements */}
        <View style={styles.backgroundDecorations}>
          {/* Decorative elements would go here */}
        </View>
        
        {/* Header with baby info */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../../assets/baby-avatar.png')} 
              style={styles.avatar}
              defaultSource={require('../../../assets/baby-avatar.png')}
            />
          </View>
          <View style={styles.babyInfo}>
            <Text style={styles.babyName}>Emma,</Text>
            <Text style={styles.babyAge}>4 months</Text>
          </View>
        </View>
        
        {/* Main insight card */}
        <View style={styles.cardContainer}>
          <View style={styles.insightCard}>
            <Text style={styles.insightLabel}>DAILY INSIGHT</Text>
            
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={[styles.insightContent, animatedStyle]}>
                <Text style={styles.insightTitle}>
                  {currentPanel.title}
                </Text>
                
                <View style={styles.navigationContainer}>
                  <TouchableOpacity 
                    style={styles.navArrow}
                    onPress={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    <Text style={[styles.arrowText, currentIndex === 0 && styles.arrowDisabled]}>{'<'}</Text>
                  </TouchableOpacity>
                  
                  <Text style={styles.insightText}>
                    {currentPanel.content}
                  </Text>
                  
                  <TouchableOpacity 
                    style={styles.navArrow}
                    onPress={handleNext}
                    disabled={currentIndex === insightPanels.length - 1}
                  >
                    <Text style={[styles.arrowText, currentIndex === insightPanels.length - 1 && styles.arrowDisabled]}>{'>'}</Text>
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.pagination}>
                  {currentIndex + 1}/{insightPanels.length}
                </Text>
              </Animated.View>
            </PanGestureHandler>
            
            {/* Action buttons */}
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.actionText}>Save</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Ionicons name="share-outline" size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconContainer}>
                  <Ionicons name="happy-outline" size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.actionText}>Helpful</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Bottom navigation is handled by the tab navigator */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#4A9B9B', // Teal background matching the design
  },
  backgroundDecorations: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  babyInfo: {
    marginLeft: 15,
  },
  babyName: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  babyAge: {
    fontFamily: 'SFProText-Regular',
    fontSize: 22,
    color: '#FFFFFF',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for bottom navigation
  },
  insightCard: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the design
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  insightLabel: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: '#B25B45', // Coral/brown color matching the design
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  insightContent: {
    padding: 24,
    paddingTop: 0,
  },
  insightTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 32,
    fontWeight: '700',
    color: '#005E5D', // Dark teal matching the design
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 38,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navArrow: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 24,
    color: '#4A9B9B', // Teal matching the design
  },
  arrowDisabled: {
    opacity: 0.3,
  },
  insightText: {
    flex: 1,
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    color: '#005E5D', // Dark teal matching the design
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  pagination: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: '#005E5D', // Dark teal matching the design
    textAlign: 'center',
    marginBottom: 16,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F79770', // Coral/orange matching the design
    paddingVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 4,
  },
  actionText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
