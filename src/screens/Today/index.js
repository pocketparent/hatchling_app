import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  ScrollView,
  Animated,
  PanResponder
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../App';
import theme from '../../src/theme';
import { mockInsights } from '../../src/data/mockInsights';

const { width } = Dimensions.get('window');

const TodayScreen = () => {
  const { babyName, babyAge } = useContext(AppContext);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showCheckIn, setShowCheckIn] = useState(false);
  
  // Get current insight
  const currentInsight = mockInsights[currentInsightIndex];
  
  // For swipe animation
  const position = useRef(new Animated.ValueXY()).current;
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120 && currentPage > 0) {
          // Swipe right - go to previous page
          swipeRight();
        } else if (gesture.dx < -120 && currentPage < 3) {
          // Swipe left - go to next page
          swipeLeft();
        } else {
          // Return to original position
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: false
          }).start();
        }
      }
    })
  ).current;
  
  const swipeLeft = () => {
    Animated.timing(position, {
      toValue: { x: -width, y: 0 },
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setCurrentPage(currentPage + 1);
      position.setValue({ x: 0, y: 0 });
    });
  };
  
  const swipeRight = () => {
    Animated.timing(position, {
      toValue: { x: width, y: 0 },
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setCurrentPage(currentPage - 1);
      position.setValue({ x: 0, y: 0 });
    });
  };
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  // Get content for current page
  const getPageContent = () => {
    switch(currentPage) {
      case 0:
        return (
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>{currentInsight.title}</Text>
            <Text style={styles.insightQuestion}>{currentInsight.challenge}</Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.insightContent}>
            <Text style={styles.insightSectionTitle}>Why This Happens</Text>
            <Text style={styles.insightBody}>{currentInsight.why}</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.insightContent}>
            <Text style={styles.insightSectionTitle}>What To Try</Text>
            <Text style={styles.insightBody}>{currentInsight.try}</Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.insightContent}>
            <Text style={styles.insightSectionTitle}>Reassurance</Text>
            <Text style={styles.insightBody}>{currentInsight.reassurance}</Text>
          </View>
        );
      default:
        return null;
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundElements}>
        {/* Decorative elements */}
        <View style={[styles.decorativeElement, { top: 50, left: 20 }]} />
        <View style={[styles.decorativeElement, { top: 120, right: 30 }]} />
        <View style={[styles.decorativeElement, { top: 200, left: 40 }]} />
        <View style={[styles.decorativeStar, { top: 80, right: 50 }]} />
        <View style={[styles.decorativeStar, { top: 180, left: 30 }]} />
        <View style={[styles.decorativeLeaf, { top: 100, right: 20 }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.appTitle}>Hatchling</Text>
      </View>
      
      <View style={styles.profileSection}>
        <Image 
          source={require('../../assets/baby_avatar.png')} 
          style={styles.profileImage}
          defaultSource={require('../../assets/baby_avatar.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{babyName},</Text>
          <Text style={styles.profileAge}>{ageInMonths} months</Text>
        </View>
      </View>
      
      <View style={styles.insightContainer}>
        <Text style={styles.insightLabel}>DAILY INSIGHT</Text>
        
        <Animated.View 
          style={[
            styles.insightCard,
            { transform: position.getTranslateTransform() }
          ]}
          {...panResponder.panHandlers}
        >
          {getPageContent()}
          
          <View style={styles.navigationIndicators}>
            <TouchableOpacity 
              style={styles.navArrow} 
              onPress={swipeRight}
              disabled={currentPage === 0}
            >
              <Ionicons 
                name="chevron-back" 
                size={24} 
                color={currentPage === 0 ? 'transparent' : theme.colors.primary.main} 
              />
            </TouchableOpacity>
            
            <Text style={styles.pageIndicator}>{currentPage + 1}/4</Text>
            
            <TouchableOpacity 
              style={styles.navArrow} 
              onPress={swipeLeft}
              disabled={currentPage === 3}
            >
              <Ionicons 
                name="chevron-forward" 
                size={24} 
                color={currentPage === 3 ? 'transparent' : theme.colors.primary.main} 
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="happy-outline" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Helpful</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Weekly Check-In Section */}
      <View style={styles.checkInSection}>
        <TouchableOpacity 
          style={styles.checkInButton}
          onPress={() => setShowCheckIn(true)}
        >
          <Ionicons name="calendar-outline" size={24} color={theme.colors.primary.main} />
          <View style={styles.checkInTextContainer}>
            <Text style={styles.checkInTitle}>Weekly Check-In</Text>
            <Text style={styles.checkInSubtitle}>Help us personalize content for {babyName}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.colors.primary.main} />
        </TouchableOpacity>
      </View>
      
      {/* Upcoming Milestones Preview */}
      <View style={styles.milestonesPreview}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Milestones</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.milestoneCard}>
          <View style={styles.milestoneIconContainer}>
            <Ionicons name="body-outline" size={24} color={theme.colors.content.development} />
          </View>
          <View style={styles.milestoneContent}>
            <Text style={styles.milestoneTitle}>Rolling Over</Text>
            <Text style={styles.milestoneDescription}>Most babies master this milestone between 4-6 months</Text>
          </View>
        </View>
      </View>
      
      {/* Spacing at bottom */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  decorativeElement: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  decorativeStar: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '180deg' }],
  },
  decorativeLeaf: {
    position: 'absolute',
    width: 20,
    height: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '45deg' }],
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.neutral.lightest,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileAge: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  insightContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  insightLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.secondary.main,
    marginBottom: 10,
    textAlign: 'center',
  },
  insightCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 20,
    padding: 20,
    minHeight: 200,
  },
  insightContent: {
    marginBottom: 20,
  },
  insightTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    textAlign: 'center',
    marginBottom: 20,
  },
  insightQuestion: {
    fontSize: 18,
    color: theme.colors.primary.dark,
    textAlign: 'center',
    lineHeight: 26,
  },
  insightSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 10,
  },
  insightBody: {
    fontSize: 16,
    color: theme.colors.neutral.darker,
    lineHeight: 24,
  },
  navigationIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  navArrow: {
    padding: 5,
  },
  pageIndicator: {
    fontSize: 16,
    color: theme.colors.primary.main,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.secondary.main,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 15,
    marginTop: -1,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 14,
  },
  checkInSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  checkInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    padding: 15,
  },
  checkInTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  checkInTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
  },
  checkInSubtitle: {
    fontSize: 14,
    color: theme.colors.neutral.dark,
  },
  milestonesPreview: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  seeAllText: {
    fontSize: 14,
    color: theme.colors.secondary.light,
  },
  milestoneCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  milestoneIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.content.development + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 5,
  },
  milestoneDescription: {
    fontSize: 14,
    color: theme.colors.neutral.dark,
  },
});

export default TodayScreen;
