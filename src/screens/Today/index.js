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
  Button,
  Section,
  CardTitle
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
          {/* Header with baby info */}
          <Section style={styles.header}>
            <Row align="center">
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
          <Section style={styles.insightSection}>
            <Card 
              variant="default"
              style={{
                backgroundColor: theme.colors.neutral.lightest,
                padding: 0,
                borderRadius: 24,
                overflow: 'hidden',
                marginBottom: theme.spacing.spacing.md,
                ...theme.spacing.shadows.small,
              }}
            >
              <Caption 
                style={{
                  fontSize: 16,
                  color: theme.colors.accent.copper,
                  textAlign: 'center',
                  marginTop: theme.spacing.spacing.lg,
                  marginBottom: theme.spacing.spacing.md,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                DAILY INSIGHT
              </Caption>
              
              <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View 
                  style={[
                    {
                      padding: theme.spacing.spacing.lg,
                      paddingTop: 0,
                      paddingHorizontal: theme.spacing.spacing.md,
                    }, 
                    animatedStyle
                  ]}
                >
                  <H2 
                    style={{
                      color: theme.colors.primary.dark,
                      textAlign: 'center',
                      marginBottom: theme.spacing.spacing.md,
                      fontSize: 28,
                      fontWeight: '600',
                    }}
                  >
                    {currentPanel.title}
                  </H2>
                  
                  <Body 
                    style={{
                      color: theme.colors.primary.dark,
                      textAlign: 'center',
                      paddingHorizontal: theme.spacing.spacing.md,
                      marginBottom: theme.spacing.spacing.lg,
                    }}
                  >
                    {currentPanel.content}
                  </Body>
                  
                  {/* Pagination dots */}
                  <Row 
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: theme.spacing.spacing.md,
                      marginTop: theme.spacing.spacing.md,
                    }}
                  >
                    {insightPanels.map((_, index) => (
                      <View
                        key={index}
                        style={[
                          {
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(0, 77, 77, 0.2)',
                            marginHorizontal: theme.spacing.spacing.xs,
                          },
                          index === currentIndex && {
                            backgroundColor: theme.colors.primary.dark,
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                          }
                        ]}
                      />
                    ))}
                  </Row>
                </Animated.View>
              </PanGestureHandler>
              
              {/* Action buttons */}
              <Row 
                style={{
                  justifyContent: 'space-around',
                  backgroundColor: theme.colors.secondary.light,
                  paddingVertical: theme.spacing.spacing.md,
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                }}
              >
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <View style={{ marginBottom: theme.spacing.spacing.xs }}>
                    <Ionicons name="bookmark-outline" size={24} color={theme.colors.neutral.white} />
                  </View>
                  <BodySmall color="white">Save</BodySmall>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <View style={{ marginBottom: theme.spacing.spacing.xs }}>
                    <Ionicons name="share-outline" size={24} color={theme.colors.neutral.white} />
                  </View>
                  <BodySmall color="white">Share</BodySmall>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ alignItems: 'center' }}>
                  <View style={{ marginBottom: theme.spacing.spacing.xs }}>
                    <Ionicons name="happy-outline" size={24} color={theme.colors.neutral.white} />
                  </View>
                  <BodySmall color="white">Helpful</BodySmall>
                </TouchableOpacity>
              </Row>
            </Card>
            
            {/* Weekly Check-in Card */}
            <Card 
              variant="default"
              style={{
                backgroundColor: theme.colors.primary.dark,
                padding: 0,
                overflow: 'hidden',
                marginBottom: theme.spacing.spacing.md,
                borderRadius: theme.spacing.borderRadius.md,
                ...theme.spacing.shadows.small,
              }}
            >
              <TouchableOpacity 
                style={{ padding: theme.spacing.spacing.md }}
                onPress={handleWeeklyCheckIn}
              >
                <Row align="center" justify="space-between">
                  <Row align="center">
                    <View style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: theme.spacing.spacing.md,
                    }}>
                      <Ionicons name="clipboard-outline" size={24} color={theme.colors.neutral.white} />
                    </View>
                    <Column style={{ flex: 1 }}>
                      <H3 color="white">Weekly Check-in</H3>
                      <BodySmall color="white">
                        Tell us how Emma is doing this week
                      </BodySmall>
                    </Column>
                  </Row>
                  <Ionicons name="chevron-forward" size={24} color={theme.colors.neutral.white} />
                </Row>
              </TouchableOpacity>
            </Card>
            
            {/* Upcoming check-ins reminder */}
            <Card 
              variant="default"
              style={{
                backgroundColor: theme.colors.neutral.lightest,
                padding: theme.spacing.spacing.md,
                marginBottom: theme.spacing.spacing.md,
                borderRadius: theme.spacing.borderRadius.md,
                ...theme.spacing.shadows.small,
              }}
            >
              <CardTitle 
                title="Upcoming Check-ins"
                action={true}
                actionText="See All"
                onActionPress={() => console.log('See all check-ins')}
              />
              
              <Card 
                variant="default"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  padding: theme.spacing.spacing.md,
                  marginBottom: 0,
                }}
              >
                <Row align="center">
                  <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'rgba(0, 77, 77, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: theme.spacing.spacing.md,
                  }}>
                    <Ionicons name="calendar" size={24} color={theme.colors.primary.main} />
                  </View>
                  <Column style={{ flex: 1 }}>
                    <Body>4-Month Wellness Check</Body>
                    <Caption color="medium">May 30, 2025</Caption>
                  </Column>
                  <Button 
                    label="Prepare" 
                    onPress={() => console.log('Prepare for check-in')}
                    size="small"
                    style={{
                      height: 32,
                      paddingVertical: 0,
                      paddingHorizontal: theme.spacing.spacing.md,
                      justifyContent: 'center',
                    }}
                  />
                </Row>
              </Card>
            </Card>
          </Section>
          
          <Spacer size="xl" />
        </Container>
      </GestureHandlerRootView>
    </ScreenErrorWrapper>
  );
}

const styles = {
  gestureRoot: {
    flex: 1,
  },
  header: {
    paddingTop: theme.spacing.spacing.xs,
    paddingBottom: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.neutral.white,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.neutral.white,
    marginRight: theme.spacing.spacing.md,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  babyInfo: {
    justifyContent: 'center',
  },
  insightSection: {
    paddingHorizontal: theme.spacing.spacing.md,
  },
  insightCard: {
    backgroundColor: theme.colors.neutral.lightest, // Cream/beige background
    overflow: 'hidden',
    marginBottom: theme.spacing.spacing.md,
    padding: 0,
    borderRadius: 24, // More rounded corners to match design
    ...theme.spacing.shadows.small,
  },
  insightLabel: {
    fontSize: 16,
    color: theme.colors.accent.copper,
    textAlign: 'center',
    marginTop: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  insightContent: {
    padding: theme.spacing.spacing.lg,
    paddingTop: 0,
    paddingHorizontal: theme.spacing.spacing.md,
  },
  insightTitle: {
    color: theme.colors.primary.dark,
    textAlign: 'center',
    marginBottom: theme.spacing.spacing.md,
    fontSize: 28,
    fontWeight: '600',
  },
  insightText: {
    color: theme.colors.primary.dark,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.lg,
  },
  paginationDotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
    marginTop: theme.spacing.spacing.md,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 77, 77, 0.2)',
    marginHorizontal: theme.spacing.spacing.xs,
  },
  paginationDotActive: {
    backgroundColor: theme.colors.primary.dark,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  actionButtonsContainer: {
    justifyContent: 'space-around',
    backgroundColor: theme.colors.secondary.light, // Coral/orange color from the reference
    paddingVertical: theme.spacing.spacing.md,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: theme.spacing.spacing.xs,
  },
  weeklyCheckInCard: {
    backgroundColor: theme.colors.primary.dark,
    marginBottom: theme.spacing.spacing.md,
    padding: 0,
    overflow: 'hidden',
    borderRadius: theme.spacing.borderRadius.md,
    ...theme.spacing.shadows.small,
  },
  weeklyCheckInContent: {
    padding: theme.spacing.spacing.md,
  },
  weeklyCheckInIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  weeklyCheckInTextContainer: {
    flex: 1,
  },
  upcomingCheckInsCard: {
    backgroundColor: theme.colors.background.card,
    marginBottom: theme.spacing.spacing.md,
    padding: theme.spacing.spacing.md,
    borderRadius: theme.spacing.borderRadius.md,
    ...theme.spacing.shadows.small,
  },
  checkInItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: theme.spacing.spacing.md,
  },
  checkInIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 77, 77, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.spacing.md,
  },
  checkInContent: {
    flex: 1,
  },
  checkInButton: {
    height: 32,
    paddingVertical: 0,
    paddingHorizontal: theme.spacing.spacing.md,
    justifyContent: 'center',
  },
};
