import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import theme from '../../theme';

const SavedScreen = () => {
  const { babyName, babyAge, savedItems } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('insights');
  
  // Calculate baby's age in months
  const ageInMonths = Math.floor(babyAge / 30);
  
  // Render saved insights
  const renderInsights = () => {
    if (savedItems.insights.length === 0) {
      return (
        <View style={styles.emptyState}>
          <Ionicons name="bookmark-outline" size={40} color={theme.colors.neutral.medium} />
          <Text style={styles.emptyStateTitle}>No saved insights yet</Text>
          <Text style={styles.emptyStateText}>
            Tap the save button on any insight to add it to your collection
          </Text>
        </View>
      );
    }
    
    return (
      <View>
        {savedItems.insights.map(insight => (
          <TouchableOpacity key={insight.id} style={styles.insightCard}>
            <View style={[styles.insightIconContainer, { backgroundColor: getCategoryColor(insight.category) }]}>
              <Text style={styles.insightIcon}>
                {getCategoryIcon(insight.category)}
              </Text>
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>{insight.title}</Text>
              <Text style={styles.insightType}>Daily Insight</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  // Render saved activities
  const renderActivities = () => {
    if (savedItems.activities.length === 0) {
      return (
        <View style={styles.emptyState}>
          <Ionicons name="play-outline" size={40} color={theme.colors.neutral.medium} />
          <Text style={styles.emptyStateTitle}>No saved activities yet</Text>
          <Text style={styles.emptyStateText}>
            Save activities from milestones or weekly focus to try later
          </Text>
        </View>
      );
    }
    
    return (
      <View>
        {savedItems.activities.map(activity => (
          <TouchableOpacity key={activity.id} style={styles.insightCard}>
            <View style={[styles.insightIconContainer, { backgroundColor: theme.colors.secondary.main }]}>
              <Text style={styles.insightIcon}>
                {getActivityIcon(activity.type)}
              </Text>
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>{activity.title}</Text>
              <Text style={styles.insightType}>Activity Suggestion</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  // Render saved media
  const renderMedia = () => {
    if (savedItems.media.length === 0) {
      return (
        <View style={styles.emptyState}>
          <Ionicons name="images-outline" size={40} color={theme.colors.neutral.medium} />
          <Text style={styles.emptyStateTitle}>No captured moments yet</Text>
          <Text style={styles.emptyStateText}>
            Capture and save milestone moments to remember them
          </Text>
        </View>
      );
    }
    
    // Mock media items for the UI
    const mockMedia = [
      { id: 'media_001', uri: require('../../../assets/baby_milestone_1.png') },
      { id: 'media_002', uri: require('../../../assets/baby_milestone_2.png') },
      { id: 'media_003', uri: require('../../../assets/baby_milestone_3.png') },
      { id: 'media_004', uri: require('../../../assets/baby_milestone_4.png') },
    ];
    
    return (
      <View style={styles.mediaGrid}>
        {mockMedia.map(item => (
          <TouchableOpacity key={item.id} style={styles.mediaItem}>
            <Image 
              source={item.uri}
              style={styles.mediaImage}
              defaultSource={item.uri}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  // Helper function to get category color
  const getCategoryColor = (category) => {
    switch(category) {
      case 'sleep':
        return theme.colors.content.sleep;
      case 'feeding':
        return theme.colors.content.feeding;
      case 'development':
        return theme.colors.content.development;
      case 'health':
        return theme.colors.content.health;
      case 'behavior':
        return theme.colors.content.behavior;
      default:
        return theme.colors.primary.main;
    }
  };
  
  // Helper function to get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'sleep':
        return '🌙';
      case 'feeding':
        return '🍼';
      case 'development':
        return '📈';
      case 'health':
        return '❤️';
      case 'behavior':
        return '😊';
      default:
        return '💡';
    }
  };
  
  // Helper function to get activity icon
  const getActivityIcon = (type) => {
    switch(type) {
      case 'play':
        return '🎮';
      case 'music':
        return '🎵';
      case 'motor':
        return '🏃';
      case 'sensory':
        return '👁️';
      default:
        return '🎯';
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundElements}>
        {/* Decorative elements */}
        <View style={[styles.decorativeElement, { top: 50, left: 20 }]} />
        <View style={[styles.decorativeElement, { top: 120, right: 30 }]} />
        <View style={[styles.decorativeStar, { top: 80, right: 50 }]} />
        <View style={[styles.decorativeLeaf, { top: 100, right: 20 }]} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
      
      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'insights' && styles.activeTab]} 
          onPress={() => setActiveTab('insights')}
        >
          <Text style={[styles.tabText, activeTab === 'insights' && styles.activeTabText]}>
            Saved Insights
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'activities' && styles.activeTab]} 
          onPress={() => setActiveTab('activities')}
        >
          <Text style={[styles.tabText, activeTab === 'activities' && styles.activeTabText]}>
            Saved Activities
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'media' && styles.activeTab]} 
          onPress={() => setActiveTab('media')}
        >
          <Text style={[styles.tabText, activeTab === 'media' && styles.activeTabText]}>
            Captured Milestone Media
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Content based on active tab */}
      <ScrollView style={styles.contentContainer}>
        {activeTab === 'insights' && renderInsights()}
        {activeTab === 'activities' && renderActivities()}
        {activeTab === 'media' && renderMedia()}
        
        {/* Spacing at bottom */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tabContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 10,
    marginBottom: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary.main,
  },
  tabText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.neutral.dark,
    marginTop: 15,
    marginBottom: 5,
  },
  emptyStateText: {
    color: theme.colors.neutral.medium,
    textAlign: 'center',
    maxWidth: '80%',
  },
  insightCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  insightIconContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightIcon: {
    fontSize: 24,
  },
  insightContent: {
    flex: 1,
    padding: 15,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary.dark,
    marginBottom: 5,
  },
  insightType: {
    fontSize: 14,
    color: theme.colors.neutral.dark,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mediaItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.neutral.lighter,
  },
});

export default SavedScreen;
