import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Image,
  Modal,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import mockSavedContent from '../../data/mockSavedContent';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (theme.spacing.spacing.screenPadding * 2);

/**
 * SavedItemCard Component
 * 
 * Card displaying a saved insight or activity
 */
const SavedItemCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.savedItemContainer}
      onPress={() => onPress(item)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.savedItemContent}>
        <Text style={styles.savedItemTitle}>{item.title}</Text>
        <Text style={styles.savedItemType}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

/**
 * MediaThumbnail Component
 * 
 * Thumbnail for milestone media
 */
const MediaThumbnail = ({ item, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.mediaItem}
      onPress={() => onPress(item)}
    >
      {item.id === 'media_1' && (
        <Image 
          source={require('../../assets/images/baby_milestone_1.png')} 
          style={styles.mediaImage}
          resizeMode="cover"
        />
      )}
      {item.id === 'media_2' && (
        <Image 
          source={require('../../assets/images/baby_milestone_2.png')} 
          style={styles.mediaImage}
          resizeMode="cover"
        />
      )}
      {item.id === 'media_3' && (
        <Image 
          source={require('../../assets/images/baby_milestone_3.png')} 
          style={styles.mediaImage}
          resizeMode="cover"
        />
      )}
      {item.id === 'media_4' && (
        <Image 
          source={require('../../assets/images/baby_milestone_4.png')} 
          style={styles.mediaImage}
          resizeMode="cover"
        />
      )}
      {!['media_1', 'media_2', 'media_3', 'media_4'].includes(item.id) && (
        <View style={styles.mediaPlaceholder}>
          <Text style={styles.mediaPlaceholderText}>
            {item.type === 'video' ? '🎬' : '📷'}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

/**
 * InsightDetailModal Component
 * 
 * Modal displaying the full content of a saved insight
 */
const InsightDetailModal = ({ insight, visible, onClose }) => {
  const [currentPanel, setCurrentPanel] = useState('challenge');
  
  if (!visible || !insight) return null;
  
  const panels = [
    { id: 'challenge', title: 'Challenge' },
    { id: 'why', title: 'Why' },
    { id: 'try', title: 'Try' },
    { id: 'reassurance', title: 'Reassurance' }
  ];
  
  // Filter out reassurance if it doesn't exist
  const availablePanels = panels.filter(panel => 
    insight.content[panel.id] !== undefined
  );
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{insight.title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={theme.colors.neutral.dark} />
            </TouchableOpacity>
          </View>
          
          {/* Panel selector */}
          <View style={styles.panelSelectorContainer}>
            {availablePanels.map(panel => (
              <TouchableOpacity 
                key={panel.id}
                style={[
                  styles.panelTab,
                  currentPanel === panel.id && styles.panelTabActive
                ]}
                onPress={() => setCurrentPanel(panel.id)}
              >
                <Text style={[
                  styles.panelTabText,
                  currentPanel === panel.id && styles.panelTabTextActive
                ]}>
                  {panel.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Panel content */}
          <ScrollView style={styles.panelContent}>
            <Text style={styles.panelContentTitle}>
              {insight.content[currentPanel]?.title}
            </Text>
            <Text style={styles.panelContentText}>
              {insight.content[currentPanel]?.content}
            </Text>
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={onClose}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

/**
 * ActivityDetailModal Component
 * 
 * Modal displaying the full content of a saved activity
 */
const ActivityDetailModal = ({ activity, visible, onClose }) => {
  if (!visible || !activity) return null;
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{activity.title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={theme.colors.neutral.dark} />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.activityContent}>
            <Text style={styles.activityDescription}>
              {activity.content.description}
            </Text>
            
            <Text style={styles.activitySectionTitle}>Benefits</Text>
            {activity.content.benefits.map((benefit, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{benefit}</Text>
              </View>
            ))}
            
            <Text style={styles.activitySectionTitle}>Suggestions</Text>
            {activity.content.suggestions.map((suggestion, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{suggestion}</Text>
              </View>
            ))}
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={onClose}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

/**
 * MediaDetailModal Component
 * 
 * Modal displaying the full content of milestone media
 */
const MediaDetailModal = ({ media, visible, onClose }) => {
  if (!visible || !media) return null;
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.mediaModalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{media.title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={theme.colors.neutral.dark} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.mediaContainer}>
            {media.id === 'media_1' && (
              <Image 
                source={require('../../assets/images/baby_milestone_1.png')} 
                style={styles.mediaImageLarge}
                resizeMode="contain"
              />
            )}
            {media.id === 'media_2' && (
              <Image 
                source={require('../../assets/images/baby_milestone_2.png')} 
                style={styles.mediaImageLarge}
                resizeMode="contain"
              />
            )}
            {media.id === 'media_3' && (
              <Image 
                source={require('../../assets/images/baby_milestone_3.png')} 
                style={styles.mediaImageLarge}
                resizeMode="contain"
              />
            )}
            {media.id === 'media_4' && (
              <Image 
                source={require('../../assets/images/baby_milestone_4.png')} 
                style={styles.mediaImageLarge}
                resizeMode="contain"
              />
            )}
            {!['media_1', 'media_2', 'media_3', 'media_4'].includes(media.id) && (
              <View style={styles.mediaPlaceholderLarge}>
                <Text style={styles.mediaPlaceholderTextLarge}>
                  {media.type === 'video' ? '🎬' : '📷'}
                </Text>
              </View>
            )}
          </View>
          
          <View style={styles.mediaDetails}>
            <Text style={styles.mediaDate}>{media.date}</Text>
            <Text style={styles.mediaDescription}>{media.description}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={onClose}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

/**
 * Saved Screen
 * 
 * Shows saved insights, activities, and milestone media
 * Implements the design from the mockup
 */
export default function SavedScreen() {
  const [savedInsights] = useState(mockSavedContent.insights);
  const [savedActivities] = useState(mockSavedContent.activities);
  const [milestoneMedia] = useState(mockSavedContent.milestoneMedia);
  
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  const [insightModalVisible, setInsightModalVisible] = useState(false);
  const [activityModalVisible, setActivityModalVisible] = useState(false);
  const [mediaModalVisible, setMediaModalVisible] = useState(false);
  
  // Handle insight selection
  const handleInsightPress = (insight) => {
    setSelectedInsight(insight);
    setInsightModalVisible(true);
  };
  
  // Handle activity selection
  const handleActivityPress = (activity) => {
    setSelectedActivity(activity);
    setActivityModalVisible(true);
  };
  
  // Handle media selection
  const handleMediaPress = (media) => {
    setSelectedMedia(media);
    setMediaModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Saved</Text>
        
        {/* Saved Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Insights</Text>
          {savedInsights.length > 0 ? (
            savedInsights.map(insight => (
              <SavedItemCard 
                key={insight.id}
                item={insight}
                onPress={handleInsightPress}
              />
            ))
          ) : (
            <Text style={styles.emptyStateText}>No saved insights yet</Text>
          )}
        </View>
        
        {/* Saved Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Activities</Text>
          {savedActivities.length > 0 ? (
            savedActivities.map(activity => (
              <SavedItemCard 
                key={activity.id}
                item={activity}
                onPress={handleActivityPress}
              />
            ))
          ) : (
            <Text style={styles.emptyStateText}>No saved activities yet</Text>
          )}
        </View>
        
        {/* Milestone Media */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Captured Milestone Media</Text>
          {milestoneMedia.length > 0 ? (
            <View style={styles.mediaGrid}>
              {milestoneMedia.map(media => (
                <MediaThumbnail 
                  key={media.id}
                  item={media}
                  onPress={handleMediaPress}
                />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyStateText}>No milestone media yet</Text>
          )}
        </View>
        
        {/* Modals */}
        <InsightDetailModal 
          insight={selectedInsight}
          visible={insightModalVisible}
          onClose={() => setInsightModalVisible(false)}
        />
        
        <ActivityDetailModal 
          activity={selectedActivity}
          visible={activityModalVisible}
          onClose={() => setActivityModalVisible(false)}
        />
        
        <MediaDetailModal 
          media={selectedMedia}
          visible={mediaModalVisible}
          onClose={() => setMediaModalVisible(false)}
        />
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
    paddingBottom: theme.spacing.spacing.xxxl,
  },
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  section: {
    marginBottom: theme.spacing.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  savedItemContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    marginBottom: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  iconContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
  },
  savedItemContent: {
    flex: 1,
    padding: theme.spacing.spacing.md,
    justifyContent: 'center',
  },
  savedItemTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.xxs,
  },
  savedItemType: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.spacing.xs,
  },
  mediaItem: {
    width: '25%',
    padding: theme.spacing.spacing.xs,
  },
  mediaImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  mediaPlaceholder: {
    aspectRatio: 1,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaPlaceholderText: {
    fontSize: 24,
  },
  emptyStateText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.medium,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: theme.spacing.spacing.lg,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 16,
    width: '90%',
    maxHeight: '80%',
    padding: theme.spacing.spacing.lg,
  },
  mediaModalContent: {
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 16,
    width: '90%',
    maxHeight: '90%',
    padding: theme.spacing.spacing.lg,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  modalTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    flex: 1,
    marginRight: theme.spacing.spacing.sm,
  },
  panelSelectorContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.lighter,
  },
  panelTab: {
    paddingVertical: theme.spacing.spacing.sm,
    paddingHorizontal: theme.spacing.spacing.md,
    marginRight: theme.spacing.spacing.sm,
  },
  panelTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary.main,
  },
  panelTabText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.dark,
  },
  panelTabTextActive: {
    color: theme.colors.primary.main,
  },
  panelContent: {
    maxHeight: 300,
    marginBottom: theme.spacing.spacing.md,
  },
  panelContentTitle: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  panelContentText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  activityContent: {
    maxHeight: 300,
    marginBottom: theme.spacing.spacing.md,
  },
  activityDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
  },
  activitySectionTitle: {
    ...theme.typography.textVariants.subtitle1,
    color: theme.colors.primary.dark,
    marginTop: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.spacing.xs,
  },
  bulletPoint: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.primary.main,
    marginRight: theme.spacing.spacing.xs,
    width: 15,
  },
  bulletText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    flex: 1,
  },
  mediaContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.spacing.lg,
  },
  mediaImageLarge: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  mediaPlaceholderLarge: {
    width: '100%',
    height: 300,
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaPlaceholderTextLarge: {
    fontSize: 48,
  },
  mediaDetails: {
    marginBottom: theme.spacing.spacing.lg,
  },
  mediaDate: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.medium,
    marginBottom: theme.spacing.spacing.xs,
  },
  mediaDescription: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
  },
  modalCloseButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingVertical: theme.spacing.spacing.sm,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.neutral.white,
  },
});
