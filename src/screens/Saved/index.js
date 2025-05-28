import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import theme from '../../theme';

/**
 * Saved Screen
 * 
 * Enhanced version showing saved insights, activities, and milestone media
 * Includes organization options, filtering, and interactive elements
 */
export default function SavedScreen() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock data for saved insights
  const savedInsights = [
    {
      id: '1',
      title: 'Managing Sleep Regressions',
      type: 'Daily Insight',
      description: 'Tips for helping your baby through the 4-month sleep regression',
      date: 'May 25, 2025',
      icon: '🌙',
      color: '#FFCC80'
    },
    {
      id: '2',
      title: 'Strategies for Self-Soothing',
      type: 'Daily Insight',
      description: 'Gentle methods to help your baby learn to self-soothe at bedtime',
      date: 'May 23, 2025',
      icon: '😊',
      color: '#FF8A65'
    },
    {
      id: '3',
      title: 'Introducing Solid Foods',
      type: 'Daily Insight',
      description: 'When and how to start introducing solid foods to your baby',
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
      date: 'May 24, 2025',
      icon: '🎵',
      color: '#90CAF9'
    },
    {
      id: '2',
      title: 'Building with Blocks',
      type: 'Activity Suggestion',
      description: 'Block play to develop fine motor skills and spatial awareness',
      date: 'May 22, 2025',
      icon: '🧱',
      color: '#CE93D8'
    },
    {
      id: '3',
      title: 'Tummy Time Exercises',
      type: 'Activity Suggestion',
      description: 'Fun ways to make tummy time engaging and beneficial',
      date: 'May 19, 2025',
      icon: '👶',
      color: '#FFB74D'
    }
  ];

  // Mock data for milestone media
  const milestoneMedia = [
    { 
      id: '1', 
      type: 'photo',
      title: 'First Smile',
      date: 'May 15, 2025',
      milestone: 'Social Smile',
      source: null 
    },
    { 
      id: '2', 
      type: 'photo',
      title: 'Tummy Time',
      date: 'May 10, 2025',
      milestone: 'Head Control',
      source: null 
    },
    { 
      id: '3', 
      type: 'video',
      title: 'Cooing Sounds',
      date: 'May 5, 2025',
      milestone: 'First Sounds',
      source: null 
    },
    { 
      id: '4', 
      type: 'photo',
      title: 'Reaching for Toy',
      date: 'April 28, 2025',
      milestone: 'Hand-Eye Coordination',
      source: null 
    },
    { 
      id: '5', 
      type: 'photo',
      title: 'Bath Time Fun',
      date: 'April 20, 2025',
      milestone: 'Sensory Play',
      source: null 
    },
    { 
      id: '6', 
      type: 'video',
      title: 'Rolling Over',
      date: 'April 15, 2025',
      milestone: 'First Roll',
      source: null 
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'insights', label: 'Insights' },
    { id: 'activities', label: 'Activities' },
    { id: 'media', label: 'Media' }
  ];

  // Get filtered items based on active filter
  const getFilteredItems = () => {
    switch (activeFilter) {
      case 'insights':
        return { insights: savedInsights, activities: [], media: [] };
      case 'activities':
        return { insights: [], activities: savedActivities, media: [] };
      case 'media':
        return { insights: [], activities: [], media: milestoneMedia };
      case 'all':
      default:
        return { insights: savedInsights, activities: savedActivities, media: milestoneMedia };
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

  // Handle item sharing
  const handleShareItem = (type, id) => {
    // In a real app, this would open the share dialog
    Alert.alert('Share', 'Sharing functionality would be implemented here.');
  };

  // Handle media view
  const handleViewMedia = (item) => {
    // In a real app, this would open a modal or navigate to a detail screen
    Alert.alert(
      item.title,
      `Milestone: ${item.milestone}\nDate: ${item.date}\nType: ${item.type === 'photo' ? 'Photo' : 'Video'}`
    );
  };

  // Render a saved item (insight or activity)
  const renderSavedItem = (item, type) => (
    <View key={item.id} style={styles.savedItemContainer}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.savedItemContent}>
        <Text style={styles.savedItemTitle}>{item.title}</Text>
        <Text style={styles.savedItemType}>{item.type}</Text>
        <Text style={styles.savedItemDescription} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.savedItemDate}>{item.date}</Text>
      </View>
      <View style={styles.savedItemActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleShareItem(type, item.id)}
        >
          <Ionicons name="share-outline" size={20} color={theme.colors.primary.main} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleDeleteItem(type, item.id)}
        >
          <Ionicons name="trash-outline" size={20} color={theme.colors.feedback.error} />
        </TouchableOpacity>
      </View>
    </View>
  );

  // Get filtered content
  const { insights, activities, media } = getFilteredItems();

  // Check if there are no items to display
  const noItemsToDisplay = 
    insights.length === 0 && 
    activities.length === 0 && 
    media.length === 0;

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.headerTitle}>Saved</Text>
          
          {/* Filter tabs */}
          <View style={styles.filterContainer}>
            {filterOptions.map(option => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.filterOption,
                  activeFilter === option.id && styles.filterOptionActive
                ]}
                onPress={() => setActiveFilter(option.id)}
              >
                <Text style={[
                  styles.filterOptionText,
                  activeFilter === option.id && styles.filterOptionTextActive
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* No items message */}
          {noItemsToDisplay && (
            <View style={styles.noItemsContainer}>
              <Ionicons name="bookmark" size={60} color="rgba(255, 255, 255, 0.3)" />
              <Text style={styles.noItemsText}>No saved items to display</Text>
              <Text style={styles.noItemsSubtext}>
                Items you save will appear here for easy access
              </Text>
            </View>
          )}
          
          {/* Saved Insights */}
          {insights.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Saved Insights</Text>
              {insights.map(item => renderSavedItem(item, 'insight'))}
            </View>
          )}
          
          {/* Saved Activities */}
          {activities.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Saved Activities</Text>
              {activities.map(item => renderSavedItem(item, 'activity'))}
            </View>
          )}
          
          {/* Captured Milestone Media */}
          {media.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Captured Milestone Media</Text>
              <View style={styles.mediaGrid}>
                {media.map(item => (
                  <TouchableOpacity 
                    key={item.id} 
                    style={styles.mediaItem}
                    onPress={() => handleViewMedia(item)}
                  >
                    <View style={styles.mediaPlaceholder}>
                      <Ionicons 
                        name={item.type === 'photo' ? 'image' : 'videocam'} 
                        size={24} 
                        color={theme.colors.neutral.medium} 
                      />
                    </View>
                    <Text style={styles.mediaTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.mediaDate}>{item.date}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          
          {/* Organization tip */}
          {!noItemsToDisplay && (
            <View style={styles.organizationTip}>
              <Ionicons name="information-circle" size={20} color={theme.colors.neutral.white} />
              <Text style={styles.organizationTipText}>
                Tip: Use the filters above to organize your saved content
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.spacing.screenPadding,
    paddingBottom: 100, // Extra padding for bottom tab bar
  },
  headerTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.md,
    marginTop: theme.spacing.spacing.md,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    padding: 4,
  },
  filterOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  filterOptionActive: {
    backgroundColor: theme.colors.neutral.white,
  },
  filterOptionText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
  },
  filterOptionTextActive: {
    color: theme.colors.primary.main,
  },
  noItemsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.spacing.xl,
    marginTop: theme.spacing.spacing.xl,
  },
  noItemsText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: theme.colors.neutral.white,
    marginTop: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.sm,
  },
  noItemsSubtext: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  section: {
    marginBottom: theme.spacing.spacing.xl,
  },
  sectionTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: theme.colors.neutral.white,
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
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
  },
  savedItemContent: {
    flex: 1,
    padding: theme.spacing.spacing.md,
    justifyContent: 'center',
  },
  savedItemTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
    marginBottom: 2,
  },
  savedItemType: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: theme.colors.primary.main,
    marginBottom: 4,
  },
  savedItemDescription: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.dark,
    marginBottom: 4,
  },
  savedItemDate: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: theme.colors.neutral.medium,
  },
  savedItemActions: {
    justifyContent: 'center',
    paddingRight: theme.spacing.spacing.sm,
  },
  actionButton: {
    padding: 8,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.spacing.xs,
  },
  mediaItem: {
    width: '33.33%',
    padding: theme.spacing.spacing.xs,
    marginBottom: theme.spacing.spacing.md,
  },
  mediaPlaceholder: {
    aspectRatio: 1,
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  mediaTitle: {
    fontFamily: 'SFProText-Medium',
    fontSize: 12,
    color: theme.colors.neutral.white,
    marginTop: 4,
  },
  mediaDate: {
    fontFamily: 'SFProText-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  organizationTip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.xl,
  },
  organizationTipText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    color: theme.colors.neutral.white,
    marginLeft: 8,
  },
});
