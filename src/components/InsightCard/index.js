import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity,
  Animated,
  PanResponder
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (theme.spacing.spacing.screenPadding * 2);

/**
 * InsightCard Component
 * 
 * Swipeable card with multiple panels for the Daily Insight Engine
 * Implements the Challenge/Why/Try/Reassurance panel structure
 */
export default function InsightCard({ insight }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [saved, setSaved] = useState(false);
  const [markedHelpful, setMarkedHelpful] = useState(false);
  
  // Animation values
  const position = useRef(new Animated.Value(0)).current;
  
  // Calculate number of panels
  const panelCount = insight.reassurance ? 4 : 3;
  
  // Pan responder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Only allow horizontal movement within bounds
        if (
          (currentPanel === 0 && gestureState.dx > 0) || 
          (currentPanel === panelCount - 1 && gestureState.dx < 0)
        ) {
          return;
        }
        position.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        // Determine if swipe was significant enough to change panel
        if (gestureState.dx < -50 && currentPanel < panelCount - 1) {
          // Swipe left to next panel
          Animated.spring(position, {
            toValue: -CARD_WIDTH,
            useNativeDriver: true,
          }).start(() => {
            setCurrentPanel(currentPanel + 1);
            position.setValue(0);
          });
        } else if (gestureState.dx > 50 && currentPanel > 0) {
          // Swipe right to previous panel
          Animated.spring(position, {
            toValue: CARD_WIDTH,
            useNativeDriver: true,
          }).start(() => {
            setCurrentPanel(currentPanel - 1);
            position.setValue(0);
          });
        } else {
          // Return to original position
          Animated.spring(position, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // Handle save button press
  const handleSave = () => {
    setSaved(!saved);
    // In a real app, this would save to Firestore
  };

  // Handle helpful button press
  const handleMarkHelpful = () => {
    setMarkedHelpful(!markedHelpful);
    // In a real app, this would log signal to influence future prioritization
  };

  // Get current panel content
  const getPanelContent = () => {
    switch (currentPanel) {
      case 0:
        return (
          <View style={styles.panelContent}>
            <Text style={styles.panelLabel}>Challenge</Text>
            <Text style={styles.panelTitle}>{insight.challenge.title}</Text>
            <Text style={styles.panelText}>{insight.challenge.content}</Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.panelContent}>
            <Text style={styles.panelLabel}>Why</Text>
            <Text style={styles.panelTitle}>{insight.why.title}</Text>
            <Text style={styles.panelText}>{insight.why.content}</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.panelContent}>
            <Text style={styles.panelLabel}>Try</Text>
            <Text style={styles.panelTitle}>{insight.try.title}</Text>
            <Text style={styles.panelText}>{insight.try.content}</Text>
          </View>
        );
      case 3:
        return insight.reassurance ? (
          <View style={styles.panelContent}>
            <Text style={styles.panelLabel}>Reassurance</Text>
            <Text style={styles.panelTitle}>{insight.reassurance.title}</Text>
            <Text style={styles.panelText}>{insight.reassurance.content}</Text>
          </View>
        ) : null;
      default:
        return null;
    }
  };

  // Render pagination dots
  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length: panelCount }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentPanel === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.card,
          { transform: [{ translateX: position }] }
        ]}
        {...panResponder.panHandlers}
      >
        {getPanelContent()}
        
        {/* Pagination dots */}
        {renderPaginationDots()}
        
        {/* Card actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={handleSave}
          >
            <Ionicons 
              name={saved ? "bookmark" : "bookmark-outline"} 
              size={24} 
              color={saved ? theme.colors.primary.main : theme.colors.neutral.dark} 
            />
            <Text style={[
              styles.actionText,
              saved && { color: theme.colors.primary.main }
            ]}>
              {saved ? "Saved" : "Save"}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton} 
            onPress={handleMarkHelpful}
          >
            <Ionicons 
              name={markedHelpful ? "heart" : "heart-outline"} 
              size={24} 
              color={markedHelpful ? theme.colors.primary.main : theme.colors.neutral.dark} 
            />
            <Text style={[
              styles.actionText,
              markedHelpful && { color: theme.colors.primary.main }
            ]}>
              {markedHelpful ? "Helpful" : "Mark Helpful"}
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Swipe indicators */}
        {currentPanel > 0 && (
          <View style={[styles.swipeIndicator, styles.swipeLeft]}>
            <Ionicons name="chevron-back" size={20} color={theme.colors.neutral.medium} />
          </View>
        )}
        
        {currentPanel < panelCount - 1 && (
          <View style={[styles.swipeIndicator, styles.swipeRight]}>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.xl,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 16,
    padding: theme.spacing.spacing.lg,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    minHeight: 300,
  },
  panelContent: {
    flex: 1,
    marginBottom: theme.spacing.spacing.lg,
  },
  panelLabel: {
    ...theme.typography.textVariants.overline,
    color: theme.colors.primary.main,
    marginBottom: theme.spacing.spacing.xs,
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.spacing.md,
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
    width: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.lighter,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.spacing.sm,
  },
  actionText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.dark,
    marginLeft: theme.spacing.spacing.xs,
    fontSize: 14,
  },
  swipeIndicator: {
    position: 'absolute',
    top: '50%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.neutral.lightest,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  swipeLeft: {
    left: -15,
  },
  swipeRight: {
    right: -15,
  },
});
