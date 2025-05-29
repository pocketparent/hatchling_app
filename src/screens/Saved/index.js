import React, { useState, useRef } from 'react';
import { 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Alert, 
  Animated 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
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
 * Saved Screen
 * 
 * Enhanced version showing saved insights and activities
 * Includes swipe-to-delete functionality and detailed insight viewing
 */
export default function SavedScreen({ navigation }) {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');
  // State for selected insight (for detailed view)
  const [selectedInsight, setSelectedInsight] = useState(null);
  
  // Ref for swipeable rows
  const swipeableRefs = useRef({});
  
  // Mock data for saved insights
  const savedInsights = [
    {
      id: '1',
      title: 'Managing Sleep Regressions',
      type: 'Daily Insight',
      description: 'Tips for helping your baby through the 4-month sleep regression',
      fullContent: `Sleep regressions are temporary periods when a baby who was sleeping well suddenly starts waking up at night, fighting naps, or skipping naps for no apparent reason. The 4-month sleep regression is often the first one parents encounter.

Why it happens:
• Your baby's sleep cycles are maturing to be more like an adult's
• They're more aware of their surroundings and can be easily distracted
• They may be working on new developmental skills like rolling over
• Growth spurts and increased hunger can disrupt sleep patterns

How to help your baby through it:
1. Maintain a consistent bedtime routine to signal it's time to sleep
2. Create a sleep-friendly environment (dark room, white noise)
3. Practice putting your baby down drowsy but awake
4. Consider an earlier bedtime if overtiredness is an issue
5. Be patient and remember this phase is temporary

Most sleep regressions last 2-6 weeks. If sleep issues persist beyond this timeframe or you're concerned about your baby's sleep, consult with your pediatrician.`,
      date: 'May 25, 2025',
      icon: '🌙',
      color: '#FFCC80'
    },
    {
      id: '2',
      title: 'Strategies for Self-Soothing',
      type: 'Daily Insight',
      description: 'Gentle methods to help your baby learn to self-soothe at bedtime',
      fullContent: `Self-soothing is the ability for your baby to calm themselves down and fall asleep independently without being rocked, nursed, or otherwise helped by a caregiver. This skill develops gradually and can be gently encouraged.

Why self-soothing matters:
• Helps babies connect sleep cycles for longer sleep periods
• Builds confidence and independence
• Allows babies to return to sleep on their own during normal night wakings

Gentle approaches to encourage self-soothing:
1. Put your baby down drowsy but awake when developmentally appropriate
2. Create a consistent and calming bedtime routine
3. Offer a security object like a small blanket or lovey (for babies over 12 months)
4. Use white noise or gentle lullabies
5. Give your baby a moment to settle before responding to minor fussing
6. Try the "pause" technique - wait briefly before responding to see if baby settles

Remember that self-soothing is a skill that develops over time. Some babies naturally learn it earlier than others. Be patient and responsive to your baby's individual needs and temperament.`,
      date: 'May 23, 2025',
      icon: '😊',
      color: '#FF8A65'
    },
    {
      id: '3',
      title: 'Introducing Solid Foods',
      type: 'Daily Insight',
      description: 'When and how to start introducing solid foods to your baby',
      fullContent: `Starting solid foods is an exciting milestone in your baby's development. Most babies are ready to begin exploring solid foods around 6 months of age.

Signs your baby is ready for solids:
• Can sit up with minimal support
• Has good head control
• Shows interest in food (watches you eat, reaches for food)
• Has lost the tongue-thrust reflex (no longer automatically pushes food out)
• Seems hungry after a full day of milk feedings

First foods to consider:
• Iron-fortified infant cereal mixed with breast milk or formula
• Pureed single-ingredient vegetables (sweet potatoes, carrots, peas)
• Pureed single-ingredient fruits (avocado, banana, apple)
• Soft, mashed foods for baby-led weaning approach

Starting solids safely:
1. Begin with one meal a day, offering just 1-2 teaspoons
2. Introduce one new food at a time and wait 3-5 days before trying another
3. Watch for signs of allergic reactions or intolerance
4. Never force feed - follow your baby's cues
5. Continue breast milk or formula as the primary source of nutrition through the first year

Remember that "food before one is just for fun" - the main nutritional source should still be breast milk or formula during the first year. Solid foods at this stage are about exploring tastes, textures, and developing eating skills.`,
      date: 'May 20, 2025',
      icon: '🍎',
      color: '#81C784'
    }
  ];

  // Mock data for saved activities
  const savedActivities = [
    {
      id: '1',
      title: 'Singing Songs',
      type: 'Activity Suggestion',
      description: 'Simple songs to engage your baby and support language development',
      fullContent: `Singing to your baby is a wonderful way to support language development, strengthen your bond, and create joyful moments together. Babies are naturally drawn to the rhythm and melody of songs, especially when sung by a familiar voice.

Benefits of singing to your baby:
• Exposes them to language patterns and vocabulary
• Helps develop listening skills and auditory discrimination
• Creates a soothing, comforting experience
• Supports emotional regulation and bonding

Simple songs to try:
1. "Twinkle, Twinkle, Little Star"
2. "The Itsy Bitsy Spider" (with hand movements)
3. "Row, Row, Row Your Boat"
4. "You Are My Sunshine"
5. "Head, Shoulders, Knees and Toes" (with gentle touches)

Tips for singing activities:
• Use facial expressions and gestures to make songs more engaging
• Change the tempo or volume to capture your baby's attention
• Create personalized songs using your baby's name
• Don't worry about your singing ability - your baby loves your voice!

Try to incorporate singing into daily routines like diaper changes, bath time, or as part of your bedtime ritual. Even just 5-10 minutes of singing a few times a day can have significant benefits for your baby's development.`,
      date: 'May 24, 2025',
      icon: '🎵',
      color: '#90CAF9'
    },
    {
      id: '2',
      title: 'Building with Blocks',
      type: 'Activity Suggestion',
      description: 'Block play to develop fine motor skills and spatial awareness',
      fullContent: `Block play is a classic activity that supports multiple areas of development. Even for young babies, exploring blocks with supervision can be a valuable sensory and learning experience.

Developmental benefits of block play:
• Fine motor skills and hand-eye coordination
• Spatial awareness and early math concepts
• Problem-solving and logical thinking
• Creativity and imagination
• Language development as you describe actions

Age-appropriate block activities:
• 6-12 months: Holding, exploring texture, supervised mouthing of large blocks
• 12-18 months: Stacking 2-3 blocks, knocking down towers you build
• 18-24 months: Building simple structures, sorting blocks by color or size
• 24+ months: More complex structures, pretend play with blocks

Safety tips:
• Always supervise block play
• Choose age-appropriate blocks (larger, lightweight blocks for younger babies)
• Wash blocks regularly to prevent germ spread

Make block play interactive by describing what you're doing ("I'm putting the red block on top of the blue block"), asking simple questions, and following your baby's lead. Remember that exploration (including knocking down towers) is an important part of learning!`,
      date: 'May 22, 2025',
      icon: '🧱',
      color: '#CE93D8'
    },
    {
      id: '3',
      title: 'Tummy Time Exercises',
      type: 'Activity Suggestion',
      description: 'Fun ways to make tummy time engaging and beneficial',
      fullContent: `Tummy time is essential for your baby's development, helping to strengthen neck, shoulder, and core muscles needed for later milestones like rolling over, sitting up, and crawling.

Benefits of tummy time:
• Strengthens neck, shoulder, and upper body muscles
• Prevents flat spots on the back of the head
• Develops motor skills needed for rolling, crawling, and sitting
• Provides a different perspective of the world

Making tummy time fun:
1. Start with short sessions (3-5 minutes) several times a day
2. Gradually increase duration as your baby gets stronger
3. Get down on your baby's level and make eye contact
4. Use high-contrast toys, mirrors, or books to engage interest
5. Try different positions (on your chest, across your lap, on a firm surface)

Tummy time activities by age:
• 0-3 months: Chest-to-chest tummy time, tummy time on your lap
• 3-4 months: Prop baby on a rolled towel under their chest and arms
• 4-6 months: Place toys in a circle around baby to encourage reaching
• 6+ months: Create obstacle courses with pillows and toys to navigate

If your baby dislikes tummy time, start with very short sessions and gradually build up. Try different times of day (avoid right after feeding) and make sure your baby is well-rested and alert.`,
      date: 'May 19, 2025',
      icon: '👶',
      color: '#FFB74D'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'insights', label: 'Insights' },
    { id: 'activities', label: 'Activities' }
  ];

  // Get filtered items based on active filter
  const getFilteredItems = () => {
    switch (activeFilter) {
      case 'insights':
        return { insights: savedInsights, activities: [] };
      case 'activities':
        return { insights: [], activities: savedActivities };
      case 'all':
      default:
        return { insights: savedInsights, activities: savedActivities };
    }
  };

  // Handle item deletion
  const handleDeleteItem = (type, id) => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to remove this item from your saved collection?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            // In a real app, this would remove the item from state/storage
            Alert.alert('Item Deleted', 'The item has been removed from your saved collection.');
          },
          style: 'destructive'
        }
      ]
    );
  };

  // Handle insight selection for detailed view
  const handleInsightSelect = (insight) => {
    setSelectedInsight(insight);
  };

  // Handle back from detail view
  const handleBackFromDetail = () => {
    setSelectedInsight(null);
  };

  // Render right actions for swipeable
  const renderRightActions = (progress, dragX, type, id) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    
    return (
      <View style={styles.rightAction}>
        <Animated.View style={[styles.actionButton, {
          transform: [{ translateX: trans }],
        }]}>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleDeleteItem(type, id)}
          >
            <Ionicons name="trash-outline" size={24} color="#FFFFFF" />
            <BodySmall color="white">Delete</BodySmall>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  // Render a saved item (insight or activity) with swipe-to-delete
  const renderSavedItem = (item, type) => {
    const itemKey = `${type}-${item.id}`;
    
    return (
      <Swipeable
        key={itemKey}
        ref={ref => swipeableRefs.current[itemKey] = ref}
        renderRightActions={(progress, dragX) => 
          renderRightActions(progress, dragX, type, item.id)
        }
        rightThreshold={40}
      >
        <Card style={styles.savedItemContainer}>
          <TouchableOpacity onPress={() => handleInsightSelect(item)}>
            <Row>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <Body style={styles.icon}>{item.icon}</Body>
              </View>
              <Column style={styles.savedItemContent}>
                <H3>{item.title}</H3>
                <Caption color="medium">{item.type}</Caption>
                <BodySmall color="medium" numberOfLines={2} style={styles.savedItemDescription}>
                  {item.description}
                </BodySmall>
                <Caption color="medium">{item.date}</Caption>
              </Column>
              <View style={styles.savedItemActions}>
                <Ionicons name="chevron-forward" size={20} color={theme.colors.neutral.medium} />
              </View>
            </Row>
          </TouchableOpacity>
        </Card>
      </Swipeable>
    );
  };

  // Render insight detail view
  const renderInsightDetail = () => {
    return (
      <Container>
        <SafeContainer>
          <Row style={styles.backButtonRow}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={handleBackFromDetail}
            >
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              <BodySmall color="white" style={styles.backButtonText}>Back to Saved</BodySmall>
            </TouchableOpacity>
          </Row>
          
          <Card style={styles.detailCard}>
            <View style={[styles.detailIconContainer, { backgroundColor: selectedInsight.color }]}>
              <Body style={styles.detailIcon}>{selectedInsight.icon}</Body>
            </View>
            
            <H2 style={styles.detailTitle}>{selectedInsight.title}</H2>
            <Caption color="medium" style={styles.detailType}>{selectedInsight.type}</Caption>
            <Caption color="medium" style={styles.detailDate}>{selectedInsight.date}</Caption>
            
            <ScrollContainer style={styles.detailContentScroll}>
              <Body>{selectedInsight.fullContent}</Body>
            </ScrollContainer>
            
            <Row style={styles.detailActions} justify="center">
              <SecondaryButton
                title="Remove from Saved"
                icon="trash-outline"
                onPress={() => handleDeleteItem('insight', selectedInsight.id)}
                style={styles.detailActionButton}
                textColor={theme.colors.feedback.error}
              />
            </Row>
          </Card>
        </SafeContainer>
      </Container>
    );
  };

  // Get filtered content
  const { insights, activities } = getFilteredItems();

  // Check if there are no items to display
  const noItemsToDisplay = insights.length === 0 && activities.length === 0;

  // Render content based on whether an insight is selected
  const renderContent = () => {
    if (selectedInsight) {
      return renderInsightDetail();
    }
    
    return (
      <Container>
        <SafeContainer>
          {/* App header with logo */}
          <AppHeader title="Saved" />
          
          {/* Filter tabs */}
          <Section>
            <Row style={styles.filterContainer}>
              {filterOptions.map(option => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.filterOption,
                    activeFilter === option.id && styles.filterOptionActive
                  ]}
                  onPress={() => setActiveFilter(option.id)}
                >
                  <BodySmall 
                    color={activeFilter === option.id ? "primary" : "white"}
                    style={styles.filterText}
                  >
                    {option.label}
                  </BodySmall>
                </TouchableOpacity>
              ))}
            </Row>
          </Section>
          
          {/* Saved items */}
          <ScrollContainer contentContainerStyle={styles.scrollContent}>
            {/* No items message */}
            {noItemsToDisplay && (
              <Card style={styles.noItemsContainer}>
                <H3 style={styles.noItemsTitle}>No saved items</H3>
                <Body style={styles.noItemsText}>
                  Items you save will appear here for easy access.
                </Body>
                <PrimaryButton
                  title="Explore Content"
                  onPress={() => navigation.navigate('Today')}
                  style={styles.exploreButton}
                />
              </Card>
            )}
            
            {/* Insights section */}
            {insights.length > 0 && (
              <Section>
                <H2 color="white" style={styles.sectionTitle}>Insights</H2>
                <Column style={styles.savedItemsList}>
                  {insights.map(item => renderSavedItem(item, 'insight'))}
                </Column>
              </Section>
            )}
            
            {/* Activities section */}
            {activities.length > 0 && (
              <Section>
                <H2 color="white" style={styles.sectionTitle}>Activities</H2>
                <Column style={styles.savedItemsList}>
                  {activities.map(item => renderSavedItem(item, 'activity'))}
                </Column>
              </Section>
            )}
          </ScrollContainer>
        </SafeContainer>
      </Container>
    );
  };

  return (
    <ScreenErrorWrapper screenName="Saved" navigation={navigation}>
      <GestureHandlerRootView style={styles.gestureRoot}>
        {renderContent()}
      </GestureHandlerRootView>
    </ScreenErrorWrapper>
  );
}

const styles = {
  gestureRoot: {
    flex: 1,
  },
  filterContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    padding: 4,
    marginBottom: 16,
  },
  filterOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 25,
  },
  filterOptionActive: {
    backgroundColor: '#FFFFFF',
  },
  filterText: {
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  sectionTitle: {
    marginBottom: 16,
  },
  savedItemsList: {
    gap: 12,
  },
  savedItemContainer: {
    marginBottom: 0,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  savedItemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  savedItemDescription: {
    marginTop: 4,
    marginBottom: 4,
  },
  savedItemActions: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: '100%',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: theme.colors.feedback.error,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 12,
  },
  noItemsContainer: {
    alignItems: 'center',
    padding: 24,
    marginTop: 16,
  },
  noItemsTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  noItemsText: {
    textAlign: 'center',
    marginBottom: 24,
  },
  exploreButton: {
    paddingHorizontal: 24,
  },
  backButtonRow: {
    marginBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: 8,
  },
  detailCard: {
    alignItems: 'center',
    padding: 24,
  },
  detailIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailIcon: {
    fontSize: 30,
  },
  detailTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  detailType: {
    marginBottom: 4,
  },
  detailDate: {
    marginBottom: 16,
  },
  detailContentScroll: {
    maxHeight: 400,
    width: '100%',
    marginBottom: 24,
  },
  detailActions: {
    marginTop: 8,
  },
  detailActionButton: {
    paddingHorizontal: 16,
  },
};
