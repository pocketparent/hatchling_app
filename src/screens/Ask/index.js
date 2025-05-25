import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../theme';

/**
 * Ask Screen
 * 
 * Q&A system with pre-written answers to common parenting questions
 * Non-tracking, content-first approach
 */
export default function AskScreen() {
  // Mock data for question categories
  const categories = [
    { id: '1', name: 'Sleep', icon: '🌙' },
    { id: '2', name: 'Feeding', icon: '🍼' },
    { id: '3', name: 'Development', icon: '🧩' },
    { id: '4', name: 'Health', icon: '🩺' },
    { id: '5', name: 'Behavior', icon: '🧸' },
  ];

  // Mock data for recent questions
  const recentQuestions = [
    { 
      id: '1', 
      question: 'Why is my baby waking up every hour at night?',
      preview: 'Sleep patterns change as your baby develops. Around 4 months...'
    },
    { 
      id: '2', 
      question: 'How do I know if my baby is getting enough milk?',
      preview: 'Look for these signs of satisfaction after feeding...'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Ask Hatchling</Text>
        
        {/* Search placeholder */}
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>Search questions...</Text>
        </TouchableOpacity>
        
        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse by Topic</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map(category => (
            <TouchableOpacity key={category.id} style={styles.categoryButton}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Recent questions */}
        <Text style={styles.sectionTitle}>Recent Questions</Text>
        {recentQuestions.map(item => (
          <TouchableOpacity key={item.id} style={styles.questionCard}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.answerPreview}>{item.preview}</Text>
            <Text style={styles.readMoreText}>Read more</Text>
          </TouchableOpacity>
        ))}
        
        {/* Common questions placeholder */}
        <Text style={styles.sectionTitle}>Common Questions</Text>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>When will my baby start sleeping through the night?</Text>
          <Text style={styles.answerPreview}>Every baby is different, but most begin to sleep for longer stretches...</Text>
          <Text style={styles.readMoreText}>Read more</Text>
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
  headerTitle: {
    ...theme.typography.textVariants.h2,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  searchBar: {
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 8,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.lg,
  },
  searchPlaceholder: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.medium,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h4,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.md,
  },
  categoriesContainer: {
    paddingBottom: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.lg,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: theme.spacing.spacing.lg,
    width: 70,
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: theme.spacing.spacing.xs,
  },
  categoryName: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.dark,
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
    shadowColor: theme.colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  answerPreview: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.sm,
  },
  readMoreText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    fontSize: 14,
  },
});
