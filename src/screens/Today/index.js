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
        {/* Background decorative elements */}
        <View style={styles.backgroundDecorations}>
          {/* Stars */}
          <View style={[styles.star, styles.star1]} />
          <View style={[styles.star, styles.star2]} />
          <View style={[styles.star, styles.star3]} />
          <View style={[styles.star, styles.star4]} />
          <View style={[styles.star, styles.star5]} />
          <View style={[styles.star, styles.star6]} />
          <View style={[styles.star, styles.star7]} />
          <View style={[styles.star, styles.star8]} />
          <View style={[styles.star, styles.star9]} />
          <View style={[styles.star, styles.star10]} />
          <View style={[styles.star, styles.star11]} />
          <View style={[styles.star, styles.star12]} />
          <View style={[styles.star, styles.star13]} />
          <View style={[styles.star, styles.star14]} />
          <View style={[styles.star, styles.star15]} />
          
          {/* Leaves */}
          <View style={[styles.leaf, styles.leaf1]} />
          <View style={[styles.leaf, styles.leaf2]} />
          <View style={[styles.leaf, styles.leaf3]} />
          <View style={[styles.leaf, styles.leaf4]} />
          <View style={[styles.leaf, styles.leaf5]} />
          <View style={[styles.leaf, styles.leaf6]} />
          <View style={[styles.leaf, styles.leaf7]} />
          <View style={[styles.leaf, styles.leaf8]} />
          
          {/* Dots */}
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
          <View style={[styles.dot, styles.dot4]} />
          <View style={[styles.dot, styles.dot5]} />
          <View style={[styles.dot, styles.dot6]} />
          <View style={[styles.dot, styles.dot7]} />
          <View style={[styles.dot, styles.dot8]} />
          <View style={[styles.dot, styles.dot9]} />
          <View style={[styles.dot, styles.dot10]} />
          <View style={[styles.dot, styles.dot11]} />
          <View style={[styles.dot, styles.dot12]} />
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
        
        {/* Bottom navigation - SINGLE NAVIGATION BAR */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home" size={24} color="#B05E35" />
            <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="pulse" size={24} color="#4A9B9B" />
            <Text style={styles.navText}>Milestones</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="chatbubble-outline" size={24} color="#4A9B9B" />
            <Text style={styles.navText}>Chat</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="bookmark" size={24} color="#4A9B9B" />
            <Text style={styles.navText}>Saved</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="settings-outline" size={24} color="#4A9B9B" />
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
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
  star: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
  },
  star1: { top: '8%', right: '20%' },
  star2: { top: '15%', left: '15%' },
  star3: { bottom: '30%', right: '25%' },
  star4: { top: '45%', right: '10%' },
  star5: { bottom: '50%', left: '20%' },
  star6: { top: '10%', left: '30%' },
  star7: { bottom: '15%', right: '15%' },
  star8: { top: '35%', left: '25%' },
  star9: { top: '25%', right: '35%' },
  star10: { bottom: '35%', left: '10%' },
  star11: { top: '60%', right: '30%' },
  star12: { bottom: '25%', left: '35%' },
  star13: { top: '20%', left: '45%' },
  star14: { bottom: '45%', right: '40%' },
  star15: { top: '50%', left: '5%' },
  
  leaf: {
    position: 'absolute',
    width: 20,
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
  leaf1: { bottom: '20%', left: '10%', transform: [{ rotate: '30deg' }] },
  leaf2: { top: '40%', right: '10%', transform: [{ rotate: '-30deg' }] },
  leaf3: { bottom: '40%', left: '30%', transform: [{ rotate: '45deg' }] },
  leaf4: { top: '20%', right: '30%', transform: [{ rotate: '-45deg' }] },
  leaf5: { top: '30%', left: '5%', transform: [{ rotate: '60deg' }] },
  leaf6: { bottom: '30%', right: '5%', transform: [{ rotate: '-60deg' }] },
  leaf7: { top: '55%', right: '25%', transform: [{ rotate: '15deg' }] },
  leaf8: { bottom: '55%', left: '25%', transform: [{ rotate: '-15deg' }] },
  
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
  },
  dot1: { bottom: '60%', right: '40%' },
  dot2: { top: '70%', left: '40%' },
  dot3: { top: '30%', right: '50%' },
  dot4: { bottom: '25%', left: '50%' },
  dot5: { top: '55%', left: '15%' },
  dot6: { bottom: '65%', left: '25%' },
  dot7: { top: '75%', right: '15%' },
  dot8: { bottom: '35%', right: '45%' },
  dot9: { top: '15%', left: '55%' },
  dot10: { bottom: '15%', right: '55%' },
  dot11: { top: '65%', left: '45%' },
  dot12: { bottom: '45%', right: '20%' },
  
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
    paddingBottom: 80, // Space for bottom navigation
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
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8EFE0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  navText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: '#4A9B9B',
    marginTop: 4,
    fontWeight: '500',
  },
  navTextActive: {
    color: '#B05E35',
    fontWeight: '600',
  },
});
