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
  Dimensions
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
 * Swipeable card showing daily insights with multiple panels
 */
const InsightCard = ({ insight, onSave, isSaved }) => {
  const [currentPanel, setCurrentPanel] = useState('challenge');
  const [panelAnimation] = useState(new Animated.Value(0));
  
  // Available panels for this insight
  const availablePanels = ['challenge', 'why', 'try'];
  if (insight.reassurance) {
    availablePanels.push('reassurance');
  }
  
  // Panel titles
  const panelTitles = {
    challenge: 'Challenge',
    why: 'Why',
    try: 'Try',
    reassurance: 'Reassurance'
  };
  
  // Animate panel change
  useEffect(() => {
    Animated.timing(panelAnimation, {
      toValue: availablePanels.indexOf(currentPanel),
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [currentPanel]);
  
  // Handle panel navigation
  const handleNextPanel = () => {
    const currentIndex = availablePanels.indexOf(currentPanel);
    if (currentIndex < availablePanels.length - 1) {
      setCurrentPanel(availablePanels[currentIndex + 1]);
    }
  };
  
  const handlePrevPanel = () => {
    const currentIndex = availablePanels.indexOf(currentPanel);
    if (currentIndex > 0) {
      setCurrentPanel(availablePanels[currentIndex - 1]);
    }
  };
  
  // Calculate transform for panel animation
  const translateX = panelAnimation.interpolate({
    inputRange: availablePanels.map((_, i) => i),
    outputRange: availablePanels.map((_, i) => -i * CARD_WIDTH)
  });

  return (
    <View style={styles.cardContainer}>
      {/* Panel navigation dots */}
      <View style={styles.panelDotsContainer}>
        {availablePanels.map((panel, index) => (
          <TouchableOpacity 
            key={panel}
            style={[
              styles.panelDot,
              currentPanel === panel && styles.panelDotActive
            ]}
            onPress={() => setCurrentPanel(panel)}
          />
        ))}
      </View>
      
      {/* Card content */}
      <View style={styles.cardContent}>
        <Animated.View 
          style={[
            styles.panelsContainer,
            { transform: [{ translateX }] }
          ]}
        >
          {availablePanels.map(panel => (
            <View key={panel} style={styles.panel}>
              <Text style={styles.panelTitle}>{insight[panel].title}</Text>
              <Text style={styles.panelText}>{insight[panel].content}</Text>
            </View>
          ))}
        </Animated.View>
        
        {/* Panel navigation buttons */}
        <View style={styles.panelNavigation}>
          {currentPanel !== availablePanels[0] && (
            <TouchableOpacity 
              style={styles.navButton}
              onPress={handlePrevPanel}
            >
              <Ionicons name="arrow-back" size={20} color={theme.colors.primary.main} />
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          
          <View style={styles.navSpacer} />
          
          {currentPanel !== availablePanels[availablePanels.length - 1] && (
            <TouchableOpacity 
              style={styles.navButton}
              onPress={handleNextPanel}
            >
              <Text style={styles.navButtonText}>Next</Text>
              <Ionicons name="arrow-forward" size={20} color={theme.colors.primary.main} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {/* Card footer */}
      <View style={styles.cardFooter}>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => onSave(insight)}
        >
          <Ionicons 
            name={isSaved ? "bookmark" : "bookmark-outline"} 
            size={20} 
            color={theme.colors.primary.main} 
          />
          <Text style={styles.footerButtonText}>
            {isSaved ? "Saved" : "Save"}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="thumbs-up-outline" size={20} color={theme.colors.primary.main} />
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with date */}
        <View style={styles.header}>
          <View>
            <Text style={styles.dateText}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
            <Text style={styles.headerTitle}>Today</Text>
          </View>
          <View style={styles.babyInfoContainer}>
            <Image 
              source={require('../../assets/images/baby_avatar.png')} 
              style={styles.babyAvatar}
            />
            <Text style={styles.babyName}>{babyName}</Text>
            <Text style={styles.babyAge}>5 months</Text>
          </View>
        </View>
        
        {/* Daily Insight Card */}
        <View style={styles.insightContainer}>
          <Text style={styles.insightLabel}>Daily Insight</Text>
          <InsightCard 
            insight={currentInsight}
            onSave={handleToggleSave}
            isSaved={isItemSaved(currentInsight.id, 'insights')}
          />
        </View>
        
        {/* Weekly Focus */}
        <View style={styles.weeklyFocusContainer}>
          <Text style={styles.sectionTitle}>Weekly Focus</Text>
          <View style={styles.weeklyFocusCard}>
            <Text style={styles.weeklyFocusTitle}>Tummy Time Exploration</Text>
            <Text style={styles.weeklyFocusText}>
              This week, focus on making tummy time engaging with different textures and toys positioned just out of reach to encourage movement.
            </Text>
            <TouchableOpacity style={styles.weeklyFocusButton}>
              <Text style={styles.weeklyFocusButtonText}>View Activities</Text>
              <Ionicons name="arrow-forward" size={16} color={theme.colors.secondary.dark} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  dateText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.xxs,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
  },
  babyInfoContainer: {
    alignItems: 'flex-end',
  },
  babyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: theme.spacing.spacing.xxs,
  },
  babyName: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.primary.dark,
  },
  babyAge: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.medium,
  },
  insightContainer: {
    marginBottom: theme.spacing.spacing.xl,
  },
  insightLabel: {
    ...theme.typography.textVariants.overline,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.sm,
    textTransform: 'uppercase',
  },
  cardContainer: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 16,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  panelDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: theme.spacing.spacing.sm,
  },
  panelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.neutral.lighter,
    marginHorizontal: 4,
  },
  panelDotActive: {
    backgroundColor: theme.colors.primary.main,
  },
  cardContent: {
    height: 300,
    overflow: 'hidden',
  },
  panelsContainer: {
    flexDirection: 'row',
    width: CARD_WIDTH * 4, // Maximum 4 panels
  },
  panel: {
    width: CARD_WIDTH,
    padding: theme.spacing.spacing.lg,
  },
  panelTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  panelText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    lineHeight: 24,
  },
  panelNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.spacing.md,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.spacing.sm,
  },
  navButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    marginHorizontal: theme.spacing.spacing.xs,
  },
  navSpacer: {
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
    padding: theme.spacing.spacing.sm,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.spacing.sm,
    marginRight: theme.spacing.spacing.md,
  },
  footerButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    marginLeft: theme.spacing.spacing.xs,
  },
  weeklyFocusContainer: {
    marginBottom: theme.spacing.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  weeklyFocusCard: {
    backgroundColor: theme.colors.secondary.lightest,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  weeklyFocusTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.secondary.dark,
    marginBottom: theme.spacing.spacing.sm,
  },
  weeklyFocusText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
  },
  weeklyFocusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  weeklyFocusButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.secondary.dark,
    marginRight: theme.spacing.spacing.xs,
  },
});
