import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundContainer from '../../components/decorations/BackgroundContainer';
import theme from '../../theme';

/**
 * Ask Screen
 * 
 * Q&A system with pre-written answers to common parenting questions
 * Enhanced with chat-like interface and interactive elements
 */
export default function AskScreen() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userMessage, setUserMessage] = useState('');
  
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
      category: '1',
      question: 'Why is my baby waking up every hour at night?',
      preview: 'Sleep patterns change as your baby develops. Around 4 months...',
      fullAnswer: 'Sleep patterns change as your baby develops. Around 4 months, many babies experience a sleep regression due to developmental leaps and changes in sleep cycles. This is completely normal and temporary.\n\nDuring this time, babies begin to cycle through light and deep sleep more like adults do, which can cause them to wake more frequently. They may also be developing new skills like rolling over or becoming more aware of their surroundings, which can disrupt sleep.\n\nWhat you can do:\n• Maintain a consistent bedtime routine\n• Ensure the sleep environment is comfortable and conducive to sleep\n• Consider an earlier bedtime if overtiredness might be a factor\n• Practice putting baby down drowsy but awake to help them learn to self-soothe\n\nRemember that this phase is temporary and usually resolves within 2-6 weeks as your baby adjusts to their new sleep patterns.'
    },
    { 
      id: '2', 
      category: '2',
      question: 'How do I know if my baby is getting enough milk?',
      preview: 'Look for these signs of satisfaction after feeding...',
      fullAnswer: 'It can be challenging to know exactly how much milk your baby is getting, especially if you're breastfeeding. Here are reliable indicators that your baby is getting enough milk:\n\nPhysical signs:\n• Steady weight gain following initial newborn weight loss\n• At least 6-8 wet diapers per day after the first week\n• Regular bowel movements (frequency varies by age and feeding method)\n• Your baby appears satisfied after feedings\n• Good skin elasticity and moist mouth\n\nFeeding behavior:\n• You can hear or see your baby swallowing during feeds\n• Your baby seems content after most feedings\n• Feeding sessions last approximately 20-40 minutes (breastfeeding) or your baby finishes the expected amount of formula\n\nIf you're concerned about your baby's intake, tracking wet/dirty diapers and regular weight checks can provide reassurance. Always consult your pediatrician if you have ongoing concerns about feeding or weight gain.'
    },
    { 
      id: '3', 
      category: '3',
      question: 'When should my baby start rolling over?',
      preview: 'Most babies begin rolling from tummy to back around 4 months...',
      fullAnswer: 'Rolling over is an important milestone in your baby's physical development. Here's what you can expect:\n\n• Most babies start rolling from tummy to back between 4-5 months\n• Rolling from back to tummy typically happens between 5-6 months\n• Some babies may roll as early as 3 months or as late as 7 months\n• Some babies may skip rolling from tummy to back and go straight to rolling from back to tummy\n\nTo encourage rolling:\n• Provide plenty of supervised tummy time daily\n• Place toys slightly out of reach during floor play to encourage movement\n• Gently assist your baby by showing them how to shift their weight to the side\n\nRemember that all babies develop at their own pace. If your baby hasn't started rolling by 6-7 months, or if they roll one way but not the other by 8 months, it's a good idea to mention it to your pediatrician at your next visit.'
    },
  ];

  // Mock data for common questions
  const commonQuestions = [
    { 
      id: '4', 
      category: '1',
      question: 'When will my baby start sleeping through the night?',
      preview: 'Every baby is different, but most begin to sleep for longer stretches...',
      fullAnswer: 'The timeline for sleeping through the night varies significantly from baby to baby. Here's a general guideline:\n\n• Newborns (0-3 months): Sleep is irregular with frequent wakings every 2-4 hours to feed\n• 3-6 months: Many babies begin to have longer sleep stretches of 5-6 hours\n• 6-9 months: Some babies may sleep 8-10 hours without feeding\n• 9-12 months: Many babies can sleep 10-12 hours through the night\n\nFactors that influence when a baby sleeps through the night include:\n• Individual temperament and development\n• Feeding method and schedule\n• Sleep environment and routines\n• Growth spurts and developmental milestones\n\nIt's important to have realistic expectations and understand that night wakings are normal and necessary for many babies, especially those who are breastfed. Consistent bedtime routines, age-appropriate sleep schedules, and gradually helping your baby learn to self-soothe can support the development of healthy sleep patterns.'
    },
    { 
      id: '5', 
      category: '2',
      question: 'When should I start solid foods?',
      preview: 'Most pediatricians recommend introducing solids around 6 months...',
      fullAnswer: 'The American Academy of Pediatrics recommends introducing solid foods around 6 months of age. Here are signs your baby is ready for solids:\n\n• Can sit up with minimal support\n• Has good head control\n• Shows interest in food (watches you eat, reaches for food)\n• Has lost the tongue-thrust reflex (no longer automatically pushes food out of mouth)\n• Seems hungry after a full day of milk feedings\n\nWhen starting solids:\n• Begin with single-ingredient foods without added sugar or salt\n• Wait 3-5 days between introducing new foods to watch for allergic reactions\n• Offer a variety of flavors and textures as your baby becomes more experienced\n• Continue breast milk or formula as the primary source of nutrition through the first year\n\nCommon first foods include iron-fortified infant cereal, pureed vegetables and fruits, and soft, mashed foods. Some families choose to follow a baby-led weaning approach with appropriate finger foods instead of purees. Discuss your plans with your pediatrician to determine the best approach for your baby.'
    },
  ];

  // Filter questions based on search query
  const getFilteredQuestions = () => {
    const allQuestions = [...recentQuestions, ...commonQuestions];
    if (!searchQuery.trim()) return [];
    
    return allQuestions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.preview.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Get questions by category
  const getQuestionsByCategory = (categoryId) => {
    const allQuestions = [...recentQuestions, ...commonQuestions];
    return allQuestions.filter(q => q.category === categoryId);
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      setActiveCategory(null);
      setSelectedQuestion(null);
    }
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setShowSearchResults(false);
    setSearchQuery('');
    setSelectedQuestion(null);
  };

  // Handle question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  // Handle back from question detail
  const handleBackFromDetail = () => {
    setSelectedQuestion(null);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // In a real app, this would send the message to a backend
      // For now, we'll just clear the input
      setUserMessage('');
    }
  };

  // Render question detail view
  const renderQuestionDetail = () => {
    return (
      <View style={styles.detailContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBackFromDetail}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.neutral.darkest} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.detailQuestion}>{selectedQuestion.question}</Text>
        
        <ScrollView style={styles.answerScrollView}>
          <Text style={styles.detailAnswer}>{selectedQuestion.fullAnswer}</Text>
        </ScrollView>
        
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackQuestion}>Was this helpful?</Text>
          <View style={styles.feedbackButtons}>
            <TouchableOpacity style={styles.feedbackButton}>
              <Ionicons name="thumbs-up-outline" size={20} color={theme.colors.primary.main} />
              <Text style={styles.feedbackButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackButton}>
              <Ionicons name="thumbs-down-outline" size={20} color={theme.colors.primary.main} />
              <Text style={styles.feedbackButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={styles.messageInputContainer}
        >
          <TextInput
            style={styles.messageInput}
            value={userMessage}
            onChangeText={setUserMessage}
            placeholder="Ask a follow-up question..."
            multiline
          />
          <TouchableOpacity 
            style={[styles.sendButton, !userMessage.trim() && styles.sendButtonDisabled]} 
            onPress={handleSendMessage}
            disabled={!userMessage.trim()}
          >
            <Ionicons name="send" size={20} color={theme.colors.neutral.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  };

  // Render main content
  const renderMainContent = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Ask Hatchling</Text>
        
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search questions..."
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity 
            style={styles.searchButton} 
            onPress={handleSearch}
          >
            <Ionicons name="search" size={20} color={theme.colors.neutral.white} />
          </TouchableOpacity>
        </View>
        
        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse by Topic</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map(category => (
            <TouchableOpacity 
              key={category.id} 
              style={[
                styles.categoryButton,
                activeCategory === category.id && styles.categoryButtonActive
              ]}
              onPress={() => handleCategorySelect(category.id)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryName,
                activeCategory === category.id && styles.categoryNameActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Search Results */}
        {showSearchResults && (
          <>
            <Text style={styles.sectionTitle}>
              Search Results for "{searchQuery}"
            </Text>
            {getFilteredQuestions().length > 0 ? (
              getFilteredQuestions().map(item => (
                <TouchableOpacity 
                  key={item.id} 
                  style={styles.questionCard}
                  onPress={() => handleQuestionSelect(item)}
                >
                  <Text style={styles.questionText}>{item.question}</Text>
                  <Text style={styles.answerPreview}>{item.preview}</Text>
                  <Text style={styles.readMoreText}>Read more</Text>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>
                  No results found for "{searchQuery}"
                </Text>
                <TouchableOpacity 
                  style={styles.askDirectlyButton}
                  onPress={() => setUserMessage(searchQuery)}
                >
                  <Text style={styles.askDirectlyButtonText}>
                    Ask this question directly
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        
        {/* Category Questions */}
        {activeCategory && (
          <>
            <Text style={styles.sectionTitle}>
              {categories.find(c => c.id === activeCategory)?.name} Questions
            </Text>
            {getQuestionsByCategory(activeCategory).map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.questionCard}
                onPress={() => handleQuestionSelect(item)}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={styles.answerPreview}>{item.preview}</Text>
                <Text style={styles.readMoreText}>Read more</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        
        {/* Recent questions - show only if not searching or filtering by category */}
        {!showSearchResults && !activeCategory && (
          <>
            <Text style={styles.sectionTitle}>Recent Questions</Text>
            {recentQuestions.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.questionCard}
                onPress={() => handleQuestionSelect(item)}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={styles.answerPreview}>{item.preview}</Text>
                <Text style={styles.readMoreText}>Read more</Text>
              </TouchableOpacity>
            ))}
            
            {/* Common questions */}
            <Text style={styles.sectionTitle}>Common Questions</Text>
            {commonQuestions.map(item => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.questionCard}
                onPress={() => handleQuestionSelect(item)}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={styles.answerPreview}>{item.preview}</Text>
                <Text style={styles.readMoreText}>Read more</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        
        {/* Ask directly section */}
        <View style={styles.askDirectlySection}>
          <Text style={styles.askDirectlyTitle}>
            Don't see what you're looking for?
          </Text>
          <TouchableOpacity 
            style={styles.askDirectlyMainButton}
            onPress={() => {
              setSelectedQuestion(null);
              setUserMessage('');
              // In a real app, this would focus the message input
            }}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={20} color={theme.colors.neutral.white} style={styles.askDirectlyIcon} />
            <Text style={styles.askDirectlyMainButtonText}>
              Ask a new question
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        {selectedQuestion ? renderQuestionDetail() : renderMainContent()}
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
    marginBottom: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.md,
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.spacing.lg,
  },
  searchInput: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 8,
    padding: theme.spacing.spacing.md,
    marginRight: 8,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: theme.colors.secondary.main,
    borderRadius: 8,
    padding: theme.spacing.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  sectionTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 20,
    color: theme.colors.neutral.white,
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: theme.spacing.spacing.sm,
  },
  categoryButtonActive: {
    backgroundColor: theme.colors.neutral.white,
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: theme.spacing.spacing.xs,
  },
  categoryName: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
    textAlign: 'center',
  },
  categoryNameActive: {
    color: theme.colors.primary.main,
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
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  answerPreview: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.sm,
  },
  readMoreText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.primary.main,
  },
  noResultsContainer: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.lg,
    alignItems: 'center',
  },
  noResultsText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.dark,
    marginBottom: theme.spacing.spacing.md,
    textAlign: 'center',
  },
  askDirectlyButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  askDirectlyButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.neutral.white,
  },
  askDirectlySection: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginTop: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.xl,
    alignItems: 'center',
  },
  askDirectlyTitle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.md,
    textAlign: 'center',
  },
  askDirectlyMainButton: {
    backgroundColor: theme.colors.secondary.main,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askDirectlyIcon: {
    marginRight: 8,
  },
  askDirectlyMainButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.white,
  },
  detailContainer: {
    flex: 1,
    padding: theme.spacing.spacing.screenPadding,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.spacing.md,
  },
  backButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
    marginLeft: 8,
  },
  detailQuestion: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    color: theme.colors.neutral.white,
    marginBottom: theme.spacing.spacing.lg,
  },
  answerScrollView: {
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 12,
    padding: theme.spacing.spacing.lg,
    marginBottom: theme.spacing.spacing.md,
  },
  detailAnswer: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
    lineHeight: 24,
  },
  feedbackContainer: {
    backgroundColor: theme.colors.neutral.lightest,
    borderRadius: 12,
    padding: theme.spacing.spacing.md,
    marginBottom: theme.spacing.spacing.md,
    alignItems: 'center',
  },
  feedbackQuestion: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: theme.colors.neutral.darkest,
    marginBottom: theme.spacing.spacing.sm,
  },
  feedbackButtons: {
    flexDirection: 'row',
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: theme.spacing.spacing.md,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
  },
  feedbackButtonText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    color: theme.colors.primary.main,
    marginLeft: 4,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral.white,
    borderRadius: 12,
    padding: 8,
    marginBottom: theme.spacing.spacing.lg,
  },
  messageInput: {
    flex: 1,
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    maxHeight: 100,
    padding: 8,
  },
  sendButton: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: theme.colors.neutral.medium,
  },
});
