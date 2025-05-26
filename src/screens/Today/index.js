import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { mockInsights } from '../../data/mockInsights';
import { AppContext } from '../../../App';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (theme.spacing.spacing.screenPadding * 2);

/**
 * InsightCard Component
 * 
 * Card showing daily insights with navigation arrows
 */
const InsightCard = ({ insight, onSave, isSaved, onMarkHelpful }) => {
  const [currentPanel, setCurrentPanel] = useState('challenge');
  
  // Available panels for this insight
  const availablePanels = ['challenge', 'why', 'try', 'reassurance'];
  const currentIndex = availablePanels.indexOf(currentPanel);
  
  // Handle panel navigation
  const handleNextPanel = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < availablePanels.length) {
      setCurrentPanel(availablePanels[nextIndex]);
    }
  };
  
  const handlePrevPanel = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentPanel(availablePanels[prevIndex]);
    }
  };

  return (
    <View style={styles.cardContainer}>
      {/* Card header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>DAILY INSIGHT</Text>
      </View>
      
      {/* Card title */}
      <Text style={styles.cardTitle}>{insight.title}</Text>
      
      {/* Card content with navigation */}
      <View style={styles.cardContent}>
        {currentIndex > 0 && (
          <TouchableOpacity 
            style={styles.navArrowLeft}
            onPress={handlePrevPanel}
          >
            <Text style={styles.navArrowText}>{'<'}</Text>
          </TouchableOpacity>
        )}
        
        <Text style={styles.cardChallenge}>{insight[currentPanel]}</Text>
        
        {currentIndex < availablePanels.length - 1 && (
          <TouchableOpacity 
            style={styles.navArrowRight}
            onPress={handleNextPanel}
          >
            <Text style={styles.navArrowText}>{'>'}</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {/* Pagination indicator */}
      <Text style={styles.paginationText}>
        {currentIndex + 1} / {availablePanels.length}
      </Text>
      
      {/* Card footer */}
      <View style={styles.cardFooter}>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => onSave(insight)}
        >
          <Ionicons 
            name={isSaved ? "bookmark" : "bookmark-outline"} 
            size={24} 
            color={theme.colors.neutral.white} 
          />
          <Text style={styles.footerButtonText}>Save</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => {}}
        >
          <Ionicons name="share-outline" size={24} color={theme.colors.neutral.white} />
          <Text style={styles.footerButtonText}>Share</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => onMarkHelpful(insight)}
        >
          <Ionicons name="happy-outline" size={24} color={theme.colors.neutral.white} />
          <Text style={styles.footerButtonText}>Helpful</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * Today Screen
 * 
 * Main landing screen showing daily insight card
 * Non-tracking, content-first approach
 */
export default function TodayScreen() {
  const [currentInsight, setCurrentInsight] = useState(mockInsights[0]);
  const { isItemSaved, handleSaveItem, handleRemoveSavedItem, babyName } = React.useContext(AppContext);
  
  // Handle saving/unsaving insight
  const handleToggleSave = (insight) => {
    if (isItemSaved(insight.id, 'insights')) {
      handleRemoveSavedItem(insight.id, 'insights');
    } else {
      handleSaveItem(insight, 'insights');
    }
  };
  
  // Handle marking insight as helpful
  const handleMarkHelpful = (insight) => {
    // In a real app, this would send analytics or update user preferences
    console.log('Marked as helpful:', insight.id);
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/background_pattern.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header with baby info */}
          <View style={styles.header}>
            <View style={styles.babyInfoContainer}>
              <Image 
                source={require('../../assets/images/baby_avatar.png')} 
                style={styles.babyAvatar}
              />
              <View style={styles.babyTextContainer}>
                <Text style={styles.babyName}>{babyName},</Text>
                <Text style={styles.babyAge}>4 months</Text>
              </View>
            </View>
          </View>
          
          {/* Daily Insight Card */}
          <InsightCard 
            insight={currentInsight}
            onSave={handleToggleSave}
            isSaved={isItemSaved(currentInsight.id, 'insights')}
            onMarkHelpful={handleMarkHelpful}
          />
          
          {/* Weekly Check-in (restored) */}
          {/* This component is commented out as per the design reference,
              but code is kept for future implementation if needed */}
          {/* <WeeklyCheckIn /> */}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: theme.colors.primary.main, // Teal background
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
    paddingTop: 40,
  },
  header: {
    marginBottom: theme.spacing.spacing.xl,
  },
  babyInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  babyAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: theme.colors.neutral.white,
  },
  babyTextContainer: {
    marginLeft: theme.spacing.spacing.md,
  },
  babyName: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.white,
    fontWeight: '600',
  },
  babyAge: {
    ...theme.typography.textVariants.h3,
    color: theme.colors.neutral.white,
  },
  cardContainer: {
    backgroundColor: theme.colors.neutral.lightest, // Cream background
    borderRadius: 24,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  cardHeader: {
    paddingTop: theme.spacing.spacing.lg,
    paddingHorizontal: theme.spacing.spacing.lg,
  },
  cardHeaderText: {
    ...theme.typography.textVariants.overline,
    color: '#A05B41', // Rust color for header text
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  cardTitle: {
    ...theme.typography.textVariants.h1,
    color: theme.colors.primary.dark,
    fontSize: 36,
    fontWeight: '700',
    paddingHorizontal: theme.spacing.spacing.lg,
    paddingTop: theme.spacing.spacing.md,
    paddingBottom: theme.spacing.spacing.lg,
    textAlign: 'center',
  },
  cardContent: {
    padding: theme.spacing.spacing.lg,
    paddingBottom: theme.spacing.spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navArrowLeft: {
    position: 'absolute',
    left: theme.spacing.spacing.md,
    top: '50%',
    marginTop: -20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  navArrowRight: {
    position: 'absolute',
    right: theme.spacing.spacing.md,
    top: '50%',
    marginTop: -20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  navArrowText: {
    fontSize: 36,
    color: theme.colors.primary.main,
    fontWeight: '300',
  },
  cardChallenge: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.darkest,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.spacing.xl,
  },
  paginationText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
    textAlign: 'center',
    paddingBottom: theme.spacing.spacing.lg,
  },
  cardFooter: {
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary.main, // Coral color
    padding: theme.spacing.spacing.lg,
    justifyContent: 'space-around',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
    marginTop: theme.spacing.spacing.xs,
  },
});
