import React, { useState } from 'react';
import { 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  Alert,
  View
} from 'react-native';
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
import { ScreenErrorWrapper } from '../../components/error/ErrorComponents';
import theme from '../../theme';

// Import UI components
import {
  Container,
  SafeContainer,
  ScrollContainer,
  Section,
  Row,
  Column,
  Spacer,
  Card,
  H1,
  H2,
  H3,
  Body,
  BodySmall,
  Caption,
  Label,
  AppHeader,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  IconButton
} from '../../components/ui';

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card and upcoming check-ins
 * Matches the design from the provided screenshots with requested modifications
 */
export default function TodayScreen({ navigation }) {
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
      <Row style={styles.paginationDotsContainer}>
        {insightPanels.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive
            ]}
          />
        ))}
      </Row>
    );
  };
  
  // Handle weekly check-in
  const handleWeeklyCheckIn = () => {
    Alert.alert(
      "Weekly Check-in",
      "How is Emma doing this week? This will help us personalize your experience.",
      [
        {
          text: "Complete Check-in",
          onPress: () => console.log("Weekly check-in started"),
          style: "default"
        },
        {
          text: "Remind Me Later",
          style: "cancel"
        }
      ]
    );
  };
  
  return (
    <ScreenErrorWrapper screenName="Today" navigation={navigation}>
      <GestureHandlerRootView style={styles.gestureRoot}>
        <Container>
          <SafeContainer>
            <ScrollContainer contentContainerStyle={styles.scrollContent}>
              {/* App header with logo */}
              <AppHeader title="Today" />
              
              {/* Header with baby info */}
              <Section>
                <Row style={styles.header}>
                  <View style={styles.avatarContainer}>
                    <Image 
                      source={require('../../../assets/baby-avatar.png')} 
                      style={styles.avatar}
                      defaultSource={require('../../../assets/baby-avatar.png')}
                    />
                  </View>
                  <Column style={styles.babyInfo}>
                    <H1 color="white">Emma,</H1>
                    <H2 color="white">4 months</H2>
                  </Column>
                </Row>
              </Section>
              
              {/* Main insight card */}
              <Section>
                <Card style={styles.insightCard}>
                  <Label style={styles.insightLabel}>DAILY INSIGHT</Label>
                  
                  <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.insightContent, animatedStyle]}>
                      <H2 style={styles.insightTitle}>
                        {currentPanel.title}
                      </H2>
                      
                      <Body style={styles.insightText}>
                        {currentPanel.content}
                      </Body>
                      
                      {/* Pagination dots */}
                      {renderPaginationDots()}
                    </Animated.View>
                  </PanGestureHandler>
                  
                  {/* Action buttons */}
                  <Row style={styles.actionButtonsContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                      <View style={styles.iconContainer}>
                        <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
                      </View>
                      <BodySmall color="white">Save</BodySmall>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.actionButton}>
                      <View style={styles.iconContainer}>
                        <Ionicons name="share-outline" size={24} color="#FFFFFF" />
                      </View>
                      <BodySmall color="white">Share</BodySmall>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.actionButton}>
                      <View style={styles.iconContainer}>
                        <Ionicons name="happy-outline" size={24} color="#FFFFFF" />
                      </View>
                      <BodySmall color="white">Helpful</BodySmall>
                    </TouchableOpacity>
                  </Row>
                </Card>
                
                {/* Weekly Check-in Card */}
                <Card style={styles.weeklyCheckInCard}>
                  <TouchableOpacity 
                    style={styles.weeklyCheckInContent}
                    onPress={handleWeeklyCheckIn}
                  >
                    <Row align="center" justify="space-between">
                      <Row align="center">
                        <View style={styles.weeklyCheckInIconContainer}>
                          <Ionicons name="clipboard-outline" size={24} color="#FFFFFF" />
                        </View>
                        <Column style={styles.weeklyCheckInTextContainer}>
                          <H3 color="white">Weekly Check-in</H3>
                          <BodySmall color="white">
                            Tell us how Emma is doing this week
                          </BodySmall>
                        </Column>
                      </Row>
                      <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
                    </Row>
                  </TouchableOpacity>
                </Card>
                
                {/* Upcoming check-ins reminder */}
                <Card style={styles.upcomingCheckInsCard}>
                  <Row style={styles.upcomingCheckInsHeader} justify="space-between" align="center">
                    <H3 color="dark">Upcoming Check-ins</H3>
                    <TextButton 
                      title="See All" 
                      onPress={() => console.log('See all check-ins')}
                    />
                  </Row>
                  
                  <Card style={styles.checkInItem}>
                    <Row align="center">
                      <View style={styles.checkInIconContainer}>
                        <Ionicons name="calendar" size={24} color={theme.colors.primary.main} />
                      </View>
                      <Column style={styles.checkInContent}>
                        <Body>4-Month Wellness Check</Body>
                        <Caption color="medium">May 30, 2025</Caption>
                      </Column>
                      <PrimaryButton 
                        title="Prepare" 
                        onPress={() => console.log('Prepare for check-in')}
                        style={styles.checkInButton}
                      />
                    </Row>
                  </Card>
                </Card>
              </Section>
            </ScrollContainer>
          </SafeContainer>
        </Container>
      </GestureHandlerRootView>
    </ScreenErrorWrapper>
  );
}

const styles = {
  gestureRoot: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  header: {
    paddingTop: 5,
    paddingBottom: 10,
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
    marginRight: 15,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  babyInfo: {
    justifyContent: 'center',
  },
  insightCard: {
    backgroundColor: '#F8EFE0', // Cream/beige background matching the design
    overflow: 'hidden',
    marginBottom: 20,
  },
  insightLabel: {
    fontSize: 16,
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
    color: '#004D4D', // Dark teal matching the design
    textAlign: 'center',
    marginBottom: 24,
  },
  insightText: {
    color: '#004D4D', // Dark teal matching the design
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  paginationDotsContainer: {
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
  weeklyCheckInCard: {
    backgroundColor: '#2E7D7D', // Darker teal for contrast
    marginBottom: 20,
    padding: 0,
    overflow: 'hidden',
  },
  weeklyCheckInContent: {
    padding: 16,
  },
  weeklyCheckInIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  weeklyCheckInTextContainer: {
    flex: 1,
  },
  upcomingCheckInsCard: {
    backgroundColor: '#F8EFE0',
    marginBottom: 20,
  },
  upcomingCheckInsHeader: {
    marginBottom: 16,
  },
  checkInItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 12,
  },
  checkInIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 77, 77, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkInContent: {
    flex: 1,
  },
  checkInButton: {
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
};
