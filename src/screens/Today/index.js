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
import Svg, { Path, Circle } from 'react-native-svg';

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
  
  // Render pagination dots
  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationDotsContainer}>
        {insightPanels.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive
            ]}
          />
        ))}
      </View>
    );
  };
  
  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <SafeAreaView style={styles.container}>
        {/* Background decorative elements - Exact match to reference */}
        <View style={styles.backgroundDecorations}>
          {/* Small dots */}
          <View style={[styles.smallDot, { top: '10%', left: '15%' }]} />
          <View style={[styles.smallDot, { top: '20%', left: '40%' }]} />
          <View style={[styles.smallDot, { top: '35%', right: '25%' }]} />
          <View style={[styles.smallDot, { top: '50%', left: '30%' }]} />
          <View style={[styles.smallDot, { top: '65%', right: '15%' }]} />
          <View style={[styles.smallDot, { top: '80%', left: '20%' }]} />
          <View style={[styles.smallDot, { top: '90%', right: '30%' }]} />
          <View style={[styles.smallDot, { top: '25%', right: '10%' }]} />
          
          {/* Medium dots */}
          <View style={[styles.mediumDot, { top: '15%', right: '35%' }]} />
          <View style={[styles.mediumDot, { top: '45%', left: '10%' }]} />
          <View style={[styles.mediumDot, { top: '70%', right: '40%' }]} />
          <View style={[styles.mediumDot, { top: '85%', left: '40%' }]} />
          
          {/* Star shapes */}
          <View style={[styles.star, { top: '8%', right: '20%' }]}>
            <Svg height="14" width="14" viewBox="0 0 24 24">
              <Path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="rgba(255, 255, 255, 0.3)"
              />
            </Svg>
          </View>
          <View style={[styles.star, { top: '30%', left: '20%' }]}>
            <Svg height="12" width="12" viewBox="0 0 24 24">
              <Path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="rgba(255, 255, 255, 0.3)"
              />
            </Svg>
          </View>
          
          {/* Leaf shapes */}
          <View style={[styles.leaf, { top: '25%', right: '15%' }]}>
            <Svg height="20" width="30" viewBox="0 0 24 24">
              <Path
                d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
                fill="rgba(255, 255, 255, 0.2)"
              />
            </Svg>
          </View>
          <View style={[styles.leaf, { top: '60%', left: '15%', transform: [{ rotate: '45deg' }] }]}>
            <Svg height="20" width="30" viewBox="0 0 24 24">
              <Path
                d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
                fill="rgba(255, 255, 255, 0.2)"
              />
            </Svg>
          </View>
          <View style={[styles.leaf, { bottom: '20%', right: '25%', transform: [{ rotate: '-30deg' }] }]}>
            <Svg height="20" width="30" viewBox="0 0 24 24">
              <Path
                d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
                fill="rgba(255, 255, 255, 0.2)"
              />
            </Svg>
          </View>
        </View>
        
        {/* Hatchling header */}
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Hatchling</Text>
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
                
                <Text style={styles.insightText}>
                  {currentPanel.content}
                </Text>
                
                {/* Pagination dots */}
                {renderPaginationDots()}
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
        
        {/* REMOVED: Bottom navigation - Now using app-level navigation only */}
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
    zIndex: 0,
  },
  smallDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
  },
  mediumDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
  },
  star: {
    position: 'absolute',
  },
  leaf: {
    position: 'absolute',
  },
  appHeader: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 5,
    zIndex: 1,
  },
  appTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
    zIndex: 1,
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
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20, // Reduced from 80 since we removed the custom nav bar
    marginTop: 10,
    zIndex: 1,
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
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#B05E35', // Copper/brown color matching the design
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  insightContent: {
    padding: 24,
    paddingTop: 0,
    paddingHorizontal: 16,
  },
  insightTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 32,
    fontWeight: '700',
    color: '#004D4D', // Dark teal matching the design
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 38,
  },
  insightText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 18,
    color: '#004D4D', // Dark teal matching the design
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
    marginBottom: 24,
  },
  paginationDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 77, 77, 0.2)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#004D4D',
    width: 10,
    height: 10,
    borderRadius: 5,
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
    fontSize: 16,
    color: '#FFFFFF',
  },
});
