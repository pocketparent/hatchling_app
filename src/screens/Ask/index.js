import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  FlatList,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import mockAskData from '../../data/mockAskData';

/**
 * CategoryButton Component
 * 
 * Button for category selection in Ask Hatchling
 */
const CategoryButton = ({ category, isSelected, onPress }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.categoryButton,
        isSelected && styles.categoryButtonSelected
      ]}
      onPress={() => onPress(category.id)}
    >
      <Text style={styles.categoryIcon}>{category.icon}</Text>
      <Text style={[
        styles.categoryName,
        isSelected && styles.categoryNameSelected
      ]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

/**
 * QuestionCard Component
 * 
 * Card displaying a question with expandable answer
 */
const QuestionCard = ({ question, isExpanded, onToggle }) => {
  const [animation] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);
  
  const maxHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // Maximum height for the answer
  });

  return (
    <TouchableOpacity 
      style={styles.questionCard}
      onPress={() => onToggle(question.id)}
      activeOpacity={0.8}
    >
      <View style={styles.questionHeader}>
        <Text style={styles.questionText}>{question.question}</Text>
        <Ionicons 
          name={isExpanded ? "chevron-up" : "chevron-down"} 
          size={20} 
          color={theme.colors.neutral.dark} 
        />
      </View>
      
      <Animated.View style={[styles.answerContainer, { maxHeight }]}>
        <Text style={styles.answerText}>{question.answer}</Text>
        
        {/* Tags */}
        <View style={styles.tagsContainer}>
          {question.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        
        {/* Save button */}
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="bookmark-outline" size={18} color={theme.colors.primary.main} />
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};

/**
 * Ask Screen
 * 
 * Q&A system with pre-written answers to common parenting questions
 * Non-tracking, content-first approach
 */
export default function AskScreen() {
  const [categories] = useState(mockAskData.categories);
  const [questions] = useState(mockAskData.questions);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  
  // Filter questions based on selected category and search query
  const filteredQuestions = questions.filter(question => {
    const matchesCategory = selectedCategory ? question.category === selectedCategory : true;
    const matchesSearch = searchQuery.trim() === '' ? true : 
      question.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      question.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Handle category selection
  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };
  
  // Handle question expansion
  const handleQuestionToggle = (questionId) => {
    setExpandedQuestionId(questionId === expandedQuestionId ? null : questionId);
  };
  
  // Handle search
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  // Clear filters
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Ask Hatchling</Text>
        
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color={theme.colors.neutral.medium} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search questions..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={theme.colors.neutral.medium}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={theme.colors.neutral.medium} />
            </TouchableOpacity>
          )}
        </View>
        
        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse by Topic</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map(category => (
            <CategoryButton 
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onPress={handleCategoryPress}
            />
          ))}
        </ScrollView>
        
        {/* Active filters indicator */}
        {(selectedCategory || searchQuery.trim().length > 0) && (
          <View style={styles.filtersContainer}>
            <Text style={styles.filtersText}>
              {selectedCategory ? 
                `Showing: ${categories.find(c => c.id === selectedCategory)?.name}` : 
                searchQuery.trim().length > 0 ? 
                  `Search: "${searchQuery}"` : 
                  ''}
            </Text>
            <TouchableOpacity onPress={handleClearFilters}>
              <Text style={styles.clearFiltersText}>Clear</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Questions list */}
        {filteredQuestions.length > 0 ? (
          <View style={styles.questionsContainer}>
            {filteredQuestions.map(question => (
              <QuestionCard 
                key={question.id}
                question={question}
                isExpanded={question.id === expandedQuestionId}
                onToggle={handleQuestionToggle}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyStateContainer}>
            <Ionicons name="search-outline" size={48} color={theme.colors.neutral.light} />
            <Text style={styles.emptyStateText}>No questions found</Text>
            <Text style={styles.emptyStateSubtext}>Try adjusting your search or filters</Text>
          </View>
        )}
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 8,
    padding: theme.spacing.spacing.sm,
    marginBottom: theme.spacing.spacing.lg,
  },
  searchInput: {
    flex: 1,
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.darkest,
    marginLeft: theme.spacing.spacing.sm,
    padding: theme.spacing.spacing.xs,
  },
  sectionTitle: {
    ...theme.typography.textVariants.h5,
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
  categoryButtonSelected: {
    // No specific style needed, we'll style the text and icon
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
  categoryNameSelected: {
    color: theme.colors.primary.main,
    fontWeight: '600',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  filtersText: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.dark,
  },
  clearFiltersText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    fontSize: 14,
  },
  questionsContainer: {
    marginBottom: theme.spacing.spacing.lg,
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
    overflow: 'hidden',
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.darkest,
    flex: 1,
    marginRight: theme.spacing.spacing.sm,
  },
  answerContainer: {
    overflow: 'hidden',
  },
  answerText: {
    ...theme.typography.textVariants.body1,
    color: theme.colors.neutral.dark,
    marginTop: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.md,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.spacing.md,
  },
  tag: {
    backgroundColor: theme.colors.neutral.lighter,
    borderRadius: 16,
    paddingVertical: theme.spacing.spacing.xxs,
    paddingHorizontal: theme.spacing.spacing.sm,
    marginRight: theme.spacing.spacing.xs,
    marginBottom: theme.spacing.spacing.xs,
  },
  tagText: {
    ...theme.typography.textVariants.caption,
    color: theme.colors.neutral.dark,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: theme.spacing.spacing.sm,
  },
  saveButtonText: {
    ...theme.typography.textVariants.button,
    color: theme.colors.primary.main,
    marginLeft: theme.spacing.spacing.xs,
    fontSize: 14,
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.spacing.xl,
    marginTop: theme.spacing.spacing.xl,
  },
  emptyStateText: {
    ...theme.typography.textVariants.h5,
    color: theme.colors.neutral.medium,
    marginTop: theme.spacing.spacing.md,
  },
  emptyStateSubtext: {
    ...theme.typography.textVariants.body2,
    color: theme.colors.neutral.medium,
    marginTop: theme.spacing.spacing.xs,
  },
});
