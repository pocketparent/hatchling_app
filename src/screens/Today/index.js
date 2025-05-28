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
import BackgroundImage from '../../components/decorations/BackgroundImage';

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
      <BackgroundImage>
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
      </BackgroundImage>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
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
